/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from 'antd/lib/pagination';

import StaffItem from '../../components/StaffItem';
import { request, getPageList, itemRender } from '../../services/utilities';
import { staffAPI } from '../../services/constants';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifyError } from '../../services/notify';
import TableLoading from '../../components/TableLoading';
import ModalCreateStaff from '../../components/Modals/ModalCreateStaff';

const pageLimit = 24;

const StaffList = () => {
	const [loaded, setLoaded] = useState(false);
	const [meta, setMeta] = useState({
		currentPage: 1,
		itemsPerPage: getPageList,
		totalPages: 0,
	});
	const [staffs, setStaffs] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [staff, setStaff] = useState(null);

	const dispatch = useDispatch();

	const fetchStaffs = useCallback(
		async (page, q) => {
			try {
				dispatch(startBlock());
				const p = page || 1;
				const url = `${staffAPI}?page=${p}&limit=${pageLimit}&q=${q || ''}`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				setMeta(meta);
				window.scrollTo({ top: 0, behavior: 'smooth' });
				setStaffs(result);
				setLoaded(true);
				dispatch(stopBlock());
			} catch (error) {
				notifyError('error fetching staffs');
				setLoaded(true);
				dispatch(stopBlock());
			}
		},
		[dispatch]
	);

	useEffect(() => {
		if (!loaded) {
			fetchStaffs();
		}
	}, [fetchStaffs, loaded]);

	const onNavigatePage = async nextPage => {
		await fetchStaffs(nextPage);
	};

	const doCreateStaff = () => {
		document.body.classList.add('modal-open');
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setStaff(null);
		document.body.classList.remove('modal-open');
	};

	const updateStaffs = staffs => {
		setStaffs(staffs);
	};

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-12">
						<div className="element-wrapper">
							<div className="element-actions">
								<a
									className="btn btn-primary btn-sm text-white"
									onClick={() => doCreateStaff()}>
									<i className="os-icon os-icon-ui-22" />
									<span>Create New Staff</span>
								</a>
							</div>
							<h6 className="element-header">Staff List</h6>
							<div className="element-box p-3 m-0">
								<div className="table-responsive">
									{!loaded ? (
										<TableLoading />
									) : (
										<>
											<table className="table table-striped">
												<thead>
													<tr>
														<th></th>
														<th>Name</th>
														<th>Role</th>
														<th>Phone</th>
														<th>Department</th>
														<th className="text-center">Status</th>
														<th className="text-right">Actions</th>
													</tr>
												</thead>
												<tbody>
													<StaffItem
														staffs={staffs}
														updateStaffs={updateStaffs}
														editStaff={staff => {
															setStaff(staff);
															document.body.classList.add('modal-open');
															setShowModal(true);
														}}
													/>
												</tbody>
											</table>
											{meta && (
												<div className="pagination pagination-center mt-4">
													<Pagination
														current={parseInt(meta.currentPage, 10)}
														pageSize={parseInt(meta.itemsPerPage, 10)}
														total={parseInt(meta.totalPages, 10)}
														showTotal={total => `Total ${total} staffs`}
														itemRender={itemRender}
														onChange={current => onNavigatePage(current)}
													/>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<ModalCreateStaff
					staff={staff}
					staffs={staffs}
					updateStaffs={updateStaffs}
					closeModal={() => closeModal()}
				/>
			)}
		</div>
	);
};

export default StaffList;
