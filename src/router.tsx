import * as React from 'react';
import { browserHistory, Route, Router } from 'react-router/lib';

import MainLayout from './containers/main';
import NotFoundPage from './components/layout/pageNotFound.layout';
import WorkspaceLayout from './containers/task/visibleTaskList';

// const haveTaskList = (nextState, replace, callback) => {
// 	let id = String(nextState.location.pathname).replace(/[^\d]/g, '');
// 	console.log(id);
// 	onEnter={haveTaskList}
// };


const router = (
	<Router history={browserHistory}>
		<Route path='/' component={MainLayout} >
			<Route path=':categoryName' component={WorkspaceLayout} />
		</Route>
		<Route path='*' component={NotFoundPage} />
	</Router>
);

export default router;