import React, { FC } from 'react'
import {
	setName,
	setModel,
	selectSearchSlice,
} from '@/redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

interface Items {
	name: string
	model: string
}
type ModelsProps = {
	items: Items[]
}

const Models: FC<ModelsProps> = ({ items }) => {
	const { name, model } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()
	return (
		<div>
			{name && (
				<div className='sidebar__checkbox'>
					<h3>{name} models</h3>
					<input
						className='styled-checkbox'
						onClick={() => dispatch(setModel(''))}
						checked={model ? false : true}
						id='all'
						name='model'
						type='radio'
					/>
					<label htmlFor='all'>
						<span>All</span>
					</label>
					{items
						.filter(item => item.name === name)
						.map(car => (
							<>
								<input
									className='styled-checkbox'
									onClick={() => dispatch(setModel(car.model))}
									checked={car.model === model ? true : false}
									id={car.model}
									name='model'
									type='radio'
								/>
								<label htmlFor={car.model}>
									<span>{car.model}</span>
								</label>
							</>
						))}
				</div>
			)}
		</div>
	)
}

export default Models
