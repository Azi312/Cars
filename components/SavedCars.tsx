import { TrashIcon } from '@heroicons/react/24/outline'
import React, { FC } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeSavedItems } from '@/redux/slices/itemsSlice'
import Link from 'next/link'

type SavedCarsProps = {
	id: number
	name: string
	model: string
	year: number
	mileage: number
	price: number
	images: string[]
}

const SavedCars: FC<SavedCarsProps> = ({
	id,
	name,
	model,
	year,
	mileage,
	price,
	images,
}) => {
	const dispatch = useDispatch()

	const removeSavedCar = () => {
		if (window.confirm('Are you sure, you want to remove?')) {
			axios.delete(`http://localhost:3001/savedItems/${id}`)
			dispatch(removeSavedItems(id))
		}
	}

	return (
		<div className='car'>
			<Link href={`/Items/${id}`} className='car__link-id'>
				<div className='car__slider'>
					<Image
						src={images[0]}
						alt='image'
						unoptimized={true}
						width={320}
						height={200}
					/>
				</div>
				<div className='car__content'>
					<div className='car__condition'>{mileage <= 0 ? 'New' : 'Used'}</div>
					<div className='car__name'>
						{year} {name} {model}
					</div>
					{mileage > 0 && <div className='car__miles'>mi. {mileage}</div>}
					<div className='car__price'>{price}$</div>

					<div className=''>{new Date().toLocaleString()}</div>
				</div>
			</Link>
			<div className='car__remove' onClick={removeSavedCar}>
				<TrashIcon className='remove-btn' />
			</div>
		</div>
	)
}

export default SavedCars