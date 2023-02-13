import { io } from 'socket.io-client';

import { API_URI } from '../../services/constants';
// import { messageService } from './message';
import SSRStorage from '../../services/storage';
export const socket = io(`${API_URI}/chat`, {
	transports: ['websocket', 'polling'],
});
const storage = new SSRStorage();

export const initSocketChat = () => {
	console.log('socket chat initiatied by chris');

	if (socket) {
		socket.on('connect', () => {
			console.log(`connected to socket.io: ${socket.connected}: ${socket.id}`);
		});
		socket.io.on('reconnect', () => {
			console.log(`re-connected to socket.io by chris`);
		});

		socket.on('disconnect', reason => {
			console.log(`user disconnected: ${reason}`);
		});
	}
};

export const subscribeChat = async (e, x) => {
	console.log('line 29', e, x);
	// if (socket) {
	//     socket.on(e, (data) => {
	//         storage.setItem('SOCKETCHAT', data);
	//         console.log('malick')
	//         console.log(data, 'testing socket', e);
	//     })

	//     let ba = await socket.on(x, (data) => {
	//         console.log(data, 'testing socket', x);
	//         localStorage.setItem('SOCKETCHAT', JSON.stringify(data));
	//         let a = localStorage.getItem('SOCKETCHAT');
	//         console.log('faruk', JSON.parse(a), 'hey people');
	//         return data;
	//     });
	//     let message = localStorage.getItem('SOCKETCHAT');
	//     console.log(ba, 'aa');
	//     console.log(JSON.parse(message));
	//     // return message;
	//     // localStorage.clear('SOCKETCHAT');
	// }
};

export const emitChat = (event, data) => {
	if (socket) {
		socket.emit(event, data);
	}
};

export const disconnectSocketChat = () => {
	if (socket) socket.disconnect();
};

export const getSocketChat = () => socket;
