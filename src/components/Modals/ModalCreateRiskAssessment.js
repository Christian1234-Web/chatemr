import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { renderTextInput, renderTextArea } from '../../services/utilities';
import { Checkbox } from 'antd';

import waiting from '../../assets/images/waiting.gif';
import { closeModals } from '../../actions/general';

const plainOptions = [
	'Pre-eclampsia',
	'Eclampsia',
	'Uterine Surgery',
	'APH or PPH Puerperal Sepsis',
	'Manual removal of placenta',
	'Anaemia(less than 6g %)',
	'Febrile ailment in pregnancy',
	'Pregnancy associated with hypertension',
	'Medical condition with pregnancy(TB,diabetes,thyroid disorder,asthma)',
	'Bleeding P/V(APH Abortion)',
	'Abnormal presentational(apart from cephalic)',
	'Maturity < 37 weeks or Maturity > 45 weeks',
	'PROM (Premature Rupture Of Membranes)',
	'Fetal distress',
	'Prolonged labour > 24 hours',
	'Uterine size < period of gestation',
];
export class ModalCreateRiskAssessment extends Component {
	state = {
		submitting: false,
		previous_experince: [],
	};
	componentDidMount() {
		document.body.classList.add('modal-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('modal-open');
	}

	onChange(checkedValues) {
		console.log('checked = ', checkedValues);
	}
	render() {
		const { submitting, previous_experince } = this.state;
		const { error, reset } = this.props;
		return (
			<div
				className="onboarding-modal modal fade animated show"
				role="dialog"
				style={{ display: 'block' }}>
				<div className="modal-dialog modal-lg modal-centered" role="document">
					<div className="modal-content text-center">
						<button
							aria-label="Close"
							className="close"
							type="button"
							onClick={() => this.props.closeModals(false)}>
							<span className="os-icon os-icon-close"></span>
						</button>
						<div className="onboarding-content with-gradient">
							<h4 className="onboarding-title">Create Risk Assessment</h4>

							<div className="form-block">
								<form>
									{error && (
										<div
											className="alert alert-danger"
											dangerouslySetInnerHTML={{
												__html: `<strong>Error!</strong> ${error}`,
											}}
										/>
									)}

									<div className="row">
										<div className="col-sm-12">
											<p>Risk Score : 0 </p>
											<p>
												The patient has a risk score &lt; 4 and is NOT
												considered high risk{' '}
											</p>
										</div>
									</div>

									<div className="row mt-2">
										<div className="col-sm-6">
											<Field
												id="height"
												name="height"
												component={renderTextInput}
												label="What is her height (cm) ?"
												type="text"
												placeholder="Enter height in cm"
											/>
										</div>
										<div className="col-sm-6">
											<Field
												id="weight"
												name="weight"
												component={renderTextInput}
												label="What is her weight (kg)"
												type="text"
												placeholder="Enter weight"
											/>
										</div>
									</div>
									<div className="row mt-2 pl-2">
										<label>
											What is the outcome of her previous pregnancy ?
										</label>
										<br />

										<div className="row">
											<div className=" col-sm-4">
												<Field
													name="previous_pregnancy"
													component={'input'}
													type="radio"
													value="Normal delivery"
												/>
												<label className="mx-1">Normal delivery</label>
											</div>

											<div className="col-sm-4">
												<Field
													name="previous_pregnancy"
													component="input"
													type="radio"
													value="Assisted delivery"
												/>
												<label className="mx-1">Assisted delivery</label>
											</div>
											<div className="col-sm-4">
												<Field
													name="previous_pregnancy"
													component="input"
													type="radio"
													value="cesarean"
												/>
												<label className="mx-1">Cesarean</label>
											</div>
											<div className="col-sm-4">
												<Field
													name="previous_pregnancy"
													component="input"
													type="radio"
													value="still birth"
												/>
												<label className="mx-1"> Still birth</label>
											</div>

											<div className="col-sm-4">
												<Field
													name="previous_pregnancy"
													component="input"
													type="radio"
													value="miscarriage"
												/>
												<label className="mx-1"> Miscarriage</label>
											</div>

											<div className="col-sm-4">
												<Field
													name="previous_pregnancy"
													component="input"
													type="radio"
													value="Spontaneous Abortion"
												/>
												<label className="mx-1"> Spontaneous Abortion</label>
											</div>
										</div>
									</div>

									<div className="row mt-2">
										<div className="col-sm-12">
											<div className="form-group">
												<label>
													Has the patient experienced any of te following on
													previous pregnancy
												</label>

												<Checkbox.Group
													options={plainOptions}
													defaultValue={previous_experince}
													onChange={this.onChange}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-12">
											<Field
												id="note"
												name="note"
												component={renderTextArea}
												label="Note"
												type="text"
												placeholder="Enter note"
											/>
										</div>
									</div>

									<div className="row mt-2">
										<div className="col-sm-12 text-right">
											<button
												className="btn btn-primary"
												disabled={submitting}
												type="submit">
												{submitting ? (
													<img src={waiting} alt="submitting" />
												) : (
													'Save'
												)}
											</button>

											<button
												className="btn btn-primary ml-2"
												onClick={() => this.props.closeModals(false)}
												type="button">
												Cancel
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ModalCreateRiskAssessment = reduxForm({
	form: 'risk_assessment',
})(ModalCreateRiskAssessment);

export default connect(null, { closeModals })(ModalCreateRiskAssessment);