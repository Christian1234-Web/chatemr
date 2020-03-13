/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Suspense, lazy, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Link } from 'react-router-dom';

import { toggleProfile } from '../actions/user';
import background from '../assets/images/b3.jpeg';
import profilepix from '../assets/images/a6.jpeg';
import PatientMenu from '../components/Navigation/PatientMenu';
import SSRStorage from '../services/storage';
import { USER_RECORD } from '../services/constants';
import HashRoute from '../components/HashRoute';
import Splash from '../components/Splash';

const Dashboard = lazy(() => import('../components/Patient/Dashboard'));
const Lab = lazy(() => import('../components/Patient/Lab'));
const Encounter = lazy(() => import('../components/Patient/Encounter'));
const Pharmacy = lazy(() => import('../components/Patient/Pharmacy'));
const Imaging = lazy(() => import('../components/Patient/Imaging'));
const Dentistry = lazy(() => import('../components/Patient/Dentistry'));
const Opthalmology = lazy(() => import('../components/Patient/Opthalmology'));
const Procedure = lazy(() => import('../components/Patient/Procedure'));
const Physiotherapy = lazy(() => import('../components/Patient/Physiotherapy'));
const Vitals = lazy(() => import('../components/Patient/Vitals'));

const storage = new SSRStorage();

const Page = ({ location }) => {
	const hash = location.hash.substr(1);
	switch (hash) {
		case 'encounter':
			return <Encounter />;
		case 'lab':
			return <Lab />;
		case 'pharmacy':
			return <Pharmacy />;
		case 'vitals':
			return <Vitals />;
		case 'imaging':
			return <Imaging />;
		case 'opthalmology':
			return <Opthalmology />;
		case 'procedure':
			return <Procedure />;
		case 'physio':
			return <Physiotherapy />;
		case 'dentistry':
			return <Dentistry />;

		default:
			return <Dashboard />;
	}
};

class PatientProfile extends Component {
	state = {
		dropdown: false,
	};

	closeProfile = () => {
		storage.removeItem(USER_RECORD);
		this.props.toggleProfile(false);
	};

	toggleDropdown = () => {
		this.setState((prevState, props) => ({
			dropdown: !prevState.dropdown,
		}));
	};

	componentDidMount() {
		const { location } = this.props;
		if (!location.hash) {
			this.props.history.push(`${location.pathname}#dashboard`);
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
					className="close"
					type="button"
					onClick={this.closeProfile}>
					<span className="os-icon os-icon-close" />
				</button>
				{patient ? (
					<Fragment>
						<PatientMenu />
						<div className="content-w">
							<div className="content-i">
								<div className="content-box">
									<div className="row">
										<div className="col-sm-12 pb-4">
											<div
												className="card-header bg-dark bg-img p-0 no-border"
												style={{
													backgroundImage: `url(${background})`,
													backgroundPosition: '50% -114.052px',
												}}>
												<div className="bg-dark-overlay r-2x no-r-b">
													<div className="d-md-flex">
														<div className="p-4">
															<div className="d-flex">
																<Link to={`${location.pathname}#dashboard`}>
																	<span className="avatar w-64">
																		<img src={profilepix} alt="" />{' '}
																		<i className="on"></i>
																	</span>
																</Link>
																<div className="mx-3">
																	<h5 className="mt-2">{`${patient.surname} ${patient.other_names}`}</h5>
																	<div className="text-fade text-sm">
																		<span className="m-r">
																			Senior Industrial Designer
																		</span>{' '}
																		<small>
																			<i className="fa fa-map-marker mr-2"></i>{' '}
																			London, UK
																		</small>
																	</div>
																</div>
															</div>
														</div>
														<span
															className="flex"
															style={{ flex: '1 1 auto' }}></span>
														<div className="align-items-center d-flex p-4">
															<div className="toolbar">
																<a
																	data-toggle="dropdown"
																	className="text-muted bg-dark-overlay btn-rounded btn btn-sm btn-icon"
																	aria-expanded="false"
																	onClick={this.toggleDropdown}>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="12"
																		height="12"
																		viewBox="0 0 24 24"
																		fill="none"
																		stroke="currentColor"
																		strokeWidth="2"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		className="feather feather-more-vertical text-fade">
																		<circle
																			cx="12"
																			cy="12"
																			r="2"
																			style={{ color: '#fff' }}></circle>
																		<circle
																			cx="12"
																			cy="5"
																			r="2"
																			style={{ color: '#fff' }}></circle>
																		<circle
																			cx="12"
																			cy="19"
																			r="2"
																			style={{ color: '#fff' }}></circle>
																	</svg>
																</a>
																<div
																	className="dropdown-menu dropdown-menu-right bg-black"
																	role="menu"
																	x-placement="bottom-end"
																	style={{
																		position: 'absolute',
																		transform: 'translate3d(750px, 69px, 0px)',
																		top: '0px',
																		left: '0px',
																		willChange: 'transform',
																		display: this.state.dropdown
																			? 'block'
																			: 'none',
																	}}
																	onClick={this.toggleDropdown}>
																	<Link className="dropdown-item " to="#">
																		<i className="os-icon os-icon-edit"></i>
																		<span className=" ml-2">Edit Profile</span>
																	</Link>

																	<Link className="dropdown-item" to="#">
																		<i className="os-icon os-icon-plus-circle"></i>
																		<span className="ml-2">
																			Request Admission
																		</span>
																	</Link>
																	<Link className="dropdown-item" to="#">
																		<i className="os-icon os-icon-plus-circle"></i>
																		<span className="ml-2">
																			Enroll Antenatal
																		</span>
																	</Link>
																	<Link className="dropdown-item " to="#">
																		<i className="os-icon os-icon-plus-circle"></i>
																		<span className="ml-2">
																			Enroll Immunization
																		</span>
																	</Link>
																	<Link className="dropdown-item" to="#">
																		<i className="os-icon os-icon-plus-circle"></i>
																		<span className="ml-2">Enroll IVF</span>
																	</Link>
																	<Link className="dropdown-item" to="#">
																		<i className="os-icon os-icon-documents-03"></i>
																		<span className="ml-2">
																			Upload Document
																		</span>
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
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
	connect(mapStateToProps, { toggleProfile })(PatientProfile)
);