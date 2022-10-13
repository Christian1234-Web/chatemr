import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from 'antd/lib/pagination';

import TableLoading from '../TableLoading';
import { request, itemRender, formatDate } from '../../services/utilities';
import { notifyError } from '../../services/notify';
import { startBlock, stopBlock } from '../../actions/redux-block';
import RequestService from '../Modals/RequestService';

const NursingService = ({ itemId, module, patient }) => {
	const [loading, setLoading] = useState(true);
	const [services, setServices] = useState([]);
	const [meta, setMeta] = useState({
		currentPage: 1,
		itemsPerPage: 10,
		totalPages: 0,
	});
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();

	const fetchServices = useCallback(
		async page => {
			try {
				dispatch(startBlock());
				const p = page || 1;
				const url = `requests/${patient.id}/request/nursing-service?page=${p}&limit=10&item_id=${itemId}&type=${module}`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				setServices(result);
				setMeta(meta);
				dispatch(stopBlock());
			} catch (error) {
				console.log(error);
				dispatch(stopBlock());
				notifyError('error fetching nursing service');
			}
		},
		[dispatch, itemId, module, patient]
	);

	useEffect(() => {
		if (loading) {
			fetchServices();
			setLoading(false);
		}
	}, [fetchServices, loading]);

	const onNavigatePage = nextPage => {
		fetchServices(nextPage);
	};

	const newRequest = () => {
		document.body.classList.add('modal-open');
		setShowModal(true);
	};

	const closeModal = () => {
		document.body.classList.remove('modal-open');
		setShowModal(false);
	};

	const refresh = () => {
		fetchServices();
	};

	return (
		<div className="col-sm-12">
			<div className="element-wrapper">
				<div className="element-actions flex-action">
					{/* {can_request && (
						<a
							className="btn btn-sm btn-secondary text-white"
							onClick={() => newRequest()}
						>
							Add a Nursing Service
						</a>
					)} */}
					{
						<a
							className="btn btn-sm btn-secondary text-white"
							onClick={() => newRequest()}
						>
							Add a Nursing Service
						</a>
					}
				</div>
				<h6 className="element-header">Nursing Service</h6>
				<div className="element-box p-3 m-0">
					{loading ? (
						<TableLoading />
					) : (
						<div className="table-responsive">
							<table className="table table-theme v-middle table-hover">
								<thead>
									<tr>
										<th>Date</th>
										<th>Task</th>
										<th nowrap="nowrap">By</th>
									</tr>
								</thead>
								<tbody>
									{services.map((item, i) => {
										return (
											<tr key={i}>
												<td nowrap="nowrap">
													{formatDate(item.createdAt, 'D-MMM-YYYY h:mm A')}
												</td>
												<td>{item.item.service.item.name}</td>
												<td nowrap="nowrap">{item.createdBy}</td>
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
										showSizeChanger={false}
									/>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{showModal && (
				<RequestService
					closeModal={closeModal}
					refresh={refresh}
					module={module}
					itemId={itemId}
					patient={patient}
				/>
			)}
		</div>
	);
};

export default NursingService;
