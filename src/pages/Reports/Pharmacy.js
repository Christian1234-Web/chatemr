import React from 'react';

const Pharmacy = () => {
	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-3 col-xxxl-3">
						<a className="element-box el-tablo" href="#">
							<div className="label">TOTAL DRUG SALES</div>
							<div className="value">5,700,000</div>
							<div className="trending trending-up-basic">
								<span>12%</span>
								<i className="os-icon os-icon-arrow-up2"></i>
							</div>
						</a>
					</div>
					<div className="col-sm-3 col-xxxl-3">
						<a className="element-box el-tablo" href="#">
							<div className="label">TOTAL REQUESTS</div>
							<div className="value">#457</div>
							<div className="trending trending-down-basic">
								<span>12%</span>
								<i className="os-icon os-icon-arrow-down"></i>
							</div>
						</a>
					</div>
					<div className="col-sm-3 col-xxxl-3">
						<a className="element-box el-tablo" href="#">
							<div className="label">AVERAGE RESPONSE TIME</div>
							<div className="value">3 MINS</div>
							<div className="trending trending-down-basic">
								<span>PER REQUEST</span>
								<i className="os-icon os-icon-arrow-down"></i>
							</div>
						</a>
					</div>
					<div className="col-sm-3 col-xxxl-3">
						<a className="element-box el-tablo" href="#">
							<div className="label">PENDING REQUESTS</div>
							<div className="value">125</div>
							<div className="trending trending-down-basic">
								<span>THIS MONTH</span>
								<i className="os-icon os-icon-arrow-down"></i>
							</div>
						</a>
					</div>
					<div className="d-none d-xxxl-block col-xxxl-3">
						<a className="element-box el-tablo" href="#">
							<div className="label">Refunds Processed</div>
							<div className="value">$294</div>
							<div className="trending trending-up-basic">
								<span>12%</span>
								<i className="os-icon os-icon-arrow-up2"></i>
							</div>
						</a>
					</div>
				</div>
				<div className="os-tabs-w mx-4">
					<div className="os-tabs-controls">
						<ul className="nav nav-tabs upper">
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link"
									data-toggle="tab"
									href="#tab_overview"
								>
									OVERVIEW
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link active"
									data-toggle="tab"
									href="#tab_sales"
								>
									SALES
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link"
									data-toggle="tab"
									href="#tab_sales"
								>
									STAFF
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="true"
									className="nav-link"
									data-toggle="tab"
									href="#tab_sales"
								>
									INVENTORY
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-4 col-lg-3 col-xxl-3">
						<div className="element-wrapper">
							<div className="element-wrapper compact pt-4">
								<div className="element-wrapper compact">
									<h6 className="element-header">Transactions</h6>
									<div className="">
										<table className="table table-clean">
											<tbody>
												<tr>
													<td>
														<div className="value">Amazon Store</div>
														<span className="sub-value">Books</span>
													</td>
													<td className="text-right">
														<div className="value">-$28.34</div>
														<span className="sub-value">12 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Dunkin Donuts</div>
														<span className="sub-value">
															Food &amp; Restaurants
														</span>
													</td>
													<td className="text-right">
														<div className="value">-$7.15</div>
														<span className="sub-value">10 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Refund from Sephora</div>
														<span className="sub-value">
															Health &amp; Beauty
														</span>
													</td>
													<td className="text-right">
														<div className="value text-success">$128.11</div>
														<span className="sub-value">10 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Amazon Store</div>
														<span className="sub-value">Books</span>
													</td>
													<td className="text-right">
														<div className="value">-$28.34</div>
														<span className="sub-value">12 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Dunkin Donuts</div>
														<span className="sub-value">
															Food &amp; Restaurants
														</span>
													</td>
													<td className="text-right">
														<div className="value">-$7.15</div>
														<span className="sub-value">10 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">
															Refund from Google Store
														</div>
														<span className="sub-value">
															Health &amp; Beauty
														</span>
													</td>
													<td className="text-right">
														<div className="value text-success">$15.23</div>
														<span className="sub-value">9 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Amazon Store</div>
														<span className="sub-value">Books</span>
													</td>
													<td className="text-right">
														<div className="value">-$28.34</div>
														<span className="sub-value">8 Feb 2018</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="value">Dunkin Donuts</div>
														<span className="sub-value">
															Food &amp; Restaurants
														</span>
													</td>
													<td className="text-right">
														<div className="value">-$7.15</div>
														<span className="sub-value">8 Feb 2018</span>
													</td>
												</tr>
											</tbody>
										</table>
										<a className="centered-load-more-link" href="#">
											<span>Load More Messages</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-8 col-lg-9 col-xl-6 col-xxl-9">
						<div className="element-box">
							<div className="element-wrapper">
								<div className="element-box-tp">
									<div className="form-desc">
										You can put a table tag inside an{' '}
										<code>.element-box-tp</code> className wrapper and add{' '}
										<code>.table</code> className to it to get something like
										this:
									</div>
									<div className="element-box-tp">
										<div className="controls-above-table">
											<div className="row">
												<div className="col-sm-6">
													<a className="btn btn-sm btn-secondary" href="#">
														Download CSV
													</a>
													<a className="btn btn-sm btn-secondary" href="#">
														Archive
													</a>
													<a className="btn btn-sm btn-danger" href="#">
														Delete
													</a>
												</div>
												<div className="col-sm-6">
													<form className="form-inline justify-content-sm-end">
														<input
															className="form-control form-control-sm rounded bright"
															placeholder="Search"
														/>
													</form>
												</div>
											</div>
										</div>
										<table className="table table-striped table-bordered">
											<thead>
												<tr>
													<th>Patient Name</th>
													<th>Patient ID</th>
													<th>Request Date</th>
													<th className="text-center">Fill Date</th>
													<th className="text-right">Drug Item</th>
													<th className="text-right">Quantity</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>John Mayers</td>
													<td>12</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/us.png"
															width="25px"
														/>
													</td>
													<td className="text-center">
														<div
															className="status-pill green"
															data-title="Complete"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														></div>
													</td>
													<td className="text-right">$354</td>
													<td className="text-right">$354</td>
												</tr>
												<tr>
													<td>Kelly Brans</td>
													<td>45</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/ca.png"
															width="25px"
														/>
													</td>
													<td className="text-center">
														<div
															className="status-pill red"
															data-title="Cancelled"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														></div>
													</td>
													<td className="text-right">$94</td>
													<td className="text-right">$94</td>
												</tr>
												<tr>
													<td>Tim Howard</td>
													<td>112</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/uk.png"
															width="25px"
														/>
													</td>
													<td className="text-center">
														<div
															className="status-pill green"
															data-title="Complete"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														></div>
													</td>
													<td className="text-right">$156</td>
													<td className="text-right">$156</td>
												</tr>
												<tr>
													<td>Joe Trulli</td>
													<td>1,256</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/es.png"
															width="25px"
														/>
													</td>
													<td className="text-center">
														<div
															className="status-pill yellow"
															data-title="Pending"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														></div>
													</td>
													<td className="text-right">$1,120</td>
													<td className="text-right">$1,120</td>
												</tr>
												<tr>
													<td>Fred Kolton</td>
													<td>74</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/fr.png"
															width="25px"
														/>
													</td>
													<td className="text-center">
														<div
															className="status-pill green"
															data-title="Complete"
															data-toggle="tooltip"
															data-original-title=""
															title=""
														></div>
													</td>
													<td className="text-right">$74</td>
													<td className="text-right">$74</td>
												</tr>
											</tbody>
										</table>
										<div className="controls-below-table">
											<div className="table-records-info">
												Showing records 1 - 5
											</div>
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
							</div>
						</div>
					</div>
					<div className="col-sm-8 col-lg-9 col-xl-6 col-xxl-9">
						<div className="element-box">
							<div className="element-wrapper">
								<div className="element-box-tp">
									<div className="form-desc">
										You can put a table tag inside an{' '}
										<code>.element-box-tp</code> className wrapper and add{' '}
										<code>.table</code> className to it to get something like
										this:
									</div>
									<div className="element-box-tp">
										<div className="controls-above-table">
											<div className="row">
												<div className="col-sm-6">
													<a className="btn btn-sm btn-secondary" href="#">
														Download CSV
													</a>
													<a className="btn btn-sm btn-secondary" href="#">
														Archive
													</a>
													<a className="btn btn-sm btn-danger" href="#">
														Delete
													</a>
												</div>
												<div className="col-sm-6">
													<div className="element-actions">
														<form className="form-inline justify-content-sm-end">
															<select className="form-control form-control-sm">
																<option value="Pending">Today</option>
																<option value="Active">Last Week </option>
																<option value="Cancelled">Last 30 Days</option>
															</select>
														</form>
													</div>
												</div>
											</div>
										</div>
										<table className="table table-striped table-bordered">
											<thead>
												<tr>
													<th>BRAND NAME</th>
													<th>GENERIC NAME</th>
													<th>QUANTITY DISPENSED</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>John Mayers</td>
													<td>12</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/us.png"
															width="25px"
														/>
													</td>
												</tr>
												<tr>
													<td>Kelly Brans</td>
													<td>45</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/ca.png"
															width="25px"
														/>
													</td>
												</tr>
												<tr>
													<td>Tim Howard</td>
													<td>112</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/uk.png"
															width="25px"
														/>
													</td>
												</tr>
												<tr>
													<td>Joe Trulli</td>
													<td>1,256</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/es.png"
															width="25px"
														/>
													</td>
												</tr>
												<tr>
													<td>Fred Kolton</td>
													<td>74</td>
													<td>
														<img
															alt=""
															src="img/flags-icons/fr.png"
															width="25px"
														/>
													</td>
												</tr>
											</tbody>
										</table>
										<div className="controls-below-table">
											<div className="table-records-info">
												Showing records 1 - 5
											</div>
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
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-8 col-xxxl-6">
						<div className="element-wrapper">
							<h6 className="element-header">New Orders</h6>
							<div className="element-box">
								<div className="table-responsive">
									<table className="table table-lightborder">
										<thead>
											<tr>
												<th>Customer</th>
												<th>Products</th>
												<th className="text-center">Status</th>
												<th className="text-right">Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="nowrap">John Mayers</td>
												<td>
													<div className="cell-image-list">
														<div className="cell-img-more">+ 5 more</div>
													</div>
												</td>
												<td className="text-center">
													<div
														className="status-pill green"
														data-title="Complete"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													></div>
												</td>
												<td className="text-right">$354</td>
											</tr>
											<tr>
												<td className="nowrap">Kelly Brans</td>
												<td>
													<div className="cell-image-list"></div>
												</td>
												<td className="text-center">
													<div
														className="status-pill red"
														data-title="Cancelled"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													></div>
												</td>
												<td className="text-right">$94</td>
											</tr>
											<tr>
												<td className="nowrap">Tim Howard</td>
												<td>
													<div className="cell-image-list"></div>
												</td>
												<td className="text-center">
													<div
														className="status-pill green"
														data-title="Complete"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													></div>
												</td>
												<td className="text-right">$156</td>
											</tr>
											<tr>
												<td className="nowrap">Joe Trulli</td>
												<td>
													<div className="cell-image-list">
														<div className="cell-img-more">+ 2 more</div>
													</div>
												</td>
												<td className="text-center">
													<div
														className="status-pill yellow"
														data-title="Pending"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													></div>
												</td>
												<td className="text-right">$1,120</td>
											</tr>
											<tr>
												<td className="nowrap">Jerry Lingard</td>
												<td>
													<div className="cell-image-list"></div>
												</td>
												<td className="text-center">
													<div
														className="status-pill green"
														data-title="Complete"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													></div>
												</td>
												<td className="text-right">$856</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 d-xxxl-none">
						<div className="element-wrapper">
							<h6 className="element-header">Top Selling Today</h6>
							<div className="element-box">
								<div className="el-chart-w">
									<div className="chartjs-size-monitor">
										<div className="chartjs-size-monitor-expand">
											<div className=""></div>
										</div>
										<div className="chartjs-size-monitor-shrink">
											<div className=""></div>
										</div>
									</div>
									<canvas
										height="256"
										id="donutChart"
										width="256"
										style={{
											display: 'block',
											height: '205px',
											width: '205px',
										}}
										className="chartjs-render-monitor"
									></canvas>
									<div className="inside-donut-chart-label">
										<strong>142</strong>
										<span>Total Orders</span>
									</div>
								</div>
								<div className="el-legend condensed">
									<div className="row">
										<div className="col-auto col-xxxxl-6 ml-sm-auto mr-sm-auto col-6">
											<div className="legend-value-w">
												<div className="legend-value">
													<span>Prada</span>
													<div className="legend-sub-value">14 Pairs</div>
												</div>
											</div>
											<div className="legend-value-w">
												<div className="legend-value">
													<span>Maui Jim</span>
													<div className="legend-sub-value">26 Pairs</div>
												</div>
											</div>
										</div>
										<div className="col-6 d-lg-none d-xxl-block">
											<div className="legend-value-w">
												<div className="legend-value">
													<span>Gucci</span>
													<div className="legend-sub-value">17 Pairs</div>
												</div>
											</div>
											<div className="legend-value-w">
												<div className="legend-value">
													<span>Armani</span>
													<div className="legend-sub-value">12 Pairs</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pharmacy;
