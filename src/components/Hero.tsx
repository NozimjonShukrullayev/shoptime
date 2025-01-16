'use client'

import { HeroImgOne, HeroImgThree, HeroImgTwo } from '@/assets'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroSlideItem from './HeroSlideItem'

const heroSlideItems = [
	{
		id: 1,
		img: HeroImgThree,
		title: 'All Gadgets for you',
		category: 'gadgets',
		description:
			'All gadgets are here. preparation and sale and delivery of products for customers is done at the level of mutual respect.',
	},
	{
		id: 2,
		img: HeroImgOne,
		title: 'The best electronics',
		category: 'electronics',
		description:
			'All electronic products are here. Preparation and sale and delivery of products for customers is done at the level of mutual respect.',
	},
	{
		id: 3,
		img: HeroImgTwo,
		title: 'Top Clothes for Family',
		category: 'clothes',
		description:
			'All Clothes are here. Preparation and sale and delivery of products for customers is done at the level of mutual respect.',
	},
]

const Hero = () => {
	return (
		<Swiper
			effect='coverflow'
			modules={[Grid, Pagination, Autoplay, EffectCoverflow]}
			slidesPerView={1}
			spaceBetween={0}
			loop={true}
			grabCursor={true}
			pagination={{
				clickable: true,
			}}
			scrollbar={{ draggable: true }}
			autoplay={{
				delay: 5000,
			}}
			grid={{
				rows: 1,
			}}
			className='gridCol h-[450px] md:h-[500px] lg:h-[550px] mb-12'
		>
			{heroSlideItems.map(item => (
				<SwiperSlide key={item.id}>
					<HeroSlideItem {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Hero
