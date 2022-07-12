/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import VisitNotesTable from './VisitNotesTable';
import AncVisitNotes from './AncVisitNotes';
import VisitSummary from './VisitSummary';
import PatientBills from './PatientBills';
import AppointmentHistory from './AppointmentHistory';
import OpenEncounter from './Modals/OpenEncounter';
import NewAssessment from '../Antenatal/NewAssessment';
import { USER_RECORD } from '../../services/constants';
import SSRStorage from '../../services/storage';
import { toggleProfile } from '../../actions/user';

const storage = new SSRStorage();

const Dashboard = () => {
	const [tab, setTab] = useState('visitNotes');
	const [encounterModal, setEncounterModal] = useState(false);
	const [assessmentModal, setAssessmentModal] = useState(false);

	const dispatch = useDispatch();

	const patient = useSelector(state => state.user.patient);
	const appointmentId = useSelector(state => state.user.appointmentId);
	const antenatal = useSelector(state => state.user.antenatal);

	const startEncounter = () => {
		document.body.classList.add('modal-open');
		setEncounterModal(true);
	};

	const startAssessment = () => {
		document.body.classList.add('modal-open');
		setAssessmentModal(true);
	};

	const closeModal = status => {
		document.body.classList.remove('modal-open');
		setEncounterModal(false);
		setAssessmentModal(false);
		if (status) {
			storage.removeItem(USER_RECORD);
			dispatch(toggleProfile(false));
		}
	};

	return (
		<div className="col-lg-12 col-md-12">
			<div className="element-box mt-2">
				<div className="os-tabs-w">
					<div className="os-tabs-controls os-tabs-complex">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a
									className={
										tab === 'visitNotes' ? 'nav-link active' : 'nav-link'
									}
									onClick={() => setTab('visitNotes')}
								>
									Visit Notes
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										tab === 'ancVisitNotes' ? 'nav-link active' : 'nav-link'
									}
									onClick={() => setTab('ancVisitNotes')}
								>
									ANC Visit Notes
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										tab === 'visitSummary' ? 'nav-link active' : 'nav-link'
									}
									onClick={() => setTab('visitSummary')}
								>
									Visit Summary
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										tab === 'appointment' ? 'nav-link active' : 'nav-link'
									}
									onClick={() => setTab('appointment')}
								>
									Appointment History
								</a>
							</li>
							<li className="nav-item">
								<a
									className={tab === 'billing' ? 'nav-link active' : 'nav-link'}
									onClick={() => setTab('billing')}
								>
									Billing
								</a>
							</li>
							{appointmentId && appointmentId !== '' && (
								<>
									{antenatal ? (
										<li className="nav-item nav-actions d-sm-block">
											<a
												onClick={() => startAssessment()}
												className="btn btn-sm btn-primary"
											>
												Start Assessment
											</a>
										</li>
									) : (
										<li className="nav-item nav-actions d-sm-block">
											<a
												onClick={() => startEncounter()}
												className="btn btn-sm btn-primary"
											>
												Start Encounter
											</a>
										</li>
									)}
								</>
							)}
						</ul>
					</div>
					<div className="tab-content">
						{tab === 'visitNotes' && <VisitNotesTable />}
						{tab === 'ancVisitNotes' && <AncVisitNotes />}
						{tab === 'visitSummary' && <VisitSummary />}
						{tab === 'appointment' && <AppointmentHistory />}
						{tab === 'billing' && <PatientBills />}
					</div>
				</div>
			</div>
			{encounterModal && (
				<OpenEncounter
					patient={patient}
					appointment_id={appointmentId}
					closeModal={status => closeModal(status)}
				/>
			)}
			{assessmentModal && (
				<NewAssessment
					closeModal={status => closeModal(status)}
					appointment_id={appointmentId}
					patient={patient}
					antenatal={antenatal}
				/>
			)}
		</div>
	);
};

export default withRouter(Dashboard);
