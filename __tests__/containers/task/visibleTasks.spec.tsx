import * as React from 'react';
import { mount } from 'enzyme';

import { VisibleTasks, IVisibleTasksProps } from '../../../src/containers/task/visibleTasks';

import { TaskModel } from '../../../src/models';

describe('Visible tasks container tests', () => {
	const fakeProps: IVisibleTasksProps = {
		tasks: {
			list: [
				{ id: 1, title: 'make coffee', active: false, description: 'Huhuhue' },
				{ id: 2, title: 'drink coffee', active: true, description: 'Glug, glug, glug' },
			],
			visibleList: [1, 2]
		},
		filterState: {
			active: false,
			searchTemplate: ''
		}
	};
	let listElt: any;

	beforeEach(() => {
		listElt = mount(<VisibleTasks tasks={fakeProps.tasks} filterState={fakeProps.filterState} />);
	});

	it('Should render all resolved in getFilteredTasks method items', () => {
		const {tasks: {list, visibleList}, filterState} = fakeProps;
		const arr: Array<TaskModel> = listElt.instance().getFilteredTasks(list, visibleList, filterState);

		expect(arr.length).toBe(arr.length);
	});

	it('Should defined handlers for task item', () => {
		expect(listElt.instance().onCheckClick).toBeDefined();
		expect(listElt.instance().onEditClick).toBeDefined();
		expect(listElt.instance().onLIClick).toBeDefined();
	});
});