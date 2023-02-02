type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

export interface IModelItem extends Base {
	instagram_url: string;
	image: image[];
	model_image: model_image[];
	meta_title: string;
	height: string;
	params: string;
	foot_size: string;
	hair_color: string;
	description: string;
	slug: Slug;
}

export interface IInitialState {
	items: IModelItem[];
}
