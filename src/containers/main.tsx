import { connect } from 'react-redux';

import { MainLayout } from '../components';

const mapStateToProps = (store) => {
	return {
		editState: store.editState
	}
};

export default connect(mapStateToProps)(MainLayout);