import { connect } from 'react-redux';

import { WidgetsLayout } from '../components/layout/widgets.layout';
// import { WidgetsLayout } from '../components';

const getAppProgress = (list) => {
	let completed: number = Object.values(list).filter(t => t.completed).length;
	let all: number = Object.keys(list).length;

	return Math.round(completed / all * 100);
};


const mapStateToProps = (store) => {
	return {
		progressCounter: getAppProgress(store.tasks.listById)
	};
};

const mapDispatchToProps = (store) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsLayout);