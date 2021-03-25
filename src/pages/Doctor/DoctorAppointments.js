import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'antd/lib/date-picker';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'antd/lib/pagination';

import waiting from '../../assets/images/waiting.gif';
import { formatDateStr, request, itemRender } from '../../services/utilities';
import AppointmentTable from '../../components/Doctor/AppointmentTable';
import { socket } from '../../services/constants';
import { loadAppointments, updateAppointment } from '../../actions/appointment';
import { notifyError } from '../../services/notify';
import { startBlock, stopBlock } from '../../actions/redux-block';

const { RangePicker } = DatePicker;

const DoctorAppointments = () => {
	const [state, setState] = useState({
		filtering: false,
		loading: false,
		id: null,
		startDate: '',
		endDate: '',
		status: '',
		meta: null,
	});
	const [listenning, setListenning] = useState(false);

	const profile = useSelector(state => state.user.profile);
	const appointments = useSelector(state => state.appointment.list);

	const dispatch = useDispatch();

	const init = useCallback(
		async page => {
			try {
				const staff = profile.details;
				setState({ loading: true });
				const url = `front-desk/appointments?startDate=${state.startDate}&endDate=${state.endDate}`;
				const rs = await request(url, 'GET', true);
				const { result, ...meta } = rs;
				const arr = [...result];
				dispatch(
					loadAppointments(
						arr.filter(appointment => appointment.whomToSee.id === staff.id)
					)
				);
				setState({ ...state, loading: false, filtering: false, meta });
				dispatch(stopBlock());
			} catch (error) {
				console.log(error);
				dispatch(stopBlock());
				setState({ ...state, loading: false, filtering: false });
				notifyError(error.message || 'could not fetch transactions');
			}
		},
		[dispatch, profile, state]
	);

	useEffect(() => {
		if (!listenning) {
			setListenning(true);
			init();

			socket.on('appointment-update', data => {
				if (data.action === 1) {
					dispatch(updateAppointment(data.appointment));
				}
			});
		}
	}, [dispatch, init, listenning]);

	const doFilter = e => {
		e.preventDefault();
		setState({ ...state, filtering: true });
		init();
	};

	const onNavigatePage = nextPage => {
		dispatch(startBlock());
		init(nextPage);
	};

	// const change = e => {
	// 	//console.log(e.target.value)
	// 	setState({ ...state, [e.target.name]: e.target.value });
	// };

	const dateChange = e => {
		let date = e.map(d => {
			return formatDateStr(d._d);
		});

		setState({
			...state,
			startDate: date[0],
			endDate: date[1],
		});
	};

	const { filtering, loading, meta } = state;

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="element-wrapper">
					<div className="element-actions">
						<form style={{ display: 'flex' }}>
							<div className="mr-2">
								<RangePicker onChange={e => dateChange(e)} />
							</div>
							<div>
								<button
									className="btn btn-sm btn-primary btn-upper text-white filter-btn"
									onClick={doFilter}>
									<i className="os-icon os-icon-ui-37" />
									<span>
										{filtering ? (
											<img src={waiting} alt="submitting" />
										) : (
											'Filter'
										)}
									</span>
								</button>
							</div>
						</form>
					</div>
					<h6 className="element-header">Appointment History </h6>
					<div className="element-content">
						<div className="element-box-tp">
							<div className="table-responsive">
								<AppointmentTable
									appointments={appointments}
									loading={loading}
									today={false}
								/>
							</div>
						</div>

						{meta && (
							<div className="pagination pagination-center mt-4">
								<Pagination
									current={parseInt(meta.currentPage, 10)}
									pageSize={parseInt(meta.itemsPerPage, 10)}
									total={parseInt(meta.totalPages, 10)}
									showTotal={total => `Total ${total} appointments`}
									itemRender={itemRender}
									onChange={current => onNavigatePage(current)}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(DoctorAppointments);
