export const menuVariant = {
	open: {
		transform: 'translateX(0%)',
		opacity: 1,
	},
	close: {
		transform: 'translateX(-100%)',
		opacity: 0,
	},
};
export const itemVariant = {
	open: {
		transform: 'translateX(0rem)',
		opacity: 1,
	},
	close: {
		transform: 'translateX(-5rem)',
		opacity: 0,
	},
};

export const menuTransition = {
	type: 'spring',
	duration: 1,
	stiffness: 33,
	delay: 0.3,
};
