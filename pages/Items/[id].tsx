import CarInfo from '@/components/CarInfo'
import { Items } from '@/redux/slices/saveItemsSlice'
import axios from 'axios'
import { FC } from 'react'

type ItemProps = {
	items: Items
}

const Item: FC<ItemProps> = ({ items }) => {
	return (
		<>
			<CarInfo items={items} />
		</>
	)
}

export const getServerSideProps = async (context: any) => {
	const id = context.params.id
	// const { id } = context.query

	const res = await axios.get(`http://localhost:3001/items/${id}`)
	const data = await res.data

	return { props: { items: data } }
}

// export async function getStaticPaths() {
// 	const res = await axios.get(`http://localhost:3001/items`)
// 	const data = await res.data

// 	const paths = data.map((car: Items) => {
// 		return {
// 			params: { id: car.id.toString() },
// 		}
// 	})

// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }

// export async function getStaticProps(context: any) {
// 	const id = context.params.id
// 	// const { id } = context.query

// 	const res = await axios.get(`http://localhost:3001/items/${id}`)
// 	const data = await res.data

// 	return { props: { items: data } }
// }

export default Item
