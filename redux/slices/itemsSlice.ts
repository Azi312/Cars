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

type ItemsTypes = {
	items: Items[]
	savedItems: [] | Items[]
}

const initialState: ItemsTypes = {
	items: [],
	savedItems: [],
}

export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
		setSavedItems(state, action) {
			state.savedItems = action.payload
		},
		removeSavedItems(state, action: PayloadAction<number>) {
			state.savedItems = state.savedItems.filter(
				item => item.id !== action.payload
			)
		},
	},
})

export const selectItemsSlice = (state: RootState) => state.items
export const { setItems, setSavedItems, removeSavedItems } = itemsSlice.actions
export default itemsSlice.reducer
