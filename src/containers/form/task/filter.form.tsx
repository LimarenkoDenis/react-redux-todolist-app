import * as React from 'react';

import store from '../../../store';

import { setSearchTemplate, toggleActiveFilter } from '../../../actions/filter.actions';
import { IFilterState } from '../../../reducers';

import { Form, FormGroup, FormControl, Checkbox, Glyphicon } from 'react-bootstrap';

class Filter extends React.Component<any, IFilterState> {
	private visible: boolean = false;

	constructor() {
		super();

		this.visible = false;
		this.state = {
			active: false,
			searchTemplate: ''
		};
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={e => this.handleSubmit(e)} inline>
				<Checkbox onChange={e => this.handleToggle(e)} value={this.state.active}>{' '}Show active</Checkbox>
				{' '}
				<FormGroup>
					<FormControl
						className='search-input'
						type='search'
						onChange={e => this.handleFilter(e)}
						value={this.state.searchTemplate}
						placeholder='Search'
						/>
					<Glyphicon
						glyph='remove-circle'
						style={{ visibility: this.visible ? 'visible' : 'hidden' }}
						onClick={e => this.handleClear()}
						className='search-icon'
						/>
				</FormGroup>
			</Form >
		);
	}

	private handleSubmit(e: Event): void {
		e.preventDefault();
	}

	private handleToggle(e: Event | any): void {
		store.dispatch(toggleActiveFilter(e.target.checked));
	}

	private handleFilter(e: Event | any): void {
		let searchTemplate: string = e.target.value.replace(/[^(?!' )a-zA-zА-яа-я0-9]+/g, '').replace(/\s{2,}/, ' ');

		this.setState({ searchTemplate });
		this.visible = Boolean(searchTemplate);

		store.dispatch(setSearchTemplate(searchTemplate));
	}

	private handleClear(): void {
		this.setState({ searchTemplate: '' });
		store.dispatch(setSearchTemplate(''));
	}
}

export default Filter;