import * as React from 'react';
import { ProgressBar as Bar } from 'react-bootstrap';

const ProgressBar = (props) => <Bar style={{ width: '100%' }} active now={props.now} />;

export default ProgressBar;