export class TaskModel {
	constructor(
		readonly id?: number,
		readonly title?: string,
		readonly active?: boolean,
		readonly description?: string
	) { }
}