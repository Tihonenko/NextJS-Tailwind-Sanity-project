export interface IModelItem {
	id: number;
	link: string;
	image: string[];
	name: string;
	height: number;
	params: string;
	footSize: number;
	hairColor: string;
	infoText: string;
}

export interface IInitialState {
	items: IModelItem[];
}
