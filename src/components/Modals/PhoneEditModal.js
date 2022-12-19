import React, { useState } from 'react';
import { notifyError, notifySuccess } from '../../services/notify';
import { request } from '../../services/utilities';

export const VerifyPhone = ({ closeModal, appointment }) => {
	const [number, setNumber] = useState(appointment?.patient?.phone_number);
	const [changed, setChanged] = useState(false);

	const updatePhoneFunc = e => {
		const { value } = e.target;
		setNumber(value);
		setChanged(true);
	};

	const SubmitPhone = async (id, newnumber, changed) => {
		try {
			let url = `patient/edit/phone/?pid=${id}`;
			let hash_send = `patient/hash/send/?pid=${id}`;

			if (changed) {
				const result = await request(url, 'PATCH', true, {
					phone_number: newnumber,
				});

				if (result.success) {
					setNumber(result.patient?.phone_number);
					notifySuccess('Phone saved!');
					closeModal();
					let resp = await request(hash_send, 'POST', true, {
						phone: result.patient?.phone_number,
					});
					console.log(resp);
				}
				// Generate and Send Link
			} else {
				// GENERATE LINK
				console.log('generating link');
				let resp = await request(hash_send, 'POST', true, {
					phone: number,
				});
				closeModal();
				notifySuccess('Survey sent!');
				console.log(resp);
			}
		} catch (error) {
			console.log(error);
			notifyError('Error saving Phone');
		}
	};

	return (
		<div
			className="onboarding-modal modal fade animated show"
			role="dialog"
			style={{ display: 'block' }}
		>
			<div
				className="modal-dialog modal-centered"
				style={{ maxWidth: '320px' }}
			>
				<div className="modal-content text-center">
					<button
						aria-label="Close"
						className="close"
						type="button"
						onClick={closeModal}
					>
						<span className="os-icon os-icon-close" />
					</button>
					<div className="onboarding-content with-gradient">
						<h4 className="onboarding-title">Phone Number</h4>

						<div className="form-block">
							<form
								onSubmit={e => {
									e.preventDefault();
									SubmitPhone(appointment?.patient?.id, number, changed);
								}}
							>
								<div className="row">
									<div className="col-sm-12">
										{/* <label>Nursing Service</label> */}
										<input
											className="form-control"
											type="text"
											value={number}
											onChange={updatePhoneFunc}
										/>
									</div>
								</div>

								<div className="row mt-4">
									<div className="col-sm-12 text-right">
										<button className="btn btn-primary" type="submit">
											{changed ? 'Save & Send' : 'Send'}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
