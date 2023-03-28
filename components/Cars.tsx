import { Items, selectItemsSlice, setItems } from '@/redux/slices/itemsSlice'
import { selectSearchSlice } from '@/redux/slices/searchSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Car from './Car'
import Sort from './UI/select/Sort'

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

	const fetchCars = async () => {
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

		try {
			const { data } = await axios.get(
				`http://localhost:3001/items?${conditions}${names}${models}${mileage}${oldestYear}${newestYear}${lowestPrice}${highestPrice}&_sort=${sortById}&_order=${order}`
			)
			dispatch(setItems(data))
		} catch (error) {
			console.log('Error', error)
			alert('Error to get cars')
		}
	}

	useEffect(() => {
		fetchCars()
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
					{!condition ? 'New and Used' : condition} vehicles for sale
				</h1>
				<Sort />
			</div>
			{items.map((item: Items) => (
				<Car key={item.id} {...item} />
			))}
		</div>
	)
}

export default Cars
