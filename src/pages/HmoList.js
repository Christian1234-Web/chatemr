/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import Tooltip from 'antd/lib/tooltip';

import { uploadHmo } from '../actions/general';
import waiting from '../assets/images/waiting.gif';
import searchingGIF from '../assets/images/searching.gif';
import { notifySuccess, notifyError } from '../services/notify';
import { addHmo, getAllHmos, updateHmo, deleteHmo } from '../actions/hmo';
import { API_URI, hmoAPI } from '../services/constants';
import { request } from '../services/utilities';

const HmoList = props => {
	const initialState = {
		name: '',
		email: '',
		phoneNumber: '',
		address: '',
		add: true,
		edit: false,
	};
	const [{ name, email, phoneNumber, address }, setState] = useState(
		initialState
	);
	const [Loading, setLoading] = useState(false);
	const [{ edit, add }, setSubmitButton] = useState(initialState);
	const [data, getDataToEdit] = useState(null);
	const [logo, setLogo] = useState(null);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [adding, setAdding] = useState(false);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const handleFileChange = e => {
		setLogo(e.target.files[0]);
	};

	const onAddHmo = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('name', name);
		data.append('email', email);
		data.append('phoneNumber', phoneNumber);
		data.append('address', address);
		data.append('logo', logo);
		setAdding(true);
		props.addHmo(data).then(response => {
			setState({ ...initialState });
			setAdding(false);
		});
	};

	const onEdiHmo = e => {
		setLoading(true);
		e.preventDefault();
		const EditedData = new FormData();
		EditedData.append('name', name);
		EditedData.append('email', email);
		EditedData.append('phoneNumber', phoneNumber);
		EditedData.append('address', address);
		EditedData.append('logo', logo);
		EditedData.append('id', data.id);
		console.log(EditedData);
		props
			.updateHmo(EditedData, data)
			.then(response => {
				setState({ ...initialState });
				setSubmitButton({ add: true, edit: false });
				setLoading(false);
			})
			.catch(error => {
				setState({ ...initialState });
				setSubmitButton({ add: true, edit: false });
				setLoading(false);
			});
	};

	const onClickEdit = data => {
		setSubmitButton({ edit: true, add: false });
		setState(prevState => ({
			...prevState,
			name: data.name,
			email: data.email,
			phoneNumber: data.phoneNumber,
			address: data.address,
			logo: data.logo,
		}));
		getDataToEdit(data);
	};

	const cancelEditButton = () => {
		setSubmitButton({ add: true, edit: false });
		setState({ ...initialState });
	};

	const processTransaction = async (action, hmo) => {
		try {
			let id = hmo.id;
			setDataLoaded(false);
			await request(
				`hmos/transactions/${id}/process?action=${action}`,
				'GET',
				true
			);
			let act = action === 1 ? ' Approved' : ' Rejected';
			let message = hmo.name + act;
			notifySuccess(message);
			setDataLoaded(true);
		} catch (error) {
			notifyError('There was an error');
			console.log(error);
			setDataLoaded(true);
		}
	};

	const onDeleteHmo = data => {
		console.log(data);
		props
			.deleteHmo(data)
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const confirmDelete = data => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className="custom-ui">
						<h1>Are you sure?</h1>
						<p>You want to delete this remove ?</p>
						<div style={{}}>
							<button
								className="btn btn-primary"
								style={{ margin: 10 }}
								onClick={onClose}>
								No
							</button>
							<button
								className="btn btn-danger"
								style={{ margin: 10 }}
								onClick={() => {
									onDeleteHmo(data);
									onClose();
								}}>
								Yes, Delete it!
							</button>
						</div>
					</div>
				);
			},
		});
	};

	useEffect(() => {
		if (!dataLoaded) {
			props
				.getAllHmos()
				.then(response => {
					setDataLoaded(true);
				})
				.catch(e => {
					setDataLoaded(true);
					notifyError(e.message || 'could not fetch lab tests');
				});
		}
	}, [dataLoaded, props]);

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="element-wrapper">
					<div className="element-actions">
						<a
							className="btn btn-success btn-sm"
							onClick={() => props.uploadHmo(true)}
							href="#">
							<i className="os-icon os-icon-grid-10"></i>
							<span>Upload HMOS</span>
						</a>
						<a
							className="btn btn-primary btn-sm"
							href={`${API_URI}/${hmoAPI}/download-sample`}
							download>
							<i className="os-icon os-icon-ui-22"></i>
							<span>Download Sample</span>
						</a>
					</div>
					<h6 className="element-header">Health Management Organization</h6>
					<div className="row">
						<div className="col-lg-8 col-xxl-8">
							<div className="element-wrapper">
								<div className="element-box-tp">
									<div className="table-responsive">
										<table className="table table-padded">
											<thead>
												<tr>
													<th>Logo</th>
													<th>Name</th>
													<th className="text-center">Phone</th>
													<th>Email</th>
													<th>Actions</th>
												</tr>
											</thead>
											<tbody>
												{!dataLoaded ? (
													<tr>
														<td colSpan="5" className="text-center">
															<img alt="searching" src={searchingGIF} />
														</td>
													</tr>
												) : (
													<>
														{props.hmoList.map((hmo, id) => {
															return (
																<tr key={id}>
																	<td>
																		<div className="user-with-avatar">
																			<img
																				alt=""
																				src={require('../assets/images/avatar1.jpg')}
																			/>
																		</div>
																	</td>
																	<td>
																		<div className="smaller lighter">
																			{hmo.name}
																		</div>
																	</td>
																	<td>
																		<span>{hmo.phoneNumber}</span>
																	</td>

																	<td className="nowrap">
																		<span>{hmo.email}</span>
																	</td>
																	<td className="row-actions">
																		<Tooltip title="Approve">
																			<a
																				className="secondary"
																				onClick={() =>
																					processTransaction(1, hmo)
																				}>
																				<i className="os-icon os-icon-thumbs-up" />
																			</a>
																		</Tooltip>

																		<Tooltip title="Reject">
																			<a
																				className="secondary"
																				onClick={() =>
																					processTransaction(2, hmo)
																				}>
																				<i className="os-icon os-icon-thumbs-down" />
																			</a>
																		</Tooltip>
																		<a href="#">
																			<i
																				className="os-icon os-icon-grid-10"
																				onClick={() => onClickEdit(hmo)}></i>
																		</a>
																		<a href="#">
																			<i className="os-icon os-icon-ui-44"></i>
																		</a>
																		<a className="danger">
																			<i
																				className="os-icon os-icon-ui-15"
																				onClick={() => confirmDelete(hmo)}></i>
																		</a>
																	</td>
																</tr>
															);
														})}
													</>
												)}
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div>
								<div></div>
							</div>
						</div>
						<div className="col-lg-4 col-xxl-3  d-xxl-block">
							<div className="pipeline white lined-warning">
								<form onSubmit={edit ? onEdiHmo : onAddHmo}>
									<h6 className="form-header">Add New HMO</h6>
									<div className="form-group">
										<input
											className="form-control"
											placeholder="HMO Name"
											type="text"
											name="name"
											value={name}
											onChange={handleInputChange}
										/>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											placeholder="E-mail"
											type="email"
											name="email"
											onChange={handleInputChange}
											value={email}
										/>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											placeholder="Phone Number"
											type="Phone"
											name="phoneNumber"
											onChange={handleInputChange}
											value={phoneNumber}
										/>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											placeholder="Address"
											name="address"
											type="text"
											onChange={handleInputChange}
											value={address}
										/>
									</div>
									<legend>
										<span>Upload Logo</span>
									</legend>
									<div className="form-group">
										<div className="form-group">
											<input
												type="file"
												className="form-control"
												placeholder="Upload Logo"
												id="exampleFormControlFile1"
												name="logo"
												onChange={handleFileChange}
											/>
										</div>
									</div>
									<div className="form-buttons-w">
										{add && (
											<button
												className={
													adding
														? 'btn btn-primary disabled'
														: 'btn btn-primary'
												}>
												<span>
													{adding ? (
														<img src={waiting} alt="submitting" />
													) : (
														'Add'
													)}
												</span>
											</button>
										)}
										{edit && (
											<>
												<button
													className={
														Loading
															? 'btn btn-secondary disabled'
															: 'btn btn-secondary'
													}
													onClick={cancelEditButton}>
													<span>{Loading ? 'cancel' : 'cancel'}</span>
												</button>
												<button
													className={
														Loading
															? 'btn btn-primary disabled'
															: 'btn btn-primary'
													}>
													<span>
														{Loading ? (
															<img src={waiting} alt="submitting" />
														) : (
															'edit'
														)}
													</span>
												</button>
											</>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		hmoList: state.hmo.hmo_list,
	};
};

export default connect(mapStateToProps, {
	addHmo,
	getAllHmos,
	updateHmo,
	uploadHmo,
	deleteHmo,
})(HmoList);
