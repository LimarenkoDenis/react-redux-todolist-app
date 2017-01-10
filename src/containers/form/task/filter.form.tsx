import * as React from 'react';
import { connect } from 'react-redux';

import { setSearchTemplate, toggleActiveFilter } from '../../../actions/filter.actions';
import { IFilterFormProps, IFilterState } from '../../../interfaces';

import { Form, FormGroup, FormControl, Checkbox, Glyphicon } from 'react-bootstrap';

class Filter extends React.Component<IFilterFormProps, IFilterState> {
	private visible: boolean = false;

	constructor() {
		super();

		this.visible = false;
		this.state = {
			active: false,
			searchTemplate: ''
		};
	}

	private handleSubmit(e: Event) { e.preventDefault(); };

	private handleToggle(e) {
		this.props.onActiveToggle(e.target.checked);
	};

	private handleFilter(e) {
		let searchTemplate: string = e.target.value.replace(/[^(?!' )a-zA-zА-яа-я0-9]+/g, '').replace(/\s{2,}/, ' ');

		this.setState({ searchTemplate });

		this.visible = Boolean(searchTemplate);
		this.props.onFilterInput(searchTemplate);
	}

	private handleClear() {
		this.setState({ searchTemplate: '' });
		this.props.onFilterInput('');
	}

	public render() {
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

}

const mapDispatchToProps = (dispath): Object => {
	return {
		onFilterInput: (template) => dispath(setSearchTemplate(template)),
		onActiveToggle: (active) => dispath(toggleActiveFilter(active))
	};
};

export default connect(null, mapDispatchToProps)(Filter);