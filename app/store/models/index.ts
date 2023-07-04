import { models } from '@data/model.data';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from '../../types/model.interface';

const initialState: IInitialState = {
	items: models,
};

export const modelSlice = createSlice({
	name: 'models',
	initialState,
	reducers: {
		getOne: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				(item) => item.id === action.payload.id
			);
		},
	},
});

export const { getOne } = modelSlice.actions;
