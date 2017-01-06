import * as React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Glyphicon } from 'react-bootstrap';

import { setSearchTemplate, toggleActiveFilter } from '../../actions/filter.actions';
import { connect } from 'react-redux';

class Filter extends React.Component<any, any> {
	private visible: boolean = false;

	constructor() {
		super();

		this.visible = false;
		this.state = {
			template: '',
			active: false
		};
	}

	_handleSubmit(e) { e.preventDefault(); };

	_handleToggle(e) {
		this.props.onActiveToggle(e.target.checked);
	};

	_handleFilter(e) {
		let template = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		this.setState({ template });

		this.visible = Boolean(template);
		this.props.onFilterInput(template);
	}

	_handleClear() {
		this.setState({ template: '' });
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
						value={this.state.template}
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