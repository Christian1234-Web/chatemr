/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { lazy, useCallback, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { patientAPI, allVitalItems } from '../../services/constants';
import { request } from '../../services/utilities';
import { loadVitals } from '../../actions/patient';

const BMI = lazy(() => import('../Vitals/BMI'));
const BloodPressure = lazy(() => import('../Vitals/BloodPressure'));
const Contractions = lazy(() => import('../Vitals/Contractions'));
const Dilation = lazy(() => import('../Vitals/Dilation'));
const FetalHeartRate = lazy(() => import('../Vitals/FetalHeartRate'));
const FundusHeight = lazy(() => import('../Vitals/FundusHeight'));
const BSA = lazy(() => import('../Vitals/BSA'));
const Glucose = lazy(() => import('../Vitals/Glucose'));
const HeadCircumference = lazy(() => import('../Vitals/HeadCircumference'));
const Height = lazy(() => import('../Vitals/Height'));
const LengthOfArm = lazy(() => import('../Vitals/LengthOfArm'));
const MidArmCircumference = lazy(() => import('../Vitals/MidArmCircumference'));
const MUAC = lazy(() => import('../Vitals/MUAC'));
const PainScale = lazy(() => import('../Vitals/PainScale'));
const PCV = lazy(() => import('../Vitals/PCV'));
const Protein = lazy(() => import('../Vitals/Protein'));
const Pulse = lazy(() => import('../Vitals/Pulse'));
const Respiration = lazy(() => import('../Vitals/Respiration'));
const ServicoGraph = lazy(() => import('../Vitals/ServicoGraph'));
const SPO = lazy(() => import('../Vitals/SPO'));
const SurfaceArea = lazy(() => import('../Vitals/SurfaceArea'));
const Temperature = lazy(() => import('../Vitals/Temperature'));
const Urine = lazy(() => import('../Vitals/Urine'));
const Weight = lazy(() => import('../Vitals/Weight'));

const Page = ({ type }) => {
	switch (type) {
		case 'Urine':
			return <Urine />;
		case 'Contractions':
			return <Contractions />;
		case 'Weight':
			return <Weight />;
		case 'Temperature':
			return <Temperature />;
		case 'Surface Area':
			return <SurfaceArea />;
		case 'SpO2':
			return <SPO />;
		case 'Respiration Rate':
			return <Respiration />;
		case 'Pulse':
			return <Pulse />;
		case 'Protein':
			return <Protein />;
		case 'PCV':
			return <PCV />;
		case 'Pain Scale':
			return <PainScale />;
		case 'MUAC':
			return <MUAC />;
		case 'Mid-Arm Circumference':
			return <MidArmCircumference />;
		case 'Length of Arm':
			return <LengthOfArm />;
		case 'Height':
			return <Height />;
		case 'Head Circumference':
			return <HeadCircumference />;
		case 'Glucose':
			return <Glucose />;
		case 'Dilation':
			return <Dilation />;
		case 'Fetal Heart Rate':
			return <FetalHeartRate />;
		case 'Fundus Height':
			return <FundusHeight />;
		case 'Blood Pressure':
			return <BloodPressure />;
		case 'BSA':
			return <BSA />;
		case 'Servico Graph':
			return <ServicoGraph />;
		case 'BMI':
		default:
			return <BMI />;
	}
};

const Vitals = props => {
	const { type, location, patient, category, labour } = props;
	const _category = category === 'general' ? 'vitals' : 'partograph';

	const [loaded, setLoaded] = useState(false);

	const fetchVitals = useCallback(async () => {
		const labour_id = labour?.id || '';
		const url = `${patientAPI}/${patient.id}/vitals?labour_id=${labour_id}`;
		const rs = await request(url, 'GET', true);
		props.loadVitals(rs.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)));
		setLoaded(true);
	}, [labour, patient, props]);

	useEffect(() => {
		if (!loaded) {
			fetchVitals();
		}
	}, [fetchVitals, loaded]);

	return (
		<div className="col-md-12">
			<div className="element-wrapper">
				<div className="element-box-tp mb-3">
					<div className="el-buttons-list">
						{allVitalItems
							.filter(v => {
								const item = v.category.find(c => c === category);
								return item && item === category;
							})
							.map((vital, i) => (
								<Link
									className="btn btn-white btn-sm mr-2"
									to={`${location.pathname}#${_category}#${vital.name}`}
									key={i}
								>
									<i className="os-icon os-icon-delivery-box-2" />
									<span>{vital.name}</span>
								</Link>
							))}
					</div>
				</div>
				<h6 className="element-header text-center">{type}</h6>
				<div className="element-box p-3 m-0">
					<Page type={type} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		patient: state.user.patient,
		labour: state.user.item,
	};
};

export default connect(mapStateToProps, { loadVitals })(withRouter(Vitals));
