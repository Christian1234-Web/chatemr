/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Dashboard = () => {
	return (
		<>
			<div className="content-i">
				<div className="content-box">
					<div className="todo-app-w">
						<div className="todo-sidebar">
							<div className="todo-sidebar-section">
								<h4 className="todo-sidebar-section-header">
									My Projects
									<a className="todo-sidebar-section-toggle" href="#">
										<i className="os-icon os-icon-ui-23"></i>
									</a>
								</h4>
								<div className="todo-sidebar-section-contents">
									<ul className="projects-list">
										<li>
											<a href="#">House Renovation</a>
										</li>
										<li>
											<a href="#">App Development</a>
										</li>
										<li>
											<a href="#">Movies to Watch</a>
										</li>
										<li className="add-new-project">
											<a href="#">Add New Project</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="todo-sidebar-section">
								<h4 className="todo-sidebar-section-header">
									<span>Starred Tasks</span>
									<i className="os-icon os-icon-ui-02 starred"></i>
									<a className="todo-sidebar-section-toggle" href="#">
										<i className="os-icon os-icon-ui-23"></i>
									</a>
								</h4>
								<div className="todo-sidebar-section-contents">
									<div className="todo-sidebar-section-sub-section">
										<div className="todo-sidebar-section-sub-section-toggler">
											<i className="os-icon os-icon-ui-23"></i>
										</div>
										<div className="todo-sidebar-section-sub-header">
											<i className="os-icon os-icon-documents-11"></i>
											<h6>Projects</h6>
										</div>
										<div className="todo-sidebar-section-sub-section-content">
											<ul className="items-list">
												<li>
													<a href="#">App Development</a>
												</li>
												<li>
													<a href="#">Movies to Watch</a>
												</li>
												<li>
													<a href="#">Tasty Food Recipes</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="todo-sidebar-section-sub-section">
										<div className="todo-sidebar-section-sub-section-toggler">
											<i className="os-icon os-icon-ui-23"></i>
										</div>
										<div className="todo-sidebar-section-sub-header">
											<i className="os-icon os-icon-ui-34"></i>
											<h6>Notes</h6>
										</div>
										<div className="todo-sidebar-section-sub-section-content">
											<ul className="items-list">
												<li>
													<a href="#">Server Credentials</a>
												</li>
												<li>
													<a href="#">Social Connections</a>
												</li>
												<li>
													<a href="#">Travel Tips</a>
												</li>
												<li>
													<a href="#">John's Story</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="todo-sidebar-section-sub-section">
										<div className="todo-sidebar-section-sub-section-toggler">
											<i className="os-icon os-icon-ui-23"></i>
										</div>
										<div className="todo-sidebar-section-sub-header">
											<i className="os-icon os-icon-ui-21"></i>
											<h6>Tasks</h6>
										</div>
										<div className="todo-sidebar-section-sub-section-content">
											<ul className="items-list">
												<li>
													<a href="#">
														Rent uhaul truck and order cardboard boxes and other
														moving supplies
													</a>
												</li>
												<li>
													<a href="#">
														Order new set of tires from tirerack and schedule
														appointment
													</a>
												</li>
												<li>
													<a href="#">
														Visit Home Depot to find out what is needed to
														rebuild backyard patio
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="todo-sidebar-section">
								<h4 className="todo-sidebar-section-header">
									<span>Due Soon</span>
									<i className="os-icon os-icon-fire fire"></i>
									<a className="todo-sidebar-section-toggle" href="#">
										<i className="os-icon os-icon-ui-23"></i>
									</a>
								</h4>
								<div className="todo-sidebar-section-contents">
									<ul className="tasks-list">
										<li className="danger">
											<a href="#">
												<strong>Order new drills from…</strong>
												<span>Due in two days</span>
											</a>
										</li>
										<li className="warning">
											<a href="#">
												<strong>Rent uhaul truck and or…</strong>
												<span>Due in two days</span>
											</a>
										</li>
										<li className="warning">
											<a href="#">
												<strong>Order new set of tires…</strong>
												<span>Due in two days</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="todo-content">
							<h4 className="todo-content-header">
								<i className="os-icon os-icon-ui-83"></i>
								<span>Next 7 Days</span>
							</h4>
							<div className="all-tasks-w">
								<div className="tasks-section">
									<div className="tasks-header-w">
										<a className="tasks-header-toggler" href="#">
											<i className="os-icon os-icon-ui-23"></i>
										</a>
										<h5 className="tasks-header">Today</h5>
										<span className="tasks-sub-header">Mon, Sep 23th</span>
										<a
											className="add-task-btn"
											data-target="#taskModal"
											data-toggle="modal"
											href="#"
										>
											<i className="os-icon os-icon-ui-22"></i>
											<span>Add Task</span>
										</a>
									</div>
									<div className="tasks-list-w">
										<div className="tasks-list-header">High Priority</div>
										<ul className="tasks-list">
											<li className="draggable-task warning">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Order new drills from amazon sale box
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Rent uhaul truck and order cardboard boxes and other
														moving supplies
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task danger">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Visit Home Depot to find out what is needed to
														rebuild backyard patio
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
										</ul>
										<div className="tasks-list-header">Low Priority</div>
										<ul className="tasks-list">
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Make sure car oil level is checked
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Order new set of tires from tirerack and schedule
														appointment
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tasks-section">
									<div className="tasks-header-w">
										<a className="tasks-header-toggler" href="#">
											<i className="os-icon os-icon-ui-23"></i>
										</a>
										<h5 className="tasks-header">Tomorrow</h5>
										<span className="tasks-sub-header">Tue, Sep 24th</span>
										<a
											className="add-task-btn"
											data-target="#taskModal"
											data-toggle="modal"
											href="#"
										>
											<i className="os-icon os-icon-ui-22"></i>
											<span>Add Task</span>
										</a>
									</div>
									<div className="tasks-list-w">
										<ul className="tasks-list">
											<li className="draggable-task danger">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Visit Home Depot to find out what is needed to
														rebuild backyard patio
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
												<div className="todo-task-media">
													<img src="img/portfolio9.jpg" />
													<img src="img/portfolio2.jpg" />
													<img src="img/portfolio12.jpg" />
												</div>
											</li>
											<li className="draggable-task warning">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Order new drills from amazon sale box
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Make sure car oil level is checked
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task success favorite">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Order new set of tires from tirerack and schedule
														appointment
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Rent uhaul truck and order cardboard boxes and other
														moving supplies
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tasks-section">
									<div className="tasks-header-w">
										<a className="tasks-header-toggler" href="#">
											<i className="os-icon os-icon-ui-23"></i>
										</a>
										<h5 className="tasks-header">Wednesday</h5>
										<span className="tasks-sub-header">Wed, Sep 25th</span>
										<a
											className="add-task-btn"
											data-target="#taskModal"
											data-toggle="modal"
											href="#"
										>
											<i className="os-icon os-icon-ui-22"></i>
											<span>Add Task</span>
										</a>
									</div>
									<div className="tasks-list-w">
										<ul className="tasks-list">
											<li className="draggable-task danger">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Make sure car oil level is checked
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task success">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Order new set of tires from tirerack and schedule
														appointment
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
											<li className="draggable-task complete">
												<div className="todo-task-drag drag-handle">
													<i className="os-icon os-icon-hamburger-menu-2 drag-handle"></i>
												</div>
												<div className="todo-task">
													<span contenteditable="true">
														Rent uhaul truck and order cardboard boxes and other
														moving supplies
													</span>
													<div className="todo-task-buttons">
														<a className="task-btn-done" href="#">
															<span>Mark as Complete</span>
															<i className="os-icon os-icon-ui-21"></i>
														</a>
														<a
															className="task-btn-edit"
															data-target="#taskModal"
															data-toggle="modal"
															href="#"
														>
															<span>Edit</span>
															<i className="os-icon os-icon-ui-49"></i>
														</a>
														<a className="task-btn-delete" href="#">
															<span>Delete</span>
															<i className="os-icon os-icon-ui-15"></i>
														</a>
														<a className="task-btn-star" href="#">
															<span>Favorite</span>
															<i className="os-icon os-icon-ui-02"></i>
														</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div
								className="modal fade"
								id="taskModal"
								role="dialog"
								tabindex="-1"
								style={{ display: 'none' }}
								aria-hidden="true"
							>
								<div className="modal-dialog" role="document">
									<div className="modal-content">
										<div className="modal-header faded smaller">
											<div className="modal-title">
												<span>Assigned to:</span>
												<img alt="" className="avatar" src="img/avatar1.jpg" />
												<span>Due Date: </span>
												<strong>Sep 12th, 2017</strong>
											</div>
											<button
												aria-label="Close"
												className="close"
												data-dismiss="modal"
												type="button"
											>
												<span aria-hidden="true"> ×</span>
											</button>
										</div>
										<div className="modal-body">
											<form>
												<div className="form-group">
													<label for="">Name</label>
													<input
														className="form-control"
														placeholder="Enter task name"
														value="Visit Home Depot to find out what is needed to rebuild backyard patio"
													/>
												</div>
												<div className="form-group">
													<label for="">Description</label>
													<textarea className="form-control" name="" rows="3">
														The similar diesel only tell deference and likewise,
														thought, nonetheless, for ahead school. The were
														organization.
													</textarea>
												</div>
												<div className="form-group">
													<label for="">Media Attached</label>
													<div className="attached-media-w">
														<img src="img/portfolio9.jpg" />
														<img src="img/portfolio2.jpg" />
														<img src="img/portfolio12.jpg" />
														<a className="attach-media-btn" href="#">
															<i className="os-icon os-icon-ui-22"></i>
															<span>Add Photos</span>
														</a>
													</div>
												</div>
												<div className="row">
													<div className="col-sm-6">
														<div className="form-group">
															<label for=""> Due Date</label>
															<div className="date-input">
																<input
																	className="single-daterange form-control"
																	placeholder="Date of birth"
																	value="04/12/1978"
																/>
															</div>
														</div>
													</div>
													<div className="col-sm-6">
														<div className="form-group">
															<label for="">Priority</label>
															<select className="form-control">
																<option>High Priority</option>
																<option>Normal Priority</option>
																<option>Low Priority</option>
															</select>
														</div>
													</div>
												</div>
											</form>
										</div>
										<div className="modal-footer buttons-on-left">
											<button className="btn btn-teal" type="button">
												{' '}
												Save changes
											</button>
											<button
												className="btn btn-link"
												data-dismiss="modal"
												type="button"
											>
												{' '}
												Cancel
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="floated-colors-btn second-floated-btn">
						<div className="os-toggler-w">
							<div className="os-toggler-i">
								<div className="os-toggler-pill"></div>
							</div>
						</div>
						<span>Dark </span>
						<span>Colors</span>
					</div> */}
					{/* <div className="floated-customizer-btn third-floated-btn">
						<div className="icon-w">
							<i className="os-icon os-icon-ui-46"></i>
						</div>
						<span>Customizer</span>
					</div> */}
					<div className="floated-customizer-panel">
						<div className="fcp-content">
							<div className="close-customizer-btn">
								<i className="os-icon os-icon-x"></i>
							</div>
							<div className="fcp-group">
								<div className="fcp-group-header">Menu Settings</div>
								<div className="fcp-group-contents">
									<div className="fcp-field">
										<label for="">Menu Position</label>
										<select className="menu-position-selector">
											<option value="left">Left</option>
											<option value="right">Right</option>
											<option value="top">Top</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Menu Style</label>
										<select className="menu-layout-selector">
											<option value="compact">Compact</option>
											<option value="full">Full</option>
											<option value="mini">Mini</option>
										</select>
									</div>
									<div
										className="fcp-field with-image-selector-w"
										style={{ display: 'none' }}
									>
										<label for="">With Image</label>
										<select className="with-image-selector">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Menu Color</label>
										<div className="fcp-colors menu-color-selector">
											<div className="color-selector menu-color-selector color-bright selected"></div>
											<div className="color-selector menu-color-selector color-dark"></div>
											<div className="color-selector menu-color-selector color-light"></div>
											<div className="color-selector menu-color-selector color-transparent"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="fcp-group">
								<div className="fcp-group-header">Sub Menu</div>
								<div className="fcp-group-contents">
									<div className="fcp-field">
										<label for="">Sub Menu Style</label>
										<select className="sub-menu-style-selector">
											<option value="flyout">Flyout</option>
											<option value="inside">Inside/Click</option>
											<option value="over">Over</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Sub Menu Color</label>
										<div className="fcp-colors">
											<div className="color-selector sub-menu-color-selector color-bright selected"></div>
											<div className="color-selector sub-menu-color-selector color-dark"></div>
											<div className="color-selector sub-menu-color-selector color-light"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="fcp-group">
								<div className="fcp-group-header">Other Settings</div>
								<div className="fcp-group-contents">
									<div className="fcp-field">
										<label for="">Full Screen?</label>
										<select className="full-screen-selector">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Show Top Bar</label>
										<select className="top-bar-visibility-selector">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Above Menu?</label>
										<select className="top-bar-above-menu-selector">
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
									</div>
									<div className="fcp-field">
										<label for="">Top Bar Color</label>
										<div className="fcp-colors">
											<div className="color-selector top-bar-color-selector color-bright"></div>
											<div className="color-selector top-bar-color-selector color-dark"></div>
											<div className="color-selector top-bar-color-selector color-light selected"></div>
											<div className="color-selector top-bar-color-selector color-transparent"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="floated-chat-btn">
						<i className="os-icon os-icon-mail-07"></i>
						<span>Demo Chat</span>
					</div> */}
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
								className="chat-messages ps ps--theme_default ps--active-y"
								data-ps-id="df3f338c-7499-8f81-34fb-4bc1d9e8350d"
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
									style={{ top: '0px', height: '300px', right: '0px' }}
								>
									<div
										className="ps__scrollbar-y"
										tabindex="0"
										style={{ top: '0px', height: '286px' }}
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
		</>
	);
};

export default Dashboard;
