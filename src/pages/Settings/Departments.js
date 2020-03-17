/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import waiting from '../../assets/images/waiting.gif';
import searchingGIF from '../../assets/images/searching.gif';
import { notifySuccess, notifyError } from '../../services/notify';
import { confirmAction } from '../../services/utilities';

import {
	getAllDepartments,
	createDepartment,
	updateDepartment,
	deleteDepartment,
	getAllStaff,
} from '../../actions/settings';

const Departments = props => {
	const initialState = {
		name: '',
		description: '',
		headOfDept: '',
		hod: '',
		save: true,
		edit: false,
		id: '',
	};

	const [{ name, description, headOfDept, hod }, setState] = useState(
		initialState
	);
	const [Loading, setLoading] = useState(false);
	const [data, getDataToEdit] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const [{ edit, save }, setSubmitButton] = useState(initialState);
	const handleInputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const onCreateDepartment = e => {
		e.preventDefault();
		setLoading(true);
		props
			.createDepartment({ name, headOfDept, description })
			.then(response => {
				setLoading(false);
				setState({ ...initialState });
				notifySuccess('Head of department added');
			})
			.catch(error => {
				setLoading(false);
				setState({ ...initialState });
				notifyError('Error creating head of department');
			});
	};

	const onDeleteDepartment = data => {
		props
			.deleteDepartment(data)
			.then(data => {
				notifySuccess('Head of department deleted');
			})
			.catch(error => {
				notifyError('Error deleting head of department');
			});
	};

	const onEditDept = e => {
		setLoading(true);
		e.preventDefault();
		props
			.updateDepartment({ id: data.id, name, description, headOfDept }, data)
			.then(response => {
				setState({ ...initialState });
				setSubmitButton({ create: true, edit: false });
				setLoading(false);
				notifySuccess('Head of department updated');
			})
			.catch(error => {
				setState({ ...initialState });
				setSubmitButton({ ...initialState });
				setLoading(false);
				notifyError('Error updating head of department');
			});
	};

	const onClickEdit = data => {
		setSubmitButton({ edit: true, create: false });
		setState(prevState => ({
			...prevState,
			name: data.name,
			id: data.id,
			headOfDept: data.staff ? data.staff.id : null,
			hod: data.staff
				? `${data.staff.first_name} ${data.staff.last_name}`
				: null,
			description: data.description,
		}));
		getDataToEdit(data);
	};

	const cancelEditButton = () => {
		setSubmitButton({ save: true, edit: false });
		setState({ ...initialState });
	};

	const DeleteDept = data => {
		confirmAction(onDeleteDepartment, data, null);
	};

	useEffect(() => {
		if (!loaded) {
			props
				.getAllDepartments()
				.then(response => {})
				.catch(e => {
					notifyError(e.message || 'could not fetch departments');
				});
			props.getAllStaff();
		}
		setLoaded(true);
	}, [loaded, props]);

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="element-wrapper">
					<div className="os-tabs-w mx-1">
						<div className="os-tabs-controls">
							<ul className="nav nav-tabs upper">
								<li className="nav-item">
									<a
										aria-expanded="true"
										className="nav-link active"
										data-toggle="tab">
										Deda Departments
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-8">
							<div className="element-wrapper">
								<div className="element-box-tp">
									<div className="table-responsive">
										<table className="table table-padded">
											<thead>
												<tr>
													<th>Department</th>
													<th>Head of Department</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{!loaded ? (
													<tr>
														<td colSpan="4" className="text-center">
															<img alt="searching" src={searchingGIF} />
														</td>
													</tr>
												) : (
													<>
														{props.departments.map((department, i) => {
															return (
																<tr key={i}>
																	<td className="nowrap">
																		<span
																			className={
																				department.isActive
																					? 'status-pill smaller green'
																					: 'status-pill smaller red'
																			}></span>
																		<span>{department.name}</span>
																	</td>
																	<td>
																		<span>
																			{department.staff &&
																				department.staff.first_name +
																					' ' +
																					department.staff.last_name}
																		</span>
																	</td>
																	<td className="row-actions text-right">
																		<a href="#">
																			<i
																				className="os-icon os-icon-ui-49"
																				onClick={() =>
																					onClickEdit(department)
																				}></i>
																		</a>
																		<a href="#">
																			<i className="os-icon os-icon-grid-10"></i>
																		</a>
																		<a
																			className="danger"
																			onClick={() => DeleteDept(department)}>
																			<i className="os-icon os-icon-ui-15"></i>
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
						</div>
						<div className="col-lg-4 col-xxl-3  d-xxl-block">
							<div className="element-wrapper">
								<div className="element-box">
									<form onSubmit={edit ? onEditDept : onCreateDepartment}>
										<h5 className="element-box-header">Add New Department</h5>
										<div className="form-group">
											<label className="lighter">Name of Department</label>
											<input
												className="form-control"
												placeholder="Enter Department Name..."
												type="text"
												name="name"
												value={name}
												onChange={handleInputChange}
											/>
										</div>
										<div className="form-group">
											<label className="lighter">Head of Department</label>
											<select
												className="form-control"
												name="headOfDept"
												onChange={handleInputChange}
												value={headOfDept}>
												{hod && <option>{hod}</option>}
												{!hod && <option value=""></option>}
												{props.StaffList.map((hod, i) => {
													return (
														<option value={hod.id} key={i}>
															{hod.first_name} {hod.last_name}
														</option>
													);
												})}
											</select>
										</div>
										<div className="form-group">
											<label className="lighter">Description</label>
											<div className="form-group">
												<textarea
													className="form-control"
													placeholder="Description"
													type="text"
													name="description"
													value={description}
													onChange={handleInputChange}
												/>
											</div>
										</div>

										<div className="form-buttons-w text-right compact">
											{save && (
												<button
													className={
														Loading
															? 'btn btn-primary disabled'
															: 'btn btn-primary'
													}>
													{Loading ? (
														<img src={waiting} alt="submitting" />
													) : (
														<span> create</span>
													)}
												</button>
											)}
											{edit && (
												<>
													<button
														className={
															Loading
																? 'btn btn-secondary ml-3 disabled'
																: 'btn btn-secondary ml-3'
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
														{Loading ? (
															<img src={waiting} alt="submitting" />
														) : (
															<span> edit</span>
														)}
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
		</div>
	);
};

const mapStateToProps = state => {
	return {
		departments: state.settings.departments,
		StaffList: state.settings.staff_list,
	};
};

export default connect(mapStateToProps, {
	getAllDepartments,
	getAllStaff,
	updateDepartment,
	createDepartment,
	deleteDepartment,
})(Departments);
