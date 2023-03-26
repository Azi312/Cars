import { selectFilterSlice } from '@/redux/slices/userSlice'
import { useSelector } from 'react-redux'

export const useAuth = () => {
	const { email, token, id } = useSelector(selectFilterSlice)

	return {
		isAuth: !!email,
		email,
		token,
		id,
	}
}
