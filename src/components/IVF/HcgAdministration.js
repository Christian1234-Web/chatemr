import React, { useState, useEffect, useCallback } from 'react';

import CreateHcg from '../Modals/CreateHcg';
import {
	request,
	parseAvatar,
	patientname,
	staffname,
} from '../../services/utilities';
import { useSelector } from 'react-redux';
import { EMBRYOLOGY_ID } from '../../services/constants';
import SSRStorage from '../../services/storage';
const storage = new SSRStorage();

const HcgAdministration = () => {
	const [tab, setTab] = useState('chart');
	const [showModal, setShowModal] = useState(false);
	const [hcg, setHcg] = useState([]);
	const patient = useSelector(state => state.user.patient);

	const newEntry = () => {
		document.body.classList.add('modal-open');
		setShowModal(true);
	};

	const closeModal = async () => {
		setShowModal(false);
		fetchHcg();
		document.body.classList.remove('modal-open');
	};

	const editHcg = i => {
		const emb = hcg[i];
		console.log(emb);
	};
	const fetchHcg = useCallback(async () => {
		try {
			const url = `ivf/hcg-administration?hcg_id=&patient_id=${patient.id}`;
			const rs = await request(url, 'GET', true);
			console.log(rs);
			setHcg(rs.patient.hcg);
		} catch (err) {
			console.log(err);
		}
	}, [patient.id]);

	useEffect(() => {
		fetchHcg();
	}, [fetchHcg]);
	return (
		<>
			<div className="col-sm-12">
				<div className="element-wrapper embryology">
					<div className="element-actions flex-action">
						<a
							className="btn btn-sm btn-secondary text-white ml-3"
							onClick={() => newEntry()}
						>
							New Hcg Administration
						</a>
						{showModal && <CreateHcg closeModal={closeModal} />}
					</div>
				</div>
				<div className="element-wrapper">
					<h6 className="element-header">HCG Administration</h6>
					<div className="">
						<div className="table-responsive">
							<table className="table table-padded">
								<thead>
									<tr>
										<th></th>
										<th>Patient</th>
										<th>File No</th>
										<th>Time Of Entry</th>
										<th>Time Of Admin</th>
										<th>Type Of HCG & Dosage</th>
										<th>Route Of Admin</th>
										<th>Doctors or Nurse Signature</th>
										<th>Remarks</th>

										<th className="text-center">Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{hcg.map((e, i) => {
										return (
											<tr key={i}>
												<td className="text-center">
													<input className="form-control" type="checkbox" />
												</td>
												<td>
													<div className="user-with-avatar">
														<img
															alt=""
															src={parseAvatar(patient?.profile_pic)}
														/>
														<span>{patientname(patient)} </span>
													</div>
												</td>
												<td>
													<div className="user-with-avatar">
														<span>{patient.id || '--'}</span>
													</div>
												</td>

												<td>
													<div className="">
														{new Date(e.createdAt).toLocaleTimeString()}
													</div>
												</td>

												<td className="text-center">
													<span>
														{new Date(e.timeOfAdmin).toLocaleTimeString()}
													</span>
												</td>
												<td className="text-center">
													<span>
														{e.typeOfHcg} & {e.typeOfDosage}
													</span>
												</td>
												<td className="text-center">
													<span>{e.routeOfAdmin}</span>
												</td>
												<td className="text-center">{staffname(e.staff)}</td>
												<td className="text-center">
													<span>{e.remarks}</span>
												</td>
												<td className="text-center">
													<a className="badge badge-success-inverted" href="">
														{new Date(e.createdAt).toDateString()}
													</a>
												</td>

												<td className="row-actions">
													<span
														onClick={() => editHcg(i)}
														style={{ cursor: 'pointer' }}
													>
														<i className="os-icon os-icon-grid-10"></i>
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HcgAdministration;
