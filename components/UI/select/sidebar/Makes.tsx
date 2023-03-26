import { carsNames } from '@/components/arrays'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import React from 'react'
import {
	setName,
	setModel,
	selectSearchSlice,
} from '@/redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Makes = () => {
	const { name } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()

	const clearActiveModel = () => {
		if (name === '') {
			dispatch(setModel(''))
		}
		{
			return
		}
	}
	return (
		<div className='select-block'>
			<ChevronDownIcon className='select-block__icon' />
			<select
				className='select-block__select-3'
				id='brand'
				value={name}
				onChange={e => dispatch(setName(e.target.value))}
				onClick={clearActiveModel}
			>
				<option value={''} selected>
					All makes
				</option>
				{carsNames.map(item => (
					<option id={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<label htmlFor='brand'>Makes</label>
		</div>
	)
}

export default Makes
