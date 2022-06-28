/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import moment from 'moment';
import Pagination from 'antd/lib/pagination';
import startCase from 'lodash.startcase';

import { searchAPI } from '../../services/constants';
import waiting from '../../assets/images/waiting.gif';
import DatePicker from 'antd/lib/date-picker';
import {
	request,
	staffname,
	patientname,
	formatDate,
	itemRender,
} from '../../services/utilities';
import { notifyError } from '../../services/notify';
import TableLoading from '../../components/TableLoading';
import { formatCurrency } from '../../services/utilities';

const { RangePicker } = DatePicker;

// const status = [
// 	{ value: 0, label: 'Open' },
// 	{ value: 1, label: 'Closed' },
// 	{ value: 2, label: 'Approved' },
// ];

class Transactions extends Component {
	state = {
		filtering: false,
		loading: false,
		id: null,
		startDate: '',
		endDate: '',
		status: '',
		searching: '',
		searchHmo: false,
		hmos: [],
		query: '',
		paymentType: '',
		patients: [],
		transactions: [],
		hmoQuery: '',
		hmo_id: '',
		meta: null,
	};
	patient = React.createRef();
	hmo = React.createRef();

	componentDidMount() {
		this.fetchTransactions();
	}

	fetchTransactions = async page => {
		const { startDate, endDate, searching } = this.state;
		console.log('SEARCH', searching);
		try {
			this.setState({ loading: true });
			const p = page || 1;
			const url = `transactions/search?page=${p}&limit=10&term=${searching}&startDate=${startDate}&endDate=${endDate}&bill_source=cafeteria&filter=`;
			const rs = await request(url, 'GET', true);
			console.log('REASULT', rs);
			const { result, ...meta } = rs;

			this.setState({
				loading: false,
				filtering: false,
				startDate: '',
				endDate: '',
				transactions: result,
				meta,
			});
		} catch (error) {
			console.log(error);
			notifyError('Error fetching today cafeteria transactions request');
			this.setState({ loading: false, filtering: false, patient_id: '' });
		}
	};

	doFilter = e => {
		e.preventDefault();
		// this.setState({ filtering: true });
		this.setState({ ...this.state, filtering: true });
		console.log(this.state.patient_id);
		// if (this.state.query < 1) {
		// 	this.setState({ ...this.state, patient_id: '' });
		// 	console.log(this.state.patient_id);
		// }
		this.fetchTransactions();
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
			startDate: date[0] ? date[0] : '',
			endDate: date[1] ? date[1] : '',
		});
	};

	patientSet = (pat, type) => {
		if (type === 'patient') {
			let name = patientname(pat);
			document.getElementById('patient').value = name;
			this.setState({ ...this.state, patient_id: pat.id, patients: [] });
		} else {
			document.getElementById('hmo').value = pat.name;
			this.setState({ ...this.state, hmo_id: pat.id, hmos: [] });
		}
	};

	searchPatient = async () => {
		if (this.state.query.length > 2) {
			try {
				this.setState({ ...this.state, searching: true });
				const uri = `${searchAPI}?q=${this.state.query}`;
				const rs = await request(uri, 'GET', true);

				this.setState({
					...this.state,
					patients: rs,
					searching: false,
					query: '',
				});
			} catch (e) {
				notifyError('Error Occurred');
				this.setState({ ...this.state, searching: false });
			}
		}
	};

	searchHmo = async () => {
		if (this.state.hmoQuery.length > 2) {
			try {
				this.setState({ ...this.state, searchHmo: true });
				const url = `hmos/schemes?name=${this.state.hmoQuery}`;
				const rs = await request(url, 'GET', true);
				this.setState({
					...this.state,
					hmos: rs,
					searchHmo: false,
					hmoQuery: '',
				});
			} catch (e) {
				notifyError('Error searching hmo ');
				this.setState({ ...this.state, searchHmo: false });
			}
		}
	};
	handleInputChange = e => {
		const { name, value } = e.target;

		if (name === 'patient') {
			if (this.patient.current.value.length < 4) {
				this.setState({ patients: [], patient_id: '' });
				return;
			}
			this.setState({ ...this.state, query: value });
			this.searchPatient();
		} else if (name === 'hmo') {
			if (this.hmo.current.value.length < 4) {
				this.setState({ hmo_id: '', hmos: [] });
				return;
			}
			this.setState({ ...this.state, hmoQuery: value });
			this.searchHmo();
		} else {
			return;
		}
	};

	handlePatientChange = e => {
		this.setState({
			...this.state,
			searching: e.target.value,
			filtering: false,
		});
	};

	onNavigatePage = nextPage => {
		this.fetchTransactions(nextPage);
	};

	render() {
		const { filtering, loading, searching, patients, transactions, meta } =
			this.state;
		return (
			<div className="element-box">
				<form className="row">
					<div className="form-group col-sm-2.5">
						<label>Name</label>

						<input
							className="form-control"
							placeholder="Search for name"
							type="text"
							name="patient"
							defaultValue=""
							ref={this.patient}
							id="patient"
							onChange={e => this.handlePatientChange(e)}
							autoComplete="off"
							required
							style={{ height: '32px' }}
						/>
						{searching && (
							<div className="searching text-center">
								{/* <img alt="searching" src={searchingGIF} /> */}
							</div>
						)}

						{patients?.map(pat => {
							return (
								<div
									style={{ display: 'flex' }}
									key={pat.id}
									className="element-box"
								>
									<a
										onClick={() => this.patientSet(pat, 'patient')}
										className="ssg-item cursor"
									>
										<div
											className="item-name"
											dangerouslySetInnerHTML={{
												__html: patientname(pat),
											}}
										/>
									</a>
								</div>
							);
						})}
					</div>
					<div className="form-group col-md-3">
						<label>Payment method</label>

						<input
							className="form-control"
							placeholder="Search for payment method"
							type="text"
							name="patient"
							onChange={e => this.handlePatientChange(e)}
							autoComplete="off"
							required
							style={{ height: '32px' }}
						/>

						{patients?.map(pat => {
							return (
								<div
									style={{ display: 'flex' }}
									key={pat.id}
									className="element-box"
								>
									<a
										onClick={() => this.patientSet(pat, 'patient')}
										className="ssg-item cursor"
									>
										<div
											className="item-name"
											dangerouslySetInnerHTML={{
												__html: patientname(pat),
											}}
										/>
									</a>
								</div>
							);
						})}
					</div>
					<div className="form-group col-md-3">
						<label>Category</label>
						<select
							id="status"
							className="form-control"
							name="status"
							// value={}
							// onChange={e => setStatus(e.target.value)}
						>
							<option value="">Select Category</option>
							<option value="staff">Staff</option>
							<option value="patient">Patient</option>
							<option value="walk-in">Walk-in</option>
						</select>
					</div>

					<div className="form-group col-md-3 pr-0">
						<label>From - To</label>
						<RangePicker
							onChange={e => this.dateChange(e)}
							defaultValue={[this.state.startDate, this.state.endDate]}
						/>
					</div>
					<div className="form-group col-md-1 pr-0 mt-4">
						<div
							className="btn btn-sm btn-primary btn-upper text-white filter-btn"
							onClick={this.doFilter}
						>
							<i className="os-icon os-icon-ui-37" />
							<span>
								{filtering ? <img src={waiting} alt="submitting" /> : 'Filter'}
							</span>
						</div>
					</div>
				</form>

				{loading ? (
					<TableLoading />
				) : (
					<>
						<div className="table table-responsive">
							<table className="table table-theme v-middle table-hover">
								<thead>
									<tr>
										<th>Date</th>
										<th>Customer</th>
										<th>Item Sold</th>
										<th>Method</th>
										<th>Type</th>
										<th>Amount</th>
										<th>Paid</th>
									</tr>
								</thead>
								<tbody>
									{transactions.map((item, i) => {
										const patient = item.patient
											? patientname(item.patient, true)
											: 'Guest';
										return (
											<tr key={i}>
												<td>
													{formatDate(item.createdAt, 'DD-MMM-YYYY h:mm a')}
												</td>
												<td>{item.staff ? staffname(item.staff) : patient}</td>
												<td>
													{item?.transaction_details
														?.map(t => `${t.name} (${t?.qty || 1})`)
														.join(', ') || '-'}
												</td>
												<td>{item.payment_method}</td>
												<td>{startCase(item.transaction_type)}</td>
												<td>
													{item.transaction_type === 'credit'
														? formatCurrency(item.amount_paid)
														: formatCurrency(item.amount)}
												</td>
												<td>
													{item.status === 1 ? (
														<span className="badge badge-success">paid</span>
													) : (
														<span className="badge badge-secondary">
															pending payment
														</span>
													)}
												</td>
											</tr>
										);
									})}
									{!loading && transactions.length === 0 && (
										<tr>
											<td colSpan="6">No transactions</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
						{meta && (
							<div className="pagination pagination-center mt-4">
								<Pagination
									current={parseInt(meta.currentPage, 10)}
									pageSize={parseInt(meta.itemsPerPage, 10)}
									total={parseInt(meta.totalItems, 10)}
									showTotal={total => `Total ${total} transactions`}
									itemRender={itemRender}
									onChange={current => this.onNavigatePage(current)}
									showSizeChanger={false}
								/>
							</div>
						)}
					</>
				)}
			</div>
		);
	}
}

export default Transactions;
