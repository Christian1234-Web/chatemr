import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../NoMatch';
import Splash from '../../components/Splash';

const Dashboard = lazy(() => import('./Dashboard'));

const Home = ({ match }) => {
	return (
		<Suspense fallback={<Splash />}>
			<Switch>
				<Route path={`${match.url}/dashboard`} component={Dashboard} />
				<Route component={NoMatch} />
			</Switch>
		</Suspense>
	);
};

export default Home;
