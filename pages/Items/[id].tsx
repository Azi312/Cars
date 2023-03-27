import CarInfo from '@/components/CarInfo'
import axios from 'axios'
import { FC } from 'react'

export async function getStaticPaths() {
	const res = await axios.get(`http://localhost:3001/items`)
	const data = await res.data

	const paths = data.map((car: Items) => {
		return {
			params: { id: car.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context: any) {
	const id = context.params.id
	// const { id } = context.query

	const res = await axios.get(`http://localhost:3001/items/${id}`)
	const data = await res.data

	return { props: { items: data } }
}

// export const getServerSideProps = async (context: any) => {
// 	const id = context.params.id
// 	// const { id } = context.query

// 	const res = await axios.get(`http://localhost:3001/items/${id}`)
// 	const data = await res.data

// 	return { props: { items: data } }
// }

export interface Items {
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

type ItemProps = {
	items: Items
}

const Item: FC<ItemProps> = ({ items }) => {
	console.log(items)

	return (
		<>
			<CarInfo items={items} />
		</>
	)
}

export default Item
