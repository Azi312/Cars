import { prices } from '@/components/arrays'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import React from 'react'
import {
	setMinPrice,
	setMaxPrice,
	selectSearchSlice,
} from '@/redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Prices = () => {
	const { minPrice, maxPrice } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()
	return (
		<>
			<div className='select-block'>
				<ChevronDownIcon className='select-block__icon' />
				<select
					id='minPrice'
					value={minPrice}
					onChange={e => dispatch(setMinPrice(e.target.value))}
				>
					<option value={''} selected>
						Lowest
					</option>
					{prices.map(value => (
						<option value={value}>{value}$</option>
					))}
				</select>
				<label htmlFor='minPrice'>Min price</label>
			</div>

			<div className='select-block'>
				<ChevronDownIcon className='select-block__icon' />
				<select
					id='maxPrice'
					value={maxPrice}
					onChange={e => dispatch(setMaxPrice(e.target.value))}
				>
					<option value={''} selected>
						Highest
					</option>
					{prices.map(item => (
						<option value={item}>{item}$</option>
					))}
				</select>
				<label htmlFor='maxPrice'>Max price</label>
			</div>
		</>
	)
}

export default Prices
