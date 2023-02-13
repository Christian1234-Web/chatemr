import React, { useState } from 'react';
import HcgAdministration from '../IVF/Hcg_Administration';

const CreateHcg = ({ closeModal }) => {
	const [tab, setTab] = useState('chart');

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
						<h4 className="onboarding-title">New HCG Administration</h4>

						<div className="p-3">
							<div className="row">
								<div className="col-md-12">
									{tab === 'chart' && (
										<HcgAdministration closeModal={closeModal} />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateHcg;
