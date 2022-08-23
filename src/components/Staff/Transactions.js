import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { notifyError } from '../../services/notify';
import { itemRender, request } from '../../services/utilities';
import Pagination from 'antd/lib/pagination';
import { paginate } from '../../services/constants';

const Transactions = () => {
	const [transactions, setTransactions] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [debt, setDebt] = useState(0);
	const [meta, setMeta] = useState({ ...paginate });

	const profile = useSelector(state => state.user.profile);

	const fetchTransactions = useCallback(
		async page => {
			try {
				const p = page || 1;
				const url = `transactions/staff?staff_id=${profile.id}&page=${p}&limit=50`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				setFetching(false);
				console.log('Malik', result);
				setTransactions(result);
				setMeta(meta);
				setDebt(Math.abs(rs.totalPurchase) - Math.abs(rs.totalAmountPaid));
			} catch (error) {
				console.log(error);
				setFetching(false);
				notifyError('Error fetching transaction request');
			}
		},
		[profile]
	);

	useEffect(() => {
		if (fetching) {
			fetchTransactions();
		}
	}, [fetchTransactions, fetching]);

	const onNavigatePage = async nextPage => {
		await fetchTransactions(nextPage);
	};

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
								{transactions &&
									transactions?.map(transaction => (
										<tr>
											<td>{transaction.bill_source}</td>
											<td>
												{transaction?.transaction_details
													?.map(t => `${t.name} (${t?.qty || 1})`)
													.join(', ') || '-'}
											</td>
											<td>
												{moment(transaction.createdAt).format('DD-MM-YYYY')}
											</td>

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
											<td class="text-right">
												{' '}
												{`${transaction.amount_paid}`}
											</td>
											<td class="text-right">
												{`${transaction.amount + transaction.amount_paid}`}
											</td>
										</tr>
									))}
							</tbody>
						</table>
						<div>Total Debt: ₦{debt}</div>
						{meta && (
							<div className="pagination pagination-center mt-4">
								<Pagination
									current={parseInt(meta.currentPage, 10)}
									pageSize={parseInt(meta.itemsPerPage, 10)}
									total={parseInt(meta.lastPage, 10)}
									showTotal={total => `Total ${total} items`}
									itemRender={itemRender}
									onChange={current => onNavigatePage(current)}
									showSizeChanger={false}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
