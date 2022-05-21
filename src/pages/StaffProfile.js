import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Link } from 'react-router-dom';

import avatar from '../assets/images/placeholder.jpg';
import { toggleProfile } from '../actions/user';
import StaffMenu from '../components/Navigation/StaffMenu';
import SSRStorage from '../services/storage';
import { USER_RECORD } from '../services/constants';
import Splash from '../components/Splash';
import HashRoute from '../components/HashRoute';
import { staffname } from '../services/utilities';

const Profile = lazy(() => import('../components/Staff/Profile'));
const Payroll = lazy(() => import('../components/Staff/Payroll'));
const Transactions = lazy(() => import('../components/Staff/Transactions'));

const storage = new SSRStorage();

const Page = ({ location }) => {
	const hash = location.hash.substr(1);
	switch (hash) {
		case 'payroll':
			return <Payroll />;
		case 'transactions':
			return <Transactions />;
		case 'profile':
		default:
			return <Profile />;
	}
};

class StaffProfile extends Component {
	closeProfile = () => {
		storage.removeItem(USER_RECORD);
		this.props.toggleProfile(false);
	};

	componentDidMount() {
		const { location } = this.props;
		if (!location.hash) {
			this.props.history.push(`${location.pathname}#profile`);
		}
	}

	componentWillUnmount() {
		const { location } = this.props;
		this.props.history.push(location.pathname);
	}

	render() {
		const { location, staff } = this.props;
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
				{staff ? (
					<div
						className="content-w"
						style={{
							width: 'calc(100% - 18%)',
							overflow: 'hidden',
							padding: '10px 0 20px 10px',
						}}
					>
						<div className="content-i">
							<div className="content-box">
								<div className="row">
									<div className="col-block">
										<div className="support-index">
											<div className="support-ticket-content-w d-block">
												<div
													className="support-ticket-info"
													style={{ position: 'relative' }}
												>
													<div className="customer text-capitalize mb-0">
														<div
															className="avatar"
															style={{ boxShadow: 'none' }}
														>
															<img alt="" src={avatar} />
														</div>
														<h4 className="customer-name">
															{staffname(staff.details)}
														</h4>
														<div className="customer-tickets">
															{staff.details?.department?.name || '--'}
														</div>
													</div>
													<div className="up-controls">
														<div className="row">
															<div className="col-lg-12 text-center mt-4">
																<Link
																	to={`${location.pathname}#edit`}
																	className="btn btn-primary btn-sm"
																>
																	<i className="os-icon os-icon-edit-32"></i>
																	<span> Edit Profile</span>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<StaffMenu />
										<div className="content-i">
											<div className="content-box p-0 mt-3">
												<div className="row">
													<Suspense fallback={<Splash />}>
														<Switch>
															<HashRoute
																hash={location.hash}
																component={Page}
															/>
														</Switch>
													</Suspense>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="content-w">
						<div className="top-bar color-scheme-transparent"></div>
						<div className="content-i">
							<div className="content-box text-center">
								<h5>Staff profile was not found</h5>
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
		staff: state.user.staff,
	};
};

export default withRouter(
	connect(mapStateToProps, { toggleProfile })(StaffProfile)
);
