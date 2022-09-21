import React, { useState, useEffect } from 'react';
import { Field } from 'react-final-form';
import DatePicker from 'react-datepicker';
import { format, isValid } from 'date-fns';
import AsyncSelect from 'react-select/async/dist/react-select.esm';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import Switch from 'react-switch';

import FormWizard from '../FormWizard';
import {
	genders,
	maritalStatuses,
	ethnicities,
	hmoAPI,
	relationships,
	searchAPI,
} from '../../services/constants';
import {
	request,
	staffname,
	Compulsory,
	ErrorBlock,
	ReactSelectAdapter,
	Condition,
	patientname,
} from '../../services/utilities';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifySuccess } from '../../services/notify';
import { messageService } from '../../services/message';
import { setPatientRecord } from '../../actions/user';

const PatientForm = ({ patient, closeModal, history, location }) => {
	const path = location.pathname.split('/');

	const [loaded, setLoaded] = useState(false);
	const [hmo, setHmo] = useState(null);
	const [dateOfBirth, setDateOfBirth] = useState(null);
	const [nokDateOfBirth, setNokDateOfBirth] = useState(null);
	const [staff, setStaff] = useState(null);
	const [mother, setMother] = useState(null);
	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch();

	const getHmoSchemes = async q => {
		if (!q || q.length <= 1) {
			return [];
		}

		const url = `${hmoAPI}/schemes?q=${q}`;
		const { result } = await request(url, 'GET', true);
		return result;
	};

	const getStaffs = async q => {
		if (!q || q.length <= 1) {
			return [];
		}

		const url = `hr/staffs/find?q=${q}`;
		const result = await request(url, 'GET', true);
		return result;
	};

	const getPatients = async q => {
		if (!q || q.length < 1) {
			return [];
		}

		const url = `${searchAPI}?q=${q}&gender=female`;
		const res = await request(url, 'GET', true);
		return res;
	};

	let initialValues = {};
	if (patient) {
		initialValues = {
			surname: patient.surname || '',
			other_names: patient.other_names || '',
			email: patient.email || '',
			date_of_birth: patient.date_of_birth
				? moment(patient.date_of_birth, 'YYYY-MM-DD').format('DD-MM-YYYY')
				: '',
			gender: patient.gender
				? { value: patient.gender, label: patient.gender }
				: '',
			maritalStatus: patient.maritalStatus
				? { value: patient.maritalStatus, label: patient.maritalStatus }
				: '',
			hmo_id: patient.hmo?.id || '',
			enrollee_id: patient.enrollee_id || '',
			occupation: patient.occupation || '',
			address: patient.address || '',
			phone_number: patient.phone_number || '',
			ethnicity: patient.ethnicity
				? { value: patient.ethnicity, label: patient.ethnicity }
				: '',
			nok_surname: patient?.nextOfKin?.surname || '',
			nok_other_names: patient?.nextOfKin?.other_names || '',
			nok_date_of_birth: patient?.nextOfKin?.date_of_birth
				? moment(patient.nextOfKin.date_of_birth, 'YYYY-MM-DD').format(
						'DD-MM-YYYY'
				  )
				: '',
			nok_gender: patient?.nextOfKin?.gender
				? {
						value: patient?.nextOfKin?.gender,
						label: patient?.nextOfKin?.gender,
				  }
				: '',
			nok_maritalStatus: patient?.nextOfKin?.maritalStatus
				? {
						value: patient?.nextOfKin?.maritalStatus,
						label: patient?.nextOfKin?.maritalStatus,
				  }
				: '',
			nok_occupation: patient.nextOfKin?.occupation || '',
			nok_ethnicity: patient?.nextOfKin?.ethnicity
				? {
						value: patient?.nextOfKin?.ethnicity,
						label: patient?.nextOfKin?.ethnicity,
				  }
				: '',
			nok_relationship: patient?.nextOfKin?.relationship
				? {
						value: patient?.nextOfKin?.relationship,
						label: patient?.nextOfKin?.relationship,
				  }
				: '',
			nok_address: patient?.nextOfKin?.address || '',
			nok_phoneNumber: patient?.nextOfKin?.phoneNumber || '',
			nok_email: patient?.nextOfKin?.email || '',
			is_staff: patient?.staff ? true : false,
			is_mother: patient?.mother ? true : false,
			staff_id: patient?.staff?.id || null,
			mother_id: patient?.mother_id,
		};
	}

	useEffect(() => {
		if (!loaded) {
			if (patient) {
				if (patient.date_of_birth) {
					setDateOfBirth(moment(patient.date_of_birth, 'YYYY-MM-DD').toDate());
				} else {
					setDateOfBirth(null);
				}
				if (patient?.nextOfKin?.date_of_birth) {
					setNokDateOfBirth(
						moment(patient.nextOfKin.date_of_birth, 'YYYY-MM-DD').toDate()
					);
				} else {
					setNokDateOfBirth(null);
				}
				if (patient?.staff) {
					setStaff(patient.staff);
				} else {
					setStaff(null);
				}
				setHmo(patient?.hmo);
				if (patient?.mother) {
					setMother(patient.mother);
				} else {
					setMother(null);
				}
			}
			setLoaded(true);
		}
	}, [loaded, patient]);

	const onSubmit = async values => {
		const data = {
			...values,
			date_of_birth: moment(values.date_of_birth, 'DD-MM-YYYY').format(
				'YYYY-MM-DD'
			),
			nok_date_of_birth:
				values.nok_date_of_birth && values.nok_date_of_birth !== ''
					? moment(values.nok_date_of_birth, 'DD-MM-YYYY').format('YYYY-MM-DD')
					: '',
			ethnicity: values.ethnicity?.value || '',
			gender: values.gender?.value || '',
			maritalStatus: values.maritalStatus?.value || '',
			nok_ethnicity: values.nok_ethnicity?.value || '',
			nok_gender: values.nok_gender?.value || '',
			nok_maritalStatus: values.nok_maritalStatus?.value || '',
			nok_relationship: values.nok_relationship?.value || '',
			enrollee_id: values.enrollee_id || null,
		};

		if (!patient) {
			try {
				dispatch(startBlock());
				const rs = await request('patient', 'POST', true, data);
				dispatch(stopBlock());
				if (rs.success) {
					notifySuccess('Patient account created!');
					if (path[1] === 'front-desk') {
						history.push('/front-desk/patients');
					} else {
						messageService.sendMessage({
							type: 'new-patient',
							data: rs.patient,
						});
					}
					closeModal();
				} else {
					return {
						[FORM_ERROR]: rs.message || 'could not save patient record',
					};
				}
			} catch (e) {
				console.log(e.message);
				dispatch(stopBlock());
				return { [FORM_ERROR]: 'could not save patient record' };
			}
		} else {
			try {
				dispatch(startBlock());
				const url = `patient/${patient.id}`;
				const rs = await request(url, 'PUT', true, data);
				dispatch(stopBlock());
				if (rs.success) {
					dispatch(setPatientRecord({ ...patient, ...rs.patient }));
					if (path === 'patients') {
						messageService.sendMessage({
							type: 'update-patient',
							data: rs.patient,
						});
					}
					notifySuccess('Patient account saved!');
					closeModal();
				} else {
					return {
						[FORM_ERROR]: rs.message || 'could not save patient record',
					};
				}
			} catch (e) {
				console.log(e.message);
				dispatch(stopBlock());
				return { [FORM_ERROR]: 'could not save patient record' };
			}
		}
	};

	return (
		<div
			className="onboarding-modal modal fade animated show"
			role="dialog"
			style={{ display: 'block' }}
		>
			<div className="modal-dialog modal-lg" style={{ maxWidth: '1024px' }}>
				<div className="modal-content text-center">
					<div className="modal-header faded smaller">
						<div className="modal-title text-center">
							{patient ? 'Edit Patient Record' : 'New Patient Registration'}
						</div>
						<button
							aria-label="Close"
							className="close"
							type="button"
							onClick={closeModal}
						>
							<span className="os-icon os-icon-close" />
						</button>
					</div>
					<div className="onboarding-content with-gradient">
						<div className="modal-body">
							<div className="support-index">
								<div className="support-ticket-content-w">
									<div
										className="support-ticket-info"
										style={{ flex: '0 0 200px' }}
									>
										<div
											className="customer mb-0 pb-0"
											style={{ width: '110px', borderBottom: '0 none' }}
										>
											<div
												className="avatar"
												style={{
													width: '110px',
													borderRadius: '65px',
													margin: 'auto',
												}}
											>
												<img
													alt=""
													style={{ width: '110px', borderRadius: '65px' }}
													src={require('../../assets/images/placeholder.jpg')}
												/>
											</div>
											<div className="mt-3 text-center">
												<button className="btn btn-info btn-small text-white">
													<i className="os-icon os-icon-ui-51" /> upload picture
												</button>
												<button className="btn btn-primary btn-small mt-2">
													<i className="os-icon os-icon-ui-65" /> take photo
												</button>
											</div>
										</div>
									</div>
								</div>
								<div
									className=""
									style={{
										width: 'calc(100% - 240px)',
										marginLeft: '20px',
									}}
								>
									<FormWizard
										initialValues={Object.fromEntries(
											Object.entries(initialValues).filter(([_, v]) => v !== '')
										)}
										onSubmit={onSubmit}
										btnClasses="modal-footer buttons-on-right"
									>
										<FormWizard.Page
											validate={values => {
												const errors = {};
												if (!values.surname) {
													errors.surname = "Enter patient's surname";
												}
												if (!values.other_names) {
													errors.other_names = "Enter patient's other names";
												}
												if (!values.email) {
													errors.email = "Enter patient's email address";
												}
												if (!values.date_of_birth) {
													errors.date_of_birth =
														"Enter patient's date of birth";
												}
												if (!values.gender) {
													errors.gender = "Select patient's gender";
												}
												if (!values.maritalStatus) {
													errors.maritalStatus =
														"Select patient's marital status";
												}
												if (!values.hmo_id) {
													errors.hmo_id = "Select patient's HMO";
												}
												if (!values.address) {
													errors.address = "Enter patient's address";
												}
												if (!values.phone_number) {
													errors.phone_number = "Enter patient's phone number";
												}
												if (!values.ethnicity) {
													errors.ethnicity = "Enter patient's ethnicity";
												}
												return errors;
											}}
										>
											<div className="row">
												<div className="col-sm">
													<div class="element-wrapper">
														<div
															class="element-actions mb-3"
															style={{
																display: 'flex',
																justifyContent: 'space-evenly',
																alignItems: 'center',
															}}
														>
															{/* <span>Manual Fill</span> */}
															<Switch
																onChange={() => setChecked(!checked)}
																checked={checked}
																height={16}
																width={40}
																onColor="#047bf8"
																className="mr-1"
															/>
															<span>Auto Fill</span>
														</div>

														{/* <h6 class="element-header">Sales Dashboard</h6> */}
														{checked && (
															<div className="col-md-12">
																<div class="element-content">
																	<div>
																		<label class="sr-only"> Phone Number</label>
																		<div class="input-group mb-2 mr-sm-2 mb-sm-0">
																			<div class="input-group-prepend">
																				<div class="input-group-text">
																					<div class="os-icon os-icon-phone"></div>
																				</div>
																			</div>
																			<input
																				class="form-control"
																				placeholder="Phone Number"
																			/>
																			<button class="btn btn-primary">
																				<i className="os-icon os-icon-ui-37" />
																			</button>
																		</div>
																	</div>
																</div>
															</div>
														)}
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															Surname <Compulsory />
														</label>
														<Field
															name="surname"
															className="form-control"
															component="input"
															type="text"
															placeholder="Surname"
														/>
														<ErrorBlock name="surname" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Other Names <Compulsory />
														</label>
														<Field
															name="other_names"
															className="form-control"
															component="input"
															type="text"
															placeholder="Other Names"
														/>
														<ErrorBlock name="other_names" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Email <Compulsory />
														</label>
														<Field
															name="email"
															className="form-control"
															component="input"
															type="email"
															placeholder="Email e.g example@gmail.com"
														/>
														<ErrorBlock name="email" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															Date of Birth <Compulsory />
														</label>
														<Field
															name="date_of_birth"
															render={({ name, input: { onChange } }) => (
																<div className="custom-date-input">
																	<DatePicker
																		selected={dateOfBirth}
																		onChange={date => {
																			isValid(date)
																				? onChange(
																						format(new Date(date), 'dd-MM-yyyy')
																				  )
																				: onChange(null);
																			setDateOfBirth(date);
																		}}
																		peekNextMonth
																		showMonthDropdown
																		showYearDropdown
																		dropdownMode="select"
																		dateFormat="dd-MM-yyyy"
																		className="single-daterange form-control"
																		placeholderText="Select date of birth"
																		maxDate={new Date()}
																		name={name}
																		disabledKeyboardNavigation
																	/>
																</div>
															)}
														/>
														<ErrorBlock name="date_of_birth" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Gender <Compulsory />
														</label>
														<Field
															name="gender"
															component={ReactSelectAdapter}
															options={genders}
														/>
														<ErrorBlock name="gender" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Marital Status <Compulsory />
														</label>
														<Field
															name="maritalStatus"
															component={ReactSelectAdapter}
															options={maritalStatuses}
														/>
														<ErrorBlock name="maritalStatus" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															HMO <Compulsory />
														</label>
														<Field name="hmo_id">
															{({ input, meta }) => (
																<AsyncSelect
																	isClearable
																	getOptionValue={option => option.id}
																	getOptionLabel={option =>
																		`${option.name} ${
																			option.name !== 'Private'
																				? option.phone_number || ''
																				: ''
																		}`
																	}
																	defaultOptions
																	value={hmo}
																	loadOptions={getHmoSchemes}
																	onChange={e => {
																		setHmo(e);
																		e
																			? input.onChange(e.id)
																			: input.onChange('');
																	}}
																	placeholder="Search hmo scheme"
																/>
															)}
														</Field>
														<ErrorBlock name="hmo_id" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>Enrollee ID</label>
														<Field
															name="enrollee_id"
															className="form-control"
															component="input"
															type="text"
															placeholder="Enrollee ID"
														/>
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>Occupation</label>
														<Field
															name="occupation"
															className="form-control"
															component="input"
															type="text"
															placeholder="Occupation"
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															Address <Compulsory />
														</label>
														<Field
															name="address"
															className="form-control"
															component="input"
															type="text"
															placeholder="Address"
														/>
														<ErrorBlock name="address" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Phone Number <Compulsory />
														</label>
														<Field
															name="phone_number"
															className="form-control"
															component="input"
															type="text"
															placeholder="Phone Number"
														/>
														<ErrorBlock name="phone_number" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Ethnicity <Compulsory />
														</label>
														<Field
															name="ethnicity"
															component={ReactSelectAdapter}
															options={ethnicities}
														/>
														<ErrorBlock name="ethnicity" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-2">
													<div className="form-group">
														<label className="mr-2">Is Staff</label>
														<Field
															name="is_staff"
															component="input"
															type="checkbox"
														/>
													</div>
												</div>
												<Condition when="is_staff" is={true}>
													<div className="col-sm-10">
														<div className="form-group">
															<label>Staff</label>
															<Field name="staff_id">
																{({ input, meta }) => (
																	<AsyncSelect
																		isClearable
																		getOptionValue={option => option.id}
																		getOptionLabel={option => staffname(option)}
																		defaultOptions
																		value={staff}
																		loadOptions={getStaffs}
																		onChange={e => {
																			setStaff(e);
																			e
																				? input.onChange(e.id)
																				: input.onChange('');
																		}}
																		placeholder="Search staff"
																	/>
																)}
															</Field>
														</div>
													</div>
												</Condition>
											</div>
										</FormWizard.Page>
										<FormWizard.Page
											validate={values => {
												const errors = {};
												if (!values.nok_surname) {
													errors.nok_surname = 'Enter next of kin surname';
												}
												if (!values.nok_other_names) {
													errors.nok_other_names =
														'Enter next of kin other names';
												}
												if (!values.nok_gender) {
													errors.nok_gender = "Select next of kin's gender";
												}
												if (!values.nok_address) {
													errors.nok_address = "Enter next of kin's address";
												}
												if (!values.nok_phoneNumber) {
													errors.nok_phoneNumber =
														"Select next of kin's phone number";
												}
												if (!values.nok_ethnicity) {
													errors.nok_ethnicity =
														"Select next of kin's ethnicity";
												}
												return errors;
											}}
										>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Surname <Compulsory />
														</label>
														<Field
															name="nok_surname"
															className="form-control"
															component="input"
															type="text"
															placeholder="NOK Surname"
														/>
														<ErrorBlock name="nok_surname" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Other Names <Compulsory />
														</label>
														<Field
															name="nok_other_names"
															className="form-control"
															component="input"
															type="text"
															placeholder="NOK Other Names"
														/>
														<ErrorBlock name="nok_other_names" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>Next of Kin Date of Birth</label>
														<Field
															name="nok_date_of_birth"
															render={({ name, input: { onChange } }) => (
																<div className="custom-date-input">
																	<DatePicker
																		selected={nokDateOfBirth}
																		onChange={date => {
																			isValid(date)
																				? onChange(
																						format(new Date(date), 'dd-MM-yyyy')
																				  )
																				: onChange(null);
																			setNokDateOfBirth(date);
																		}}
																		peekNextMonth
																		showMonthDropdown
																		showYearDropdown
																		dropdownMode="select"
																		dateFormat="dd-MM-yyyy"
																		className="single-daterange form-control"
																		placeholderText="Select date of birth"
																		maxDate={new Date()}
																		name={name}
																		disabledKeyboardNavigation
																	/>
																</div>
															)}
														/>
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Gender <Compulsory />
														</label>
														<Field
															name="nok_gender"
															component={ReactSelectAdapter}
															options={genders}
														/>
														<ErrorBlock name="nok_gender" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>Next of Kin Marital Status</label>
														<Field
															name="nok_maritalStatus"
															component={ReactSelectAdapter}
															options={maritalStatuses}
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>Next of Kin Occupation</label>
														<Field
															name="nok_occupation"
															className="form-control"
															component="input"
															type="text"
															placeholder="NOK Occupation"
														/>
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Ethnicity <Compulsory />
														</label>
														<Field
															name="nok_ethnicity"
															component={ReactSelectAdapter}
															options={ethnicities}
														/>
														<ErrorBlock name="nok_ethnicity" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>Next of Kin Relationship to Patient</label>
														<Field
															name="nok_relationship"
															component={ReactSelectAdapter}
															options={relationships}
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Address <Compulsory />
														</label>
														<Field
															name="nok_address"
															className="form-control"
															component="input"
															type="text"
															placeholder="NOK Address"
														/>
														<ErrorBlock name="nok_address" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>
															Next of Kin Phone Number <Compulsory />
														</label>
														<Field
															name="nok_phoneNumber"
															className="form-control"
															component="input"
															type="text"
															placeholder="NOK Phone Number"
														/>
														<ErrorBlock name="nok_phoneNumber" />
													</div>
												</div>
												<div className="col-sm">
													<div className="form-group">
														<label>Next of Kin Email</label>
														<Field
															name="nok_email"
															className="form-control"
															component="input"
															type="email"
															placeholder="Email e.g example@gmail.com"
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-2">
													<div className="form-group">
														<label className="mr-2">Is Mother</label>
														<Field
															name="is_mother"
															component="input"
															type="checkbox"
														/>
													</div>
												</div>
												<Condition when="is_mother" is={true}>
													<div className="col-sm-10">
														<div className="form-group">
															<label>Mother</label>
															<Field name="mother_id">
																{({ input, meta }) => (
																	<AsyncSelect
																		isClearable
																		getOptionValue={option => option.id}
																		getOptionLabel={option =>
																			patientname(option, true)
																		}
																		defaultOptions
																		value={mother}
																		loadOptions={getPatients}
																		onChange={e => {
																			setMother(e);
																			e
																				? input.onChange(e.id)
																				: input.onChange('');
																		}}
																		placeholder="Search patient"
																	/>
																)}
															</Field>
														</div>
													</div>
												</Condition>
											</div>
										</FormWizard.Page>
									</FormWizard>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(PatientForm);
