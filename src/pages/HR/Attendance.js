import { DatePicker, Pagination } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import waiting from '../../assets/images/waiting.gif';
import TableLoading from '../../components/TableLoading';
import { paginate } from '../../services/constants';
import { itemRender, request, staffname } from '../../services/utilities';

const Attendance = () => {
	const [filtering, setFiltering] = useState(false);
	const [loading, setLoading] = useState(false);
	const [date, setDate] = useState('');
	const [search, setSearch] = useState('');
	const [attendance, setAttendance] = useState([]);
	const [meta, setMeta] = useState({ ...paginate });

	const doFilter = e => {
		if (e) e.preventDefault();
		setFiltering(true);
		fetchAttendance();
		setFiltering(false);
	};

	const fetchAttendance = async page => {
		try {
			let p = page || 1;
			setLoading(true);
			const url = `hr/attendance?page=${p}&limit=10&date=${date}&term=${search}`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			setAttendance(result);
			setMeta(meta);
			setLoading(false);
		} catch (err) {
			console.log('fetch drug err', err);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchAttendance();
	}, [attendance.length]);

	const onNavigatePage = pageNumber => {
		fetchAttendance(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	console.log('Malik', attendance);

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-12">
						<div className="element-wrapper">
							<h6 className="element-header">Attendance List</h6>
							<div className="element-box m-0 mb-4 p-3">
								<div className="row">
									<div className="form-group col-md-5">
										<label className="mr-2 " htmlFor="search">
											Search
										</label>
										<input
											style={{ height: '32px' }}
											id="search"
											className="form-control"
											name="search"
											placeholder="search for staff"
											onChange={e => setSearch(e.target.value)}
										/>
									</div>
									<div className="form-group col-md-3">
										<label className="mr-2 " htmlFor="search">
											Select Date
										</label>

										<DatePicker
											className="form-control"
											onChange={e => setDate(moment(e._d).format('DD-MM-YYYY'))}
										/>
									</div>

									<div className="form-group col-md-3 mt-4">
										<div
											className="btn btn-sm btn-primary btn-upper text-white filter-btn"
											onClick={doFilter}
										>
											<i className="os-icon os-icon-ui-37" />
											<span>
												{filtering ? (
													<img src={waiting} alt="submitting" />
												) : (
													'Filter'
												)}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
						<div className="element-box">
							{loading ? (
								<TableLoading />
							) : (
								<>
									<>
										{
											<>
												<table className="table table-striped table-bordered">
													<thead>
														<tr>
															<th>Staff ID</th>
															<th>Staff Name</th>
															<th className="text-center">Department</th>
															<th className="text-center">Login Time</th>
															<th className="text-center">Date</th>
														</tr>
													</thead>
													<tbody>
														{attendance?.map((staff, index) => (
															<tr key={index}>
																<td>{staff.staff?.id || '--'}</td>
																<td>{staffname(staff.staff)}</td>
																<td className="text-center">
																	{staff.staff?.department?.name || '--'}
																</td>
																<td className="text-center">
																	{moment(staff.date).format('h:mm a')}
																</td>
																<td className="text-center">
																	{moment(staff.date).format('DD-MM-YYYY')}
																</td>
															</tr>
														))}
													</tbody>
												</table>
												<div className="controls-below-table">
													<div className="table-records-pages"></div>
												</div>
												<div className="pagination pagination-center mt-4">
													<Pagination
														current={parseInt(meta.currentPage, 10)}
														pageSize={parseInt(meta.itemsPerPage, 10)}
														total={parseInt(meta.totalItems, 10)}
														showTotal={total => `Total ${total} items`}
														itemRender={itemRender}
														onChange={onNavigatePage}
														showSizeChanger={false}
													/>
												</div>
											</>
										}
									</>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Attendance;
