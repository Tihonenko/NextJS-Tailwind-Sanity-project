export interface ISocial {
	image: string;
	link: string;
}

export interface ISocialLink extends Omit<ISocial, 'image'> {
	name: string;
}
