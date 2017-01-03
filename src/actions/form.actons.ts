import { FormActions } from './action.types';



const saveTask = (id, title, completed, description) => {
	return {
		type: FormActions[FormActions.SAVE_TASK],
		id,
		title,
		completed,
		description
	};
};

export { saveTask };