import Pagination from 'antd/lib/pagination';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { itemRender, request, updateImmutable } from '../../services/utilities';
import TransactionItem from './TransactionItem';
import { notifyError } from '../../services/notify';

const pageSize = 10;

const Transactions = () => {
	const [transactionsItems, setTransactionsItems] = useState([]);
	const [meta, setMeta] = useState({
		currentPage: 1,
		itemsPerPage: pageSize,
		totalItems: 0,
	});

	const dispatch = useDispatch();

	const UpdateTransaction = payload => {
		const updatedList = updateImmutable(transactionsItems, payload);

		setTransactionsItems(updatedList);
	};

	const fetchTransactions = useCallback(async page => {
		try {
			dispatch(startBlock());
			const p = page || 1;
			const transactionsUrl = `transactions/qbo?isAddedToQbo=0&page=${p}&limit=${pageSize}`;
			// Fetch transactions
			const rs = await request(transactionsUrl, 'GET', true);
			const { result, ...meta } = rs;
			setTransactionsItems(result);
			setMeta(meta);
			dispatch(stopBlock());
		} catch (error) {
			notifyError('error fetching Transactions');
			dispatch(stopBlock());
		}
	}, []);

	useEffect(() => {
		fetchTransactions();
	}, []);

	const onNavigatePage = async nextPage => {
		fetchTransactions(nextPage);
	};

	console.log(meta);

	return (
		<div className="element-box m-0 p-3">
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Transaction ID</th>
							<th>bill_source</th>
							<th>Amount</th>
							<th>Date Created</th>
							<th className="text-right">Actions</th>
						</tr>
					</thead>
					<tbody>
						{transactionsItems.map((item, i) => {
							return (
								<TransactionItem
									key={i}
									index={i + 1}
									item={item}
									updateTransaction={UpdateTransaction}
								/>
							);
						})}
						{transactionsItems.length === 0 && (
							<tr>
								<td colSpan="10" className="text-center">
									No Transactions found!
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			{meta && (
				<div className="pagination pagination-center mt-4">
					<Pagination
						current={meta.currentPage}
						pageSize={meta.itemsPerPage}
						total={meta.totalItems}
						showTotal={total => `Total ${total} transactions`}
						itemRender={itemRender}
						onChange={current => onNavigatePage(current)}
						showSizeChanger={false}
					/>
				</div>
			)}
		</div>
	);
};

export default Transactions;
