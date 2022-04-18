import { LOAD_PERMISSIONS, ADD_PERMISSION } from '../actions/types';

const permission = (state = [], action) => {
	switch (action.type) {
		case LOAD_PERMISSIONS:
			return [...action.payload];
		case ADD_PERMISSION:
			return [action.payload, ...state];
		default:
			return state;
	}
};

export default permission;
