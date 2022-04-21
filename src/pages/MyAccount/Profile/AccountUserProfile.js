import React from 'react';

const AccountUserProfile = ({ staff }) => {
	return (
		<>
			<div className="col-lg-12">
				<div className="os-tabs-w mx-4"></div>
				<div className="element-box w-100">
					<h6 className="element-header">Profile</h6>

					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Name:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.first_name +
								' ' +
								staff?.details?.last_name +
								' ' +
								staff?.details?.other_names}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Gender:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.gender}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Date of Birth:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.date_of_birth}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Marital Status:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.marital_status}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							No. of Children:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.number_of_children}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Contact Address:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.address}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Local Government:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.lga}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							State of Origin:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.state_of_origin}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Nationality:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.nationality}</p>
					</div>
				</div>
				<div className="element-box w-100">
					<h6 className="element-header">Next of Kin Details</h6>

					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Name:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.next_of_kin}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Relationship:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.next_of_kin_relationship}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Contact Number:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.next_of_kin_contact_no}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Date of Birth:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.next_of_kin_dob}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Contact Address:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.next_of_kin_address}
						</p>
					</div>
				</div>
				<div className="element-box w-100">
					<h6 className="element-header">Official Details</h6>

					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Job Title:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.job_title}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Department:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.department?.name}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Employment Date:
						</p>
						<p className="col-sm-9 text-3">
							{staff?.details?.employment_start_date}
						</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Employment Code:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.emp_code}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Contract Type:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.contract_type}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Monthly Salary:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.monthly_salary}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Annual Salary:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.annual_salary}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Account Number:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.account_number}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Bank:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.bank_name}</p>
					</div>
					<div className="row gx-3 align-items-center">
						<p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
							Pension Manager:
						</p>
						<p className="col-sm-9 text-3">{staff?.details?.pension_mngr}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountUserProfile;
