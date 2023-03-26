import { distances } from '@/components/arrays'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import React from 'react'
import { setMiles, selectSearchSlice } from '@/redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Miles = () => {
	const { miles, condition } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()
	return (
		<div className='select-block'>
			<ChevronDownIcon className='select-block__icon' />
			<select
				className='select-block__select-2'
				id='Miles'
				value={miles}
				onChange={e => dispatch(setMiles(e.target.value))}
			>
				<option value={0} selected>
					All miles from
				</option>
				{condition !== 'New' &&
					distances.map(value => <option value={value}>{value}</option>)}
			</select>
			<label htmlFor='Miles'>Miles</label>
		</div>
	)
}

export default Miles
