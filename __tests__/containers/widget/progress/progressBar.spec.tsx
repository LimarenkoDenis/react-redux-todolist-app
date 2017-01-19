import * as React from 'react';
import { mount } from 'enzyme';

import { ProgressBar, IProgressBarProps } from '../../../../src/containers/widget/progress/progressBar';

describe('Progress bar container tests', () => {
	const fakeProps: IProgressBarProps = {
		tasks: [
			{ id: 1, title: 'make coffee', active: false, description: 'Huhuhue' },
			{ id: 2, title: 'drink coffee', active: true, description: 'Glug, glug, glug' },
			{ id: 3, title: 'do it again', active: true, description: '' }
		]
	};
	let progress: any;

	beforeAll(() => {
		progress = mount(<ProgressBar tasks={fakeProps.tasks} />);
	});

	it('Should render progress of completed tasks, that resolved in getAppProgress method', () => {
		const percents: number = progress.instance().getAppProgress(fakeProps.tasks);

		expect(percents).toBe(33);
	});
});