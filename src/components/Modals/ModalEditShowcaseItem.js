import React, { useState, useEffect } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import Select from 'react-select';
import capitalize from 'lodash.capitalize';
import { renderTextInput, request } from '../../services/utilities';
import waiting from '../../assets/images/waiting.gif';
import { startBlock, stopBlock } from '../../actions/redux-block';
import { notifyError, notifySuccess } from '../../services/notify';
import { allUnitOfMeasures, cafeteriaAPI } from '../../services/constants';
import { async } from 'rxjs';

const ModalEditShowcaseItem = ({
	closeModal,
	error,
	category,
	updateItem,
	item,
	onClickEdit,
	onEditItem,
}) => {
	const [submitting, setSubmitting] = useState(false);
	const [quantity, setQuantity] = useState(item.quantity);

	const dispatch = useDispatch();

	useEffect(() => {
		onClickEdit({ quantity, ...item });
	}, [quantity]);
	console.log('itemmmm', item);
	console.log('onClickEdit', onClickEdit);

	const handleQuantity = e => {
		setQuantity(e.target.value);
	};

	const handleSubmit = async e => {
		try {
			console.log('here');
			e.preventDefault();
			dispatch(startBlock());
			const info = { item_id: item.foodItem.id, quantity };
			const url = `${cafeteriaAPI}/items/${item.id}`;
			const rs = await request(url, 'PUT', true, info);
			console.log('A', item.id);
			console.log('B', item.foodItem.id);
			dispatch(stopBlock());
			notifySuccess('Show case item updated');
			closeModal();
			window.location.reload();
		} catch (error) {
			dispatch(stopBlock());
			notifyError('Error updating show case item');
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
						<h4 className="onboarding-title">Edit Item</h4>
						<div className="form-block">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-sm-12">
										<div className="form-group">
											<label for="name">Name</label>
											<input
												name="name"
												type="text"
												className="form-control"
												placeholder="Name"
												value={`${item.foodItem.name}`}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<div className="form-group">
											<label for="name">Item Quantity</label>
											<input
												name="name"
												type="text"
												className="form-control"
												placeholder={`${item.quantity}`}
												value={quantity}
												onChange={e => handleQuantity(e)}
											/>
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-sm-12 text-right">
										<button
											className="btn btn-primary"
											disabled={submitting}
											type="submit"
										>
											{submitting ? (
												<img src={waiting} alt="submitting" />
											) : (
												'Save'
											)}
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

export default ModalEditShowcaseItem;
