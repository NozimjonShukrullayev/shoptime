'use client'

import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import StaticImage from './StaticImage'

interface Props {
	image: StaticImageData
	title: string
	subtitle: string
}

const FeatureCard: FC<Props> = ({ image, title, subtitle }) => {
	return (
		<div className='flex content-stretch'>
			<div className='border w-full bg-slate-100 border-gray-200 p-6 text-center flex flex-col items-center rounded-lg'>
				<span className='text-base text-gray-700 font-medium title-font'>
					{subtitle}
				</span>
				<h3 className='text-2xl text-gray-900 font-semibold title-font my-4'>
					{title}
				</h3>
				<Link href={'/products'} className='button mb-8'>
					Shop now
				</Link>
				<div className='w-full h-full inline-flex items-center justify-center mb-4'>
					<StaticImage
						staticImg={image}
						title={title}
						imgClassName='custom-img'
					/>
				</div>
			</div>
		</div>
	)
}

export default FeatureCard
