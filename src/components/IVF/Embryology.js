/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import EmbryoTransfer from './EmbryoTransfer';
import EmbryoAssessment from './EmbryoAssessment';
import IcsiRecord from './IcsiRecord';
import SpermPreparation from './SpermPreparation';
import TreatmentChart from './TreatmentChart';
import CreateEmbryology from '../Modals/CreateEmbryology';

const Embryology = () => {
	const [tab, setTab] = useState('chart');
	const [showModal, setShowModal] = useState(false);

	const newEntry = () => {
		document.body.classList.add('modal-open');
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		document.body.classList.remove('modal-open');
	};

	return (
		<div className="col-sm-12">
			<div className="element-wrapper embryology">
				<div className="element-actions flex-action">
					<a
						className="btn btn-sm btn-secondary text-white ml-3"
						onClick={() => newEntry()}
					>
						New Embryology
					</a>
					{showModal && <CreateEmbryology closeModal={closeModal} />}
				</div>
			</div>
		</div>
	);
};

export default Embryology;
