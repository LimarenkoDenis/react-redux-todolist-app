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

	_handleSubmit(e: Event) { e.preventDefault(); };

	_handleToggle(e) {
		this.props.onActiveToggle(e.target.checked);
	};

	_handleFilter(e) {
		let searchTemplate: string = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		this.setState({ searchTemplate });

		this.visible = Boolean(searchTemplate);
		this.props.onFilterInput(searchTemplate);
	}

	_handleClear() {
		this.setState({ searchTemplate: '' });
		this.props.onFilterInput('');
	}

	render() {
		return (
			<Form onSubmit={e => this._handleSubmit(e)} inline>
				<Checkbox onChange={e => this._handleToggle(e)} value={this.state.active}>{' '}Show active</Checkbox>
				{' '}
				<FormGroup>
					<FormControl
						className='search-input'
						type='search'
						onChange={e => this._handleFilter(e)}
						value={this.state.searchTemplate}
						placeholder='Search'
						/>
					<Glyphicon
						glyph='remove-circle'
						style={{ visibility: this.visible ? 'visible' : 'hidden' }}
						onClick={e => this._handleClear()}
						className='search-icon'
						/>
				</FormGroup>
			</Form >
		);
	}

}

const mapDispatchToProps = (dispath) => {
	return {
		onFilterInput: (template) => dispath(setSearchTemplate(template)),
		onActiveToggle: (active) => dispath(toggleActiveFilter(active))
	};
};

export default connect(null, mapDispatchToProps)(Filter);