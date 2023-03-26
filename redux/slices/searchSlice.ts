import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Items {
	name: string
	model: string
	minPrice: number
	maxPrice: number
	maxYear: number
	minYear: number
	miles: number
	condition: string
	sort: string
}

const initialState: Items = {
	name: '',
	model: '',
	minPrice: 0,
	maxPrice: 0,
	maxYear: 0,
	minYear: 0,
	miles: 0,
	condition: '',
	sort: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setName(state, action) {
			state.name = action.payload
		},
		setModel(state, action) {
			state.model = action.payload
		},
		setMinPrice(state, action) {
			state.minPrice = action.payload
		},
		setMaxPrice(state, action) {
			state.maxPrice = action.payload
		},
		setMinYear(state, action) {
			state.minYear = action.payload
		},
		setMaxYear(state, action) {
			state.maxYear = action.payload
		},
		setMiles(state, action) {
			state.miles = action.payload
		},
		setCondition(state, action) {
			state.condition = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
	},
})

export const selectSearchSlice = (state: RootState) => state.search
export const {
	setName,
	setModel,
	setMinPrice,
	setMaxPrice,
	setMinYear,
	setMaxYear,
	setMiles,
	setCondition,
	setSort,
} = searchSlice.actions
export default searchSlice.reducer
