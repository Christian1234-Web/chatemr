import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError, reset, change } from 'redux-form';
import Select from 'react-select';

import { renderTextInput, request } from '../services/utilities';
import { notifyError, notifySuccess } from '../services/notify';
import waiting from '../assets/images/waiting.gif';
import { addPermission } from '../actions/permission';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'enter name';
	}
	return errors;
};

class CreatePermission extends Component {
	state = {
		submitting: false,
		department: null,
	};

	save = async data => {
		try {
			console.log(data);
			if (!data.department || (data.department && data.department === '')) {
				notifyError('select department');
				return;
			}

			this.setState({ submitting: true });
			const datum = { ...data, department_id: data.department.id };
			const rs = await request('settings/permissions', 'POST', true, datum);
			this.props.addPermission(rs);
			this.setState({ submitting: false, department: null });
			this.props.reset('create_permission');
			notifySuccess('permission created!');
		} catch (e) {
			this.setState({ submitting: false });
			throw new SubmissionError({
				_error: e.message || 'could not create permission',
			});
		}
	};

	render() {
		const { submitting, department } = this.state;
		const { error, handleSubmit, departments } = this.props;
		return (
			<div className="pipeline white lined-warning">
				<form onSubmit={handleSubmit(this.save)}>
					<h6 className="form-header">Create Permission</h6>
					{error && (
						<div
							className="alert alert-danger"
							dangerouslySetInnerHTML={{
								__html: `<strong>Error!</strong> ${error}`,
							}}
						/>
					)}
					<Field
						id="name"
						name="name"
						component={renderTextInput}
						label="Name"
						type="text"
						placeholder="Enter name"
					/>
					<div>
						<label>Select Department</label>
						<Select
							placeholder="Select department"
							defaultValue
							getOptionValue={option => option.id}
							getOptionLabel={option => option.name}
							onChange={e => {
								this.setState({ department: e });
								this.props.change('department', e);
							}}
							value={department}
							isSearchable={true}
							options={departments}
						/>
					</div>
					<div className="form-buttons-w">
						<button
							className="btn btn-primary"
							disabled={submitting}
							type="submit"
						>
							{submitting ? <img src={waiting} alt="submitting" /> : 'save'}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		initialValues: { department: '' },
		departments: state.department,
	};
};

CreatePermission = reduxForm({
	form: 'create_permission',
	validate,
})(CreatePermission);

export default connect(mapStateToProps, { reset, addPermission, change })(
	CreatePermission
);
