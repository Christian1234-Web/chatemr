/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';

import waiting from '../../assets/images/waiting.gif';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import { request, confirmAction } from '../../services/utilities';
import { patientAPI } from '../../services/constants';
import ClinicalLabItem from '../../components/ClinicalLabItem';
import { notifySuccess, notifyError } from '../../services/notify';
import searchingGIF from '../../assets/images/searching.gif';
import { loadClinicalLab } from '../../actions/patient';
import ModalClinicalLab from './../../components/Modals/ModalClinicalLab';

const { RangePicker } = DatePicker;

const status = [{ label: 'All' }, { label: 'Filled' }, { label: 'Completed' }];

class AllRequest extends Component {
	state = {
		filtering: false,
		loading: false,
		id: null,
		startDate: '',
		endDate: '',
		status: '',
		showModal: false,
		activeRequest: null,
		loaded: false,
	};

	componentDidMount() {
		this.fetchClinicalLab(() => {
			this.setState({ loading: false, filtering: false });
		});
	}
	fetchClinicalLab = async cb => {
		const { startDate, endDate, status } = this.state;
		try {
			this.setState({ loading: true });
			// `${patientAPI}/requests/lab?startDate=${startDate}&endDate=${endDate}&status=${status}&filled=true`,
			const rs = await request(
				`${patientAPI}/requests/lab?startDate=${startDate}&endDate=${endDate}&status=${status}`,
				'GET',
				true
			);

			// const filterResponse = () => {
			// 	const res = rs.map(lab => {
			// 		const filtered = lab.requestBody.groups.filter(group => {
			// 			const filt = group.parameters.some(param => param.result === '');
			// 			return filt;
			// 		});
			// 		return filtered && filtered.length ? lab : [];
			// 	});
			// 	return res && res.length ? res : null;
			// };
			// const newResp = filterResponse().filter(fil => fil.length !== 0);

			this.props.loadClinicalLab(rs);
			cb();
		} catch (error) {
			console.log(error);
			notifyError('Error fetching all lab request');
			cb();
		}
	};

	doFilter = e => {
		if (e) e.preventDefault();

		this.setState({ filtering: true });

		this.fetchClinicalLab(() =>
			this.setState({ filtering: false, loading: false })
		);
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

	onModalClick = () => {
		this.setState({
			showModal: !this.state.showModal,
		});
	};

	onDeleteTransaction = data => {
		this.props
			.deleteTransaction(data)
			.then(response => {
				notifySuccess('Transaction deleted');
			})
			.catch(error => {
				notifyError('Error deleting  transaction ');
			});
	};

	confirmDelete = data => {
		confirmAction(this.onDeleteTransaction, data);
	};

	render() {
		const { filtering, loading, activeRequest, showModal } = this.state;
		const { clinicalLab } = this.props;

		return (
			<>
				<div className="element-box m-0 mb-4 p-3">
					<form className="row">
						<div className="form-group col-md-6">
							<label>From - To</label>
							<RangePicker onChange={e => this.dateChange(e)} />
						</div>
						<div className="form-group col-md-3">
							<label className="mr-2 " htmlFor="id">
								Status
							</label>
							<select
								style={{ height: '32px' }}
								id="status"
								className="form-control"
								name="status"
								onChange={e => this.change(e)}>
								{status.map((status, i) => {
									return (
										<option key={i} value={status.label}>
											{status.label}
										</option>
									);
								})}
							</select>
						</div>
						<div className="form-group col-md-3 mt-4">
							<div
								className="btn btn-sm btn-primary btn-upper text-white filter-btn"
								onClick={this.doFilter}>
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
				<div className="element-box p-3 m-0">
					<div className="table-responsive">
						{loading ? (
							<table>
								<tbody>
									<tr>
										<td className="text-center">
											<img alt="searching" src={searchingGIF} />
										</td>
									</tr>
								</tbody>
							</table>
						) : (
							<table className="table table-striped">
								<thead>
									<tr>
										<th>
											<div className="th-inner "></div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner sortable both">S/N</div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner sortable both">Request Date</div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner sortable both">Patient Name</div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner sortable both">Request By</div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner sortable both">
												Approval Status
											</div>
											<div className="fht-cell"></div>
										</th>
										<th>
											<div className="th-inner "></div>
											<div className="fht-cell"></div>
										</th>
									</tr>
								</thead>
								<tbody>
									{clinicalLab.reverse().map((lab, index) => {
										return (
											<ClinicalLabItem
												key={lab.id}
												lab={lab}
												index={index}
												modalClick={data => {
													this.onModalClick();
													this.setState({ activeRequest: data });
												}}
												refresh={e => this.doFilter(e)}
											/>
										);
									})}
								</tbody>
							</table>
						)}
						{!isEmpty(clinicalLab) ? null : (
							<div className="text-center">No lab request found!</div>
						)}
					</div>
				</div>
				{activeRequest && (
					<ModalClinicalLab
						activeRequest={activeRequest}
						showModal={showModal}
						onModalClick={this.onModalClick}
					/>
				)}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		clinicalLab: state.patient.clinicalLab,
	};
};

export default connect(mapStateToProps, { loadClinicalLab })(AllRequest);
