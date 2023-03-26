import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectSearchSlice, setSort } from '@/redux/slices/searchSlice'

const sortBy = [
	{ name: 'Lowest price', sortProperty: '-price' },
	{ name: 'Highest price', sortProperty: 'price' },
	{ name: 'Lowest mileage', sortProperty: '-mileage' },
	{ name: 'Highest mileage', sortProperty: 'mileage' },
	{ name: 'Oldest yaer', sortProperty: '-year' },
	{ name: 'Newest year', sortProperty: 'year' },
]

const Sort = () => {
	const { sort } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()

	return (
		<div className='cars__select select-block'>
			<ChevronDownIcon className='select-block__icon' />
			<select
				id='sortBy'
				value={sort}
				onChange={e => dispatch(setSort(e.target.value))}
			>
				<option value=''>Best match</option>
				{sortBy.map((obj, i) => (
					<option key={i} value={obj.sortProperty}>
						{obj.name}
					</option>
				))}
			</select>
			<label htmlFor='sortBy'>sortBy</label>
		</div>
	)
}

export default Sort
