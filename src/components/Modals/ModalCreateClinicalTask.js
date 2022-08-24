import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { closeModals } from '../../actions/general';
import { allVitalItems } from '../../services/constants';
import ModalHeader from '../ModalHeader';
import VitalForm from '../Patient/VitalForm';

export class ModalCreateClinicalTask extends Component {
	componentDidMount() {
		document.body.classList.add('modal-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('modal-open');
	}

	onChange(checkedValues) {
		console.log('checked = ', checkedValues);
	}
	render() {
		const { location } = this.props;
		const hash = location.hash.substr(1).split('#');
		const type =
			hash.length > 1 ? hash[1].split('%20').join(' ') : 'Blood Pressure';

		console.log(type);
		return (
			<div
				className="onboarding-modal modal fade animated show"
				role="dialog"
				style={{ display: 'block' }}
			>
				<div className="modal-dialog modal-lg modal-centered">
					<div className="modal-content">
						<ModalHeader
							title="Clinical Task"
							closeModal={() => this.props.closeModals(false)}
						/>
						<div className="onboarding-content with-gradient">
							<div className="col-md-12">
								<div className="element-wrapper">
									<div className="element-box-tp mb-3">
										<div className="el-buttons-list">
											{allVitalItems
												.filter(v => {
													const item = v.category.find(c => c === 'general');
													return item && item === 'general';
												})
												.map((vital, i) => (
													<Link
														className="btn btn-white btn-sm mr-2  text-center"
														to={`${location.pathname}#start-admission#${vital}`}
														key={i}
													>
														<i className="os-icon os-icon-delivery-box-2" />
														<span>{vital}</span>
													</Link>
												))}
										</div>
									</div>
									<h6 className="element-header text-center">{type}</h6>
									<div className="element-box">
										<VitalForm type={type} />
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

export default withRouter(
	connect(null, { closeModals })(ModalCreateClinicalTask)
);
