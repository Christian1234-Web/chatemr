/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import Pagination from 'antd/lib/pagination';

import waiting from '../../assets/images/waiting.gif';
import { request, itemRender } from '../../services/utilities';
import { notifyError } from '../../services/notify';
import LabBlock from '../../components/LabBlock';
import TableLoading from '../../components/TableLoading';

const { RangePicker } = DatePicker;

const status = [{ label: 'All' }, { label: 'Filled' }, { label: 'Completed' }];

class Lab extends Component {
	state = {
		filtering: false,
		loading: false,
		startDate: '',
		endDate: '',
		status: '',
		labs: [],
		meta: null,
		patient_id: '',
		search: '',
	};

	componentDidMount() {
		this.fetchLabs();
	}

	fetchLabs = async page => {
		try {
			const { startDate, endDate, status, patient_id, search } = this.state;
			this.setState({ loading: true });
			const p = page || 1;
			const url = `transactions/search?bill_source=labs&page=${p}&limit=10&term=${search}&startDate=${startDate}&endDate=${endDate}`;
			// const url = `requests/list/labs?page=${p}&limit=10&startDate=${startDate}&endDate=${endDate}&status=${status}&patient_id=${patient_id}`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			console.log('malik', rs);
			this.setState({ labs: result, loading: false, filtering: false, meta });
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch (error) {
			console.log(error);
			notifyError('Error fetching all lab request');
		}
	};

	doFilter = e => {
		if (e) e.preventDefault();
		this.setState({ filtering: true });
		this.fetchLabs();
	};

	change = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	dateChange = e => {
		let date = e.map(d => {
			return moment(d._d).format('YYYY-MM-DD');
		});

		this.setState({
			...this.state,
			startDate: date[0],
			endDate: date[1],
		});
	};

	updateLab = labs => {
		this.setState({ labs });
	};

	handleChange = e => {
		this.setState({
			...this.state,
			search: e.target.value,
			filtering: false,
		});
	};

	onNavigatePage = nextPage => {
		this.fetchLabs(nextPage);
	};

	render() {
		const { filtering, loading, labs, meta, search } = this.state;
		return (
			<div className="content-i">
				<div className="content-box">
					{/* {JSON.stringify(labs[0]?.item.transaction, null, 4)} */}
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
										LAB
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="element-box m-0 mb-4 p-3">
						<form className="row">
							<div className="form-group col-md-3">
								<label>From - To</label>
								<RangePicker onChange={e => this.dateChange(e)} />
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
									placeholder="search name,patient id, drug, amount, qty"
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group col mt-4">
								<div
									className="btn btn-sm btn-primary btn-upper text-white filter-btn"
									onClick={this.doFilter}
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
								<div className="element-box-tp">
									<div className="element-box-tp">
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
																		<th>Patient Name</th>
																		<th>Patient ID</th>
																		<th className="text-center">
																			Request Date
																		</th>
																		<th className="text-center">Specimen</th>
																		<th className="text-center">Filled Date</th>
																		<th className="text-right">Amount</th>
																		<th className="text-right">By</th>
																	</tr>
																</thead>
																<tbody>
																	{labs?.map((lab, index) => (
																		<tr key={index}>
																			<td>
																				{lab.patient.surname}{' '}
																				{lab.patient.other_names}
																			</td>
																			<td>{lab.patient.id}</td>
																			<td>
																				{moment(lab.createdAt).format(
																					'DD-MM-YYYY h:mm a'
																				)}
																			</td>
																			<td className="text-center">
																				{lab.patientRequestItem.labTest.specimens.map(
																					(sample, i) => (
																						<span key={i}> {sample.label}</span>
																					)
																				)}
																			</td>
																			<td className="text-center">
																				{moment(lab.updated_at).format(
																					'DD-MM-YYYY h:mm a'
																				)}
																			</td>
																			<td className="text-right">
																				{lab.amount_paid}
																			</td>
																			<td className="text-right">
																				{lab.createdBy}
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
															{meta && (
																<div className="pagination pagination-center mt-4">
																	<Pagination
																		current={parseInt(meta.currentPage, 10)}
																		pageSize={parseInt(meta.itemsPerPage, 10)}
																		total={parseInt(meta.totalItems, 10)}
																		showTotal={total =>
																			`Total ${total} lab results`
																		}
																		itemRender={itemRender}
																		onChange={current =>
																			this.onNavigatePage(current)
																		}
																		showSizeChanger={false}
																	/>
																</div>
															)}
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
				</div>
			</div>
		);
	}
}

export default Lab;
