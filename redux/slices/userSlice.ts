import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Items {
	email: any
	token: any
	id: any
}

const initialState: Items = {
	email: null,
	token: null,
	id: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser(state) {
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer

export const selectFilterSlice = (state: RootState) => state.user
