import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'news',
	title: 'News',
	type: 'document',
	fields: [
		defineField({
			name: 'meta_title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'sub_title',
			title: 'Sub Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Release date',
			name: 'releaseDate',
			type: 'date',
			options: {
				dateFormat: 'MMMM // YYYY',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					options: {
						isHighlighted: true,
					},
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'main_image',
			title: 'Main Image',
			type: 'array',
			validation: (Rule) => Rule.required(),
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		}),
	],
});
