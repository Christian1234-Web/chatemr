import React, { useEffect, useState } from 'react';
import { itemRender, request } from '../../services/utilities';
import moment from 'moment';
import Pagination from 'antd/lib/pagination';
import TableLoading from '../../components/TableLoading';
import { paginate } from '../../services/constants';
import DatePicker from 'antd/lib/date-picker';
import waiting from '../../assets/images/waiting.gif';

const { RangePicker } = DatePicker;

const Pharmacy = () => {
	const [drugTransactions, setDrugTransactions] = useState([]);
	const [drugDispensation, setDrugDispensation] = useState([]);
	const [meta, setMeta] = useState({ ...paginate });
	const [metaDispense, setMetaDispense] = useState({ ...paginate });

	const [loading, setLoading] = useState(false);
	const [pharmSales, setPharmSales] = useState(null);

	const [linkPharm, setLinkPharm] = useState(true);
	const [linkDen, setLinkDen] = useState(false);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [searchValue, setSearchValue] = useState('');
	// const [status, setStatus] = useState('');
	const [filtering, setFiltering] = useState(false);

	const dateChange = e => {
		const date = e.map(d => {
			return moment(d._d).format('YYYY-MM-DD');
		});

		setStartDate(date[0]);
		setEndDate(date[1]);
	};

	const doFilter = e => {
		if (e) e.preventDefault();
		setFiltering(true);
		fetchDrugTransactions();
		setFiltering(false);
	};

	const fetchDrugTransactions = async page => {
		try {
			let p = page || 1;
			// let pid = '';
			// let startDate = startDate || '';
			// let endDate = endDate || '';
			// let service_id = '2';
			// let status = '';
			setLoading(true);
			const url = `transactions/search?bill_source=drugs&page=${p}&limit=10&term=${searchValue}&startDate=${startDate}&endDate=${endDate}`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			setDrugTransactions(result);
			setMeta(meta);
			setLoading(false);
		} catch (err) {
			console.log('fetch drug err', err);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDrugTransactions();
	}, [drugTransactions.length]);

	useEffect(() => {
		fetchDrugDispensations();
	}, [drugDispensation.length]);

	const fetchDrugDispensations = async page => {
		try {
			let p = page || 1;
			const url = `inventory/drugs/drug-records?page=${p}&limit=15`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			setDrugDispensation(result);
			setMetaDispense(meta);
		} catch (err) {
			console.log('fetch drug dispensation err', err);
		}
	};

	useEffect(() => {
		fetchPharmSales();
	}, [drugTransactions.length]);

	const fetchPharmSales = async () => {
		try {
			const url = `transactions/bill-source?bill_source=drugs`;
			const rs = await request(url, 'GET', true);
			setPharmSales(rs);
		} catch (err) {
			console.log('Pharm Sales Err', err);
		}
	};

	const handleLinkPharm = () => {
		setLinkPharm(true);
		setLinkDen(false);
	};

	const handleLinkDen = () => {
		setLinkPharm(false);
		setLinkDen(true);
	};

	const onNavigatePage = pageNumber => {
		fetchDrugTransactions(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	const onNavigatePageDispense = pageNumber => {
		fetchDrugDispensations(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="os-tabs-w mx-4">
					<div className="os-tabs-controls">
						<ul className="nav nav-tabs upper">
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link active"
									data-toggle="tab"
									href="#tab_sales"
								>
									SALES
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="element-box m-0 mb-4 p-3">
					<form className="row">
						<div className="form-group col-md-3">
							<label>From - To</label>
							<RangePicker onChange={e => dateChange(e)} />
						</div>
						<div className="form-group col-md-3">
							<label className="mr-2 " htmlFor="id">
								Search
							</label>
							<input
								style={{ height: '32px' }}
								id="search"
								className="form-control"
								name="search"
								onChange={e => setSearchValue(e.target.value)}
								placeholder="search name,patient id, drug, amount, qty"
							/>
						</div>
						<div className="form-group col mt-4">
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
					</form>
				</div>
				<div className="row">
					<div className="col-sm-8 col-lg-9 col-xl-6 col-xxl-12">
						<div className="element-box">
							<div className="element-wrapper">
								<div className="element-box-tp">
									<div className="element-box-tp">
										<div className="controls-above-table">
											<div className="row">
												<div className="col-sm-8">
													<div className="element-wrapper">
														<div className="os-tabs-w mx-1">
															<div className="os-tabs-controls os-tabs-complex">
																<ul className="nav nav-tabs upper">
																	<li className="nav-item">
																		<div
																			className={`nav-link ${
																				linkPharm ? 'active' : ''
																			}`}
																			onClick={handleLinkPharm}
																		>
																			<a>Pharmacy</a>
																		</div>
																	</li>
																	<li className="nav-item">
																		<div
																			aria-expanded="false"
																			className={`nav-link ${
																				linkDen ? 'active' : ''
																			}`}
																			onClick={handleLinkDen}
																		>
																			<a>Dispensed</a>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										{loading ? (
											<TableLoading />
										) : (
											<>
												<>
													{linkPharm && (
														<>
															<table className="table table-striped table-bordered">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Patient ID</th>
																		<th>Request Date</th>
																		<th className="text-center">Fill Date</th>
																		<th className="text-center">Drug Item</th>
																		<th className="text-right">Amount</th>
																		<th className="text-right">Quantity</th>
																	</tr>
																</thead>
																<tbody>
																	{drugTransactions?.map(
																		(transaction, index) => (
																			<tr key={index}>
																				<td>
																					{transaction.patient.surname}{' '}
																					{transaction.patient.other_names}
																				</td>
																				<td>{transaction.patient.id}</td>
																				<td>
																					{moment(transaction.createdAt).format(
																						'DD-MM-YYYY h:mm a'
																					)}
																				</td>
																				<td className="text-center">
																					{moment(
																						transaction.patientRequestItem
																							.filled_at
																					).format('DD-MM-YYYY h:mm a')}
																				</td>
																				<td className="text-left">
																					{
																						transaction.patientRequestItem
																							.drugGeneric.name
																					}
																				</td>
																				<td className="text-right">
																					&#x20A6; {transaction.amount * -1}
																				</td>
																				<td className="text-right">
																					{
																						transaction.patientRequestItem
																							.fill_quantity
																					}
																				</td>
																			</tr>
																		)
																	)}
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
													)}
												</>
												<>
													{linkDen && (
														<>
															<div className="col-sm-8 col-lg-9 col-xl-6 col-xxl-12">
																<div className="">
																	<div className="element-wrapper">
																		<div className="element-box-tp">
																			<div className="element-box-tp">
																				<table className="table table-striped table-bordered">
																					<thead>
																						<tr>
																							<th>BRAND NAME</th>
																							<th>GENERIC NAME</th>
																							<th>QUANTITY DISPENSED</th>
																						</tr>
																					</thead>
																					<tbody>
																						{drugDispensation.map(
																							(drug, index) => (
																								<tr key={index}>
																									<td>{drug.name}</td>
																									<td>{drug.genericName}</td>
																									<td>
																										{Math.abs(drug.quantity)}
																									</td>
																								</tr>
																							)
																						)}
																					</tbody>
																				</table>
																				<div className="controls-below-table"></div>
																				<div className="pagination pagination-center mt-4">
																					<Pagination
																						current={parseInt(
																							metaDispense.currentPage,
																							10
																						)}
																						pageSize={parseInt(
																							metaDispense.itemsPerPage,
																							10
																						)}
																						total={parseInt(
																							metaDispense.totalPages,
																							10
																						)}
																						showTotal={total =>
																							`Total ${total} items`
																						}
																						itemRender={itemRender}
																						onChange={onNavigatePageDispense}
																						showSizeChanger={false}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</>
													)}
												</>
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pharmacy;
