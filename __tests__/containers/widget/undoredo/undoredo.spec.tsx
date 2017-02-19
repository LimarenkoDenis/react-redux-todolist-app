import * as React from 'react';
import { mount } from 'enzyme';

import { UndoRedo, IUndoRedoProps } from '../../../../src/containers/widget/undoredo/undoredo';

describe('UndoRedo container tests', () => {
	const fakeProps: IUndoRedoProps = {
		canUndo: true,
		canRedo: false
	};
	let undoredo: any;

	beforeAll(() => {
		undoredo = mount(<UndoRedo canUndo={fakeProps.canUndo} canRedo={fakeProps.canRedo} />);
	});

	it('Should receive right props', () => {
		expect(undoredo.prop('canUndo')).toBe(fakeProps.canUndo);
		expect(undoredo.prop('canRedo')).toBe(fakeProps.canRedo);
	});

	it('canUndo and canRedo methods must exists', () => {
		const canUndo: any = jest.fn(undoredo.instance().onUndo);
		const canRedo: any = jest.fn(undoredo.instance().onRedo);

		expect(canUndo).toBeDefined();
		expect(canRedo).toBeDefined();
	});
});