import React from 'react';

const IcsiRecord = () => {
	return (
		<div
			className="p-2"
			style={{ height: '37rem', overflowY: 'scroll', overflowX: 'hidden' }}
		>
			<h6 className="element-header">ICSI PRE-INJECTION DISSECTION</h6>
			<form>
				<div className="row">
					<div className="col-sm-6"></div>
					<div className="col-sm-6">
						<div className="form-group">
							<div className="">
								<label className="">TIME</label>
								<input
									className="form-control"
									placeholder="Time"
									type="time"
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th></th>
						<th>MII</th>
						<th>MIGV</th>
						<th>FRAG</th>
						<th>ABN</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>NO:</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>
					<tr>
						<td>Comment</td>
						<td colSpan="4">
							<input
								className="form-control"
								placeholder="Comment"
								type="text"
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<h6 className="element-header">IVF/ICSI RECORD</h6>
			<form>
				<div className="row">
					<div className="col-md-4">
						<div className="">
							<div className="form-check">
								<input
									className="form-check-input"
									name="optionsRadios"
									type="radio"
									value="option1"
								/>
								<label className="form-check-label">INSEMINATION</label>
							</div>
						</div>
						<div className="">
							<div className="form-check">
								<input
									className="form-check-input"
									name="optionsRadios"
									type="radio"
									value="option2"
								/>
								<label className="form-check-label mt-1">INJECTION</label>
							</div>
						</div>
						<div className="">
							<div className="form-check">
								<input
									className="form-check-input"
									name="optionsRadios"
									type="radio"
									value="option2"
								/>
								<label className="form-check-label mt-1">50/50</label>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label className="">OP DATE</label>
							<div className="">
								<input
									className="form-control"
									placeholder="OP DATE"
									type="date"
								/>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label className="">TIME:</label>
							<div className="">
								<input
									className="form-control"
									placeholder="Time"
									type="time"
								/>
							</div>
						</div>
					</div>
				</div>
			</form>

			<div className="table-responsive">
				<table className="table table-bordered table-lg table-v2 table-striped">
					<thead>
						<tr>
							<th>TOTAL No. OF OCCYTE</th>
							<th>IVF</th>
							<th>ICSI</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th rowSpan="2">
								<input className="form-control" placeholder="" type="text" />
							</th>
							<th>No of Oocyte Inseminated</th>
							<th>No of Oocyte Injected</th>
						</tr>
						<tr>
							<td>
								<input className="form-control" placeholder="" type="text" />
							</td>
							<td>
								<input className="form-control" placeholder="" type="text" />
							</td>
						</tr>

						<tr>
							<td>COMMENT:</td>
							<td colSpan="2">
								<input className="form-control" placeholder="" type="text" />
							</td>
						</tr>
					</tbody>
				</table>
				<form>
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<label>DR</label>
								<input className="form-control" placeholder="Dr" type="text" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<label>WITNESS</label>
								<input
									className="form-control"
									placeholder="Witness"
									type="text"
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<label>EMBRYOLOGISTS</label>
								<input
									className="form-control"
									placeholder="Embryologists"
									type="text"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
			<h6 className="element-header">DAY 1</h6>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<td colSpan="5"></td>
						<td colSpan="3">NON-FERTILIZED</td>
						<td>OTHERS</td>
					</tr>
					<tr>
						<td></td>
						<td>2PN</td>
						<td>3PN</td>
						<td>1PN</td>
						<td>+</td>
						<td>MIL</td>
						<td>ML</td>
						<td>GV</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>IVF</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>

					<tr>
						<td>ICSI</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>
					<tr>
						<td>COMMENTS</td>
						<td colSpan="9">
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>
				</tbody>
			</table>

			<form>
				<div className="row">
					<div className="col-md-4">
						<div className="form-group">
							<label>Dr</label>
							<input className="form-control" placeholder="Dr" type="text" />
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label>WITNESS</label>
							<input
								className="form-control"
								placeholder="Witness"
								type="text"
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label>EMBRYOLOGISTS</label>
							<input
								className="form-control"
								placeholder="Embryologists"
								type="text"
							/>
						</div>
					</div>
				</div>
			</form>
			<div className="d-flex justify-content-between">
				<div></div>
				<div>
					<button type="button" className="btn btn-primary">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default IcsiRecord;
