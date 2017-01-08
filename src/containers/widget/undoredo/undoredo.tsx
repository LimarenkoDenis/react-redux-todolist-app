import * as React from 'react';

import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

import { Button, ButtonToolbar } from 'react-bootstrap';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }: any) => (
	<ButtonToolbar>
		<Button onClick={onUndo} disabled={!canUndo}>Undo</Button>
		<Button onClick={onRedo} disabled={!canRedo}>Redo</Button>
	</ButtonToolbar>
);

const mapStateToProps = (state: any) => {
	return {
		canUndo: state.past.length > 0,
		canRedo: state.future.length > 0
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onUndo: () => dispatch(UndoActionCreators.undo()),
		onRedo: () => dispatch(UndoActionCreators.redo())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);