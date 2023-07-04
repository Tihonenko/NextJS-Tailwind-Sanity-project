import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'model',
	title: 'Model',
	type: 'document',
	fields: [
		defineField({
			name: 'model_ref',
			title: 'Model Reference',
			type: 'reference',
			to: [
				{
					type: 'model_ref',
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'meta_title',
			title: 'Meta Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'height',
			title: 'Height',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'instagram_url',
			title: 'Instagram URL',
			type: 'url',
			validation: (Rule) =>
				Rule.required().uri({
					scheme: ['http', 'https', 'mailto', 'tel'],
				}),
		}),
		defineField({
			name: 'params',
			title: 'Params',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'foot_size',
			title: 'Foot Size',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'hair_color',
			title: 'Hair Color',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required().max(200),
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
						{
							// Editing this field will be hidden behind an "Edit"-button
							name: 'attribution',
							type: 'string',
							title: 'Attribution',
						},
					],
				},
			],
		}),
		defineField({
			name: 'model_image',
			title: 'Model Image',
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
								isHighlighted: true, // <-- make this field easily accessible
							},
						},
						{
							// Editing this field will be hidden behind an "Edit"-button
							name: 'attribution',
							type: 'string',
							title: 'Attribution',
						},
					],
				},
			],
		}),

		defineField({
			name: 'Slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'meta_title',
				maxLength: 90,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 90),
			},
			validation: (Rule) => Rule.required(),
		}),
	],
});
