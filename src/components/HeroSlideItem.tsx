'use client'

import { HeroSlideType } from '@/interfaces'
import Link from 'next/link'
import { FC } from 'react'
import StaticImage from './StaticImage'

const HeroSlideItem: FC<HeroSlideType> = ({
	img,
	category,
	title,
	description,
}) => {
	return (
		<div className='relative h-[480px] md:h-[530px] lg:h-[600px] overflow-hidden'>
			<div className='mx-auto flex md:flex-row flex-col w-full justify-center md:items-center max-w-7xl px-5 lg:px-8 h-[100%]'>
				<div className='z-20 md:flex-grow w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center md:content-center text-center'>
					<p className='mb-5 leading-relaxed uppercase text-white'>
						Category: {category}
					</p>
					<h1 className='title-font text-3xl w-full lg:max-w-[70%] sm:text-4xl lg:text-6xl mb-5 font-medium text-gray-100'>
						{title}
					</h1>
					<p className='text-md text-gray-200 w-full md:max-w-[50%] mb-7'>
						{description}
					</p>
					<div className='flex justify-center'>
						<Link href={'/products'} className='button-secondary'>
							Shop now
						</Link>
					</div>
				</div>
				<div className='absolute top-0 left-0 w-full h-full gradient -z-0'></div>
				<StaticImage staticImg={img} title={title} imgClassName='static-img' />
			</div>
		</div>
	)
}

export default HeroSlideItem
