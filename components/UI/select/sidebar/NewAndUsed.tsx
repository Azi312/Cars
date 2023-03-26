import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import React from 'react'
import { setCondition, selectSearchSlice } from '@/redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { use } from '@/components/arrays'

const NewAndUsed = () => {
	const { condition } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()

	return (
		<div className='select-block'>
			<ChevronDownIcon className='select-block__icon' />
			<select
				className='select-block__select-1'
				id='new/used'
				value={condition}
				onChange={e => dispatch(setCondition(e.target.value))}
			>
				<option value={''} selected>
					New & used
				</option>
				{use.map(value => (
					<option value={value}>{value}</option>
				))}
			</select>
			<label htmlFor='new/used'>New/used</label>
		</div>
	)
}

export default NewAndUsed
