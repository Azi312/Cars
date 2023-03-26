import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchSlice } from '@/redux/slices/searchSlice'
import Link from 'next/link'
import axios from 'axios'
import Sort from './UI/select/Sort'
import Car from './Car'
import { selectItemsSlice, setItems } from '@/redux/slices/itemsSlice'

type Items = {
	mileage: number
}

const Cars = () => {
	const { items } = useSelector(selectItemsSlice)
	const dispatch = useDispatch()

	const {
		name,
		model,
		condition,
		miles,
		minYear,
		maxYear,
		minPrice,
		maxPrice,
		sort,
	} = useSelector(selectSearchSlice)

	useEffect(() => {
		const names = name ? `&name=${name}` : ''
		const models = model ? `&model=${model}` : ''
		const mileage = miles ? `&mileage_gte=${miles}` : ''
		const conditions = condition ? `condition=${condition}` : ''
		const oldestYear = minYear ? `&year_gte=${minYear}` : ''
		const newestYear = maxYear ? `&year_lte=${maxYear}` : ''
		const lowestPrice = minPrice ? `&price_gte=${minPrice}` : ''
		const highestPrice = maxPrice ? `&price_lte=${maxPrice}` : ''
		const sortById = sort.replace('-', '')
		const order = sort.includes('-') ? 'asc' : 'desc'

		axios
			.get(
				`http://localhost:3001/items?${conditions}${names}${models}${mileage}${oldestYear}${newestYear}${lowestPrice}${highestPrice}&_sort=${sortById}&_order=${order}`
			)
			.then(res => {
				dispatch(setItems(res.data))
			})
	}, [
		name,
		model,
		miles,
		condition,
		minYear,
		maxYear,
		minPrice,
		maxPrice,
		sort,
	])

	return (
		<div className='cars'>
			<div className='cars__head'>
				<h1 className='cars__title'>
					{condition === '' ? 'New and Used' : condition} vehicles for sale
				</h1>
				<Sort />
			</div>
			{items.map((item: any) => (
				<Car key={item.id} item={item} {...item} />
			))}
		</div>
	)
}

export default Cars
