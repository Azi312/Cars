import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'
import userSlice from './slices/userSlice'
import itemsSlice from './slices/itemsSlice'

export const store = configureStore({
	reducer: {
		search: searchSlice,
		user: userSlice,
		items: itemsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
