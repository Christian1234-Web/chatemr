import SSRStorage from '../services/storage';
import { CK_ASSESSMENT, CK_ENCOUNTER } from '../services/constants';
import {
	LOAD_VITALS,
	UPDATE_VITALS,
	GET_LAB_REQUESTS,
	GET_PHARMACY_REQUESTS,
	GET_ALL_REQUESTS,
	PATIENT_REGULATION_TABLE,
	PATIENT_IVF,
	READING_DONE,
	SET_IVF,
	UPDATE_ENCOUNTER_DATA,
	RESET_ENCOUNTER_DATA,
	UPDATE_SOAP_DATA,
	UPDATE_ASSESSMENT_DATA,
} from '../actions/types';

const storage = new SSRStorage();

const soapData = {
	complaints: '',
	reviewOfSystem: [],
	physicalExaminationSummary: '',
	diagnosis: [],
	treatmentPlan: '',
};

const INITIAL_STATE = {
	vitals: [],
	ivfDetails: {},
	labRequests: [],
	pharmacyRequests: [],
	allRequests: [],
	ivf: {},
	encounterData: {
		complaints:
			'<p><u>Presenting Complaints/History of complains:</u>&nbsp;</p><p><br></p><p><br></p><p><br></p><p><u><br></p>',
		reviewOfSystem: [],
		patientHistorySelected: [],
		medicalHistory:
			'<p><u>Past Medical History:</u>&nbsp;</p><p><br></p><p><br></p><p><br></p><p><u><br></p>',
		allergies: [],
		pastAllergies: [],
		physicalExamination: [],
		physicalExaminationNote: '',
		diagnosis: [],
		pastDiagnosis: [],
		investigations: {
			labRequest: null,
			radiologyRequest: null,
			pharmacyRequest: null,
			procedureRequest: null,
		},
		treatmentPlan: '<p><u>Treatment Plan:</u>&nbsp;</p><p><br></p>',
		nextAppointment: null,
		instruction: '',
		consumables: null,
	},
	soapData: {
		complaints: '',
		reviewOfSystem: [],
		physicalExaminationSummary: '',
		diagnosis: [],
		pastDiagnosis: [],
		treatmentPlan: '',
	},
	assessmentData: {
		comment: '',
		general: null,
		labRequest: null,
		radiologyRequest: null,
		pharmacyRequest: null,
		nextAppointment: null,
	},
	reading_done: null,
};

const patient = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_IVF:
			console.log(SET_IVF);
			return { ...state, ivfDetails: action.payload };
		case PATIENT_IVF:
			return { ...state, ivf: action.payload };
		case PATIENT_REGULATION_TABLE:
			return { ...state, regulationTable: action.payload };
		case UPDATE_ENCOUNTER_DATA:
			storage.setLocalStorage(CK_ENCOUNTER, {
				patient_id: action.patient_id,
				encounter: { ...action.payload },
			});
			return {
				...state,
				encounterData: { ...action.payload },
			};
		case UPDATE_SOAP_DATA:
			return {
				...state,
				soapData: { ...action.payload },
			};
		case UPDATE_ASSESSMENT_DATA:
			storage.setLocalStorage(CK_ASSESSMENT, {
				patient_id: action.patient_id,
				assessment: action.payload,
			});
			return {
				...state,
				assessmentData: action.payload,
			};
		case RESET_ENCOUNTER_DATA:
			return {
				...state,
				encounterData: action.payload,
				soapData,
			};
		case LOAD_VITALS:
			return { ...state, vitals: [...action.payload] };
		case UPDATE_VITALS:
			return { ...state, vitals: [action.payload, ...state.vitals] };
		case GET_LAB_REQUESTS:
			return { ...state, labRequests: action.payload };
		case GET_PHARMACY_REQUESTS:
			return { ...state, pharmacyRequests: action.payload };
		case GET_ALL_REQUESTS:
			return { ...state, allRequests: action.payload };
		case READING_DONE:
			return { ...state, reading_done: action.payload };
		default:
			return state;
	}
};

export default patient;
