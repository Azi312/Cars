import SignUp from '@/components/Form/SignUp'
import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

const SignUpPage = () => {
	return (
		<div className={roboto.className}>
			<SignUp />
		</div>
	)
}

export default SignUpPage
