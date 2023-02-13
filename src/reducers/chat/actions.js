import {
	CHAT_USER,
	ACTIVE_USER,
	FULL_USER,
	ADD_LOGGED_USER,
	CREATE_GROUP,
	ALL_CONTACT,
	NEW_MESSAGE,
	ACTIVE_GROUP,
} from './constants';

export const getContact = data => ({
	type: ALL_CONTACT,
	payload: data,
});

export const chatUser = () => ({
	type: CHAT_USER,
});

export const activeUser = userId => ({
	type: ACTIVE_USER,
	payload: userId,
});
export const activeGroup = userId => ({
	type: ACTIVE_GROUP,
	payload: userId,
});
export const newMessage = data => ({
	type: NEW_MESSAGE,
	payload: data,
});

export const setFullUser = fullUser => ({
	type: FULL_USER,
	payload: fullUser,
});

export const addLoggedinUser = userData => ({
	type: ADD_LOGGED_USER,
	payload: userData,
});

export const createGroup = groupData => ({
	type: CREATE_GROUP,
	payload: groupData,
});
