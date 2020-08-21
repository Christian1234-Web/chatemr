import React from 'react';
import { Link } from 'react-router-dom';

const ClinicalLabMenu = () => {
	return (
		<>
			<li>
				<Link to="/lab">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Home</span>
				</Link>
			</li>
			<li>
				<Link to="/lab/new">
					<div className="icon-w">
						<div className="os-icon os-icon-plus-circle" />
					</div>
					<span>New Lab Request</span>
				</Link>
			</li>
			<li>
				<Link to="/lab/all-request">
					<div className="icon-w">
						<div className="os-icon os-icon-file-text" />
					</div>
					<span>All Requests</span>
				</Link>
			</li>
			<li>
				<Link to="/lab/pending-requests">
					<div className="icon-w">
						<div className="os-icon os-icon-file-text" />
					</div>
					<span>Pending Requests</span>
				</Link>
			</li>
			<li>
				<Link to="/lab/opd-patients">
					<div className="icon-w">
						<div className="os-icon os-icon-file-text" />
					</div>
					<span>OPD Patients</span>
				</Link>
			</li>
		</>
	);
};

export default ClinicalLabMenu;
