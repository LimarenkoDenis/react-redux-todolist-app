import * as React from 'react';

interface ITodo {
	text: string;
	completed: boolean;
}

const Todo = ({text, completed}: ITodo) => <li>{text}</li>;

export default Todo; 