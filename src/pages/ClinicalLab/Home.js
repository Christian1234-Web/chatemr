/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import NoMatch from '../NoMatch';
import Splash from '../../components/Splash';

const LabQueue = lazy(() => import('./LabQueue'));
const LabRequest = lazy(() => import('../../components/Patient/LabRequest'));
const AllRequest = lazy(() => import('./AllRequest'));

const ClinicalLab = ({ match, location }) => {
	const page = location.pathname.split('/').pop();

	let pageTitle = 'Lab Queue';
	if (page === 'all-request') {
		pageTitle = 'Lab Requests';
	} else if (page === 'new-request') {
		pageTitle = 'New Lab Request';
	}

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-12">
						<div className="element-wrapper">
							<div className="element-actions">
								<Link
									to={`${match.path}`}
									className={`mx-2 btn btn-primary btn-sm  ${
										page === 'lab' ? 'btn-outline-primary' : ''
									}`}>
									Lab Queue
								</Link>
								<Link
									to={`${match.path}/all-request`}
									className={`mr-2 btn btn-primary btn-sm  ${
										page === 'all-request' ? 'btn-outline-primary' : ''
									}`}>
									Lab Requests
								</Link>
								<Link
									to={`${match.path}/new-request`}
									className={`mr-2 btn btn-primary btn-sm  ${
										page === 'new-request' ? 'btn-outline-primary' : ''
									}`}>
									New Lab Request
								</Link>
							</div>
							<h6 className="element-header">{pageTitle}</h6>
							{page === 'lab' && (
								<div className="element-content">
									{/* <div className="row">
										<div className="col-sm-4 col-xxxl-4">
											<a className="element-box el-tablo">
												<div className="label">Pending Requests</div>
												<div className="value">0</div>
											</a>
										</div>
										<div className="col-sm-4 col-xxxl-4">
											<a className="element-box el-tablo">
												<div className="label">Pending Approval</div>
												<div className="value text-center">0</div>
											</a>
										</div>
										<div className="col-sm-4 col-xxxl-4">
											<a className="element-box el-tablo">
												<div className="label">Completed Requests</div>
												<div className="value">0</div>
											</a>
										</div>
									</div> */}
								</div>
							)}
							<Suspense fallback={<Splash />}>
								<Switch>
									<Route exact path={`${match.url}`} component={LabQueue} />
									<Route
										exact
										path={`${match.url}/new-request`}
										component={LabRequest}
									/>
									<Route
										exact
										path={`${match.url}/all-request`}
										component={AllRequest}
									/>
									<Route component={NoMatch} />
								</Switch>
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicalLab;