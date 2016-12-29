import * as React from 'react';
import TaskList from '../../containers/task/taskList';

export const WorkspaceLayout = () => (
	<TaskList />
	// { (store.todoList ) ? <TaskList /> : <ClearPage />}
);

// if else state
