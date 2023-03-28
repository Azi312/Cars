// import { HeartIcon } from '@heroicons/react/24/outline'
import { selectItemsSlice } from '@/redux/slices/saveItemsSlice'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'

type CarProps = {
	id: number
	name: string
	model: string
	color: string
	interiorColor: string
	location: string
	condition: string
	year: number
	price: number
	mileage: number
	fuelType: string
	engineCapacity: number
	transmission: string
	steeringWheel: string
	images: string[]
}

const Car: FC<CarProps> = ({
	id,
	name,
	model,
	color,
	interiorColor,
	location,
	condition,
	year,
	price,
	mileage,
	fuelType,
	engineCapacity,
	transmission,
	steeringWheel,
	images,
}) => {
	const saveCar = (e: any) => {
		e.preventDefault()
		axios.post('http://localhost:3001/savedItems', {
			id,
			name,
			model,
			year,
			mileage,
			condition,
			location,
			color,
			interiorColor,
			fuelType,
			transmission,
			steeringWheel,
			engineCapacity,
			price,
			images,
		})
	}
	const { savedItems } = useSelector(selectItemsSlice)
	const saveId = savedItems.map(item => item.id)

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
					<div className='car__header'>
						<div className='car__condition'>
							{mileage <= 0 ? 'New' : 'Used'}
						</div>
						<div className='car__name'>
							{year} {name} {model}
						</div>
						{mileage > 0 && <div className='car__miles'>mi. {mileage}</div>}
						<div className='car__price'>{price}$</div>
					</div>
					<div className='car__footer'>
						<div className='car__location'>
							<MapPinIcon style={{ width: '20px', height: '20px' }} />
							{location}
						</div>
						<div className=''>{new Date().toLocaleString()}</div>
					</div>
				</div>
			</Link>
			<div onClick={saveCar} className='car__save'>
				<HeartIcon
					className={
						saveId.includes(id) ? 'car__save__btn saved-car' : 'car__save__btn'
					}
				/>
				<span className={saveId.includes(id) ? 'saved-car' : ''}>Save</span>
			</div>
		</div>
	)
}

export default Car
