import * as React from 'react';
import { connect } from 'react-redux';

import { Header, Widgets } from './components/index';

import VisibleCategoryList from './containers/category/visibleCategories';
import TaskEditForm from './containers/form/task/edit.form';
import UndoRedo from './containers/widget/undoredo/undoredo';

import { IEditState } from './reducers';

import { Col, Row, Grid } from 'react-bootstrap';
import './styles.css';

interface ITodoAppProps {
	editState: IEditState;
}

export class TodoApp extends React.Component<ITodoAppProps, any> {
	public render(): JSX.Element {
		const {children, editState} = this.props;

		let widgets = this.displayWidgets(editState);
		let tasks = this.displayTasks(editState, children);

		return (
			<Grid fluid>
				<Header title='To-Do List' fontSize='1.7em' />
				<UndoRedo />
				{widgets}
				<Row className='todo-content-container'>
					<Col xs={6} xsOffset={3} md={5} mdOffset={0} className='content-container__category'>
						<VisibleCategoryList />
					</Col>
					<Col xs={7} xsOffset={3} md={7} mdOffset={0}  >
						{tasks}
					</Col>
				</Row>
			</Grid>
		);
	}

	private displayWidgets(editState): JSX.Element {
		return !editState.active && (<Widgets />);
	}

	private displayTasks(editState, children): JSX.Element {
		return !editState.active ? children : (<TaskEditForm />);
	}
}

export const mapStateToProps = (store: any): Object => {
	return {
		editState: store.present.editState
	};
};

export default connect(mapStateToProps)(TodoApp);