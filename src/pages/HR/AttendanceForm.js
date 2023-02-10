import React from 'react';
import { useState, useEffect } from 'react';

import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { attendanceSchema } from '../../services/validationSchemas';
import { request } from '../../services/utilities';

import waiting from '../../assets/images/waiting.gif';

import { useDispatch } from 'react-redux';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifyError, notifySuccess } from '../../services/notify';

const AttendanceForm = ({ closeModal }) => {
	const dispatch = useDispatch();

	const [loaded, setLoaded] = useState(false);
	const [departments, setDepartments] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const [isClinical, setIsClinical] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);

	const { register, handleSubmit, setValue, errors } = useForm({
		validationSchema: attendanceSchema,
	});

	async function getActiveDepartments() {
		try {
			const rs = await request('departments', 'GET', true);
			const res = rs.map(item => ({
				...item,
				label: item.name,
			}));
			setDepartments(res);
		} catch (e) {}
	}

	const submitUserForm = async data => {
		try {
			dispatch(startBlock());
			setSubmitting(true);

			const values = {
				...data,
				user_id: data.userId,
				department_id: data.department,
				first_name: data.firstname,
				last_name: data.lastname,
				clinical: isClinical,
				isOnDevice,
			};

			// Send Req
			const url = 'hr/attendance/create-user';
			const rs = await request(url, 'POST', true, values);
			setSubmitting(false);
			dispatch(stopBlock());
			if (rs.success) {
				notifySuccess('User created successfully');
				closeModal();
			} else {
				notifyError(rs.message || 'Could not create user');
				closeModal();
			}
		} catch (error) {
			console.log(error);
			dispatch(stopBlock());
			setSubmitting(false);
			closeModal();
			notifyError(error.message || 'Could not create user');
		}
	};

	useEffect(() => {
		if (!loaded) {
			try {
				getActiveDepartments();
			} catch (e) {}
			setLoaded(true);
		}
	}, [loaded]);

	return (
		<div
			className="onboarding-modal modal fade animated show"
			role="dialog"
			style={{ display: 'block' }}
		>
			<div
				className="modal-dialog modal-centered"
				style={{ maxWidth: '720px' }}
			>
				<div className="modal-content text-center">
					<button
						aria-label="Close"
						className="close"
						type="button"
						onClick={closeModal}
					>
						<span className="os-icon os-icon-close" />
					</button>
					<div className="onboarding-content with-gradient">
						<h4 className="onboarding-title">Create Staff</h4>
						<div className="form-block">
							<form onSubmit={handleSubmit(submitUserForm)}>
								<div className="row">
									<div className="form-group col-sm-6">
										<label>first name</label>
										<input
											className="form-control"
											type="text"
											name="firstname"
											ref={register}
										/>
										<small className="text-danger">
											{errors.firstname && errors.firstname.message}
										</small>
									</div>
									<div className="form-group col-sm-6">
										<label>Last name</label>
										<input
											className="form-control"
											type="text"
											name="lastname"
											ref={register}
										/>
										<small className="text-danger">
											{errors.lastname && errors.lastname.message}
										</small>
									</div>
									{/* Input */}
									<div className="form-group col-sm-6">
										<label>userId</label>
										<input
											className="form-control"
											type="text"
											name="userId"
											ref={register}
										/>
										<small className="text-danger">
											{errors.userId && errors.userId.message}
										</small>
									</div>
									<div className="form-group col-sm-6">
										<label>Department</label>
										<Select
											id="department"
											name="department"
											placeholder="Select a department"
											ref={register({ name: 'department' })}
											options={departments}
											onChange={e => {
												if (e == null) {
													setValue('department', null);
												} else {
													setValue('department', e?.id);
												}
											}}
										/>
										<small className="text-danger">
											{errors.department && errors.department.message}
										</small>
									</div>
									<div className="d-flex">
										<div className="form-check ml-4">
											<label className="form-check-label">
												<input
													className="form-check-input mt-1"
													name="isClinical"
													type="checkbox"
													checked={isClinical}
													onChange={() => {
														setIsClinical(!isClinical);
													}}
												/>
												clinical
											</label>
										</div>
										{/* IS mobile */}
										<div className="form-check ml-4">
											<label className="form-check-label">
												<input
													className="form-check-input mt-1"
													name="isClinical"
													type="checkbox"
													checked={isOnDevice}
													onChange={() => {
														setIsOnDevice(!isOnDevice);
													}}
												/>
												isOnDevice
											</label>
										</div>
									</div>
								</div>

								{/* Begin with button */}
								<div className="modal-footer buttons-on-right">
									<button
										className="btn btn-primary"
										type="submit"
										disabled={submitting}
									>
										{submitting ? (
											<img src={waiting} alt="submitting" />
										) : (
											'create User'
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AttendanceForm;
