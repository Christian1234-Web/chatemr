/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import LabTest from '../../components/LabTest';
import LabSpecimen from '../../components/LabSpecimen';
import LabCategory from '../../components/LabCategory';
import LabGroup from '../../components/LabGroup';
import LabTestForm from '../../components/Modals/LabTestForm';

const Laboratory = () => {
	const [labCategoryTab, setLabCategoryTab] = useState(true);
	const [labTestTab, setLabTestTab] = useState(false);
	const [labGroupTab, setLabGroupTab] = useState(false);
	const [labSpecimenTab, setLabSpecimenTab] = useState(false);
	const [toggleForm, setToggleForm] = useState(false);
	const [labTest, setLabTest] = useState(null);

	const onLabTest = () => {
		setLabTestTab(true);
		setLabSpecimenTab(false);
		setLabCategoryTab(false);
		setLabGroupTab(false);
	};

	const onLabParameter = () => {
		setLabTestTab(false);
		setLabSpecimenTab(true);
		setLabCategoryTab(false);
		setLabGroupTab(false);
	};

	const onLabCategory = () => {
		setLabTestTab(false);
		setLabSpecimenTab(false);
		setLabCategoryTab(true);
		setLabGroupTab(false);
	};

	const onLabGroup = () => {
		setLabTestTab(false);
		setLabSpecimenTab(false);
		setLabCategoryTab(false);
		setLabGroupTab(true);
	};

	const doToggleForm = (status, data) => {
		setToggleForm(status);
		setLabTest(data);
	};

	return (
		<div className="content-i">
			<div className="content-box">
				<div className="row">
					<div className="col-sm-12">
						<div className="element-wrapper">
							<div className="os-tabs-w mx-1">
								<div className="os-tabs-controls os-tabs-complex">
									<ul className="nav nav-tabs upper">
										<li className="nav-item">
											<a
												aria-expanded="true"
												className={
													labCategoryTab ? 'nav-link active' : 'nav-link'
												}
												data-toggle="tab"
												onClick={onLabCategory}>
												Categories
											</a>
										</li>
										<li className="nav-item">
											<a
												aria-expanded="false"
												className={labTestTab ? 'nav-link active' : 'nav-link'}
												data-toggle="tab"
												onClick={onLabTest}>
												Tests
											</a>
										</li>
										<li className="nav-item">
											<a
												aria-expanded="false"
												className={labGroupTab ? 'nav-link active' : 'nav-link'}
												data-toggle="tab"
												onClick={onLabGroup}>
												Groups
											</a>
										</li>
										<li className="nav-item">
											<a
												aria-expanded="false"
												className={
													labSpecimenTab ? 'nav-link active' : 'nav-link'
												}
												data-toggle="tab"
												onClick={onLabParameter}>
												Specimen
											</a>
										</li>
										{labTestTab && (
											<li className="nav-item nav-actions d-sm-block">
												<a
													className="btn btn-primary btn-sm text-white"
													onClick={() => doToggleForm(true, null)}>
													<i className="os-icon os-icon-plus-circle"></i>
													<span>Add Test</span>
												</a>
											</li>
										)}
									</ul>
								</div>
							</div>
							{labCategoryTab === true && <LabCategory />}
							{labSpecimenTab === true && <LabSpecimen />}
							{labTestTab === true && <LabTest doToggleForm={doToggleForm} />}
							{labGroupTab === true && <LabGroup />}
						</div>
					</div>
				</div>
			</div>
			<LabTestForm
				showHide={toggleForm}
				doToggleForm={doToggleForm}
				labTest={labTest}
			/>
		</div>
	);
};

export default Laboratory;
