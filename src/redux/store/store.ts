import {configureStore, combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: rootReducer
});
