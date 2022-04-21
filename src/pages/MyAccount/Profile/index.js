/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import AccountDetails from './ProfileAccountDetails';
import AccountUserProfile from './AccountUserProfile';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';
import AccountUserPayroll from './AccountUserPayroll';
import AccountUserAppraisal from './AccountUserAppraisal';

const AccountProfile = () => {
	const staff = useSelector(({ user }) => user.profile);
	const [editProfile, setEditProfile] = useState(false);
	const [buttonText, setButtonText] = useState('EDIT PROFILE');
	const [tab, setTab] = useState('profile');

	const onEditClick = () => {
		setEditProfile(true);
		setButtonText('VIEW PROFILE');
	};

	const onViewClick = () => {
		setEditProfile(false);
		setButtonText('EDIT PROFILE');
	};

	return (
		<div className="row">
			<AccountDetails
				staff={staff}
				onEdit={onEditClick}
				buttonText={buttonText}
				onView={onViewClick}
			/>
			{editProfile ? (
				<EditProfile staff={staff} />
			) : (
				<div className="col-lg-9">
					<div className="os-tabs-w mx-4">
						<div className="os-tabs-controls">
							<div className="os-tabs-w mx-4">
								<div className="os-tabs-controls">
									<ul className="nav nav-tabs upper">
										<li className="nav-item">
											<a
												className={
													tab === 'profile' ? 'nav-link active' : 'nav-link'
												}
												onClick={() => setTab('profile')}
											>
												My Profile
											</a>
										</li>
										<li className="nav-item">
											<a
												className={
													tab === 'payroll' ? 'nav-link active' : 'nav-link'
												}
												onClick={() => setTab('payroll')}
											>
												My Payroll
											</a>
										</li>
										<li className="nav-item">
											<a
												className={
													tab === 'appraisal' ? 'nav-link active' : 'nav-link'
												}
												onClick={() => setTab('appraisal')}
											>
												My Appraisals
											</a>
										</li>
									</ul>
								</div>
								<div className="tab-content">
									{tab === 'profile' && <AccountUserProfile staff={staff} />}
								</div>
								<div className="tab-content">
									{tab === 'payroll' && <AccountUserPayroll staff={staff} />}
								</div>
								<div className="tab-content">
									{tab === 'appraisal' && (
										<AccountUserAppraisal staff={staff} />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AccountProfile;
