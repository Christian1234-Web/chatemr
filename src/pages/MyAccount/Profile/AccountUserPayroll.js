import React from 'react';

const AccountUserPayroll = ({ staff }) => {
	return (
		<>
			<div className="element-box shadow-sm rounded p-4 mb-4">
				<h6 className="element-header">My Payroll</h6>

				<div className="element-box-tp">
					<div className="controls-above-table"></div>
					<div className="table-responsive">
						<table className="table table-bordered table-sm table-v2 table-striped">
							<thead>
								<tr>
									<th className="text-center">
										<input className="form-control" type="checkbox" />
									</th>
									<th>Customer Name</th>
									<th>Country</th>
									<th>Order Total</th>
									<th>Referral</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">
										<input className="form-control" type="checkbox" />
									</td>
									<td>John Mayers</td>
									<td>
										<img alt="" src="img/flags-icons/us.png" width="25px" />
									</td>
									<td className="text-right">$245</td>
									<td>Organic</td>
									<td className="text-center">
										<div
											className="status-pill green"
											data-title="Complete"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										></div>
									</td>
									<td className="row-actions">
										<a href="#">
											<i className="os-icon os-icon-ui-49"></i>
										</a>
										<a href="#">
											<i className="os-icon os-icon-grid-10"></i>
										</a>
										<a className="danger" href="#">
											<i className="os-icon os-icon-ui-15"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td className="text-center">
										<input className="form-control" type="checkbox" />
									</td>
									<td>Mike Astone</td>
									<td>
										<img alt="" src="img/flags-icons/fr.png" width="25px" />
									</td>
									<td className="text-right">$154</td>
									<td>Organic</td>
									<td className="text-center">
										<div
											className="status-pill red"
											data-title="Cancelled"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										></div>
									</td>
									<td className="row-actions">
										<a href="#">
											<i className="os-icon os-icon-ui-49"></i>
										</a>
										<a href="#">
											<i className="os-icon os-icon-grid-10"></i>
										</a>
										<a className="danger" href="#">
											<i className="os-icon os-icon-ui-15"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td className="text-center">
										<input className="form-control" type="checkbox" />
									</td>
									<td>Kira Knight</td>
									<td>
										<img alt="" src="img/flags-icons/us.png" width="25px" />
									</td>
									<td className="text-right">$23</td>
									<td>Adwords</td>
									<td className="text-center">
										<div
											className="status-pill green"
											data-title="Complete"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										></div>
									</td>
									<td className="row-actions">
										<a href="#">
											<i className="os-icon os-icon-ui-49"></i>
										</a>
										<a href="#">
											<i className="os-icon os-icon-grid-10"></i>
										</a>
										<a className="danger" href="#">
											<i className="os-icon os-icon-ui-15"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td className="text-center">
										<input className="form-control" type="checkbox" />
									</td>
									<td>Jessica Bloom</td>
									<td>
										<img alt="" src="img/flags-icons/ca.png" width="25px" />
									</td>
									<td className="text-right">$112</td>
									<td>Organic</td>
									<td className="text-center">
										<div
											className="status-pill green"
											data-title="Complete"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										></div>
									</td>
									<td className="row-actions">
										<a href="#">
											<i className="os-icon os-icon-ui-49"></i>
										</a>
										<a href="#">
											<i className="os-icon os-icon-grid-10"></i>
										</a>
										<a className="danger" href="#">
											<i className="os-icon os-icon-ui-15"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td className="text-center">
										<input className="form-control" type="checkbox" />
									</td>
									<td>Gary Lineker</td>
									<td>
										<img alt="" src="img/flags-icons/ca.png" width="25px" />
									</td>
									<td className="text-right">$64</td>
									<td>Organic</td>
									<td className="text-center">
										<div
											className="status-pill yellow"
											data-title="Pending"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										></div>
									</td>
									<td className="row-actions">
										<a href="#">
											<i className="os-icon os-icon-ui-49"></i>
										</a>
										<a href="#">
											<i className="os-icon os-icon-grid-10"></i>
										</a>
										<a className="danger" href="#">
											<i className="os-icon os-icon-ui-15"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="controls-below-table pt-2">
						<div className="table-records-info">Showing records 1 - 5</div>
						<div className="table-records-pages">
							<ul>
								<li>
									<a href="#">Previous</a>
								</li>
								<li>
									<a className="current" href="#">
										1
									</a>
								</li>
								<li>
									<a href="#">2</a>
								</li>
								<li>
									<a href="#">3</a>
								</li>
								<li>
									<a href="#">4</a>
								</li>
								<li>
									<a href="#">Next</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountUserPayroll;
