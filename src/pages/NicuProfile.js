/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Suspense, lazy, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';

import { toggleProfile } from '../actions/user';
import AdmissionMenu from '../components/Navigation/AdmissionMenu';
import SSRStorage from '../services/storage';
import { USER_RECORD } from '../services/constants';
import Splash from '../components/Splash';
import ProfileBlock from '../components/ProfileBlock';
import HashRoute from '../components/HashRoute';
import AncBlock from '../components/AncBlock';

const ClinicalTasks = lazy(() => import('../components/Patient/ClinicalTasks'));
const InPatientNote = lazy(() => import('../components/Patient/InPatientNote'));
const Vitals = lazy(() => import('../components/Patient/Vitals'));
const NurseObservation = lazy(() =>
	import('../components/Patient/NurseObservation')
);
const FluidChart = lazy(() => import('../components/Patient/FluidChart'));
const CareTeam = lazy(() => import('../components/Patient/CareTeam'));
const PharmacyRequest = lazy(() =>
	import('../components/Patient/PharmacyRequest')
);
const Pharmacy = lazy(() => import('../components/Patient/Pharmacy'));
const NursingService = lazy(() =>
	import('../components/Patient/NursingService')
);
const DischargeNote = lazy(() => import('../components/DischargeNote'));

const storage = new SSRStorage();

const Page = ({ location }) => {
	const nicu = useSelector(state => state.user.item);
	const hash = location.hash.substr(1).split('#');
	switch (hash[0]) {
		case 'vitals':
			return <Vitals type={hash[1].split('%20').join(' ')} />;
		case 'clinical-tasks':
			return (
				<ClinicalTasks
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					type="nicu"
				/>
			);
		case 'nurse-observations':
			return (
				<NurseObservation
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					type="nicu"
				/>
			);
		case 'discharge-note':
			return <DischargeNote itemId={nicu.id || ''} type="nicu" />;
		case 'fluid-chart':
			return <FluidChart itemId={nicu.id || ''} type="nicu" />;
		case 'care-team':
			return (
				<CareTeam
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					type="nicu"
				/>
			);
		case 'regimen':
			return (
				<Pharmacy
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					type="nicu"
				/>
			);
		case 'pharmacy-request':
			return <PharmacyRequest module="nicu" itemId={nicu.id || ''} />;
		case 'nursing-service':
			return (
				<NursingService
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					module="nicu"
				/>
			);
		case 'ward-round':
		default:
			return (
				<InPatientNote
					can_request={nicu && nicu.status === 0}
					itemId={nicu.id || ''}
					type="nicu"
				/>
			);
	}
};

class NicuProfile extends Component {
	closeProfile = () => {
		storage.removeItem(USER_RECORD);
		this.props.toggleProfile(false);
	};

	componentDidMount() {
		const { location } = this.props;
		if (!location.hash) {
			this.props.history.push(`${location.pathname}#clinical-tasks`);
		}
	}

	componentWillUnmount() {
		const { location } = this.props;
		this.props.history.push(location.pathname);
	}

	render() {
		const { location, patient } = this.props;
		return (
			<div className="layout-w">
				<button
					aria-label="Close"
					className="close custom-close"
					type="button"
					onClick={this.closeProfile}
				>
					<span className="os-icon os-icon-close" />
				</button>
				{patient ? (
					<Fragment>
						<div
							className="content-w"
							style={{ width: 'calc(100% - 18%)', overflow: 'hidden' }}
						>
							<AdmissionMenu />
							<div className="content-i">
								<div className="content-box">
									<div className="row">
										<div className="col-sm-12">
											<ProfileBlock
												profile={true}
												patient={patient}
												hasButtons={false}
												canAdmit={false}
												canDischarge={true}
											/>
											{patient.antenatal_id && (
												<AncBlock
													patient={patient}
													enrollmentId={patient.antenatal_id}
												/>
											)}
										</div>
										<Suspense fallback={<Splash />}>
											<Switch>
												<HashRoute hash={location.hash} component={Page} />
											</Switch>
										</Suspense>
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				) : (
					<div className="content-w">
						<div className="top-bar color-scheme-transparent"></div>
						<div className="content-i">
							<div className="content-box text-center">
								<h5>Patient record was not found</h5>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		patient: state.user.patient,
	};
};

export default withRouter(
	connect(mapStateToProps, { toggleProfile })(NicuProfile)
);
