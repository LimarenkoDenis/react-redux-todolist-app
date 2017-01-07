export interface IEditState {
	active: boolean;
	task: ITask;
}

export interface IFilterState {
	active?: boolean;
	searchTemplate: string;
}

export interface ITasksState {
	listById: ITaskListById;
	visibleList: Array<ITask>;
}

export interface ICategoriesState {
	list: Array<ICategory>;
	activeCategory: number;
}

export interface ITask {
	id?: number;
	title?: string;
	active?: boolean;
	description?: string;
}

export interface ITaskItemProps {
	title: string;
	active: boolean;
	onLIClick: (id: number, title: string) => void;
	onEditClick: (task: ITask) => void;
	onCheckClick: (id) => void;
}

export interface ICategory {
	id: number;
	title: string;
	subs: Array<number>;
	tasks: Array<number>;
	parentId: number;
	expanded: boolean;
	level: number;
	edit: boolean;
}

export interface ICategoryItemProps {
	category: ICategory;
	editState: IEditState;
	onAddClick: (id: number, subs: Array<number>) => void;
	onArrowClick: (id: number) => void;
	onDeleteClick: (id: number, title: string, subs: Array<number>, tasks: Array<number>) => void;
	onEditClick: (id: number, title: string) => void;
	onExpandClick: (id: number) => void;
	onLIClick: (id: number, title: string, tasks: Array<number>) => void;
}

export interface IMainLayoutProps {
	editState: IEditState;
}

export interface IWorkspaceLayoutProps {
	editState: IEditState;
}

export interface IProgressBarProps {
	progress: number;
}

export interface ITaskListById {
	[id: number]: ITask;
}

export interface IAddFormProps {
	activeCategory?: number;
	handleSubmit: (title: string, category?: number) => void;
}

export interface IAddFormState {
	title: string;
}

export interface IEditFormProps {
	task: ITask;
	handleSubmit: (task: ITask) => void;
	handleCancel: () => void;
}

export interface IFilterFormProps {
	onFilterInput: (template: string) => void;
	onActiveToggle: (active: boolean) => void;
}
