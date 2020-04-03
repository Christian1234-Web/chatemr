/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState } from 'react';

import { API_URI, socket, transactionsAPI } from '../../services/constants';
import { request, formatNumber, confirmAction } from '../../services/utilities';

import searchingGIF from '../../assets/images/searching.gif';
import moment from 'moment';
import { connect } from 'react-redux';
import {
	loadTodayTransaction,
	deleteTransaction,
} from '../../actions/transaction';
import Tooltip from 'antd/lib/tooltip';
import { applyVoucher, approveTransaction } from '../../actions/general';
import { notifyError, notifySuccess } from '../../services/notify';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import Reading from '../Patient/Reading';

const TransactionTable = props => {
	const doApproveTransaction = item => {
		props.approveTransaction(item);
	};
	const doApplyVoucher = item => {
		props.applyVoucher(item);
	};
	const onDeleteTransaction = data => {
		props
			.deleteTransaction(data)
			.then(response => {
				notifySuccess('Transaction deleted');
			})
			.catch(error => {
				notifyError('Error deleting  transaction ');
			});
	};

	const confirmDelete = data => {
		confirmAction(onDeleteTransaction, data);
	};

	const { transactions, loading, today } = props;
	return (
		<tbody>
			{loading ? (
				<tr>
					<td colSpan="6" className="text-center">
						<img alt="searching" src={searchingGIF} />
					</td>
				</tr>
			) : transactions.length > 0 ? (
				transactions.map(transaction => {
					return (
						<tr key={transaction.q_id}>
							<td className="text-center" hidden={today}>
								{moment(transaction.q_createdAt).format('YYYY/MM/DD')}
							</td>
							<td className="">
								{`${transaction.patient?.surname} ${transaction.patient?.other_names}`}
							</td>
							<td className="">{transaction.department?.name}</td>
							<td className="">
								{transaction.q_service_id
									? transaction.q_service_id
									: 'No service yet'}
							</td>
							<td className="">{transaction.q_amount}</td>
							<td className="">
								{transaction.q_payment_type
									? transaction.q_payment_type
									: 'Not specified'}
							</td>
							<td className="text-center row-actions">
								<Tooltip title="Apply Voucher">
									<a
										className="secondary"
										onClick={() => doApplyVoucher(transaction)}>
										<i className="os-icon os-icon-thumbs-up" />
									</a>
								</Tooltip>

								<Tooltip title="Approve Transactions">
									<a
										className="secondary"
										onClick={() => doApproveTransaction(transaction)}>
										<i className="os-icon os-icon-folder-plus" />
									</a>
								</Tooltip>

								<Tooltip title="Delete Transactions">
									<a
										className="text-danger"
										onClick={() => confirmDelete(transaction)}>
										<i className="os-icon os-icon-ui-15"></i>
									</a>
								</Tooltip>
							</td>
						</tr>
					);
				})
			) : (
				<tr colSpan="6" className="text-center">
					<td>No transaction</td>
				</tr>
			)}
		</tbody>
	);
};

export default connect(null, {
	applyVoucher,
	approveTransaction,
	deleteTransaction,
})(TransactionTable);