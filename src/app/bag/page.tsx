'use client'

import StaticImage from '@/components/StaticImage'
import { useAuth } from '@/context/authcontext'
import { ProductType } from '@/interfaces'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const BagPage = () => {
	const { user } = useAuth()
	const [subtotal, setSubtotal] = useState<number>(0)
	const [products, setProducts] = useState<ProductType[]>(
		JSON.parse(localStorage.getItem('bags') as string) || []
	)

	const removeProduct = (id: number) => {
		const updatedProducts = products.filter(product => product.id !== id)
		localStorage.setItem('bags', JSON.stringify(updatedProducts))
		setProducts(updatedProducts)
	}

	const handleIncrement = (id: number) => {
		const updatedProducts = products.map(product => {
			if (product.id === id) {
				return { ...product, quantity: product.quantity + 1 }
			}
			return product
		})
		localStorage.setItem('bags', JSON.stringify(updatedProducts))
		setProducts(updatedProducts)
	}
	const handleDecrement = (id: number) => {
		const existProduct = products.find(product => product.id === id)

		if (existProduct?.quantity === 1) {
			removeProduct(id)
		} else {
			const updatedProducts = products.map(product => {
				if (product.id === id) {
					if (existProduct?.quantity === 1) {
						return product
					}
					return { ...product, quantity: product.quantity - 1 }
				}
				return product
			})
			localStorage.setItem('bags', JSON.stringify(updatedProducts))
			setProducts(updatedProducts)
		}
	}

	useEffect(() => {
		const subtotal = products.reduce(
			(acc, product) =>
				product.discount
					? acc +
					  (product.price - (product.price * product.discount) / 100) *
							product.quantity
					: acc + product.price * product.quantity,
			0
		)

		setSubtotal(subtotal)
	}, [products])

	return (
		<div className='font-sans max-w-4xl max-md:max-w-xl mx-auto px-5 py-5 lg:px-5'>
			<h1 className='text-2xl font-semibold text-gray-800'>Your Bag</h1>
			<div
				className={`grid w-full ${
					products.length > 0 ? 'md:grid-cols-3' : 'md:grid-cols-1'
				} gap-4 mt-8`}
			>
				{/* bag items */}
				{products.length > 0 ? (
					<>
						<div className='md:col-span-2 space-y-4'>
							{products.map(product => (
								<div
									key={product.id}
									className='flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]'
								>
									<div className='flex gap-4 flex-wrap md:flex-nowrap'>
										<div className='w-28 h-28 mt-4 max-sm:w-24 max-sm:h-24 shrink-0'>
											<Link href={`/product/${product.id}`}>
												<StaticImage
													staticImg={`${product.image}`}
													title={product.model}
													imgClassName='w-full h-full object-contain'
												/>
											</Link>
										</div>

										<div className='flex flex-col gap-4'>
											<div>
												<h3 className='text-sm sm:text-base font-bold text-gray-800'>
													{product.model}
												</h3>
												<p className='text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2'>
													Color:
													<span
														style={{ backgroundColor: `${product.color}` }}
														className='inline-block w-5 h-5 rounded-md bg-[#ac7f48]'
													></span>
												</p>
												<p className='text-sm capitalize font-semibold text-gray-500 mt-2 flex items-center gap-2'>
													Brand: {product.brand}
												</p>
												{product.discount && (
													<p className='text-sm capitalize font-semibold text-gray-500 mt-2 flex items-center gap-2'>
														Discount: {product.discount}%
													</p>
												)}
											</div>

											<div className='mt-auto flex items-center gap-3'>
												<button
													onClick={() => handleDecrement(product.id)}
													type='button'
													className='flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='w-2 fill-white'
														viewBox='0 0 124 124'
													>
														<path
															d='M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z'
															data-original='#000000'
														></path>
													</svg>
												</button>
												<span className='font-bold text-sm leading-[18px]'>
													{product.quantity}
												</span>
												<button
													onClick={() => handleIncrement(product.id)}
													type='button'
													className='flex items-center justify-center w-5 h-5 bg-gray-800 outline-none rounded-full'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='w-2 fill-white'
														viewBox='0 0 42 42'
													>
														<path
															d='M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z'
															data-original='#000000'
														></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className='ml-auto flex flex-col'>
										<div className='flex items-start gap-4 justify-end'>
											<svg
												onClick={() => removeProduct(product.id)}
												xmlns='http://www.w3.org/2000/svg'
												className='w-4 h-4 cursor-pointer fill-gray-400 hover:fill-red-600 inline-block'
												viewBox='0 0 24 24'
											>
												<path
													d='M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z'
													data-original='#000000'
												></path>
												<path
													d='M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z'
													data-original='#000000'
												></path>
											</svg>
										</div>

										<h3 className='text-sm sm:text-base flex font-bold mt-auto'>
											{product?.discount ? (
												<>
													<del className='text-gray-400 mr-2 inline-block'>
														{(product.price * product.quantity).toLocaleString(
															'en-US',
															{
																style: 'currency',
																currency: 'USD',
															}
														)}
													</del>
													<span className='text-gray-800'>
														{(
															(product.price -
																(product.price * product.discount) / 100) *
															product.quantity
														).toLocaleString('en-US', {
															style: 'currency',
															currency: 'USD',
														})}
													</span>
												</>
											) : (
												<span className='text-sm sm:text-base font-bold text-gray-800 mt-auto'>
													{(product.price * product.quantity).toLocaleString(
														'en-US',
														{
															style: 'currency',
															currency: 'USD',
														}
													)}
												</span>
											)}
										</h3>
									</div>
								</div>
							))}
						</div>
						{/* ----------------- checkout --------------------- */}
						<div className='bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]'>
							<ul className='text-gray-800 space-y-4'>
								<li className='flex flex-wrap gap-4 text-sm'>
									Subtotal{' '}
									<span className='ml-auto font-bold'>
										{subtotal.toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
										})}
									</span>
								</li>
								<li className='flex flex-wrap gap-4 text-sm'>
									Shipping{' '}
									<span className='ml-auto font-bold'>
										{(5.0).toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
										})}
									</span>
								</li>
								<hr className='border-gray-300' />
								<li className='flex flex-wrap gap-4 text-sm font-bold'>
									Total{' '}
									<span className='ml-auto'>
										{(subtotal + 5.0).toLocaleString('en-US', {
											currency: 'USD',
											style: 'currency',
										})}
									</span>
								</li>
							</ul>

							<div className='mt-8 space-y-2'>
								{!user ? (
									<Link href={'/sign-in'} className='button w-full text-center'>
										Buy Now
									</Link>
								) : (
									<button type='button' className='button w-full'>
										Buy Now
									</button>
								)}
								<Link
									href='/products'
									className=' w-full font-semibold bg-transparent text-center button border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-transparent'
								>
									Continue Shopping
								</Link>
							</div>

							<div className='relative mt-4 flex flex-wrap justify-center gap-4'>
								<img
									src='https://readymadeui.com/images/master.webp'
									alt='card1'
									className='w-10 object-contain'
								/>
								<img
									src='https://readymadeui.com/images/visa.webp'
									alt='card2'
									className='w-10 object-contain'
								/>
								<img
									src='https://readymadeui.com/images/american-express.webp'
									alt='card3'
									className='w-10 object-contain'
								/>
							</div>
						</div>
					</>
				) : (
					<div className='w-full text-lg font-medium p-8 min-h-96 flex flex-col items-center justify-center'>
						<ExclamationTriangleIcon
							aria-hidden='true'
							className='size-16 text-red-600'
						/>
						<p className='mb-3'>You bag is empty</p>
						<Link href='/products' className='button'>
							Products
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default BagPage
