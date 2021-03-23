import axios from 'axios';
import { request } from '../services/utilities';
import { API_URI } from '../services/constants';
import {
	ADD_ROOM,
	GET_ALL_ROOMS,
	UPDATE_ROOM,
	DELETE_ROOM,
	ADD_ROOM_CATEGORY,
	GET_ALL_ROOM_CATEGORIES,
	UPDATE_ROOM_CATEGORY,
	DELETE_ROOM_CATEGORY,
	ADD_LAB_TEST,
	SET_LAB_TESTS,
	UPDATE_LAB_TEST,
	DELETE_LAB_TEST,
	ADD_LAB_TEST_CATEGORY,
	GET_ALL_LAB_TEST_CATEGORIES,
	UPDATE_LAB_TEST_CATEGORY,
	DELETE_LAB_TEST_CATEGORY,
	ADD_LAB_TEST_PARAMETER,
	GET_ALL_LAB_TEST_PARAMETERS,
	UPDATE_LAB_TEST_PARAMETER,
	DELETE_LAB_TEST_PARAMETER,
	ADD_LEAVE_CATEGORY,
	GET_ALL_LEAVE_CATEGORIES,
	UPDATE_LEAVE_CATEGORY,
	DELETE_LEAVE_CATEGORY,
	ADD_SPECIALIZATION,
	GET_ALL_SPECIALIZATIONS,
	UPDATE_SPECIALIZATION,
	DELETE_SPECIALIZATION,
	LOAD_STAFFS,
	ADD_REQUEST_SERVICE,
	GET_ALL_REQUEST_SERVICES,
	UPDATE_REQUEST_SERVICE,
	DELETE_REQUEST_SERVICE,
	ADD_LAB_GROUP,
	UPDATE_LAB_GROUP,
	DELETE_LAB_GROUP,
	GET_ALL_LAB_GROUPS,
	LOAD_SERVICES,
	ADD_SERVICE,
	UPDATE_SERVICE,
	DELETE_SERVICE,
	LOAD_SERVICES_CATEGORIES,
} from './types';

//Request Service
export const add_request_service = payload => {
	return {
		type: ADD_REQUEST_SERVICE,
		payload,
	};
};

export const get_all_request_services = payload => {
	return { type: GET_ALL_REQUEST_SERVICES, payload };
};

export const update_request_service = (payload, previousData) => {
	return { type: UPDATE_REQUEST_SERVICE, payload, previousData };
};

export const delete_request_service = payload => {
	return {
		type: DELETE_REQUEST_SERVICE,
		payload,
	};
};

//room
export const add_room = payload => {
	return {
		type: ADD_ROOM,
		payload,
	};
};

export const get_all_room = payload => {
	return {
		type: GET_ALL_ROOMS,
		payload,
	};
};

export const update_room = (payload, previousData) => {
	return {
		type: UPDATE_ROOM,
		payload,
		previousData,
	};
};

export const delete_room = payload => {
	return {
		type: DELETE_ROOM,
		payload,
	};
};

export const add_room_category = payload => {
	return {
		type: ADD_ROOM_CATEGORY,
		payload,
	};
};

export const get_all_room_category = payload => {
	return {
		type: GET_ALL_ROOM_CATEGORIES,
		payload,
	};
};

export const update_room_category = (payload, previousData) => {
	return {
		type: UPDATE_ROOM_CATEGORY,
		payload,
		previousData,
	};
};

export const delete_room_category = payload => {
	return {
		type: DELETE_ROOM_CATEGORY,
		payload,
	};
};

//Services
export const loadServiceCategories = payload => {
	return {
		type: LOAD_SERVICES_CATEGORIES,
		payload,
	};
};

export const loadServices = payload => {
	return {
		type: LOAD_SERVICES,
		payload,
	};
};

export const addService = payload => {
	return {
		type: ADD_SERVICE,
		payload,
	};
};

export const updateService = payload => {
	return {
		type: UPDATE_SERVICE,
		payload,
	};
};

export const deleteService = payload => {
	return {
		type: DELETE_SERVICE,
		payload,
	};
};

//Lab
export const setLabTests = payload => {
	return {
		type: SET_LAB_TESTS,
		payload,
	};
};

export const addLabTest = payload => {
	return {
		type: ADD_LAB_TEST,
		payload,
	};
};

export const updateLabTest = payload => {
	return {
		type: UPDATE_LAB_TEST,
		payload,
	};
};

export const deleteLabTest = payload => {
	return {
		type: DELETE_LAB_TEST,
		payload,
	};
};

const add_lab_group = payload => {
	return {
		type: ADD_LAB_GROUP,
		payload,
	};
};

const get_all_lab_groups = payload => {
	return {
		type: GET_ALL_LAB_GROUPS,
		payload,
	};
};

const update_lab_group = (payload, previousData) => {
	return {
		type: UPDATE_LAB_GROUP,
		payload,
		previousData,
	};
};

const delete_lab_group = payload => {
	return {
		type: DELETE_LAB_GROUP,
		payload,
	};
};

export const addLabCategory = payload => {
	return {
		type: ADD_LAB_TEST_CATEGORY,
		payload,
	};
};

const getLabCategories = payload => {
	return {
		type: GET_ALL_LAB_TEST_CATEGORIES,
		payload,
	};
};

export const updateLabCategory = payload => {
	return {
		type: UPDATE_LAB_TEST_CATEGORY,
		payload,
	};
};

export const deleteLabCategory = payload => {
	return {
		type: DELETE_LAB_TEST_CATEGORY,
		payload,
	};
};

const add_lab_test_parameter = payload => {
	return {
		type: ADD_LAB_TEST_PARAMETER,
		payload,
	};
};

const get_all_lab_test_parameters = payload => {
	return {
		type: GET_ALL_LAB_TEST_PARAMETERS,
		payload,
	};
};

const update_lab_test_parameter = (payload, previousData) => {
	return {
		type: UPDATE_LAB_TEST_PARAMETER,
		payload,
		previousData,
	};
};

const delete_lab_test_parameter = payload => {
	return {
		type: DELETE_LAB_TEST_PARAMETER,
		payload,
	};
};

//Leave Category
export const add_leave_category = payload => {
	return {
		type: ADD_LEAVE_CATEGORY,
		payload,
	};
};

export const get_all_leave_category = payload => {
	return {
		type: GET_ALL_LEAVE_CATEGORIES,
		payload,
	};
};

export const update_leave_category = (payload, previousData) => {
	return {
		type: UPDATE_LEAVE_CATEGORY,
		payload,
		previousData,
	};
};

export const delete_leave_category = payload => {
	return {
		type: DELETE_LEAVE_CATEGORY,
		payload,
	};
};

//Specialization
export const addSpecialization = payload => {
	return {
		type: ADD_SPECIALIZATION,
		payload,
	};
};

export const loadSpecializations = payload => {
	return {
		type: GET_ALL_SPECIALIZATIONS,
		payload,
	};
};

export const updateSpecialization = payload => {
	return {
		type: UPDATE_SPECIALIZATION,
		payload,
	};
};

export const deleteSpecialization = payload => {
	return {
		type: DELETE_SPECIALIZATION,
		payload,
	};
};

export const get_all_staff = payload => {
	return {
		type: LOAD_STAFFS,
		payload,
	};
};

//room
export const addRoom = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/rooms`, {
					name: data.name,
					status: data.status,
					floor: data.floor,
					room_category_id: data.category,
				})
				.then(response => {
					dispatch(add_room(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllRooms = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/rooms`)
				.then(response => {
					dispatch(get_all_room(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const updateRoom = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`rooms/${data.id}/update`, 'PUT', true, {
				name: data.name,
				status: data.status,
				floor: data.status,
				room_category_id: data.category,
			})
				.then(response => {
					dispatch(update_room(response.data, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteRoom = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${API_URI}/rooms/${data.id}`)
				.then(response => {
					dispatch(delete_room(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const addRoomCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/rooms/categories`, {
					name: data.name,
					price: data.price,
					discount: data.discount,
				})
				.then(response => {
					dispatch(add_room_category(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllRoomCategories = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/rooms/categories`)
				.then(response => {
					dispatch(get_all_room_category(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const updateRoomCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.patch(`${API_URI}/rooms/categories/${data.id}/update`, {
					name: data.name,
					price: data.price,
					discount: data.discount,
				})
				.then(response => {
					dispatch(update_room_category(response.data, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteRoomCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${API_URI}/rooms/categories/${data.id}`)
				.then(response => {
					dispatch(delete_room_category(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

//Lab
export const fetchLabTests = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request('lab-tests/unpaginated', 'GET', true)
				.then(response => {
					dispatch(setLabTests(response.result));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const addLabGroup = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests`, 'POST', true, {
				name: data.name,
				price: data.price,
				lab_category_id: data.category,
				test_type: data.testType,
				sub_tests: data.lab_test,
				parameters: data.parameters,
				description: data.description,
			})
				.then(response => {
					dispatch(add_lab_group(response));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllLabGroups = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/unpaginated`, 'GET', true)
				.then(response => {
					const res = response.result.filter(grp => grp.test_type === 'combo');
					dispatch(get_all_lab_groups(res));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false, error });
				});
		});
	};
};

export const updateLabGroup = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/${data.id}/update`, 'PATCH', true, {
				name: data.name,
				lab_category_id: data.category,
				price: data.price,
				test_type: data.testType,
				sub_tests: data.lab_test,
				parameters: data.parameters,
				description: data.description,
			})
				.then(response => {
					dispatch(update_lab_group(response, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteLabGroup = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/${data.id}`, 'DELETE', true)
				.then(response => {
					dispatch(delete_lab_group(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllLabTestCategories = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/categories`, 'GET', true)
				.then(response => {
					dispatch(getLabCategories(response));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const addLabTestParameter = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/parameters`, 'POST', true, {
				name: data.name,
			})
				.then(response => {
					dispatch(add_lab_test_parameter(response));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllLabTestParameters = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/parameters`, 'GET', true)
				.then(response => {
					dispatch(get_all_lab_test_parameters(response));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const updateLabTestParameter = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/parameters/${data.id}/update`, 'PUT', true, {
				name: data.name,
			})
				.then(response => {
					dispatch(update_lab_test_parameter(response, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteLabTestParameters = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			request(`lab-tests/parameters/${data.id}`, 'DELETE', true)
				.then(response => {
					dispatch(delete_lab_test_parameter(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

//Leave Category
export const addLeaveCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/leave-category`, {
					name: data.name,
					duration: data.duration,
				})
				.then(response => {
					dispatch(add_leave_category(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllLeaveCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/leave-category`)
				.then(response => {
					dispatch(get_all_leave_category(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const updateLeaveCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.patch(`${API_URI}/leave-category/${data.id}/update`, {
					name: data.name,
					duration: data.duration,
				})
				.then(response => {
					dispatch(update_leave_category(response.data, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteLeaveCategory = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${API_URI}/leave-category/${data.id}`)
				.then(response => {
					dispatch(delete_leave_category(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

//GET ALL STAFF
export const getAllStaff = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/hr/staffs`)
				.then(response => {
					dispatch(get_all_staff(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const addRequestService = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URI}/request-types`, {
					name: data.name,
					group: data.group,
					amount: data.amount,
				})
				.then(response => {
					dispatch(add_request_service(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const getAllRequestServices = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URI}/request-types`)
				.then(response => {
					dispatch(get_all_request_services(response.data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const updateRequestService = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.patch(`${API_URI}/request-types/${data.id}/update`, {
					name: data.name,
					group: data.group,
					amount: data.amount,
				})
				.then(response => {
					dispatch(update_request_service(response.data, data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};

export const deleteRequestService = data => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${API_URI}/request-types/${data.id}`)
				.then(response => {
					dispatch(delete_request_service(data));
					return resolve({ success: true });
				})
				.catch(error => {
					return reject({ success: false });
				});
		});
	};
};
