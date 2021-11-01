import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from '../../../services/validationSchemas';
import { renderTextInput, renderSelect } from '../../../services/utilities';

const brims = [
	{
		id: '0/5',
		name: '0/5',
	},
	{
		id: '1/5',
		name: '1/5',
	},
	{ id: '2/5', name: '2/5' },
	{ id: '3/5', name: '3/5' },
	{ id: '4/5', name: '4/5' },
	{ id: '5/5', name: '5/5' },
];

const positions = [
	{
		id: 'Cephalic',
		name: 'Cephalic',
	},
	{
		id: 'Breech',
		name: 'Breech',
	},
];

const fetalLies = [
	{
		id: 'Longitudinal',
		name: 'Longitudinal',
	},
	{
		id: 'Oblique',
		name: 'Oblique',
	},
	{
		id: 'Transaverse',
		name: 'Transaverse',
	},
];

class GeneralAssessment extends Component {
	render() {
		const { handleSubmit, error, page } = this.props;
		return (
			<>
				<h6 className="element-header">Step {page}. General Assessment</h6>
				<div className="form-block">
					<form onSubmit={handleSubmit}>
						{error && (
							<div
								className="alert alert-danger"
								dangerouslySetInnerHTML={{
									__html: `<strong>Error!</strong> ${error}`,
								}}
							/>
						)}
						<div className="row">
							<div className="col-sm-6">
								<Field
									id="heightOfFunds"
									name="heightOfFunds"
									component={renderTextInput}
									label="Height of Fundus (cm)"
									type="text"
									placeholder="Enter height of fundus"
								/>
							</div>
							<div className="col-sm-6">
								<Field
									id="fetalHeartRate"
									name="fetalHeartRate"
									component={renderTextInput}
									label="Fetal Heart Rate"
									type="text"
									placeholder="Enter fetal heart rate"
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6">
								<Field
									id="positionOfFetus"
									name="positionOfFetus"
									component={renderSelect}
									label="Presentation and Position of Fetals"
									placeholder="Select Presentation and Position of Fetals"
									data={positions}
								/>
							</div>
							<div className="col-sm-6">
								<Field
									id="fetalLie"
									name="fetalLie"
									component={renderSelect}
									label="Fetal Lie"
									placeholder="Select fetal lie"
									data={fetalLies}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<Field
									id="relationshipToBrim"
									name="relationshipToBrim"
									component={renderSelect}
									label="Relationship to Brim"
									placeholder="Select Relationship to Brim"
									data={brims}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12 text-right">
								<button className="btn btn-primary" type="submit">
									Next
								</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}

GeneralAssessment = reduxForm({
	form: 'antenatalAssessment', //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate,
})(GeneralAssessment);
export default GeneralAssessment;