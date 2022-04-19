/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from 'antd/lib/pagination';

import StaffItem from '../../components/StaffItem';
import StaffItemAcc from '../../components/StaffItemAcc';
import { request, getPageList, itemRender } from '../../services/utilities';
import { staffAPI } from '../../services/constants';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifyError } from '../../services/notify';
import TableLoading from '../../components/TableLoading';
import ModalCreateStaff from '../../components/Modals/ModalCreateStaff';
import ModalEditUserAccount from '../../components/Modals/ModalEditUserAccount';
import waiting from '../../assets/images/waiting.gif';

const pageLimit = 24;

const Staff = () => {
	const [loaded, setLoaded] = useState(false);
	const [meta, setMeta] = useState({
		currentPage: 1,
		itemsPerPage: getPageList,
		totalPages: 0,
	});
	const [staffs, setStaffs] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showAccountModal, setShowAccountModal] = useState(false);
	const [staff, setStaff] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [status, setStatus] = useState('');
	const [filtering, setFiltering] = useState(false);
	const [hidden, setHidden] = useState(true);
	const [disable, setDisable] = useState(true);

	const dispatch = useDispatch();

	const fetchStaffs = useCallback(
		async page => {
			try {
				dispatch(startBlock());
				const p = page || 1;
				const url = `${staffAPI}?page=${p}&limit=${pageLimit}&q=${searchValue}&status=${status}`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				setMeta(meta);
				window.scrollTo({ top: 0, behavior: 'smooth' });
				setStaffs(result);
				setLoaded(true);
				setFiltering(false);
				dispatch(stopBlock());
			} catch (error) {
				notifyError('error fetching staffs');
				setLoaded(true);
				setFiltering(false);
				dispatch(stopBlock());
			}
		},
		[dispatch, searchValue, status]
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
		setShowAccountModal(false);
		setStaff(null);
		setDisable(true);
		document.body.classList.remove('modal-open');
	};

	const updateStaffs = staffs => {
		setStaffs(staffs);
	};

	const doFilter = async () => {
		setFiltering(true);
		await fetchStaffs(1);
	};

	console.log('disable testing', disable);

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-12">
						<div className="element-wrapper">
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
														<th>Department</th>
														<th>Gross Monthly</th>
														<th>Gross</th>
														<th className="text-center">Status</th>
														<th className="text-right">Actions</th>
													</tr>
												</thead>
												<tbody>
													<StaffItemAcc
														staffs={staffs}
														updateStaffs={updateStaffs}
														editStaff={(staff, isAccount) => {
															setStaff(staff);
															setHidden(true);
															console.log('Love from above');
															setDisable(false);
															document.body.classList.add('modal-open');
															if (isAccount) {
																setShowAccountModal(true);
															} else {
																setShowModal(true);
															}
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
														showSizeChanger={false}
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
					hidden={hidden}
					disable={disable}
					updateStaffs={updateStaffs}
					closeModal={() => closeModal()}
				/>
			)}
			{showAccountModal && (
				<ModalEditUserAccount
					staff={staff}
					staffs={staffs}
					updateStaffs={updateStaffs}
					closeModal={() => closeModal()}
				/>
			)}
		</div>
	);
};

export default Staff;
