/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Diagnosis = () => {
	return (
		<div className="content-i">
			<div className="content-box">
				<div className="element-wrapper">
					<div className="os-tabs-w mx-1">
						<div className="os-tabs-controls">
							<ul className="nav nav-tabs upper">
								<li className="nav-item">
									<a
										aria-expanded="true"
										className="nav-link active"
										data-toggle="tab"
									>
										Diagnosis
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="pipelines-w">
						<div className="row">
							<div className="col-lg-12 col-xxl-12">
								<div className="element-wrapper">
									<div className="element-box-tp">
										<div className="controls-above-table">
											<div className="row">
												<div className="col-sm-6">
													<a className="btn btn-sm btn-secondary" href="#">
														Upload Diagnosis Data
													</a>
												</div>
												<div className="col-sm-6">
													<form
														className="form-inline justify-content-sm-end"
														style={{ marginBottom: '7px' }}
													>
														<input
															className="form-control form-control-sm rounded bright"
															placeholder="Search"
															type="text"
														/>
													</form>
												</div>
											</div>
										</div>
										<div className="table-responsive">
											<table className="table table-padded">
												<thead>
													<tr>
														<th>Procedure Code</th>
														<th>ICD 10 Code</th>
														<th className="text-center">Description</th>

														<th>Code Status</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0DS80ZZ</div>
														</td>
														<td>
															<span>
																Reposition Small Intestine, Open Approach
															</span>
														</td>

														<td className="nowrap">
															<span>No Change</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0DS84ZZ</div>
														</td>
														<td>
															<span>
																Reposition Small Intestine, Perctaneous
																Endoscopic Approach
															</span>
														</td>

														<td className="nowrap">
															<span>No Change</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0DS90ZZ</div>
														</td>
														<td>
															<span>Reposition Duodenum, Open Approach</span>
														</td>

														<td className="nowrap">
															<span>No Charge</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0DS94ZZ</div>
														</td>
														<td>
															<span>
																Reposition Duodenum, Percutaneous Endoscopic
																Approach
															</span>
														</td>

														<td className="nowrap">
															<span>No Change</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0dsa0zz</div>
														</td>
														<td>
															<span>Reposition Jejunum, Open Approach</span>
														</td>

														<td className="nowrap">
															<span>No Change</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<div className="user-with-avatar">SB</div>
														</td>
														<td>
															<div className="smaller lighter">0DSA477</div>
														</td>
														<td>
															<span>
																Reposition Jejunum,Percutaneous Endoscopic
																Approach
															</span>
														</td>

														<td className="nowrap">
															<span>No Change</span>
														</td>
														<td className="row-actions">
															<a href="#">
																<i className="os-icon os-icon-grid-10"></i>
															</a>
															<a href="#">
																<i className="os-icon os-icon-ui-44"></i>
															</a>
															<a className="danger" href="#">
																<i className="os-icon os-icon-ui-15"></i>
															</a>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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
								<div>
									<div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Diagnosis;
