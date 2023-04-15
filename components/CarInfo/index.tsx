import { FC } from 'react'
import styles from './CarInfo.module.scss'
import CarInfoSlider from './CarInfoSlider'

import { MapPinIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

import { Items, selectItemsSlice } from '@/redux/slices/saveItemsSlice'
import axios from 'axios'
import { Roboto } from 'next/font/google'
import { useSelector } from 'react-redux'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

const subject = [
	'Check availability',
	'Request virtual appointment',
	'Get a price quote',
	'Schedule a test drive',
	'Discuss financing',
	'Ask a question',
]

type CarInfoProps = {
	items: Items
}

const CarInfo: FC<CarInfoProps> = ({ items }) => {
	const {
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
	} = items || {}

	const saveCar = (e: any) => {
		e.preventDefault()
		axios.post(
			'https://my-json-server.typicode.com/Azi312/back-for-Cars/savedItems',
			{
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
			}
		)
	}

	const { savedItems } = useSelector(selectItemsSlice)
	const saveId = savedItems.map(item => item.id)

	const style = {
		color: {
			color: '#b0c',
		},
		nothing: {
			color: '',
		},
	}

	return (
		<div className={roboto.className}>
			<div className={styles.carInfo}>
				<div className={styles.carInfo__body}>
					<div className={styles.carInfo__slider}>
						<CarInfoSlider images={images} />
					</div>
					<div className={styles.carInfo__content}>
						<div className={styles.info}>
							<div className={styles.info__condition}>{condition}</div>
							<div className={styles.info__name}>
								{year} {name} {model}
							</div>
							<div className={styles.info__mileage}>{mileage} mi.</div>
							<div className={styles.info__price}>{price}$</div>
							<div className={styles.info__location}>
								<MapPinIcon style={{ width: '20px', height: '20px' }} />{' '}
								{location}
							</div>
							<div
								onClick={saveCar}
								className={styles.info__save}
								style={saveId.includes(id) ? style.color : style.nothing}
							>
								<HeartIcon className={styles.info__save__btn} />
								<span>Save</span>
							</div>
						</div>
						<div className={styles.basics}>
							<h3 className={styles.basics__title}>Basics</h3>
							<ul className={styles.basics__items}>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Exterior color</p>
									<p className={styles.basics__value}>{color}</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Interior color</p>
									<p className={styles.basics__value}>{interiorColor}</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Fuel type</p>
									<p className={styles.basics__value}>{fuelType}</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Transmission</p>
									<p className={styles.basics__value}>{transmission}</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Engine</p>
									<p className={styles.basics__value}>{engineCapacity}L</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Mileage</p>
									<p className={styles.basics__value}>{mileage} mi.</p>
								</li>
								<li className={styles.basics__item}>
									<p className={styles.basics__name}>Steering wheel</p>
									<p className={styles.basics__value}>{steeringWheel}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.form}>
					<div className={styles.form__body}>
						<h3>Contact seller</h3>
						<p>Call (530) 488-4375</p>
						<form>
							<input
								type='email'
								id='email'
								pattern='.+@globex\.com'
								required
							/>
							<input
								type='tel'
								id='phone'
								name='phone'
								pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
								required
								placeholder='Phone (optional)'
							/>
							<div className={styles.form__select}>
								<select id='subject'>
									{subject.map(item => (
										<option value={item}>{item}</option>
									))}
								</select>
								<label htmlFor='subject'>Subject</label>
							</div>
							<div className={styles.form__text}>
								<label htmlFor='text'>Comments</label>
								<textarea id='text' />
							</div>
							<button>Check availability</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarInfo
