import { Component } from 'react'
import Slider from 'react-slick'
import styles from './HomeSlider.module.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

interface Items {
	id: number
	images: string[]
}
interface PosterSliderProps {
	items: Items[]
}

function SampleNextArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.slide__next} onClick={onClick}>
			<ChevronRightIcon />
		</div>
	)
}

function SamplePrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.slide__prev} onClick={onClick}>
			<ChevronLeftIcon />
		</div>
	)
}

export default class HomeSlider extends Component<PosterSliderProps> {
	render() {
		const { items, ...props } = this.props
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		}
		return (
			<div className={styles.poster}>
				<Slider {...settings}>
					{items.map((item, i) => (
						<Link href={`/Items/${item.id}`} key={i}>
							<Image
								src={item.images[0]}
								alt='image'
								unoptimized={true}
								width={440}
								height={280}
							/>
						</Link>
					))}
				</Slider>
			</div>
		)
	}
}
