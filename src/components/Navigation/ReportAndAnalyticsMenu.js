import React from 'react';
import { Link } from 'react-router-dom';
const ReportAndAnalyticsMenu = () => {
	return (
		<>
			<li>
				<Link to="/reports/frontdesk">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Front Desk</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/doctor">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Doctor</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/pharmacy">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Pharmacy</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/nursing">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Nursing</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/lab">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Lab</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/paypoint">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Pay Point</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/cafeteria">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Cafeteria</span>
				</Link>
			</li>
			<li>
				<Link to="/reports/others">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Others</span>
				</Link>
			</li>
		</>
	);
};

export default ReportAndAnalyticsMenu;
