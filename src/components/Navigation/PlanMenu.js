import React from 'react';
import { Link } from 'react-router-dom';

const PlanMenu = () => {
	return (
		<>
			<li>
				<Link to="/plan/dashboard">
					<div className="icon-w">
						<div className="os-icon os-icon-layers" />
					</div>
					<span>Dashboard</span>
				</Link>
			</li>
		</>
	);
};

export default PlanMenu;
