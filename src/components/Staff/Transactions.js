import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { notifyError } from '../../services/notify';
import { request } from '../../services/utilities';

const Transactions = () => {
	const [transactions, setTransactions] = useState([]);

	const profile = useSelector(state => state.user.profile);

	useEffect(() => {
		fetchTransactions();
	}, [transactions.length]);

	const fetchTransactions = async page => {
		try {
			const p = page || 1;
			const url = `hr/staffs/transactions?staffid=${profile.id}`;
			const rs = await request(url, 'GET', true);
			// const { result, ...meta } = rs;
			setTransactions(rs.transactions);
		} catch (error) {
			console.log(error);
			notifyError('Error fetching transaction request');
		}
	};

	// console.log('result', transactions)

	return (
		<div className="col-sm-12">
			<div className="element-wrapper">
				<div className="element-box p-3 m-0">
					<div class="table-responsive">
						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Category</th>
									<th>Item</th>
									<th>Date</th>
									<th class="text-center">Status</th>
									<th class="text-right">Amount Paid</th>
									<th class="text-right">Balance</th>
								</tr>
							</thead>
							<tbody>
								{transactions.map(transaction => (
									<tr>
										<td>{transaction.billSource}</td>
										<td>
											{transaction.details[0]?.name}
											<span className="smaller lighter">
												{' '}
												₦
												{transaction.details[0]?.staff_price
													? transaction.details[0]?.staff_price
													: transaction.details[0]?.price}
											</span>
										</td>
										<td>{moment(transaction.dateTime).format('DD-MM-YYYY')}</td>

										<td class="text-center">
											<div
												class={`status-pill ${
													transaction.status === 1 ? 'green' : 'red'
												}`}
												data-title="Complete"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											></div>
										</td>
										<td class="text-right"> {`${transaction.amountPaid}`}</td>
										<td class="text-right">
											{' '}
											{`${transaction.amount + transaction.amountPaid}`}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
