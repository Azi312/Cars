import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Loyaut from '@/components/Loyaut'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import '../firebase.config'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Loyaut>
				<Component {...pageProps} />
			</Loyaut>
		</Provider>
	)
}
