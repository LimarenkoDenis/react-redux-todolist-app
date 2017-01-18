import * as React from 'react';
import { shallow } from 'enzyme';

import { Widgets } from '../../../src/components';

describe('Widgets component tests', () => {
	const wrapper: any = shallow(<Widgets />);

	it('Should be defined', () => {
		expect(wrapper).toBeDefined();
	});
});
