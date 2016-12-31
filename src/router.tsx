import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import { MainLayout, WorkspaceLayout, NotFoundPage } from './components';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={MainLayout} >
			<Route path='/:categoryName' component={WorkspaceLayout} />
		</Route>
		<Route path='*' component={NotFoundPage} />
	</Router>
);

export default router;