import {
	SET_PROFILE,
	TOGGLE_MODE,
	TOGGLE_FULLSCREEN,
	INIT_MODE,
	INIT_FULLSCREEN,
	SET_PATIENT_RECORD,
	TOGGLE_PROFILE,
} from '../actions/types';
import SSRStorage from '../services/storage';
import { FULLSCREEN_COOKIE, MODE_COOKIE } from '../services/constants';

const storage = new SSRStorage();

const INITIAL_STATE = {
	profile: null,
	loggedIn: true,
	theme_mode: false,
	fullscreen: false,
	userID: null,
	patient: null,
	staff: null,
	isStaffOpen: false,
	isPatientOpen: false,
};

const user = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return { ...state, profile: action.payload, loggedIn: action.status };
		case TOGGLE_MODE:
			storage.setItem(MODE_COOKIE, !state.theme_mode);
			const theme_mode = !state.theme_mode;
			console.log(`theme_mode: ${JSON.stringify(theme_mode)}`);
			console.log(`fullscreen: ${JSON.stringify(state.fullscreen)}`);
			window.document.body.className = `menu-position-side menu-side-left ${state.fullscreen ? 'full-screen' : ''} with-content-panel ${theme_mode ? 'color-scheme-dark' : ''}`;
			return { ...state, theme_mode };
		case TOGGLE_FULLSCREEN:
			storage.setItem(FULLSCREEN_COOKIE, !state.fullscreen);
			const fullscreen = !state.fullscreen;
			console.log(`theme_mode: ${JSON.stringify(state.theme_mode)}`);
			console.log(`fullscreen: ${JSON.stringify(fullscreen)}`);
			window.document.body.className = `menu-position-side menu-side-left ${fullscreen ? 'full-screen' : ''} with-content-panel ${state.theme_mode ? 'color-scheme-dark' : ''}`;
			return { ...state, fullscreen };
		case INIT_MODE:
			storage.setItem(MODE_COOKIE, action.payload);
			return { ...state, theme_mode: action.payload };
		case INIT_FULLSCREEN:
			storage.setItem(FULLSCREEN_COOKIE, action.payload);
			return { ...state, fullscreen: action.payload };
		case SET_PATIENT_RECORD:
			return { ...state, patient: action.payload };
		case TOGGLE_PROFILE:
			if(action.payload) {
				const type = action.info.type;
				return {
					...state,
					isStaffOpen: (type === 'staff'),
					isPatientOpen: (type === 'patient'),
					userID: action.info.id,
				};
			}

			return {
				...state,
				isStaffOpen: false,
				isPatientOpen: false,
				userID: null,
			};
		default:
			return state;
	}
};

export default user;
