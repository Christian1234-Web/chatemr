import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { API_URI } from '../../services/constants';
import { newMessage } from '../../reducers/actions';
// const socket = io(`${API_URI}/chat`, { transports: ['websocket', 'polling'] });;
import { socket } from './UserChat';

function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [lastPong, setLastPong] = useState(null);
	const active_user = useSelector(state => state.user.profile);
	const recipientId = useSelector(state => state.Chat.active_user).toString();
	const senderId = active_user.details.id.toString();
	const chat_id = `${senderId}-${recipientId}`;
	// console.log(chat_id, senderId);
	const dispatch = useDispatch();

	// useEffect(() => {
	//     socket.on('connect', () => {
	//         setIsConnected(true);
	//         // console.log('true');

	//     });

	//     socket.on('disconnect', () => {
	//         setIsConnected(false);
	//     });
	//     socket.on(262, (e) => {
	//         // console.log(e, '262');
	//         // dispatch(newMessage(e));
	//     });
	//     socket.on(315, (e) => {
	//         console.log(e, '315');
	//         // dispatch(newMessage(e));
	//     });
	//     socket.on(1, (e) => {
	//         console.log(e, '1');
	//         // dispatch(newMessage(e));
	//     });

	//     return () => {
	//         socket.off('connect');
	//         socket.off('disconnect');
	//         // socket.off('pong');
	//     };
	// }, []);
	let data = {
		body: 'Good day Everyone',
		sender_id: 262,
		recipient_id: null,
		room_id: 1,
	};
	return (
		<div
			onClick={() => {
				socket.emit('send_chat', data);
			}}
		>
			click me
			{/* {isConnected === true ? 'True' : 'False'} */}
		</div>
	);
}

export default App;
