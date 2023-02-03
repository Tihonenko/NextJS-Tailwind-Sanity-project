import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'model_ref',
	title: 'Model reference',
	type: 'document',
	fields: [
		defineField({
			name: 'name_ref',
			title: 'Model title reference',
			type: 'string',
		}),
	],
});
