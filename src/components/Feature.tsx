'use client'

import { boatRockerz, samsungS22, sonyPs5 } from '@/assets'
import FeatureCard from './FeatureCard'

const featureItems = [
	{
		id: 1,
		title: 'Sony PS5 Playstation',
		subtitle: '2025 trends',
		image: sonyPs5,
	},
	{ id: 2, title: 'Samsung s22', subtitle: 'Recommended', image: samsungS22 },
	{
		id: 3,
		title: 'boAt Rockerz 370',
		subtitle: 'Best sellers',
		image: boatRockerz,
	},
]

const Feature = () => {
	return (
		<section className='text-gray-600 body-font mb-20'>
			<div className='mx-auto'>
				<div className='flex flex-wrap w-full mb-10 flex-col items-center text-center'>
					<h2 className='sm:text-4xl text-2xl font-medium title-font text-gray-900'>
						Our top news
					</h2>
				</div>
				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6'>
					{featureItems.map(item => (
						<FeatureCard key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Feature
