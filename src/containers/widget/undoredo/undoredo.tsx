import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import store from '../../../store';

import { Button, ButtonToolbar } from 'react-bootstrap';

interface IUndoRedoProps {
	canUndo: boolean;
	canRedo: boolean;
}

export class UndoRedo extends React.Component<IUndoRedoProps, any>{
	public render(): JSX.Element {
		const {canUndo, canRedo} = this.props;

		return (
			<ButtonToolbar>
				<Button onClick={this.onUndo} disabled={!canUndo}>Undo</Button>
				<Button onClick={this.onRedo} disabled={!canRedo}>Redo</Button>
			</ButtonToolbar>
		);
	}

	private onUndo(): void {
		store.dispatch(UndoActionCreators.undo());
	}

	private onRedo(): void {
		store.dispatch(UndoActionCreators.redo());
	}
}

const mapStateToProps = (state: any): Object => {
	return {
		canUndo: state.past.length > 0,
		canRedo: state.future.length > 0
	};
};

export default connect(mapStateToProps)(UndoRedo);