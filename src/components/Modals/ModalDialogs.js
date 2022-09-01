import React from 'react';
import { connect } from 'react-redux';

import ModalAddTask from './ModalAddTask';
import ModalLeaveHistory from './ModalLeaveHistory';
import ModalViewAppraisal from './ModalViewAppraisal';
import ModalPayrollHistory from './ModalPayrollHistory';
import ModalCurrentPayroll from './ModalCurrentPayroll';
import ModalEditPayroll from './ModalEditPayroll';
import ModalCreateClinicalTask from './ModalCreateClinicalTask';
import ModalLineAppraisal from './ModalLineAppraisal';
import ModalStaffAppraisal from './ModalStaffAppraisal';

const ModalDialogs = ({
	add_task,
	show_history,
	view_appraisal,
	view_payroll_history,
	current_payroll,
	edit_payroll,
	create_clinical_task,
	line_appraisal,
	staff_appraisal,
}) => {
	return (
		<>
			{add_task && <ModalAddTask />}
			{show_history && <ModalLeaveHistory />}
			{view_appraisal && <ModalViewAppraisal />}
			{view_payroll_history && <ModalPayrollHistory />}
			{current_payroll && <ModalCurrentPayroll />}
			{edit_payroll && <ModalEditPayroll />}
			{create_clinical_task && <ModalCreateClinicalTask />}
			{line_appraisal && <ModalLineAppraisal />}
			{staff_appraisal && <ModalStaffAppraisal />}
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		show_history: state.general.show_history,
		add_task: state.general.add_task,
		view_appraisal: state.general.view_appraisal,
		view_payroll_history: state.general.view_payroll_history,
		current_payroll: state.general.current_payroll,
		edit_payroll: state.general.edit_payroll,
		create_clinical_task: state.general.create_clinical_task,
		line_appraisal: state.general.line_appraisal,
		staff_appraisal: state.general.staff_appraisal,
	};
};

export default connect(mapStateToProps)(ModalDialogs);
