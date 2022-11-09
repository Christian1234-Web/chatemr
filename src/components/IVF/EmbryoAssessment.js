import React from 'react';

const EmbryoAssessment = () => {
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
							<label>ASSESSMENT OF EMBROYO QUALITY</label>

							<input
								className="single-daterange form-control"
								placeholder="Date"
								type="date"
							/>
						</div>
					</div>
				</div>
			</form>

			<table className="table table-striped table-bordered">
				<tbody>
					<tr>
						<td>
							<strong>DAY 2</strong>
						</td>
						<td>Number of Cleaving Embroyo(s)</td>
						<td>
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>

					<tr>
						<td>COMMENT</td>
						<td colSpan="2">
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>
				</tbody>
			</table>
			<br />

			<table className="table table-striped table-bordered overflow-scroll">
				<thead>
					<tr>
						<th colSpan="2">EMBROYO/DROP No:</th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
						<th>6</th>
						<th>7</th>
						<th>8</th>
						<th>9</th>
						<th>10</th>
						<th>11</th>
						<th>12</th>
						<th>13</th>
						<th>14</th>
						<th>15</th>
						<th>16</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan="3">
							DAY 3 <br />
							PROGRESS RECORD/
							<br />
							BIOPSY RECORD
						</td>
						<td>Cell No:</td>
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
						<td>Fragmentation</td>
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
						<td>Grade</td>
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
						<td>COMMENT</td>
						<td colSpan="13">
							<input className="form-control" placeholder="" type="text" />
						</td>
					</tr>
				</tbody>
			</table>
			<form>
				<div className="row">
					<div className="col-md-4">
						<div className="form-group">
							<label>CHANGE OVER DONE BY</label>
							<input
								className="form-control"
								placeholder="Change over done by"
								type="text"
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group">
							<label>BIOPSY DONE BY</label>
							<input
								className="form-control"
								placeholder="Biopsy done by"
								type="text"
							/>
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

export default EmbryoAssessment;
