import * as React from 'react';

import { Link } from 'react-router/lib';

interface ITask {
	text: string;
	completed: boolean;
}

const Task = ({text, completed}: ITask) => {
	return (
		<li><Link to='/taskName'>{text} - {completed}</Link></li>
	);
};

export default Task; 