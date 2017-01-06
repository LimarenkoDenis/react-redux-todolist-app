import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import MainLayout from './containers/main';
import WorkspaceLayout from './containers/task/visibleTaskList';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={MainLayout} >
			<Route path='/:categoryName' component={WorkspaceLayout} />
		</Route>
	</Router>
);

export default router;