import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Items {
	id: number
	name: string
	model: string
	color: string
	interiorColor: string
	location: string
	condition: string
	year: number
	price: number
	mileage: number
	fuelType: string
	engineCapacity: number
	transmission: string
	steeringWheel: string
	images: string[]
}

type SavedItems = {
	savedItems: [] | Items[]
}

const initialState: SavedItems = {
	savedItems: [],
}

export const saveItemsSlice = createSlice({
	name: 'savedItems',
	initialState,
	reducers: {
		setSavedItems(state, action) {
			state.savedItems = action.payload
		},
		removeAllSavedItems(state) {
			state.savedItems = []
		},
		removeSavedItems(state, action: PayloadAction<number>) {
			state.savedItems = state.savedItems.filter(
				item => item.id !== action.payload
			)
		},
	},
})

export const selectItemsSlice = (state: RootState) => state.savedItems
export const { setSavedItems, removeSavedItems, removeAllSavedItems } =
	saveItemsSlice.actions
export default saveItemsSlice.reducer
