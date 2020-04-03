import axios from 'axios';
import { API_URI } from '../services/constants';
import {
	NEXT_STEP,
	PREV_STEP,
	SAVE_ALLERGIES,
	GET_ALLERGIES,
	ALLERGY,
	UPDATE_ALLERGY,
	LOAD_PATIENT_UPLOAD_DATA,
	ADD_PATIENT_UPLOAD_DATA,
	DELETE_ALLERGY,
	GET_PHYSIOTHERAPIES,
	GET_DENTISTRY_REQUESTS,
	GET_IMAGING_REQUESTS,
	GET_OPTHALMOLOGY_REQUESTS,
	LOAD_VITALS,
	UPDATE_VITALS,
	CREATE_LAB_REQUEST,
	GET_REQUESTS_BY_TYPE,
	LOAD_PATIENT_PROCEDURE_DATA,
	ADD_PATIENT_PROCEDURE_DATA,
	LOAD_PATIENTS,
	ADD_PHARMACY_REQUEST,
} from './types';

export const loadPatients = data => {
	return {
		type: LOAD_PATIENTS,
		payload: data,
	};
};

export const nextStep = data => {
	return {
		type: NEXT_STEP,
		payload: data,
	};
};

export const prevStep = data => {
	return {
		type: PREV_STEP,
		payload: data,
	};
};

export const loadPatientProcedureData = data => {
	return {
		type: LOAD_PATIENT_PROCEDURE_DATA,
		payload: data,
	};
};

export const addPatientProcedureData = data => {
	return {
		type: ADD_PATIENT_PROCEDURE_DATA,
		payload: data,
	};
};

export const loadPatientUploadData = data => {
	return {
		type: LOAD_PATIENT_UPLOAD_DATA,
		payload: data,
	};
};

export const addPatientUploadData = data => {
	return {
		type: ADD_PATIENT_UPLOAD_DATA,
		payload: data,
	};
};

export const add_allergies = data => {
	return {
		type: SAVE_ALLERGIES,
		payload: data,
	};
};

export const update_allergy = (data, previousData) => {
	return {
		type: UPDATE_ALLERGY,
		payload: data,
		previousData,
	};
};

export const Fetch_Allergies = data => {
	return {
		type: GET_ALLERGIES,
		payload: data,
	};
};

export const Allergy = data => {
	return {
		type: ALLERGY,
		payload: data,
	};
};

export const delete_allergy = payload => {
	return {
		type: DELETE_ALLERGY,
		payload,
	};
};

export const getPhysiotherapies = data => {
	return {
		type: GET_PHYSIOTHERAPIES,
		payload: data,
	};
};

export const loadDentistryRequests = data => {
	return {
		type: GET_DENTISTRY_REQUESTS,
		payload: data,
	};
};

export const loadImagingRequests = data => {
	return {
		type: GET_IMAGING_REQUESTS,
		payload: data,
	};
};

export const loadOpthalmologyRequests = data => {
	return {
		type: GET_OPTHALMOLOGY_REQUESTS,
		payload: data,
	};
};

// vitals
export const loadVitals = data => {
	return {
		type: LOAD_VITALS,
		payload: data,
	};
};

export const updateVitals = data => {
	return {
		type: UPDATE_VITALS,
		payload: data,
	};
};

const create_lab_request = data => {
	return {
		type: CREATE_LAB_REQUEST,
		payload: data,
	};
};

const get_requests_by_type = data => {
	return {
		type: GET_REQUESTS_BY_TYPE,
		payload: data,
	};
};

const add_pharmacy_request = data => {
	return {
		type: ADD_PHARMACY_REQUEST,
		payload: data,
	}
}

export const createLabRequest = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/patient/save-request`, {
					requestType: data.service_center,
					category_id: data.category,
					requestBody: {
						specialization: '',
						sessionCount: '',
						combination: data.lab_combo,
						test: data.lab_test,
						referredSpeciment: data.referred_specimen,
						requestNote: data.request_note,
					},
					patient_id: data.patient_id,
				})
				.then(response => {
					dispatch(create_lab_request(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getRequestByType = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/patient/${data}/request/lab?startDate=&endDate=`)
				.then(response => {
					dispatch(get_requests_by_type(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const addPharmacyRequest = (data, id, diagnosis, prescription, cb) => {
	return dispatch => {
		const requestData = data ? data.map(request => ({
			forumalary: request.formulary,
			drug_generic_name: request.genericName,
			drug_name: request.drugName,
			dose_quantity: request.quantity,
			refillable: {
				number_of_refills: request && request.refills ? request.refills : 0,
				eg: request && request.eg ? request.eg : 0,
				frequency_type: request && request.frequency ? request.frequency : "",
				duration: request && request.duration ? request.duration : 0,
				note: request && request.refillNote ? request.refillNote : "",
			}
		})) : [];
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/patient/${id ? id : ""}/request/pharmacy?startDate=&endDate=`, {
					requestType: "pharmacy",
					requestBody: requestData,
					diagnosis: diagnosis ? diagnosis : "",
					prescription: prescription ? prescription : "",
					patient_id: id ? id : ""
				})
				.then(response => {
					dispatch(add_pharmacy_request(response.data));
					cb('success')
					return resolve({ success: true });
				})
				.catch(error => {
					cb(null)
					return reject({ success: false });
				});
		});
	};
};
