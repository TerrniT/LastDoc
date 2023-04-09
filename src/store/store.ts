import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { documentsApi } from "../services/DocumentsService"

const rootReducers = combineReducers({
	[documentsApi.reducerPath]: documentsApi.reducer,
})

export const setupStore = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(documentsApi.middleware),
})

export type RootState = ReturnType<typeof rootReducers>
