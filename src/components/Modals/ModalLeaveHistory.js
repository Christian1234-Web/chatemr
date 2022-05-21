import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModals } from '../../actions/general';
import ModalHeader from '../ModalHeader';

class ModalLeaveHistory extends Component {
	componentDidMount() {
		document.body.classList.add('modal-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('modal-open');
	}

	render() {
		return (
			<div
				className="onboarding-modal modal fade animated show"
				role="dialog"
				style={{ display: 'block' }}
			>
				<div className="modal-dialog modal-centered">
					<div className="modal-content text-center">
						<ModalHeader
							title="Leave History"
							closeModal={() => this.props.closeModals(false)}
						/>
						<div className="onboarding-content with-gradient">
							<div className="onboarding-text">
								history of leave of absense for staff
							</div>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Type</th>
											<th>Date Left</th>
											<th>Date Returned</th>
											<th>Duration</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Maternity Leave</td>
											<td>20 Apr, 2019</td>
											<td>10 May, 2019</td>
											<td>10days</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { closeModals })(ModalLeaveHistory);
