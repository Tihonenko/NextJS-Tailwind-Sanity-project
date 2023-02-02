import { schemaTypes } from '@app/schemas';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: '/studio',
	name: 'model_public_studio',
	title: 'Model Public',

	projectId,
	dataset,
	apiVersion,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
