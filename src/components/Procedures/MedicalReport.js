/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'antd/lib/pagination';

import TableLoading from '../TableLoading';
import { request, itemRender, formatDateStr } from '../../services/utilities';
import { notifyError } from '../../services/notify';
import { startBlock, stopBlock } from '../../actions/redux-block';
import CreateNote from '../Modals/CreateNote';
import { fullname } from '../../services/utilities';

const MedicalReport = () => {
	const [loading, setLoading] = useState(true);
	const [notes, setNotes] = useState([]);
	const [meta, setMeta] = useState({
		currentPage: 1,
		itemsPerPage: 10,
		totalPages: 0,
	});
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();

	const patient = useSelector(state => state.user.patient);
	const procedure = useSelector(state => state.user.item);

	const fetchNotes = useCallback(
		async page => {
			try {
				dispatch(startBlock());
				const p = page || 1;
				const url = `patient-notes?patient_id=${patient.id}&page=${p}&limit=10&type=procedure-medical-report&id=${procedure.id}`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				setNotes(result);
				setMeta(meta);
				dispatch(stopBlock());
			} catch (error) {
				console.log(error);
				dispatch(stopBlock());
				notifyError('error fetching report');
			}
		},
		[dispatch, patient.id, procedure]
	);

	useEffect(() => {
		if (loading) {
			fetchNotes();
			setLoading(false);
		}
	}, [fetchNotes, loading]);

	const onNavigatePage = nextPage => {
		fetchNotes(nextPage);
	};

	const newEntry = () => {
		document.body.classList.add('modal-open');
		setShowModal(true);
	};

	const closeModal = () => {
		document.body.classList.remove('modal-open');
		setShowModal(false);
	};

	const updateNote = item => {
		setNotes([item, ...notes]);
		setMeta({
			currentPage: 1,
			itemsPerPage: 10,
			totalPages: notes.length + 1,
		});
	};

	return (
		<div className="col-sm-12">
			<div className="element-wrapper">
				<div className="element-actions flex-action">
					{procedure && !procedure.finishedDate && (
						<a
							className="btn btn-sm btn-secondary text-white ml-3"
							onClick={() => newEntry()}>
							New Note
						</a>
					)}
				</div>
				<h6 className="element-header">Medical Report</h6>
				<div className="element-box p-3 m-0">
					{loading ? (
						<TableLoading />
					) : (
						<div className="table-responsive">
							<table className="table table-theme v-middle table-hover">
								<thead>
									<tr>
										<th>
											<div>Date</div>
										</th>
										<th>
											<div>Note</div>
										</th>
										<th>
											<div>Noted By</div>
										</th>
									</tr>
								</thead>
								<tbody>
									{notes.map((item, i) => {
										return (
											<tr key={i}>
												<td nowrap="nowrap">
													{formatDateStr(item.createdAt, 'D-MMM-YYYY h:mm A')}
												</td>
												<td>
													<div
														dangerouslySetInnerHTML={{
															__html: item.description,
														}}
													/>
												</td>
												<td nowrap="nowrap">{fullname(item.staff)}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							{meta && (
								<div className="pagination pagination-center mt-4">
									<Pagination
										current={parseInt(meta.currentPage, 10)}
										pageSize={parseInt(meta.itemsPerPage, 10)}
										total={parseInt(meta.totalPages, 10)}
										showTotal={total => `Total ${total} items`}
										itemRender={itemRender}
										onChange={current => onNavigatePage(current)}
									/>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{showModal && (
				<CreateNote
					closeModal={closeModal}
					updateNote={updateNote}
					item={procedure}
					type="procedure-medical-report"
				/>
			)}
		</div>
	);
};

export default MedicalReport;
