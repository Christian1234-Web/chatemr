import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../NoMatch';
import FrontDesk from '../Reports/FrontDesk';
import Doctor from '../Reports/Doctor';
import Pharmacy from '../Reports/Pharmacy';
import Nursing from '../Reports/Nursing';
import Lab from '../Reports/Lab';
import PayPoint from '../Reports/PayPoint';
import Cafeteria from '../Reports/Cafeteria';
import Others from '../Reports/Others';

const Home = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/frontdesk`} component={FrontDesk} />
			<Route path={`${match.url}/doctor`} component={Doctor} />
			<Route path={`${match.url}/pharmacy`} component={Pharmacy} />
			<Route path={`${match.url}/nursing`} component={Nursing} />
			<Route path={`${match.url}/lab`} component={Lab} />
			<Route path={`${match.url}/paypoint`} component={PayPoint} />
			<Route path={`${match.url}/cafeteria`} component={Cafeteria} />
			<Route path={`${match.url}/others`} component={Others} />
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Home;
