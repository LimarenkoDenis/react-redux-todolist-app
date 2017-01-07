import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import MainLayout from './containers/main/main';
import VisibleTaskList from './containers/task/visibleTasks';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={MainLayout} >
			<Route path='/:categoryName' component={VisibleTaskList} />
		</Route>
	</Router>
);

export default router;