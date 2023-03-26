import SignIn from '@/components/Form/SignIn'
import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

const LoginPage = () => {
	return (
		<div className={roboto.className}>
			<SignIn />
		</div>
	)
}

export default LoginPage
