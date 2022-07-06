import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import startCase from 'lodash.startcase';

import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifySuccess, notifyError } from '../../services/notify';
import { request } from '../../services/utilities';
import { noteTypes, specialties } from '../../services/constants';
import { messageService } from '../../services/message';
import ModalHeader from '../ModalHeader';
import EmbryoAssessment from '../IVF/EmbryoAssessment';
import EmbryoTransfer from '../IVF/EmbryoTransfer';
import IcsiRecord from '../IVF/IcsiRecord';
import SpermPreparation from '../IVF/SpermPreparation';
import TreatmentChart from '../IVF/TreatmentChart';
import Sperm from '../IVF/Sperm';
import Oocyte from '../IVF/Oocyte';

const CreateFreezing = ({ closeModal }) => {
	const [tab, setTab] = useState('sperm');

	return (
		<div
			className="onboarding-modal modal fade animated show"
			role="dialog"
			style={{ display: 'block' }}
		>
			<div
				className="modal-dialog modal-centered"
				style={{ maxWidth: '1024px' }}
			>
				<div className="modal-content text-center">
					<button
						aria-label="Close"
						className="close"
						type="button"
						onClick={closeModal}
					>
						<span className="os-icon os-icon-close"></span>
					</button>
					<div className="onboarding-content with-gradient">
						<h4 className="onboarding-title">New Freezing</h4>
						<div className="os-tabs-w">
							<div className="os-tabs-controls os-tabs-complex">
								<ul className="nav nav-tabs">
									<li className="nav-item">
										<a
											className={`nav-link ${tab === 'sperm' ? 'active' : ''}`}
											onClick={() => setTab('sperm')}
										>
											<span className="tab-label">SPERM</span>
										</a>
									</li>
									<li className="nav-item">
										<a
											className={`nav-link ${tab === 'oocyte' ? 'active' : ''}`}
											onClick={() => setTab('oocyte')}
										>
											<span className="tab-label">OOCYTE / EMB</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="element-box-tp p-3">
							<div className="row">
								<div className="col-md-12">
									{tab === 'sperm' && <Sperm />}
									{tab === 'oocyte' && <Oocyte />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateFreezing;
