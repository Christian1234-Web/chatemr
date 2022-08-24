import {
	TOGGLE_PRELOADING,
	TOGGLE_CONNECTED,
	TOGGLE_MODAL,
	TOGGLE_IS_MODAL,
	TOGGLE_SET_LEAVE,
	TOGGLE_ADD_TASK,
	TOGGLE_SHOW_HISTORY,
	TOGGLE_VIEW_APPRAISAL,
	TOGGLE_VIEW_PAYROLL_HISTORY,
	TOGGLE_VIEW_CURRENT_PAYROLL,
	TOGGLE_EDIT_PAYROLL,
	TOGGLE_ADD_NEW_OBSERVATION,
	TOGGLE_CREATE_CLINICAL_TASK,
	TOGGLE_LINE_APPRAISAL,
	TOGGLE_STAFF_APPRAISAL,
	ADD_STAFF_FOR_APPRAISAL,
	SET_IS_STAFF_APPRAISAL,
	CREAE_NEW_DRUG,
	CREATE_NEW_GENERIC,
	TOGGLE_CHAT_INBOX,
} from './types';

export const toggleChat = status => {
	return {
		type: TOGGLE_CHAT_INBOX,
		payload: status,
	};
};

export const createNewGeneric = status => {
	return {
		type: CREATE_NEW_GENERIC,
		payload: status,
	};
};

export const setConnection = status => {
	return {
		type: TOGGLE_CONNECTED,
		payload: status,
	};
};

export const createNewDrug = status => {
	return {
		type: CREAE_NEW_DRUG,
		payload: status,
	};
};

export const setIsStaffAppraisal = status => {
	return {
		type: SET_IS_STAFF_APPRAISAL,
		payload: status,
	};
};

export const addStaffForAppraisal = staff => {
	return {
		type: ADD_STAFF_FOR_APPRAISAL,
		payload: staff,
	};
};

export const togglePreloading = status => {
	return {
		type: TOGGLE_PRELOADING,
		payload: status,
	};
};

export const toggleIsModal = status => {
	return {
		type: TOGGLE_IS_MODAL,
		payload: status,
	};
};

export const toggleModal = status => {
	return {
		type: TOGGLE_MODAL,
		payload: status,
	};
};

//Hr Modals
export const toggleShowHistory = status => {
	return {
		type: TOGGLE_SHOW_HISTORY,
		payload: status,
	};
};

export const toggleSetLeave = status => {
	return {
		type: TOGGLE_SET_LEAVE,
		payload: status,
	};
};

export const toggleAddTask = status => {
	return {
		type: TOGGLE_ADD_TASK,
		payload: status,
	};
};

// appraisals
export const toggleViewAppraisal = status => {
	return {
		type: TOGGLE_VIEW_APPRAISAL,
		payload: status,
	};
};

// payroll
export const toggleViewPayrollHistory = (status, staff) => {
	return {
		type: TOGGLE_VIEW_PAYROLL_HISTORY,
		payload: status,
		staff,
	};
};

export const toggleCurrentPayroll = (status, id) => {
	return {
		type: TOGGLE_VIEW_CURRENT_PAYROLL,
		payload: status,
		id,
	};
};

export const toggleEditPayroll = (status, id) => {
	return {
		type: TOGGLE_EDIT_PAYROLL,
		payload: status,
		id,
	};
};

export const toggleCreateClinicalTask = status => {
	return {
		type: TOGGLE_CREATE_CLINICAL_TASK,
		payload: status,
	};
};

// patient
export const toggleLineAppraisal = status => {
	return {
		type: TOGGLE_LINE_APPRAISAL,
		payload: status,
	};
};

export const toggleStaffAppraisal = (status, data) => {
	return {
		type: TOGGLE_STAFF_APPRAISAL,
		payload: status,
		data,
	};
};

// nicu
export const toggleAddNewObservation = status => {
	return {
		type: TOGGLE_ADD_NEW_OBSERVATION,
		payload: status,
	};
};

// close modals
export const closeModals = () => {
	return dispatch => {
		dispatch(toggleModal(false));
		dispatch(toggleShowHistory(false));
		dispatch(toggleAddTask(false));
		dispatch(toggleViewAppraisal(false));
		dispatch(toggleViewPayrollHistory(false));
		dispatch(toggleCurrentPayroll(false));
		dispatch(toggleEditPayroll(false));
		dispatch(toggleAddNewObservation(false));
		dispatch(toggleCreateClinicalTask(false));
		dispatch(toggleLineAppraisal(false));
		dispatch(toggleStaffAppraisal(false, null));
	};
};

export const closeCurrentPayRoll = is_modal => {
	return dispatch => {
		if (!is_modal) {
			dispatch(toggleModal(false));
		}
		dispatch(toggleCurrentPayroll(false, null));
	};
};

export const closeEditPayRoll = is_modal => {
	return dispatch => {
		if (!is_modal) {
			dispatch(toggleModal(false));
		}
		dispatch(toggleEditPayroll(false, null));
	};
};

export const showHistory = action => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleShowHistory(action));
	};
};

export const addTask = action => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleAddTask(action));
	};
};

//appraisal modals
export const viewAppraisal = action => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleViewAppraisal(action));
	};
};

export const viewPayrollHistory = (action, staff) => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleViewPayrollHistory(action, staff));
	};
};

export const viewCurrentPayroll = (action, isModal, id) => {
	return dispatch => {
		if (!isModal) {
			dispatch(closeModals());
			dispatch(toggleModal(true));
		}
		dispatch(toggleIsModal(isModal ? true : false));
		dispatch(toggleCurrentPayroll(action, id));
	};
};

export const viewEditPayroll = (action, isModal, id) => {
	return dispatch => {
		dispatch(toggleIsModal(isModal ? true : false));
		dispatch(toggleEditPayroll(action, id));
	};
};

export const createClinicalTask = action => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleCreateClinicalTask(action));
	};
};

export const lineAppraisal = (action, data) => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleLineAppraisal(action));
	};
};

export const loadStaffAppraisal = (action, data) => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleStaffAppraisal(action, data));
	};
};

// nurse
export const addNewObservation = action => {
	return dispatch => {
		dispatch(closeModals());
		dispatch(toggleModal(true));
		dispatch(toggleAddNewObservation(action));
	};
};
