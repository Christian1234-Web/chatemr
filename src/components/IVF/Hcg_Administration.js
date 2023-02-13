import React, { useState } from 'react';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import { Field } from 'react-final-form';
import AsyncSelect from 'react-select/async/dist/react-select.esm';
import { patientname, staffname } from '../../services/utilities';
import { searchAPI } from '../../services/constants';

import { notifyError, notifySuccess } from '../../services/notify';
import {
	Compulsory,
	ErrorBlock,
	ReactSelectAdapter,
	request,
	updateImmutable,
} from '../../services/utilities';
import FormWizard from '../FormWizard';
import { useSelector } from 'react-redux';
const { TimePicker } = DatePicker;

const Hcg_Administration = ({ closeModal }) => {
	const [date, setDate] = useState('');
	const [chosenPatient, setChosenPatient] = useState(null);
	const [chosenNurse, setChosenNurse] = useState(null);
	const patient = useSelector(state => state.user.patient);

	const no_of_vitals = [
		{ name: '1', id: 1 },
		{ name: '2', id: 2 },
		{ name: '3', id: 3 },
		{ name: '4', id: 4 },
		{ name: '5', id: 5 },
		{ name: '6', id: 6 },
		{ name: '7', id: 7 },
		{ name: '8', id: 8 },
		{ name: '9', id: 9 },
		{ name: '10', id: 10 },
	];

	const initialValues = {
		remark: '',
		route: '',
		dosage: '',
		hcg: '',
	};

	const onSubmit = async values => {
		const data = {
			timeOfAdmin: date,
			typeOfDosage: values.dosage.name,
			typeOfHcg: values.hcg.name,
			routeOfAdmin: values.route.name,
			remarks: values.remark,
			patient_id: patient?.id,
			ivf_enrollment_id: patient?.ivf_id,
		};
		console.log(data);
		try {
			const url = `ivf/save/hcg-administration`;
			const rs = await request(url, 'POST', true, data);
			console.log(rs);
			notifySuccess('Save Successful!');
			closeModal();
		} catch (err) {
			console.log(err);
			notifyError('Failed to Save!');
			// closeModal();
		}
	};
	// const getPatients = async q => {
	// 	if (!q || q.length < 1) {
	// 		return [];
	// 	}

	// 	const url = `${searchAPI}?q=${q}`;
	// 	const res = await request(url, 'GET', true);
	// 	return res;
	// };
	// const getNurses = async q => {
	// 	if (!q || q.length < 1) {
	// 		return [];
	// 	}

	// 	const url = `hr/staffs/find?department_id=6&q=${q}`;
	// 	const res = await request(url, 'GET', true);
	// 	return res;
	// };

	return (
		<div className="p-2">
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
						if (!values.remark) {
							errors.remark = 'Enter Remark';
						}

						if (!values.dosage) {
							errors.dosage = 'Enter dosage';
						}

						if (!values.hcg) {
							errors.hcg = 'Enter HCG';
						}
						if (!values.route) {
							errors.route = 'Enter admin route';
						}

						return errors;
					}}
				>
					<div className="row">
						{/* <div className="col-sm-4">
							<div className="form-group">
								<label>Patient</label>
								<div>
									<AsyncSelect
										name="patient"
										isClearable
										getOptionValue={option => option.id}
										getOptionLabel={option => patientname(option, true)}
										defaultOptions
										loadOptions={getPatients}
										onChange={e => {
											if (e) {
												setChosenPatient(e);
											} else {
												setChosenPatient(null);
											}
										}}
										placeholder="Search patients"
									/>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="form-group">
								<label>Nurse</label>
								<div>
									<AsyncSelect
										name="nurse"
										isClearable
										getOptionValue={option => option.id}
										getOptionLabel={option => staffname(option)}
										defaultOptions
										loadOptions={getNurses}
										onChange={e => {
											if (e) {
												setChosenNurse(e);
											} else {
												setChosenNurse(null);
											}
										}}
										placeholder="Search nurses"
									/>
								</div>
							</div>
						</div> */}

						<div className="col-sm-6">
							<div className="form-group">
								<label>Type Of HCG </label> <Compulsory />
								<div>
									<Field
										name="hcg"
										placeholder="Select Type Of HCG"
										options={no_of_vitals}
										component={ReactSelectAdapter}
										getOptionValue={option => option.id}
										getOptionLabel={option => option.name}
									/>
									<ErrorBlock name="hcg" />
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Type Of Dosage</label> <Compulsory />
								<div>
									<Field
										name="dosage"
										placeholder="Select Type Of Dosage"
										options={no_of_vitals}
										component={ReactSelectAdapter}
										getOptionValue={option => option.id}
										getOptionLabel={option => option.name}
									/>
									<ErrorBlock name="dosage" />
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Time Of Admin</label>
								<div>
									<TimePicker
										style={{ width: '100%' }}
										onChange={e => setDate(e)}
									/>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label>Route of Admin</label> <Compulsory />
								<div>
									<Field
										name="route"
										placeholder="Select Route Of Admin"
										options={no_of_vitals}
										component={ReactSelectAdapter}
										getOptionValue={option => option.id}
										getOptionLabel={option => option.name}
									/>
									<ErrorBlock name="route" />
								</div>
							</div>
						</div>

						<div className="col-sm-12">
							<div className="form-group">
								<label>Remarks</label> <Compulsory />
								<Field
									name="remark"
									className="form-control"
									component="textarea"
									type="text"
									placeholder="Remarks"
								/>
								<ErrorBlock name="remark" />
							</div>
						</div>
					</div>
				</FormWizard.Page>
			</FormWizard>
		</div>
	);
};

export default Hcg_Administration;
