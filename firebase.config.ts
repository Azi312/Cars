// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCZ6Yf2jjb7J7cjgIpibxf4altukhm8w8Y',
	authDomain: 'cars-95559.firebaseapp.com',
	projectId: 'cars-95559',
	storageBucket: 'cars-95559.appspot.com',
	messagingSenderId: '542451743400',
	appId: '1:542451743400:web:b682e8809564f239a6a09d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app

// apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain:process.env.FIREBASE_AUTH_DOMAIN,
// 	projectId:process.env.FIREBASE_PROJECT_ID,
// 	storageBucket:process.env.FIREBASE_STORAGE_BUSKET,
// 	messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
// 	appId:process.env.FIREBASE_API_ID,
