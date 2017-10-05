import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import TodoApp from './app';
import VisibleTaskList from './containers/task/visibleTasks';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' component={TodoApp} >
				<Route path='/:categoryName' component={VisibleTaskList} />
			</Route>
		</div>
	</BrowserRouter>
);

export default router;
