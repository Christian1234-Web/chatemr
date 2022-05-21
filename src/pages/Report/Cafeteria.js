import React from 'react';

const Cafeteria = () => {
	return (
		<div className="content-i">
			<div className="content-box">
				<div className="os-tabs-w mx-4">
					<div className="os-tabs-controls">
						<ul className="nav nav-tabs upper">
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link active"
									data-toggle="tab"
									href="#tab_overview"
								>
									dashboard
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link"
									data-toggle="tab"
									href="#tab_sales"
								>
									Transactions
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="false"
									className="nav-link"
									data-toggle="tab"
									href="#tab_sales"
								>
									Showcase
								</a>
							</li>
							<li className="nav-item">
								<a
									aria-expanded="true"
									className="nav-link"
									data-toggle="tab"
									href="#tab_sales"
								>
									Reports
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="padded-lg">
							<div className="projects-list">
								<div className="pipelines-w">
									<div className="row">
										<div className="col-lg-4 col-xxl-4">
											<div className="">
												<div className="pipeline-body">
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Meat Pie</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>25 Pieces</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Goldman</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>12 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Bosing Corp</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>6 Notes</span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-xxl-4">
											<div className="">
												<div className="pipeline-body">
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Fennel Inc</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>14 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Zillow Farm</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>4 Notes</span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-xxl-4">
											<div className="">
												<div className="pipeline-body">
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Corpus Comp</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>1 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Boiling Roast</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>5 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Ketchup Farm</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>3 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">Milk Parade</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>2 Notes</span>
															</a>
														</div>
													</div>
													<div className="pipeline-item">
														<div className="pi-controls">
															<div className="pi-settings os-dropdown-trigger">
																<i className="os-icon os-icon-ui-46"></i>
																<div className="os-dropdown">
																	<div className="icon-w">
																		<i className="os-icon os-icon-ui-46"></i>
																	</div>
																	<ul>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-49"></i>
																				<span>Edit Record</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-grid-10"></i>
																				<span>Duplicate Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-15"></i>
																				<span>Remove Item</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<i className="os-icon os-icon-ui-44"></i>
																				<span>Archive Project</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div
																className="status status-green"
																data-placement="top"
																data-toggle="tooltip"
																title=""
																data-original-title="Active Status"
															></div>
														</div>
														<div className="pi-body">
															<div className="pi-info">
																<div className="h6 pi-name">
																	Better Pharmacy
																</div>
																<div className="pi-sub">John Mayers</div>
															</div>
														</div>
														<div className="pi-foot">
															<a className="extra-info" href="#">
																<i className="os-icon os-icon-mail-12"></i>
																<span>5 Notes</span>
															</a>
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
					<div className="col-lg-4 b-l-lg">
						<div className="padded-lg">
							<div className="element-wrapper">
								<div className="element-actions">
									<form className="form-inline justify-content-sm-end">
										<select className="form-control form-control-sm rounded">
											<option value="Pending">Today</option>
											<option value="Active">Last Week </option>
											<option value="Cancelled">Last 30 Days</option>
										</select>
									</form>
								</div>
								<h6 className="element-header">Project Statistics</h6>

								<div className="col-sm-12 col-xxxl-3">
									<div className="form-group">
										<select className="form-control">
											<option>Select State</option>
											<option>New York</option>
											<option>California</option>
											<option>Boston</option>
											<option>Texas</option>
											<option>Colorado</option>
										</select>
									</div>
								</div>
								<div className="element-box">
									<div className="element-box-tp">
										<table className="table table-compact smaller text-faded mb-0">
											<thead>
												<tr>
													<th>Product</th>
													<th className="text-center">Price</th>
													<th className="text-right">Qty</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<span>MEATPIE</span>
													</td>
													<td className="text-center">500</td>
													<td className="text-right text-bright">20</td>
												</tr>
												<tr>
													<td>
														<span>RPX</span>
														<i className="os-icon os-icon-repeat icon-separator"></i>
														<span>ETH</span>
													</td>
													<td className="text-center">01.07</td>
													<td className="text-right text-bright">$15.21</td>
												</tr>
												<tr>
													<td>
														<span>LTC</span>
														<i className="os-icon os-icon-repeat icon-separator"></i>
														<span>BTC</span>
													</td>
													<td className="text-center">01.05</td>
													<td className="text-right text-bright">$15.21</td>
												</tr>
												<tr>
													<td>
														<span>PRX</span>
														<i className="os-icon os-icon-repeat icon-separator"></i>
														<span>LTC</span>
													</td>
													<td className="text-center">01.05</td>
													<td className="text-right text-bright">$23.18</td>
												</tr>
												<tr>
													<td>
														<span>ETH</span>
														<i className="os-icon os-icon-repeat icon-separator"></i>
														<span>USD</span>
													</td>
													<td className="text-center">01.04</td>
													<td className="text-right text-bright">$35.42</td>
												</tr>
												<tr>
													<td>
														<span>BTC</span>
														<i className="os-icon os-icon-repeat icon-separator"></i>
														<span>ETH</span>
													</td>
													<td className="text-center">01.02</td>
													<td className="text-right text-bright">$72.62</td>
												</tr>
											</tbody>
										</table>
									</div>

									<div className="pt-4">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<div className="input-group">
														<div className="input-group-prepend">
															<div className="input-group-text">TOTAL</div>
														</div>
														<input
															className="form-control"
															placeholder="Total"
															type="text"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<div className="input-group">
														<div className="input-group-prepend">
															<div className="input-group-text">
																VAT INCLUDED
															</div>
														</div>
														<input
															className="form-control"
															placeholder="VAT"
															type="text"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="input-group-text">PAID</div>
												</div>
												<input
													className="form-control"
													placeholder="Twitter Username"
													type="text"
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="form-group">
												<select className="form-control">
													<option>Payment Type</option>
													<option>Cash</option>
													<option>POS</option>
													<option>Deduction</option>

													<option>Transfer</option>
												</select>
											</div>
										</div>
									</div>
									<div className="padded"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="floated-chat-w">
					<div className="floated-chat-i">
						<div className="chat-close">
							<i className="os-icon os-icon-close"></i>
						</div>
						<div className="chat-head">
							<div className="user-w with-status status-green">
								<div className="user-avatar-w">
									<div className="user-avatar">
										<img alt="" src="img/avatar1.jpg" />
									</div>
								</div>
								<div className="user-name">
									<h6 className="user-title">John Mayers</h6>
									<div className="user-role">Account Manager</div>
								</div>
							</div>
						</div>
						<div
							className="chat-messages ps ps--theme_default"
							data-ps-id="7a7f9352-cc6d-1378-44e9-9d08fcc3f731"
						>
							<div className="message">
								<div className="message-content">Hi, how can I help you?</div>
							</div>
							<div className="date-break">Mon 10:20am</div>
							<div className="message">
								<div className="message-content">
									Hi, my name is Mike, I will be happy to assist you
								</div>
							</div>
							<div className="message self">
								<div className="message-content">
									Hi, I tried ordering this product and it keeps showing me
									error code.
								</div>
							</div>
							<div
								className="ps__scrollbar-x-rail"
								style={{ left: '0px', bottom: '0px' }}
							>
								<div
									className="ps__scrollbar-x"
									tabindex="0"
									style={{ left: '0px', width: '0px' }}
								></div>
							</div>
							<div
								className="ps__scrollbar-y-rail"
								style={{ top: '0px', right: '0px' }}
							>
								<div
									className="ps__scrollbar-y"
									tabindex="0"
									style={{ top: '0px', height: '0px' }}
								></div>
							</div>
						</div>
						<div className="chat-controls">
							<input
								className="message-input"
								placeholder="Type your message here..."
							/>
							<div className="chat-extra">
								<a href="#">
									<span className="extra-tooltip">Attach Document</span>
									<i className="os-icon os-icon-documents-07"></i>
								</a>
								<a href="#">
									<span className="extra-tooltip">Insert Photo</span>
									<i className="os-icon os-icon-others-29"></i>
								</a>
								<a href="#">
									<span className="extra-tooltip">Upload Video</span>
									<i className="os-icon os-icon-ui-51"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cafeteria;
