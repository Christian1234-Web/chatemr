import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModals } from '../../actions/general';
import { uploadHmo } from '../../actions/hmo';
import { notifySuccess, notifyError } from '../../services/notify';
import waiting from '../../assets/images/waiting.gif';
import { ProgressBar } from 'react-bootstrap';

class ModalUploadHmo extends Component {
	state = {
		file: null,
		Loading: false,
	};

	handleInputChange = e => {
		this.setState({
			file: e.target.files[0],
		});
		console.log(e.target.files[0]);
	};

	onUpload = e => {
		this.setState({ Loading: true });
		e.preventDefault();
		const data = new FormData();
		data.append('file', this.state.file);
		this.props
			.uploadHmo(data)
			.then(response => {
				this.setState({ Loading: false });
				this.props.closeModals(false);
				notifySuccess('Hmos uploaded');
			})
			.catch(error => {
				this.setState({ Loading: false });
				this.props.closeModals(false);
				notifyError(e.message || 'could not upload file');
				this.setState({ Loading: false });
			});
	};

	componentDidMount() {
		document.body.classList.add('modal-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('modal-open');
	}

	render() {
		const { Loading } = this.state;
		const { progress } = this.props;
		return (
			<div
				className="onboarding-modal modal fade animated show"
				role="dialog"
				style={{ display: 'block' }}>
				<div className="modal-dialog modal-centered" role="document">
					<div className="modal-content text-center">
						<button
							aria-label="Close"
							className="close"
							type="button"
							onClick={() => this.props.closeModals(false)}>
							<span className="os-icon os-icon-close"></span>
						</button>
						<div className="onboarding-content with-gradient">
							<h4 className="onboarding-title">Bulk upload hmo</h4>

							<form onSubmit={this.onUpload}>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="Category Name"
										type="file"
										name="file"
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="form-buttons-w">
									<button
										className={
											Loading ? 'btn btn-primary disabled' : 'btn btn-primary'
										}>
										{Loading ? (
											<img src={waiting} alt="submitting" />
										) : (
											<span> Upload</span>
										)}
									</button>
								</div>
							</form>
						</div>
						{Loading && (
							<div className="onboarding-content with-gradient">
								<ProgressBar now={progress} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		progress: state.hmo.hmo_upload_progress,
	};
};

export default connect(mapStateToProps, {
	closeModals,
	uploadHmo,
})(ModalUploadHmo);
