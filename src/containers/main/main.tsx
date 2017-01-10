import { connect } from 'react-redux';

import { MainLayout } from '../../components/layout';

const mapStateToProps = (store: any): Object => {
	return {
		editState: store.present.editState
	};
};

export default connect(mapStateToProps)(MainLayout);