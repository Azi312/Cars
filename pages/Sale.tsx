import {
	carsNames,
	cities,
	colors,
	fuelTypes,
	steeringWheels,
	transmissions,
	use,
	years,
} from '@/components/arrays'
import { useAuth } from '@/hooks/use-auth'
import axios from 'axios'
import Head from 'next/head'
import { FC, useState } from 'react'

export async function getServerSideProps() {
	const res = await axios.get(`http://localhost:3001/items`)
	const data = await res.data

	return { props: { items: data } }
}

interface Items {
	name: string
	model: string
}

type SaleProps = {
	items: Items[]
}

const Sale: FC<SaleProps> = ({ items }) => {
	const [name, setName] = useState<string>()
	const [model, setModel] = useState<string>()
	const [year, setYear] = useState<number | string>()
	const [mileage, setMileage] = useState<number | string>()
	const [condition, setCondition] = useState<string>()
	const [location, setLocation] = useState<string>()
	const [color, setColor] = useState<string>()
	const [fuelType, setFuelType] = useState<string>()
	const [transmission, setTransmission] = useState<string>()
	const [steeringWheel, setSteeringWheel] = useState<string>()
	const [engineCapacity, setEngineCapacity] = useState<string>()
	const [price, setPrice] = useState<number | string>()
	const [images, setImages] = useState<any>([])

	const addItem = (e: any) => {
		e.preventDefault()
		axios.post('http://localhost:3001/items', {
			name,
			model,
			year,
			mileage,
			condition,
			location,
			color,
			fuelType,
			transmission,
			steeringWheel,
			engineCapacity,
			price,
			images: [images],
		})
	}

	const { isAuth, email } = useAuth()

	return (
		<>
			<Head>
				<title>Cars / Sale</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='sale'>
				<h1 className='sale__title'>Sale your car</h1>

				{isAuth ? (
					<form onSubmit={addItem}>
						<div className='sale__car car-block'>
							<h3>Car</h3>
							<div className='sale__select sale-select'>
								<label>
									Car name*
									<select
										defaultValue={''}
										value={name}
										onChange={e => setName(e.target.value)}
									>
										<option value={''} selected></option>
										{carsNames.map(item => (
											<option key={item} id={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Model*
									<select
										defaultValue={''}
										value={model}
										onChange={e => setModel(e.target.value)}
									>
										<option value={''} selected>
											Model
										</option>
										{items
											.filter(item => item.name === name)
											.map(item => (
												<option
													key={item.model}
													id={item.model}
													value={item.model}
												>
													{item.model}
												</option>
											))}
									</select>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Year*
									<select
										defaultValue={''}
										value={year}
										onChange={e => setYear(e.target.value)}
									>
										<option value={''} selected></option>
										{years.map(value => (
											<option key={value} value={value}>
												{value}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className=''>
								<label>
									Mileage*
									<input
										type='text'
										value={mileage}
										onChange={e => setMileage(e.target.value)}
									/>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Condition*
									<select
										defaultValue={''}
										value={condition}
										onChange={e => setCondition(e.target.value)}
									>
										<option value={''} selected></option>
										{use.map(value => (
											<option key={value} value={value}>
												{value}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Location*
									<select
										defaultValue={''}
										value={location}
										onChange={e => setLocation(e.target.value)}
									>
										<option value={''} selected></option>
										{cities.map(value => (
											<option key={value} value={value}>
												{value}
											</option>
										))}
									</select>
								</label>
							</div>
						</div>

						{/* =============================== ============================== */}

						<div className='sale__characteristics car-block'>
							<h3>Characteristics</h3>
							<div className='sale__select sale-select'>
								<label>
									Fuel type*
									<select
										defaultValue={''}
										value={fuelType}
										onChange={e => setFuelType(e.target.value)}
									>
										<option value={''} selected></option>
										{fuelTypes.map(item => (
											<option key={item} id={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Transmission*
									<select
										defaultValue={''}
										value={transmission}
										onChange={e => setTransmission(e.target.value)}
									>
										<option value={''} selected></option>
										{transmissions.map(item => (
											<option key={item} id={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Steering wheel*
									<select
										defaultValue={''}
										value={steeringWheel}
										onChange={e => setSteeringWheel(e.target.value)}
									>
										<option value={''} selected></option>
										{steeringWheels.map(value => (
											<option key={value} value={value}>
												{value}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className=''>
								<label>
									Engine capacity*
									<input
										type='text'
										value={engineCapacity}
										onChange={e => setEngineCapacity(e.target.value)}
									/>
								</label>
							</div>
							<div className='sale__select sale-select'>
								<label htmlFor='brand'>
									Color*
									<select
										defaultValue={''}
										value={color}
										onChange={e => setColor(e.target.value)}
									>
										<option value={''} selected></option>
										{colors.map(value => (
											<option key={value} value={value}>
												{value}
											</option>
										))}
									</select>
								</label>
							</div>
							<div className=''>
								<label>
									Price*
									<input
										type='text'
										value={price}
										onChange={e => setPrice(e.target.value)}
									/>
								</label>
							</div>
							<div className=''>
								<label>
									Image*
									<input
										type='url'
										name='url'
										id='url'
										placeholder='https://example.com'
										pattern='https://.*'
										// size='30'
										required
										value={images}
										onChange={e => setImages(e.target.value)}
									/>
								</label>
							</div>
						</div>
						<button type='submit'>Publish</button>
					</form>
				) : (
					<h2 className='sale__notAuth'>
						You are not logged in. Adding is possible only for registered
						members
					</h2>
				)}
			</div>
		</>
	)
}

export default Sale
