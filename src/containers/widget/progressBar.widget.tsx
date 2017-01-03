import { connect } from 'react-redux';

import ProgressBar from '../../components/widget/progressBar.widget';

const getAppProgress = (list) => {
	let completed: number = list.filter(elt => elt.completed).length;
	let all: number = list.length;

	return Math.round(completed / all);
};

const mapStateToProps = (store) => {
	return {
		percentage: getAppProgress(store.taskList.listById)
	}
};

export default connect(mapStateToProps)(ProgressBar);