import { useAuth } from '@/hooks/use-auth'
import { selectItemsSlice } from '@/redux/slices/saveItemsSlice'
import { removeUser } from '@/redux/slices/userSlice'
import {
	ArrowLeftOnRectangleIcon,
	ArrowRightOnRectangleIcon,
	Bars3Icon,
	HeartIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
	const [open, setOpen] = useState(false)

	const { savedItems } = useSelector(selectItemsSlice)
	const dispatch = useDispatch()

	const { isAuth, email } = useAuth()

	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__body'>
					<Link href='/' className='header__logo'>
						<Image src='/logo.png' alt='logo' width={80} height={80} />
					</Link>

					<div
						className='header__menu-burger menu-burger'
						onClick={() => setOpen(prev => !prev)}
					>
						{open ? (
							<XMarkIcon className='menu-burger__icon' />
						) : (
							<Bars3Icon className='menu-burger__icon' />
						)}
						<span>Menu</span>
						{open && (
							<div className='menu-burger__list'>
								<h3>menu</h3>
								<Link href='/Saved' className='menu-burger__saved'>
									<HeartIcon className='menu-burger__saved-icon' />
									<div>Saved cars {savedItems && `(${savedItems.length})`}</div>
								</Link>
								{isAuth ? (
									<div
										onClick={() => dispatch(removeUser())}
										className='menu-burger__login'
									>
										<ArrowLeftOnRectangleIcon className='login-icon' />
										<div>Sign Out</div>
									</div>
								) : (
									<Link href='/LoginPage' className='menu-burger__login'>
										<ArrowRightOnRectangleIcon className='login-icon' />
										<div>Login</div>
									</Link>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
