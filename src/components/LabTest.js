import React, { useState, useEffect, useCallback } from 'react';
import Pagination from 'antd/lib/pagination';

import HmoTests from './Lab/HmoTests';
import { request, itemRender } from '../services/utilities';
import { hmoAPI } from '../services/constants';
import { notifyError } from '../services/notify';

const LabTest = ({ doToggleForm }) => {
	const [toggled, setToggled] = useState([]);
	const [schemes, setSchemes] = useState([]);
	const [meta, setMeta] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const doToggle = index => {
		const found = toggled.find(t => t.id === index);
		if (found) {
			setToggled([...toggled.filter(t => t.id !== index)]);
		} else {
			setToggled([...toggled, { id: index }]);
		}
	};

	const fetchHmos = useCallback(async page => {
		try {
			const p = page || 1;
			const url = `${hmoAPI}/schemes?page=${p}&limit=10`;
			const rs = await request(url, 'GET', true);
			const { result, ...meta } = rs;
			setSchemes([...result]);
			setToggled([]);
			setMeta(meta);
			setLoaded(true);
		} catch (e) {
			console.log(e);
			notifyError('could not fetch hmo schemes');
			setLoaded(true);
		}
	}, []);

	useEffect(() => {
		if (!loaded) {
			fetchHmos();
		}
	}, [fetchHmos, loaded]);

	const onNavigatePage = nextPage => {
		fetchHmos(nextPage);
	};

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="rentals-list-w" style={{ flexDirection: 'column' }}>
					{schemes.map((hmo, i) => {
						const toggle = toggled.find(t => t.id === i);
						return (
							<HmoTests
								key={i}
								index={i}
								hmo={hmo}
								toggle={toggle}
								doToggle={doToggle}
								doToggleForm={doToggleForm}
							/>
						);
					})}
				</div>
				{meta && (
					<div className="pagination pagination-center mt-4">
						<Pagination
							current={parseInt(meta.currentPage, 10)}
							pageSize={parseInt(meta.itemsPerPage, 10)}
							total={parseInt(meta.totalPages, 10)}
							showTotal={total => `Total ${total} HMOs`}
							itemRender={itemRender}
							onChange={current => onNavigatePage(current)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default LabTest;
