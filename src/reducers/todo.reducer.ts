import { TodoActions } from '../actions/action.types';

const initialState = {
	todoByID: {}
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TodoActions[TodoActions.ADD_TODO]:
			let id = action.id;
			return {
				todoList: {
					...state.todoByID,
					[id]: { id: id, text: action.text, completed: false }
				}
			};

		case TodoActions[TodoActions.EDIT_TODO]:

			break;
		case TodoActions[TodoActions.TOGGLE_TODO]:

			break;
		case TodoActions[TodoActions.SAVE_TODO]:

			break;
		case TodoActions[TodoActions.CANCEL_EDIT_TODO]:

			break;
		default:
			return state;
	}
};

export default todoReducer;