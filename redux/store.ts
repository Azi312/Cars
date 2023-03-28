import { configureStore } from '@reduxjs/toolkit'
import { allCars } from './allCars/allCars'
import saveItemsSlice from './slices/saveItemsSlice'
import searchSlice from './slices/searchSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
	reducer: {
		search: searchSlice,
		user: userSlice,
		savedItems: saveItemsSlice,
		[allCars.reducerPath]: allCars.reducer,
	},
	middleware: getDefoultMiddleware =>
		getDefoultMiddleware().concat(allCars.middleware),
})

export type RootState = ReturnType<typeof store.getState>
