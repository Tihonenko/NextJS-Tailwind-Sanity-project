import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { modelSlice } from './models';

const rootReducer = combineReducers({
	model: modelSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
