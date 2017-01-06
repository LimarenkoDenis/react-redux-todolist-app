import * as React from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

import { setSearchTemplate, toggleActiveFilter } from '../../actions/filter.actions';
import { connect } from 'react-redux';

const Filter = (props) => {

	let _handleToggle = (e) => {
		props.onActiveToggle(e.target.checked);
	};

	let _handleFilter = (e) => {
		let template = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		props.onFilterInput(template);
	};

	return (
		<Form inline>
			<Checkbox onChange={e => _handleToggle(e)} defaultValue={props.filterState.active}>{' '}Show active</Checkbox>
			{' '}
			<FormGroup>
				<FormControl type='text' onChange={e => _handleFilter(e)} defaultValue={props.filterState.template} placeholder='Search' />
			</FormGroup>
		</Form >
	);

}

const mapStateToProps = (store) => {
	return {
		filterState: {
			...store.filterState
		}
	};
};

const mapDispatchToProps = (dispath) => {
	return {
		onFilterInput: (template) => dispath(setSearchTemplate(template)),
		onActiveToggle: (active) => dispath(toggleActiveFilter(active))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);