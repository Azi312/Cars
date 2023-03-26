import React, { FC, PropsWithChildren } from 'react'
import Header from './Header'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

const Loyaut: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={roboto.className}>
			<Header />
			<main className='main__container'>{children}</main>
		</div>
	)
}

export default Loyaut
