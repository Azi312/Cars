import axios from 'axios'
import Head from 'next/head'
import { FC } from 'react'

import Cars from '@/components/Cars'
import Sidebar from '@/components/Sidebar'

export async function getServerSideProps() {
	const res = await axios.get(
		`https://my-json-server.typicode.com/Azi312/back-for-Cars/items`
	)
	const data = await res.data

	return { props: { items: data } }
}

type ItemProps = {
	items: []
}

const Items: FC<ItemProps> = ({ items }) => {
	return (
		<>
			<Head>
				<title>Cars / Items</title>
				<meta name='description' content='next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='items'>
				<Sidebar items={items} />
				<Cars />
			</div>
		</>
	)
}

export default Items
