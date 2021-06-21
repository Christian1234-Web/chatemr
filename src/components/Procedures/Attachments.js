/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Pagination from 'antd/lib/pagination';

import TableLoading from '../TableLoading';
import { itemRender } from '../../services/utilities';
import { paginate } from '../../services/constants';

const Attachments = () => {
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [meta, setMeta] = useState({ ...paginate });

	const onNavigatePage = () => {};

	return (
		<div className="col-sm-12">
			<div className="element-wrapper">
				<div className="element-actions flex-action">
					<a className="btn btn-sm btn-secondary text-white ml-3">
						New Attachment
					</a>
				</div>
				<h6 className="element-header">Attachments</h6>
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
											<div>File</div>
										</th>
										<th>
											<div>Uploaded By</div>
										</th>
										<th></th>
									</tr>
								</thead>
								<tbody></tbody>
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
		</div>
	);
};

export default Attachments;
