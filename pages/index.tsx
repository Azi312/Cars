import React, { FC } from 'react'
import Head from 'next/head'
import axios from 'axios'

import Search from '@/components/Search'

import { Roboto } from 'next/font/google'
import HomeSlider from '@/components/HomeSlider'

export async function getServerSideProps() {
	const res = await axios.get(`http://localhost:3001/items`)
	const data = await res.data

	return { props: { items: data } }
}

type HomeProps = {
	items: []
}

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

const Home: FC<HomeProps> = ({ items }) => {
	return (
		<>
			<Head>
				<title>Cars</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={roboto.className}>
				<div className='main__body'>
					<HomeSlider items={items} />
					<Search items={items} />
				</div>
			</main>
		</>
	)
}

export default Home
