import {
	simpleLaptop,
	simplePhone,
	simpleRefrigirator,
	simpleVacuumCleaner,
	simpleVentilator,
	simpleWashing,
	simpleWatch,
} from '@/assets'
import StaticImage from './StaticImage'

export default function ProductsHero() {
	return (
		<section
			id='products-hero'
			className='relative overflow-hidden bg-white max-w-7xl mx-auto'
		>
			<div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
				<div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
					<div className='sm:max-w-lg'>
						<h1 className='title-font text-3xl w-full sm:text-4xl lg:text-6xl mb-5 font-medium text-gray-900'>
							The latest elektronic collection is here
						</h1>
						<p className='text-xl text-gray-600 w-full md:max-w-[80%] mb-7'>
							This year, our new elektronic collection will make you feel like
							you're in the future.
						</p>
					</div>
					<div>
						<div className='mt-10'>
							{/* Decorative image grid */}
							<div
								aria-hidden='true'
								className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
							>
								<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-4'>
									<div className='flex items-center space-x-6 lg:space-x-8'>
										<div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleVentilator}
													imgClassName='size-full object-cover'
												/>
											</div>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleRefrigirator}
													imgClassName='size-full object-cover'
												/>
											</div>
										</div>
										<div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleVacuumCleaner}
													imgClassName='size-full object-cover'
												/>
											</div>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleWatch}
													imgClassName='size-full object-cover'
												/>
											</div>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simplePhone}
													imgClassName='size-full object-cover'
												/>
											</div>
										</div>
										<div className='grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleWashing}
													imgClassName='size-full object-cover'
												/>
											</div>
											<div className='h-64 w-44 overflow-hidden rounded-lg'>
												<StaticImage
													title='simple-watch'
													staticImg={simpleLaptop}
													imgClassName='size-full object-cover'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
