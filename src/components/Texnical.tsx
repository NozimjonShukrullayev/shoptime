import {
	simpleConditsioner,
	simplePhone,
	simpleVentilator,
	simpleWashing,
} from '@/assets'
import StaticImage from './StaticImage'

const features = [
	{ name: 'Origin', description: 'Designed by Good materials Inc.' },
	{
		name: 'Material',
		description:
			'Solid walnut base with rare earth magnets and powder coated steel card cover',
	},
	{ name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
	{ name: 'Finish', description: 'Hand sanded and finished with natural oil' },
	{ name: 'Includes', description: 'Wood card tray and 3 refill packs' },
	{
		name: 'Considerations',
		description:
			'Made from natural materials. Grain and color vary with each item.',
	},
]

export default function Texnical() {
	return (
		<div className='bg-white'>
			<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Technical Specifications
					</h2>
					<p className='mt-4 text-gray-500'>
						The walnut wood card tray is precision milled to perfectly fit a
						stack of Focus cards. The powder coated steel divider separates
						active cards from new ones, or can be used to archive important task
						lists.
					</p>

					<dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
						{features.map(feature => (
							<div key={feature.name} className='border-t border-gray-200 pt-4'>
								<dt className='font-medium text-gray-900'>{feature.name}</dt>
								<dd className='mt-2 text-sm text-gray-500'>
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
					<StaticImage
						staticImg={simpleWashing}
						title='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
						imgClassName='rounded-lg bg-gray-100'
					/>
					<StaticImage
						staticImg={simplePhone}
						title='Top down view of walnut card tray with embedded magnets and card groove.'
						imgClassName='rounded-lg bg-gray-100'
					/>
					<StaticImage
						staticImg={simpleVentilator}
						title='Side of walnut card tray with card groove and recessed card area.'
						imgClassName='rounded-lg bg-gray-100'
					/>
					<StaticImage
						staticImg={simpleConditsioner}
						title='Walnut card tray filled with cards and card angled in dedicated groove.'
						imgClassName='rounded-lg bg-gray-100'
					/>
				</div>
			</div>
		</div>
	)
}
