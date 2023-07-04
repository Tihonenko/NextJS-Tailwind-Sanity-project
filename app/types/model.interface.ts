type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

export interface INewModelItem extends Base {
	instagram_url: string;
	main_image: main_image[];
	meta_title: string;
	description: string;
	slug: Slug;
}

export interface IModelItem extends INewModelItem {
	height: string;
	params: string;
	foot_size: string;
	hair_color: string;
	model_image: model_image[];
}
export interface IInitialState {
	items: INewModelItem[];
}
