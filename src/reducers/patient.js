import {
	NEXT_STEP,
	PREV_STEP,
	SAVE_ALLERGIES,
	GET_ALLERGIES,
	ALLERGY,
	UPDATE_ALLERGY,
	DELETE_ALLERGY,
	GET_IMAGING_REQUESTS,
	LOAD_VITALS,
	UPDATE_VITALS,
	GET_LAB_REQUESTS,
	GET_PHARMACY_REQUESTS,
	GET_ALL_REQUESTS,
	LOAD_CLINICAL_LAB,
	LOAD_RADIOLOGY,
	LOAD_ANTENATAL_ASSESSMENT,
	LOAD_LABOUR,
	LOAD_LABOUR_DETAIL,
	CLEAR_LABOUR_DETAIL,
	LOAD_PARTOGRAPH,
	LOAD_RISK,
	PATIENT_REGULATION_TABLE,
	LOAD_DELIVERY_RECORD,
	LOAD_LABOUR_MEASUREMENT,
	PATIENT_IVF,
	GET_ALL_OPD_LAB_APPOINTMENTS,
	READING_DONE,
	SET_IVF,
	RESET_STEP,
	CAN_CLOSE_LABOUR,
	UPDATE_ENCOUNTER_DATA,
	RESET_ENCOUNTER_DATA,
	UPDATE_SOAP_DATA,
} from '../actions/types';
import { updateImmutable } from '../services/utilities';

const soapData = {
	complaints: '',
	reviewOfSystem: [],
	physicalExaminationSummary: '',
	diagnosis: [],
	treatmentPlan: '',
};

const INITIAL_STATE = {
	formStep: 1,
	formData: {},
	allergy: {},
	allergies: [],
	imagingRequests: [],
	vitals: [],
	ivfDetails: {},
	clinicalLab: [],
	opdLabAppointments: [],
	radiology: [],
	labRequests: [],
	pharmacyRequests: [],
	allRequests: [],
	ivf: {},
	encounterData: {
		complaints:
			'<p><u>Presenting Complaints:</u>​&nbsp;</p><p><br></p><p><br></p><p><br></p><p><u>History of complains</u>:&nbsp;</p><p><br></p>',
		reviewOfSystem: [],
		patientHistory: null,
		patientHistorySelected: [],
		medicalHistory:
			'<p><u>Past Medical History:</u>​&nbsp;</p><p><br></p><p><br></p><p><br></p><p><u><br></p>',
		allergies: [],
		pastAllergies: [],
		physicalExamination: [],
		diagnosis: [],
		pastDiagnosis: [],
		investigations: {
			labRequest: null,
			radiologyRequest: null,
			pharmacyRequest: null,
			procedureRequest: null,
		},
		treatmentPlan: '<p><u>Treatment Plan:</u>​&nbsp;</p><p><br></p>',
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
	antenatalAssessment: [],
	enrolments: [],
	labourDetail: null,
	partographies: [],
	riskAssessment: [],
	deliveryRecord: [],
	labourMeasurement: [],
	reading_done: null,
	canCloseLabour: false,
};

const patient = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_IVF:
			console.log(SET_IVF);
			return { ...state, ivfDetails: action.payload };
		case CAN_CLOSE_LABOUR:
			return { ...state, canCloseLabour: true };
		case NEXT_STEP:
			console.log(action.payload);
			return { ...state, formData: action.payload, formStep: 2 };
		case RESET_STEP:
			return { ...state, formStep: 1, formData: {} };
		case PREV_STEP:
			return { ...state, formStep: action.payload };
		case GET_ALLERGIES:
			return { ...state, allergies: action.payload };
		case SAVE_ALLERGIES:
			return { ...state, allergies: [...state.allergies, action.payload] };
		case ALLERGY:
			return { ...state, allergy: action.payload };
		case PATIENT_IVF:
			return { ...state, ivf: action.payload };
		case PATIENT_REGULATION_TABLE:
			return { ...state, regulationTable: action.payload };
		case UPDATE_ENCOUNTER_DATA:
			return {
				...state,
				encounterData: { ...action.payload },
			};
		case UPDATE_SOAP_DATA:
			return {
				...state,
				soapData: { ...action.payload },
			};
		case RESET_ENCOUNTER_DATA:
			return {
				...state,
				encounterData: action.payload,
				soapData,
			};
		case GET_IMAGING_REQUESTS:
			return { ...state, imagingRequests: action.payload };
		case UPDATE_ALLERGY:
			const allergens = updateImmutable(state.allergies, action.payload);
			return {
				...state,
				allergies: [...allergens],
			};
		case DELETE_ALLERGY:
			return {
				...state,
				allergies: state.allergies.filter(
					item => item.id !== action.payload.id
				),
			};
		case LOAD_VITALS:
			return { ...state, vitals: [...action.payload] };
		case UPDATE_VITALS:
			return { ...state, vitals: [action.payload, ...state.vitals] };
		case LOAD_CLINICAL_LAB:
			return { ...state, clinicalLab: [...action.payload] };
		case LOAD_RADIOLOGY:
			return { ...state, radiology: [...action.payload] };
		case GET_LAB_REQUESTS:
			return { ...state, labRequests: action.payload };
		case GET_PHARMACY_REQUESTS:
			return { ...state, pharmacyRequests: action.payload };
		case GET_ALL_REQUESTS:
			return { ...state, allRequests: action.payload };

		case LOAD_ANTENATAL_ASSESSMENT:
			return {
				...state,
				antenatalAssessment: action.payload,
			};
		case LOAD_LABOUR:
			return {
				...state,
				enrolments: action.payload,
			};
		case LOAD_LABOUR_DETAIL:
			return {
				...state,
				labourDetail: action.payload,
			};
		case CLEAR_LABOUR_DETAIL:
			return {
				...state,
				labourDetail: {},
			};
		case LOAD_PARTOGRAPH:
			return {
				...state,
				partographies: action.payload,
			};
		case LOAD_RISK:
			return {
				...state,
				riskAssessment: action.payload,
			};
		case LOAD_DELIVERY_RECORD:
			return {
				...state,
				deliveryRecord: action.payload,
			};
		case LOAD_LABOUR_MEASUREMENT:
			return {
				...state,
				labourMeasurement: action.payload,
			};
		case GET_ALL_OPD_LAB_APPOINTMENTS:
			return {
				...state,
				opdLabAppointments: action.payload,
			};
		case READING_DONE:
			return { ...state, reading_done: action.payload };
		default:
			return state;
	}
};

export default patient;
