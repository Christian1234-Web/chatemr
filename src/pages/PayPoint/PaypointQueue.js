import React, { useEffect, useState, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Pagination from 'antd/lib/pagination';
import waiting from '../../assets/images/waiting.gif';
import DatePicker from 'antd/lib/date-picker';
import AsyncSelect from 'react-select/async/dist/react-select.esm';
import { searchAPI } from '../../services/constants';
import TransactionTable from '../../components/Tables/TransactionTable';
import { socket } from '../../services/constants';
import { request, itemRender } from '../../services/utilities';
import { Popover, Overlay } from 'react-bootstrap';
import Reciept from './../../components/Invoice/Reciept';
import Invoice from './../../components/Invoice/Invoice';
import {
	getAllPendingTransactions,
	showInvoiceToPrint,
	showReceiptToPrint,
} from './../../actions/paypoint';
import PrintReceiptPortal from './PrintReceiptPortal';
import { notifyError } from '../../services/notify';
import { startBlock, stopBlock } from '../../actions/redux-block';

const { RangePicker } = DatePicker;
const PaypointQueue = ({ staff }) => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const [listenning, setListenning] = useState(false);
	const [filtering, setFiltering] = useState(false);
	const [patient, setPatient] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [currentPage, setCurrentPage] = useState(null);
	const [meta, setMeta] = useState(null);
	const ref = useRef(null);

	const dispatch = useDispatch();

	const transactions = useSelector(
		({ paypoint }) => paypoint.pendingTransactions
	);
	const activeData = useSelector(({ paypoint }) => paypoint.transactionData);
	const showInvoice = useSelector(({ paypoint }) => paypoint.showInvoice);
	const showReceipt = useSelector(({ paypoint }) => paypoint.showReceipt);

	const getOptionValues = option => option.id;
	const getOptionLabels = option => `${option.other_names} ${option.surname}`;

	const getOptions = async q => {
		if (!q || q.length < 3) {
			return [];
		}

		const url = `${searchAPI}?q=${q}`;
		const res = await request(url, 'GET', true);
		return res;
	};

	const init = async page => {
		try {
			const p = page || 1;
			setCurrentPage(p);
			const url = `transactions/list/pending?page=${p}&limit=24&patient_id=${patient ||
				''}&startDate=${startDate}&endDate=${endDate}`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			console.log(rs);
			setMeta(meta);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			const arr = [...result];
			dispatch(getAllPendingTransactions(arr));
			setFiltering(false);
			dispatch(stopBlock());
		} catch (e) {
			dispatch(stopBlock());
			notifyError(e.message || 'could not fetch transactions');
			setFiltering(false);
		}
	};

	const onNavigatePage = nextPage => {
		dispatch(startBlock());
		init(nextPage);
	};

	const dateChange = e => {
		let date = e.map(d => {
			return moment(d._d).format('YYYY-MM-DD');
		});

		setStartDate(date[0]);
		setEndDate(date[1]);
	};

	useEffect(() => {
		if (!listenning || patient === '') {
			// fetch transactions
			init();

			// listen for new transactions
			setListenning(true);

			socket.on('paypoint-queue', data => {
				if (data.payment) {
					console.log(data.payment);
					const transaction = data.payment;
					const arr = [transaction, ...transactions];
					console.log(arr);
					dispatch(getAllPendingTransactions(arr));
				}
			});
		}
	}, [dispatch, listenning, patient]);

	const doApproveTransaction = item => {
		this.props.approveTransaction(item);
	};

	const doApplyVoucher = item => {
		this.props.applyVoucher(item);
	};

	const handlePrintClick = (event, data) => {
		setShow(!show);
		setTarget(event.target);
	};

	const onPrintReceipt = () => {
		dispatch(showReceiptToPrint(!showReceipt));
	};

	const onPrintInvoice = () => {
		dispatch(showInvoiceToPrint(!showInvoice));
	};

	const doFilter = e => {
		e.preventDefault();
		setFiltering(true);
		init();
	};

	return (
		<div className="row">
			<div className="col-md-12 p-4">
				<h6 className="element-header">Filter by:</h6>

				<form className="row">
					<div className="form-group col-md-3">
						<label htmlFor="patient_id">Patient</label>

						<AsyncSelect
							isClearable
							getOptionValue={getOptionValues}
							getOptionLabel={getOptionLabels}
							defaultOptions
							name="patient_id"
							id="patient_id"
							loadOptions={getOptions}
							onChange={e => {
								setPatient(e?.id);
							}}
							placeholder="Search patients"
						/>
					</div>
					<div className="form-group col-md-3">
						<label>From - To</label>
						<RangePicker onChange={e => dateChange(e)} />
					</div>

					<div className="form-group col-md-3 mt-4">
						<div
							className="btn btn-sm btn-primary btn-upper text-white"
							onClick={e => doFilter(e)}>
							<i className="os-icon os-icon-ui-37" />
							<span>
								{filtering ? <img src={waiting} alt="submitting" /> : 'Filter'}
							</span>
						</div>
					</div>
				</form>
			</div>

			<div className="col-sm-12">
				<div className="table-responsive">
					{activeData && showReceipt && (
						<PrintReceiptPortal>
							<Reciept data={activeData} />
						</PrintReceiptPortal>
					)}
					{activeData && showInvoice && (
						<PrintReceiptPortal>
							<Invoice data={activeData} />
						</PrintReceiptPortal>
					)}
					<Overlay
						show={show}
						target={target}
						placement="left"
						container={ref.current}>
						<Popover id="print" style={{ width: '10rem' }}>
							<Popover.Title>Print</Popover.Title>
							<div action>
								<button
									onClick={onPrintInvoice}
									style={{
										border: 'none',
										background: '#fff',
										width: '100%',
										textAlign: 'center',
										paddingTop: '0.5rem',
										paddingBottom: '0.5rem',
									}}>
									INVOICE
								</button>
							</div>
							<div action>
								<button
									onClick={onPrintReceipt}
									style={{
										border: 'none',
										background: '#fff',
										width: '100%',
										textAlign: 'center',
										paddingTop: '0.5rem',
										paddingBottom: '0.5rem',
									}}>
									RECEIPT
								</button>
							</div>
						</Popover>
					</Overlay>
					{transactions && (
						<TransactionTable
							transactions={transactions}
							loading={false}
							queue={true}
							showActionBtns={true}
							approveTransaction={doApproveTransaction}
							doApplyVoucher={doApplyVoucher}
							handlePrint={handlePrintClick}
						/>
					)}
				</div>
				{meta && (
					<div className="pagination pagination-center mt-4">
						<Pagination
							current={parseInt(meta.currentPage, 10)}
							pageSize={parseInt(meta.itemsPerPage, 10)}
							total={parseInt(meta.totalPages, 10)}
							showTotal={total => `Total ${total} transactions`}
							itemRender={itemRender}
							onChange={current => onNavigatePage(current)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStatetoProps = state => {
	return {
		staff: state.user.profile,
	};
};

export default withRouter(connect(mapStatetoProps)(PaypointQueue));
