import * as React from 'react';
import { shallow } from 'enzyme';

import { TodoApp } from '../src/app';
import { IEditState } from '../src/reducers';

describe('App container tests', () => {
	const editState: IEditState = {
		active: false,
		task: null
	};
	const app: any = shallow(<TodoApp editState={editState} />);

	it('Should be defined', () => {
		expect(app).toBeDefined();
	});
});