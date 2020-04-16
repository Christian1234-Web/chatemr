import React, { Component } from 'react';
import {
	renderTextInput,
	renderSelect,
	renderMultiselect,
} from '../../services/utilities';
import { Field, reduxForm } from 'redux-form';
import { validateAntennatal } from '../../services/validationSchemas';
import { previousPregnancies, gravida, para } from '../../services/constants';

const validate = validateAntennatal;

export class PreviousPregnancies extends Component {
	render() {
		const { handleSubmit, previousPage, error, page } = this.props;
		return (
			<>
				<h6 className="element-header">Step {page}. Previous Pregnancies</h6>
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
									id="gravida"
									name="gravida"
									component={renderSelect}
									label="Gravida"
									placeholder="Select Gravida"
									data={gravida}
								/>
							</div>
							<div className="col-sm-6">
								<Field
									id="para"
									name="para"
									component={renderSelect}
									label="Select Para"
									placeholder="Select Para"
									data={para}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6">
								<Field
									id="alive"
									name="alive"
									component={renderSelect}
									label="Alive"
									placeholder="Select Alive"
									data={previousPregnancies}
								/>
							</div>
							<div className="col-sm-6">
								<Field
									id="miscarriage"
									name="miscarriage"
									component={renderSelect}
									label="Select Miscarriage"
									placeholder="Select miscarriage"
									data={previousPregnancies}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<Field
									id="abortion"
									name="abortion"
									component={renderSelect}
									label="Abortion"
									placeholder="Select Abortion"
									data={previousPregnancies}
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12 text-right">
								<button
									className="btn btn-primary"
									type="button"
									onClick={previousPage}>
									Previous
								</button>
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
PreviousPregnancies = reduxForm({
	form: 'antennatal', //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate,
})(PreviousPregnancies);

export default PreviousPregnancies;
