import { io } from 'socket.io-client';

import { API_URI } from './constants';
import { messageService } from './message';

// import SSRStorage from './storage';
// const storage = new SSRStorage();

let socket;

export const initSocket = () => {
	console.log('socket initiatied');

	socket = io(`${API_URI}/socket`, { transports: ['websocket', 'polling'] });

	if (socket) {
		socket.on('connect', () => {
			console.log(`connected to socket.io: ${socket.connected}: ${socket.id}`);
		});

		socket.io.on('reconnect', () => {
			console.log(`re-connected to socket.io`);
		});

		socket.on('disconnect', reason => {
			console.log(`user disconnected: ${reason}`);
		});
	}
};
// export const initSocketChat = () => {
// 	console.log('socket chat initiatied by chris');

// 	socket = io(`${API_URI}/chat`, { transports: ['websocket', 'polling'] });

// 	if (socket) {
// 		socket.on('connect', () => {
// 			console.log(`connected to socket.io: ${socket.connected}: ${socket.id}`);
// 		});
// 		socket.io.on('reconnect', () => {
// 			console.log(`re-connected to socket.io by chris`);
// 		});

// 		socket.on('disconnect', reason => {
// 			console.log(`user disconnected: ${reason}`);
// 		});
// 	}
// };
// export const subscribeChat = async (e, x) => {
// 	console.log('line 29', e, x)
// 	if (socket) {
// 		await socket.on(e, (data) => {
// 			storage.setItem('SOCKETCHAT', data);
// 			console.log(data, 'testing socket', e);
// 		})

// 		await socket.on(x, (data) => {
// 			console.log(data, 'testing socket', x);
// 			storage.setItem('SOCKETCHAT', data);
// 		});
// 	}
// };

export const subscribeIO = () => {
	if (socket) {
		// new appointment
		socket.on('new-appointment', data => {
			messageService.sendMessage({ type: 'new-appointment', data });
		});

		// new transactions
		socket.on('paypoint-queue', data => {
			console.log(data, 'testing socket');
		});

		// nursing vitals
		socket.on('nursing-queue', data => {
			messageService.sendMessage({ type: 'nursing-queue', data });
		});

		// consultation queue
		socket.on('consultation-queue', data => {
			messageService.sendMessage({ type: 'consultation-queue', data });
		});

		// update appointment
		socket.on('appointment-update', data => {
			messageService.sendMessage({ type: 'appointment-update', data });
		});
	}
};

export const emit = (event, data) => {
	if (socket) {
		socket.emit(event, data);
	}
};

export const disconnectSocket = () => {
	if (socket) {
		socket.disconnect();
	}
};

export const getSocket = () => socket;
