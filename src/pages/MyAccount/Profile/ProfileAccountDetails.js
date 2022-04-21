/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { ReactComponent as CurveBg } from '../../../assets/svg-icons/curve.svg';
import { parseAvatar } from '../../../services/utilities';
import Image from '../../../assets/images/avatar1.jpg';

const AccountDetails = ({ staff, onEdit, buttonText, onView }) => {
	return (
		<>
			<aside className="col-lg-3">
				<div className="element-box">
					<div className="outter">
						<img src={Image} className="image-circle" />
					</div>
					<div className="d-flex flex-column" style={{ alignItems: 'center' }}>
						<div
							className="d-flex align-items-center mb-2 mt-2"
							style={{ textAlign: 'center', fontSize: '1.3rem' }}
						>
							<h4 className="text-9 fw-400">{`${staff?.details?.first_name} ${staff?.details?.last_name}`}</h4>
							<a href="#">
								<span className="svg-icon svg-icon-1 svg-icon-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
									>
										<path
											d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
											fill="#009A03"
										></path>
										<path
											className="permanent"
											d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
											fill="white"
										></path>
									</svg>
								</span>
							</a>
						</div>
						<div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
							<div className="pt-user-name">
								{staff?.details?.department?.name || ''} Department
							</div>
							<a
								href="#"
								className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
							/>
							<a
								href="#"
								className="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
							/>
						</div>
					</div>
					{buttonText === 'VIEW PROFILE' ? (
						<button className="btn btn-primary btn-sm" onClick={() => onView()}>
							<i className="os-icon os-icon-window-content"></i>
							<span>{buttonText}</span>
						</button>
					) : (
						<button className="btn btn-primary btn-sm" onClick={() => onEdit()}>
							<i className="os-icon os-icon-edit-1"></i>
							<span>{buttonText}</span>
						</button>
					)}

					<p className="mb-2">
						<a
							href="settings-profile.html"
							className="text-5 text-light"
							data-bs-toggle="tooltip"
							title=""
							data-bs-original-title="Edit Profile"
							aria-label="Edit Profile"
						>
							<i className="fas fa-edit"></i>
						</a>
					</p>
				</div>
			</aside>
			{/* <div className="col-sm-5">
				<div className="user-profile compact">
					<div
						className="up-head-w"
						style={{
							backgroundImage: `url(${parseAvatar(
								staff?.details?.profile_pic
							)})`,
						}}>
						<div className="up-social">
							<a href="#">
								<i className="os-icon os-icon-twitter"></i>
							</a>
							<a href="#">
								<i className="os-icon os-icon-facebook"></i>
							</a>
						</div>

						<div className="up-main-info">
							<h2 className="up-header">
								{`${staff?.details?.first_name} ${staff?.details?.last_name}`}
							</h2>
							<h6 className="up-sub-header">
								{staff?.details?.job_title || ''}
							</h6>
						</div>
						<CurveBg />
					</div>
					<div className="up-controls">
						<div className="row">
							<div className="col-sm-6">
								<div className="value-pair">
									<div className="label">Role:</div>
									<div className="value badge ">{`${staff?.role?.name}`}</div>
								</div>
							</div>
							<div className="col-sm-6 text-right">
								{buttonText === 'VIEW PROFILE' ? (
									<button
										className="btn btn-primary btn-sm"
										onClick={() => onView()}>
										<i className="os-icon os-icon-window-content"></i>
										<span>{buttonText}</span>
									</button>
								) : (
									<button
										className="btn btn-primary btn-sm"
										onClick={() => onEdit()}>
										<i className="os-icon os-icon-edit-1"></i>
										<span>{buttonText}</span>
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="up-contents">
						<div className="m-b">
							<table className="table">
								<tbody>
									<tr className="small">
										<th scope="row" className="font-weight-bold">
											Username
										</th>
										<td>{`${staff?.username}`}</td>
									</tr>
									<tr className="small">
										<th scope="row" className="font-weight-bold">
											Email
										</th>
										<td>{`${staff?.details?.email}`}</td>
									</tr>

									<tr className="small">
										<th scope="row" className="font-weight-bold">
											Phone Number
										</th>
										<td>{`${staff?.details?.phone_number}`}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default AccountDetails;
