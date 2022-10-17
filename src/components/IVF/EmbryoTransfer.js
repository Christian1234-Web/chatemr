import React from 'react';

const EmbryoTransfer = () => {
	return (
		<div
			className="p-2"
			style={{ height: '37rem', overflowY: 'scroll', overflowX: 'hidden' }}
		>
			<form>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group"></div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label>EMBROYO TRANSFER</label>

							<input className="form-control" type="date" placeholder="Date" />
						</div>
					</div>
				</div>
			</form>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th>NAME OF EMBROYO TRANSFERED</th>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
						<th>TIME OF ET:</th>
						<td>
							<input className="form-control" placeholder="" type="time" />
						</td>
						<th>DAY OF TRANSFER:</th>
						<td>
							<select name="days" id="days" className="form-control">
								<option value="day1">Day 1</option>
								<option value="day2">Day 2</option>
								<option value="day3">Day 3</option>
								<option value="day4">Day 4</option>
								<option value="day5">Day 5</option>
								<option value="day6">Day 6</option>
							</select>
						</td>
					</tr>
				</thead>
			</table>

			<form>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>DR:</label>
							<input className="form-control" placeholder="Dr" type="text" />
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label> EMBRIOLOGIST:</label>
							<input
								className="form-control"
								placeholder="Embriologist"
								type="text"
							/>
						</div>
					</div>
				</div>
			</form>

			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th></th>
						<th>STAGE</th>
						<th>GRADE</th>
						<th>COMMENTS</th>
						<th>ICSI</th>
						<th>IVF</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
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
						<td>2</td>
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
						<td>3</td>
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
						<td>4</td>
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
						<td>5</td>
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
						<td>6</td>
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
						<td>7</td>
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
				</tbody>
			</table>

			<h6 className="element-header">VITRIFICATION RECORD:</h6>
			{/* <form>
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="form-group">
							<label> DATE</label>
							<input className="form-control" placeholder="" type="date" />
						</div>
					</div>
				</div>
			</form> */}

			<form>
				<div className="row">
					<div className="col-md-4">
						<div className="form-group">
							<label> DATE</label>
							<input className="form-control" placeholder="" type="date" />
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label>No OF EMBRYO VIT./DES.:</label>
							<input
								className="form-control"
								placeholder="No of embryo vit./des"
								type="text"
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label>No OF STRAWS:</label>
							<input
								className="form-control"
								placeholder="No of straws"
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

export default EmbryoTransfer;
