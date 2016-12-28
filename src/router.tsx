import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import TodoApp from './components/TodoApp';
import TaskList from './components/TaskList';
import NotFoundPage from './components/NotFoundPage';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={TodoApp} >
			<Route path='categoryName' component={TaskList} />
		</Route>
		<Route path='*' component={NotFoundPage} />
	</Router>
);

export default router;