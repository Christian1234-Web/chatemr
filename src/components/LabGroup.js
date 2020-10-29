import React, { useState, useEffect } from 'react';

import { confirmAction, request, updateImmutable } from '../services/utilities';
import waiting from '../assets/images/waiting.gif';
import searchingGIF from '../assets/images/searching.gif';
import { notifySuccess, notifyError } from '../services/notify';

const LabGroup = () => {
	const initialState = {
		name: '',
		price: '',
		description: '',
		edit: false,
		create: true,
	};
	const [{ name, price, description }, setState] = useState(initialState);
	const [loaded, setLoaded] = useState(false);
	const [{ edit, create }, setSubmitButton] = useState(initialState);
	const [group, setGroup] = useState(null);
	const [groups, setGroups] = useState([]);
	const [labTests, setLabTests] = useState([]);
	const [submitting, setSubmitting] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	useEffect(() => {
		const fetchGroup = async () => {
			try {
				const url = 'lab-tests/groups';
				const rs = await request(url, 'GET', true);
				setGroups([...rs]);
				setLoaded(true);
			} catch (e) {
				setSubmitting(false);
				notifyError(e.message || 'could not fetch test groups');
				setLoaded(true);
			}
		};

		if (!loaded) {
			fetchGroup();
		}
	}, [loaded]);

	const onAddGroup = async e => {
		e.preventDefault();
		try {
			setSubmitting(true);
			const data = { name, price, description, lab_tests: labTests };
			const url = 'lab-tests/groups';
			const rs = await request(url, 'POST', true, data);
			setGroups([...groups, rs]);
			setState({ ...initialState });
			setSubmitting(false);
			notifySuccess('Lab group created!');
		} catch (error) {
			setSubmitting(false);
			notifyError('Error creating test group');
		}
	};

	const onEditGroup = async e => {
		e.preventDefault();
		try {
			setSubmitting(true);
			const data = {
				id: group.id,
				name,
				price,
				description,
				lab_tests: labTests,
			};
			const url = `lab-tests/groups/${group.id}`;
			const rs = await request(url, 'PATCH', true, data);
			const newGroups = updateImmutable(groups, rs);
			setGroups([...newGroups]);
			setState({ ...initialState });
			setSubmitButton({ create: true, edit: false });
			setSubmitting(false);
			notifySuccess('Lab group updated!');
		} catch (error) {
			setSubmitting(false);
			notifyError('Error updating test group');
		}
	};

	const onClickEdit = data => {
		setSubmitButton({ edit: true, create: false });
		setState(prevState => ({
			...prevState,
			name: data.name,
			price: data.price,
			description: data.description,
		}));
		setLabTests(data.lab_tests);
		setGroup(data);
	};

	const cancelEditButton = () => {
		setSubmitButton({ ...initialState });
		setState({ ...initialState });
		setGroup(null);
	};

	const onDeleteGroup = async item => {
		try {
			const url = `lab-tests/groups/${item.id}`;
			const rs = await request(url, 'DELETE', true);
			setGroups([...groups.filter(s => s.id !== rs.id)]);
			notifySuccess('Lab group deleted');
		} catch (error) {
			notifyError('Error deleting lab group');
		}
	};

	const confirmDelete = data => {
		confirmAction(onDeleteGroup, data);
	};

	return (
		<div className="row">
			<div className="col-lg-8">
				<div className="pipelines-w">
					<div className="row">
						{!loaded ? (
							<table>
								<tbody>
									<tr>
										<td colSpan="4" className="text-center">
											<img alt="searching" src={searchingGIF} />
										</td>
									</tr>
								</tbody>
							</table>
						) : (
							<>
								{groups.map((item, i) => {
									return (
										<div className="col-lg-4 col-xxl-3" key={i}>
											<div className="pt-3">
												<div className="pipeline-item">
													<div className="pi-controls">
														<div className="pi-settings os-dropdown-trigger">
															<i
																className="os-icon os-icon-ui-49"
																onClick={() => onClickEdit(item)}></i>
														</div>
														<div className="pi-settings os-dropdown-trigger">
															<i
																className="os-icon os-icon-ui-15"
																onClick={() => confirmDelete(item)}></i>
														</div>
													</div>
													<div className="pi-body">
														<div className="pi-info">
															<div className="h6 pi-name">{item.name}</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
								{groups.length === 0 && (
									<div
										className="alert alert-info text-center"
										style={{ width: '100%' }}>
										No test group found!
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-xxl-3  d-xxl-block">
				<div className="pipeline white lined-warning">
					<form onSubmit={edit ? onEditGroup : onAddGroup}>
						<h6 className="form-header">Create Group</h6>
						<div className="form-group mt-2">
							<input
								className="form-control"
								placeholder="Name"
								type="text"
								onChange={handleInputChange}
								name="name"
								value={name}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								placeholder="Price"
								type="text"
								name="price"
								onChange={handleInputChange}
								value={price}
							/>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								placeholder="Description"
								type="textarea"
								name="description"
								onChange={handleInputChange}
								value={description}
								rows={4}
							/>
						</div>
						<div className="form-buttons-w">
							{create && (
								<button className="btn btn-primary" disabled={submitting}>
									{submitting ? (
										<img src={waiting} alt="submitting" />
									) : (
										<span>create</span>
									)}
								</button>
							)}
							{edit && (
								<>
									<button
										className="btn btn-secondary ml-3"
										disabled={submitting}
										onClick={cancelEditButton}>
										<span>cancel</span>
									</button>
									<button className="btn btn-primary" disabled={submitting}>
										{submitting ? (
											<img src={waiting} alt="submitting" />
										) : (
											<span>edit</span>
										)}
									</button>
								</>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LabGroup;
