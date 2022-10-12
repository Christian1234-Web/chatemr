/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Suspense, lazy, Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';

import { toggleProfile } from '../actions/user';
import LabourProfileMenu from '../components/Navigation/LabourProfileMenu';
import SSRStorage from '../services/storage';
import { USER_RECORD } from '../services/constants';
import Splash from '../components/Splash';
import ProfileBlock from '../components/ProfileBlock';
import HashRoute from '../components/HashRoute';
import AncBlock from '../components/AncBlock';

const Notes = lazy(() => import('../components/Labour/Notes'));
const Measurements = lazy(() => import('../components/Labour/Measurements'));
const Lab = lazy(() => import('../components/Patient/Lab'));
const LabRequest = lazy(() => import('../components/Patient/LabRequest'));
const Vitals = lazy(() => import('../components/Patient/Vitals'));
const RiskAssessments = lazy(() =>
	import('../components/Labour/RiskAssessments')
);
const Delivery = lazy(() => import('../components/Labour/Delivery'));

const storage = new SSRStorage();

const Page = ({ location }) => {
	const labour = useSelector(state => state.user.item);
	const hash = location.hash.substr(1).split('#');
	switch (hash[0]) {
		case 'measurements':
			return <Measurements can_request={labour && labour.status === 0} />;
		case 'lab':
			return (
				<Lab
					can_request={labour && labour.status === 0}
					itemId={labour.id || ''}
					type="labour"
				/>
			);
		case 'lab-request':
			return <LabRequest module="labour" itemId={labour.id || ''} />;
		case 'partograph':
			return <Vitals type={hash[1].split('%20').join(' ')} category="labour" />;
		case 'risk-assessments':
			return <RiskAssessments />;
		case 'delivery':
			return <Delivery />;
		case 'notes':
		default:
			return <Notes can_request={labour && labour.status === 0} />;
	}
};

class LabourProfile extends Component {
	componentDidMount() {
		const { location } = this.props;
		if (!location.hash) {
			this.props.history.push(`${location.pathname}#notes`);
		}
	}

	componentWillUnmount() {
		const { location } = this.props;
		this.props.history.push(location.pathname);
	}

	render() {
		const { location, patient, isBackToPatientProfile } = this.props;
		const closeProfile = () => {
			storage.removeItem(USER_RECORD);
			this.props.toggleProfile(
				false,
				isBackToPatientProfile === true ? 'antenatal' : null
			);
		};
		return (
			<div className="layout-w">
				<button
					aria-label="Close"
					className="close custom-close"
					type="button"
					onClick={closeProfile}
				>
					<span className="os-icon os-icon-close" />
				</button>
				{patient ? (
					<Fragment>
						<div
							className="content-w"
							style={{ width: 'calc(100% - 18%)', overflow: 'hidden' }}
						>
							<LabourProfileMenu />
							<div className="content-i">
								<div className="content-box">
									<div className="row">
										<div className="col-sm-12">
											<ProfileBlock
												profile={true}
												patient={patient}
												hasButtons={false}
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
		isBackToPatientProfile: state.user.isProfile,
	};
};

export default withRouter(
	connect(mapStateToProps, { toggleProfile })(LabourProfile)
);
