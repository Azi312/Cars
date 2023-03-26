import { Component } from 'react'
import Slider from 'react-slick'
import styles from './CarInfo.module.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type CarInfoSliderProps = {
	images: string[]
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

export default class CarInfoSlider extends Component<CarInfoSliderProps> {
	render() {
		const { images, ...props } = this.props
		const settings = {
			customPaging: function (i: any) {
				return (
					<Image
						className={styles.dotsImage}
						src={images[i]}
						alt='image'
						unoptimized={true}
						width={100}
						height={70}
					/>
				)
			},
			dots: true,
			dotsClass: 'slick-dots slick-thumb',
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		}
		return (
			<div>
				<Slider {...settings}>
					{images.map((item, i) => (
						<div key={i}>
							<Image
								src={item}
								alt='image'
								unoptimized={true}
								width={820}
								height={510}
							/>
						</div>
					))}
				</Slider>
			</div>
		)
	}
}
