import React from 'react';

const Oocyte = () => {
	return (
		<>
			<div className="row">
				<div className="col-sm-6">
					<div className="form-group">
						<label>Date</label>
						<input className="form-control" placeholder="Date" type="text" />
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>No of Oocyte/EMB</label>
						<input
							className="form-control"
							placeholder="No of Oocyte/EMB"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Grade</label>
						<input className="form-control" placeholder="Grade" type="text" />
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>No of Strains</label>
						<input
							className="form-control"
							placeholder="No of Strains"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Dewar</label>
						<input className="form-control" placeholder="Dewar" type="text" />
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Position</label>
						<input
							className="form-control"
							placeholder="Position"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Description</label>
						<input
							className="form-control"
							placeholder="Description"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="form-group">
						<label>Media Used</label>
						<input
							className="form-control"
							placeholder="Media Used"
							type="text"
						/>
					</div>
				</div>
			</div>
			<h6 className="element-header">Donor / Client</h6>
			<div className="row">
				<div className="col-sm-4">
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" placeholder="Name" type="text" />
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Age</label>
						<input className="form-control" placeholder="Age" type="text" />
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Blood Group</label>
						<input
							className="form-control"
							placeholder="Blood Group "
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Genotype</label>
						<input
							className="form-control"
							placeholder="Genotype"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Height</label>
						<input className="form-control" placeholder="Height" type="text" />
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Weight</label>
						<input className="form-control" placeholder="Weight" type="text" />
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>BMI</label>
						<input className="form-control" placeholder="BMI" type="text" />
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Complexion</label>
						<input
							className="form-control"
							placeholder="Complexion"
							type="text"
						/>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="form-group">
						<label>Sate of Origin</label>
						<input
							className="form-control"
							placeholder="Sate of Origin"
							type="text"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Oocyte;
