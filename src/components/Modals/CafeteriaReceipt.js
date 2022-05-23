import React from 'react';

import ModalHeader from '../ModalHeader';
import { formatCurrency, formatDate } from '../../services/utilities';

const CafeteriaReceipt = ({ cafeteriaCart, closeModal }) => {
	return (
		<div
			className="onboarding-modal modal fade animated show"
			role="dialog"
			style={{ display: 'block' }}
		>
			<div
				className="modal-dialog modal-centered"
				style={{ maxWidth: '380px' }}
			>
				<div className="modal-content text-center">
					<ModalHeader title="Cafeteria Receipt" closeModal={closeModal} />
					<div className="onboarding-content with-gradient">
						<center className="reciept-header">
							<div className="">
								<img
									width="30%"
									height="20%"
									src={require('../../assets/images/logo.png')}
									alt="logo"
								/>
							</div>
						</center>
						<div className="reciept-address mt-4">
							<p style={{ fontSize: '9px' }}>
								Plot 1847, Cadastral Zone B07, Katampe Road, Abuja.
								dedahospital.com.ng <br /> 0818 422 7707, 0818 755 7344, 0808
								233 7758
							</p>
						</div>
						<table className="table table-striped table-sm">
							<tbody>
								<tr>
									<td className="text-left">Date</td>
									<td className="text-right">
										<span>
											{formatDate(cafeteriaCart.createdAt, 'DD-MMM-YYYY')}
										</span>
									</td>
								</tr>
								<tr>
									<td className="text-left">Sold To</td>
									<td className="text-right">
										<span>Chukwemeka Ihedoro</span>
									</td>
								</tr>
								<tr>
									<td className="text-left">Payment Method</td>
									<td className="text-right">
										<span>Cash</span>
									</td>
								</tr>
								<tr>
									<td className="text-left">Cashier</td>
									<td className="text-right">
										<span>Cash</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="element-box-tp">
							<table className="table table-sm">
								<thead>
									<tr>
										<th>Item</th>
										<th className="text-center">Qty</th>
										<th className="text-center">Sub Total(&#x20A6;)</th>
									</tr>
								</thead>
								<tbody>
									{cafeteriaCart.transaction_details?.map((item, i) => (
										<tr key={i}>
											<td>{item.name}</td>
											<td className="text-center">{item.qty}</td>
											<td className="text-center">
												{formatCurrency(item.amount)}
											</td>
										</tr>
									))}
									<tr>
										<td colSpan="2" className="text-right">
											Total:
										</td>
										<td className="text-center text-bold">
											{formatCurrency(cafeteriaCart.amount)}
										</td>
									</tr>
									<tr>
										<td colSpan="2" className="text-right">
											Amount Paid:
										</td>
										<td className="text-center text-bold">
											{formatCurrency(cafeteriaCart.amount_paid)}
										</td>
									</tr>
									<tr>
										<td colSpan="2" className="text-right">
											Change:
										</td>
										<td className="text-center text-bold">
											{formatCurrency(cafeteriaCart.change)}
										</td>
									</tr>
								</tbody>
							</table>
							<div>
								<p className="justify-center">
									<strong>Thanks for your patronage!</strong>
								</p>
							</div>
						</div>
						<div className="text-right">
							<button className="btn btn-primary btn-sm mx-3" type="button">
								<i className="icon-feather-printer" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CafeteriaReceipt;
