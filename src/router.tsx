import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import TodoApp from './app';
import VisibleTaskList from './containers/task/visibleTasks';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={TodoApp} >
			<Route path='/:categoryName' component={VisibleTaskList} />
		</Route>
	</Router>
);

export default router;
