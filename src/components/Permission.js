import React, { useEffect, useState } from 'react';
import Pagination from 'antd/lib/pagination';

import TableLoading from './TableLoading';
import { getPageList, itemRender } from '../services/utilities';
import CreatePermission from './CreatePermission';

const itemsPerPage = 10;

const Permission = ({ loaded, permissions, setPermissions }) => {
	const [meta, setMeta] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [list, setList] = useState([]);

	useEffect(() => {
		if (!meta) {
			setMeta({ currentPage: 1, itemsPerPage, totalPages: permissions.length });
			const items = getPageList(permissions, itemsPerPage, 1);
			setList(items);
		}
	}, [meta, permissions]);

	const onNavigatePage = page => {
		setCurrentPage(page);
		const items = getPageList(
			permissions,
			meta.itemsPerPage,
			parseInt(page, 10)
		);
		setList(items);
		setMeta({ ...meta, currentPage: page });
	};

	const setDataList = item => {
		const permissionsList = [item, ...permissions];
		const items = getPageList(permissionsList, meta.itemsPerPage, currentPage);
		setList(items);
		setMeta({ ...meta, currentPage, totalPages: permissionsList.length });
		setPermissions(permissionsList);
	};

	return (
		<div className="row">
			<div className="col-lg-8">
				<div className="element-wrapper">
					<div className="element-box p-3 m-0">
						<div className="table-responsive">
							{!loaded ? (
								<TableLoading />
							) : (
								<table className="table table-striped">
									<thead>
										<tr>
											<th>S/N</th>
											<th>Name</th>
											<th>Department</th>
										</tr>
									</thead>
									<tbody>
										{list.map((item, i) => {
											return (
												<tr key={i}>
													<td>{item.id}</td>
													<td>{item.slug}</td>
													<td>{item.category?.name || '--'}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							)}
						</div>
						{meta && loaded && (
							<div className="pagination pagination-center mt-4">
								<Pagination
									current={parseInt(currentPage, 10)}
									pageSize={parseInt(meta.itemsPerPage, 10)}
									total={parseInt(meta.totalPages, 10)}
									showTotal={total => `Total ${total} permissions`}
									itemRender={itemRender}
									onChange={current => onNavigatePage(current)}
									showSizeChanger={false}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<CreatePermission permissions={permissions} setDataList={setDataList} />
			</div>
		</div>
	);
};

export default Permission;
