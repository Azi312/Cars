import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCZ6Yf2jjb7J7cjgIpibxf4altukhm8w8Y',
	authDomain: 'cars-95559.firebaseapp.com',
	projectId: 'cars-95559',
	storageBucket: 'cars-95559.appspot.com',
	messagingSenderId: '542451743400',
	appId: '1:542451743400:web:b682e8809564f239a6a09d',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
