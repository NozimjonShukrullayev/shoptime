import { shoptimeLogo, shoptimeLogoMobile } from '@/assets'
import { CategoriesType } from '@/interfaces'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const Footer = async () => {
	const res = await fetch(`https://fakestoreapi.in/api/products/category`)
	const data: CategoriesType = await res.json()

	return (
		<footer className='text-gray-600 body-font max-w-7xl mx-auto w-full border-t px-5 lg:px-8'>
			<div className='py-14 mx-auto flex md:items-center lg:items-start md:flex-row sm:flex-nowrap flex-wrap flex-col'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					{/* logo */}
					<Link href='/' className='m-0'>
						<span className='sr-only'>Your Company</span>
						<Image
							alt='shoptime'
							src={shoptimeLogo}
							height={30}
							priority
							className='hidden sm:flex md:h-11 w-auto mx-auto md:mx-0'
						/>
						<Image
							alt='shoptime'
							src={shoptimeLogoMobile}
							height={30}
							className='sm:hidden md:h-12 w-auto mx-auto md:mx-0'
						/>
					</Link>
					<p className='mt-2 text-sm text-gray-500'>
						Air plant banjo lyft occupy retro adaptogen indego
					</p>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h3 className='title-font font-semibold text-gray-900 tracking-wider text-base mb-3'>
							Pages
						</h3>
						<nav className='list-none mb-10'>
							<li>
								<Link
									href={'/'}
									className='text-gray-600 mb-1 inline-block hover:text-gray-800'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={'/products#products-hero'}
									className='text-gray-600 mb-1 inline-block hover:text-gray-800'
								>
									products
								</Link>
							</li>
							<li>
								<Link
									href={'/bag'}
									className='text-gray-600 mb-1 inline-block hover:text-gray-800'
								>
									bag
								</Link>
							</li>
							<li>
								<Link
									href={'/sign-in'}
									className='text-gray-600 mb-1 inline-block hover:text-gray-800'
								>
									Sign in
								</Link>
							</li>
							<li>
								<Link
									href={'/sign-up'}
									className='text-gray-600 mb-1 inline-block hover:text-gray-800'
								>
									Sign up
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h3 className='title-font font-semibold text-gray-900 tracking-wider text-base mb-3'>
							Categories
						</h3>
						<nav className='list-none mb-10'>
							{data.categories.map(category => (
								<li key={category}>
									<Link
										onClick={() => window.scrollTo(0, 1)}
										href={`/products/${category}`}
										className='text-gray-600 capitalize mb-1 inline-block hover:text-gray-800'
									>
										{category}
									</Link>
								</li>
							))}
						</nav>
					</div>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='max-w-7xl mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-500 text-sm text-center sm:text-left'>
						© {format(new Date(), 'yyyy')} Shoptime —
						<span className='text-gray-600 ml-1'>@nozimshukrullayev</span>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a
							href='https://facebook.com'
							target='_blank'
							className='text-gray-500'
						>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							className='ml-3 text-gray-500'
						>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a
							href='https://instagram.com'
							target='_blank'
							className='ml-3 text-gray-500'
						>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							className='ml-3 text-gray-500'
						>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
								></path>
								<circle cx='4' cy='4' r='2' stroke='none'></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
