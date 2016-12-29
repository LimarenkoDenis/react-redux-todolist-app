import * as React from 'react';
import CategoryLink from '../../components/category/categoryLink';

class CategoryList extends React.Component<any, any>{

	private arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	public render() {
		return (
			<ul>
				{
					this.arr.map(elt => <CategoryLink key={elt} text='link1' category='category1' />)
				}
			</ul>
		);
	}
}

export default CategoryList;