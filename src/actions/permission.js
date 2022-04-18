import { LOAD_PERMISSIONS, ADD_PERMISSION } from './types';

export const loadPermissions = payload => {
	return {
		type: LOAD_PERMISSIONS,
		payload,
	};
};

export const addPermission = role => {
	return {
		type: ADD_PERMISSION,
		payload: role,
	};
};
