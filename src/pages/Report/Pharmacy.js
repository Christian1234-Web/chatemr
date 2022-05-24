import React, { useEffect, useState } from 'react';
import { itemRender, request } from '../../services/utilities';
import moment from 'moment';
import Pagination from 'antd/lib/pagination';
import TableLoading from '../../components/TableLoading';
import { paginate } from '../../services/constants';

const Pharmacy = () => {
	const [drugTransactions, setDrugTransactions] = useState([]);
	const [drugDispensation, setDrugDispensation] = useState([]);
	const [meta, setMeta] = useState({ ...paginate });
	const [metaDispense, setMetaDispense] = useState({ ...paginate });

	const [loading, setLoading] = useState(false);
	const [pharmSales, setPharmSales] = useState(null);

	const [linkPharm, setLinkPharm] = useState(true);
	const [linkDen, setLinkDen] = useState(false);

	useEffect(() => {
		fetchDrugTransactions();
	}, [drugTransactions.length]);

	const fetchDrugTransactions = async page => {
		try {
			let p = page || 1;
			let pid = '';
			let startDate = '';
			let endDate = '';
			let service_id = '2';
			let status = '';
			setLoading(true);
			const url = `transactions?page=${p}&limit=15&patient_id=${pid}&startDate=${startDate}&endDate=${endDate}&service_id=${service_id}&status=${status}`;
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
												<div className="col-sm-4">
													<form className="form-inline justify-content-sm-end">
														<input
															className="form-control form-control-sm rounded bright"
															placeholder="Search"
														/>
													</form>
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
																		<th className="text-right">Drug Item</th>
																		<th className="text-right">Amount</th>
																		<th className="text-right">Quantity</th>
																	</tr>
																</thead>
																<tbody>
																	{drugTransactions.map(
																		(transaction, index) => (
																			<tr key={index}>
																				<td>
																					{transaction.patient.surname}{' '}
																					{transaction.patient.other_names}
																				</td>
																				<td>{transaction.patient_id}</td>
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
																				<td className="text-right">
																					{
																						transaction.patientRequestItem.drug
																							.name
																					}
																				</td>
																				<td className="text-right">
																					&#x20A6;{' '}
																					{
																						transaction.patientRequestItem
																							.drugBatch.unitPrice
																					}
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
																	total={parseInt(meta.totalPages, 10)}
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
