import { allCars } from '@/redux/allCars/allCars'
import { Items } from '@/redux/slices/saveItemsSlice'
import { selectSearchSlice } from '@/redux/slices/searchSlice'
import { useSelector } from 'react-redux'
import Car from './Car'
import Sort from './UI/select/Sort'

const Cars = () => {
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

	const { data: items, error } = allCars.useGetItemsQuery({
		names,
		models,
		mileage,
		conditions,
		oldestYear,
		newestYear,
		lowestPrice,
		highestPrice,
		sortById,
		order,
	})

	return (
		<div className='cars'>
			<div className='cars__head'>
				<h1 className='cars__title'>
					{!condition ? 'New and Used' : condition} vehicles for sale
				</h1>
				<Sort />
			</div>
			{items?.map((item: Items) => (
				<Car key={item.id} {...item} />
			))}
		</div>
	)
}

export default Cars
