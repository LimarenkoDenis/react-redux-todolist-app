import { connect } from 'react-redux';

import { MainLayout } from '../../components/layout';

const mapStateToProps = (store: any) => {
	return {
		editState: store.editState
	};
};

export default connect(mapStateToProps)(MainLayout);