import React, { FC, useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import {
	setName,
	setModel,
	setMaxPrice,
	setMiles,
	setCondition,
} from '@/redux/slices/searchSlice'
import { carsNames, distances, prices, use } from './arrays'

interface Items {
	id: number
	name: string
	model: string
}

type SelectsProps = {
	items: Items[]
}

const Search: FC<SelectsProps> = ({ items }) => {
	const [activeName, setActiveName] = useState<string>()
	const [activeModel, setActiveModel] = useState<string>()
	const [activeMiles, setActiveMiles] = useState<string>()
	const [activePrice, setActivePrice] = useState<number | string>()
	const [activeCondition, setActiveCondition] = useState<string>()

	const dispatch = useDispatch()

	const onClickItem = () => {
		dispatch(setName(activeName))
		dispatch(setModel(activeModel))
		dispatch(setMaxPrice(activePrice))
		dispatch(setMiles(activeMiles))
		dispatch(setCondition(activeCondition))
	}

	return (
		<div className='content'>
			<div className='content__selects'>
				<div className='content__selects__title '>
					<h3 className='active'>Make</h3>
				</div>
				<div className='content__selects__items'>
					<div className='select-block'>
						<ChevronDownIcon className='select-block__icon' />
						<select
							id='new/used'
							value={activeCondition}
							onChange={e => setActiveCondition(e.target.value)}
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

					<div className='select-block'>
						<ChevronDownIcon className='select-block__icon' />
						<select
							id='Makes'
							value={activeName}
							onChange={e => setActiveName(e.target.value)}
						>
							<option value={''} selected>
								All makes
							</option>
							{carsNames.map(item => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
						<label htmlFor='Makes'>Makes</label>
					</div>

					<div className='select-block'>
						<ChevronDownIcon className='select-block__icon' />
						<select
							value={activeModel}
							onChange={e => setActiveModel(e.target.value)}
							id='Models'
						>
							<option value={''} selected>
								All models
							</option>
							{items
								.filter(item => item.name === activeName)
								.map(car => (
									<option key={car.id} value={car.model}>
										{car.model}
									</option>
								))}
						</select>
						<label htmlFor='Models'>Models</label>
					</div>

					<div className='select-block'>
						<ChevronDownIcon className='select-block__icon' />
						<select
							id='Price'
							value={activePrice}
							onChange={e => setActivePrice(e.target.value)}
						>
							<option value={0} selected>
								No max price
							</option>
							{prices.map(value => (
								<option value={value}>{value}</option>
							))}
						</select>
						<label htmlFor='Price'>Price</label>
					</div>
					<div className='select-block'>
						<ChevronDownIcon className='select-block__icon' />
						<select
							id='Distance'
							value={activeMiles}
							onChange={e => setActiveMiles(e.target.value)}
						>
							<option value={0} selected>
								All miles from
							</option>
							{distances.map(value => (
								<option value={value}>{value}</option>
							))}
						</select>
						<label htmlFor='Distance'>Distance</label>
					</div>
					<Link onClick={onClickItem} href='/Items' className='select__btn btn'>
						Search
					</Link>
				</div>
			</div>
			<div className='content__sale-car'>
				<h3>Sale your car</h3>
				<p>
					Instant Offer • List • Trade-In <br /> 3 easy ways to sell your car
					today!
				</p>
				<Link href='/Sale' className='content__sale-car__btn btn'>
					Get started
				</Link>
			</div>
		</div>
	)
}

export default Search
