import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Payroll from './Payroll';
import Staff from './Staff';
import NoMatch from '../NoMatch';

const Home = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/payroll`} component={Payroll} />
			<Route path={`${match.url}/staff`} component={Staff} />
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Home;
