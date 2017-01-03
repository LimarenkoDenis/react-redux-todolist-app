import { connect } from 'react-redux';

import { setSearchTemplate, toggleActiveFilter } from '../actions/filter.actions';
import { WidgetsLayout } from '../components/layout/widgets.layout';
// import { WidgetsLayout } from '../components';

const getAppProgress = (list) => {
	let completed: number = Object.values(list).filter(t => t.completed).length;
	let all: number = Object.keys(list).length;

	return Math.round(completed / all * 100);
};


const mapStateToProps = (store) => {
	return {
		progressCounter: getAppProgress(store.tasks.listById),
	};
};

const mapDispatchToProps = (dispath) => {
	return {
		onFilterInput: (template) => dispath(setSearchTemplate(template)),
		onActiveToggle: (active) => dispath(toggleActiveFilter(active))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsLayout);