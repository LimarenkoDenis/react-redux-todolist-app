export class CategoryModel {
	constructor(
		readonly id: number,
		readonly title: string,
		readonly subs: Array<number>,
		readonly tasks: Array<number>,
		readonly parentId: number,
		readonly expanded: boolean,
		readonly level: number,
		readonly edit: boolean
	) { }
}