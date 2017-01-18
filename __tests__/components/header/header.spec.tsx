import * as React from 'react';
import { mount } from 'enzyme';

import { Header } from '../../../src/components';

describe('Header component tests', () => {
	const fontSize: string = '1em';
	const title: string = 'To-Do List';
	const wrapper: any = mount(<Header title={title} fontSize={fontSize} />);

	it('Should receive a header props', () => {

		expect(wrapper.prop('title')).toBe(title);
		expect(wrapper.prop('fontSize')).toBe(fontSize);
	});

	it('Should render the title of the app', () => {
		expect(wrapper.find('h1').text()).toBe(title);
	});
});