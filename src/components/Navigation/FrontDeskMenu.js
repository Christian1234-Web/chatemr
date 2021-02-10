import React from 'react';
import { Link } from 'react-router-dom';

const FrontDeskMenu = () => {
	return (
		<>
			<li>
				<Link to="/front-desk/all-appointments">
					<div className="icon-w">
						<div className="os-icon os-icon-calendar-time" />
					</div>
					<span>Appointments</span>
				</Link>
			</li>
			<li>
				<Link to="/front-desk/all-patients">
					<div className="icon-w">
						<div className="os-icon os-icon-cv-2" />
					</div>
					<span>Patients</span>
				</Link>
			</li>
			<li>
				<Link to="/front-desk/in-patients">
					<div className="icon-w">
						<div className="icon-feather-folder-plus" />
					</div>
					<span>In-Patients</span>
				</Link>
			</li>

			<li>
				<Link to="/front-desk/insurance-trans">
					<div className="icon-w">
						<div className="os-icon os-icon-ui-55" />
					</div>
					<span>Insurance Trans</span>
				</Link>
			</li>
		</>
	);
};

export default FrontDeskMenu;
