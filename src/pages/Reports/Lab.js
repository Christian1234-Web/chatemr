import React, { useState, useEffect } from 'react';
import { notifyError } from '../../services/notify';
import { request, itemRender } from '../../services/utilities';

const Lab = () => {
	const [filtering, setFiltering] = useState(false);
	const [loading, setLoading] = useState(false);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [status, setStatus] = useState('');
	const [labs, setLabs] = useState([]);
	const [meta, setMeta] = useState(null);
	const [patientId, setPatientId] = useState('');

	useEffect(() => {
		fetchLabs();
	}, [labs.length]);

	const fetchLabs = async page => {
		try {
			setLoading(true);
			const p = page || 1;
			const url = `requests/list/labs?page=${p}&limit=10&startDate=${startDate}&endDate=${endDate}&status=${status}&patient_id=${patientId}`;
			const rs = await request(url, 'GET', true);
			console.log('ressss', rs);
			const { result, ...meta } = rs;
			setLabs(result);
			setLoading(false);
			setFiltering(false);
			setMeta(meta);
		} catch (err) {
			console.log('Lab fetching error', err);
			notifyError('Error fetching all lab request');
		}
	};
	console.log('metaaa', meta);
	console.log('malik lab', labs);
	return <div>Lab</div>;
};

export default Lab;
