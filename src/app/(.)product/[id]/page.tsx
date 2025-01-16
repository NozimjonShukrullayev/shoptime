'use client'

import CustomImage from '@/components/CustomImage'
import { useAuth } from '@/context/authcontext'
import { ProductsType, ProductType } from '@/interfaces'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ProductDetailedPage = () => {
	const { id } = useParams()
	const router = useRouter()
	const { user } = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const [product, setProduct] = useState<ProductType>()
	const [isOpen, setIsOpen] = useState(true)

	const adToBagHandler = () => {
		const bagProducts: ProductType[] =
			JSON.parse(localStorage.getItem('bags') as string) || []
		const isExistProduct = bagProducts.find(
			bagProduct => bagProduct.id === product?.id
		)

		if (isExistProduct) {
			const updatedBagProducts = bagProducts.map(bagProduct => {
				if (bagProduct.id === product?.id) {
					return { ...bagProduct, quantity: bagProduct.quantity + 1 }
				}
				return bagProduct
			})
			localStorage.setItem('bags', JSON.stringify(updatedBagProducts))
		} else {
			const productData = [...bagProducts, { ...product, quantity: 1 }]
			localStorage.setItem('bags', JSON.stringify(productData))
		}

		toast.success('Product added to bag')
	}

	useEffect(() => {
		async function getData() {
			setIsLoading(true)
			const res = await fetch(`https://fakestoreapi.in/api/products/${id}`)
			const data: ProductsType = await res.json()
			setProduct(data.product)
			setIsLoading(false)
		}

		getData()
	}, [id])

	const closeModalHandler = () => {
		setIsOpen(false)
		router.back()
	}

	return (
		<Dialog open={isOpen} onClose={closeModalHandler} className='relative z-50'>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/95 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
			/>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
					<DialogPanel
						transition
						className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full max-w-sm sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 mx-auto p-5 md:p-8'
					>
						{isLoading ? (
							<div className='w-full h-96 flex items-center'>
								<div className='h-28 w-8 rounded-full border-2 block mx-auto border-dotted border-blue-600 animate-spin' />
							</div>
						) : (
							<div className='flex gap-x-8 h-96'>
								<button
									type='button'
									onClick={() => window.history.back()}
									className='absolute right-3 top-3 text-gray-400 hover:text-gray-500'
								>
									<span className='sr-only'>Close</span>
									<XMarkIcon aria-hidden='true' className='size-6' />
								</button>
								{product?.image && (
									<div className='relative w-72 h-full hidden md:inline'>
										<CustomImage product={product} fill sizes='w-72 h-full' />
									</div>
								)}
								<div className='flex-1 flex flex-col'>
									<div className='flex-1'>
										<h4 className='font-semibold text-lg/7 line-clamp-3'>
											{product?.title}
										</h4>
										<p className='font-bold text-lg mt-2'>
											{product?.discount ? (
												<>
													<del className='text-gray-400'>${product.price}</del>
													<span className='inline-block text-gray-800 ml-5'>
														$
														{(
															product.price -
															(product.price * product.discount) / 100
														).toFixed(2)}
													</span>
												</>
											) : (
												<span>${product?.price}</span>
											)}
										</p>
										<p className='text-base font-semibold text-gray-500 mt-2 flex items-center gap-2'>
											Color:
											<span
												style={{ backgroundColor: `${product?.color}` }}
												className='inline-block w-5 h-5 rounded-md bg-[#ac7f48]'
											></span>
										</p>

										<div className='flex items-center text-sm my-3'></div>
										<p className='line-clamp-4 text-sm'>
											{product?.description}
										</p>
									</div>

									<div className='space-y-3 text-sm'>
										{!user ? (
											<Link
												href={'/sign-in'}
												className='button w-full text-center'
											>
												Add to bag
											</Link>
										) : (
											<button
												className='button w-full'
												onClick={adToBagHandler}
											>
												Add to bag
											</button>
										)}
										<button
											onClick={() => {
												window.location.reload()
												window.scrollTo(0, 1)
											}}
											className='button w-full bg-transparent border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-transparent'
										>
											View full details
										</button>
									</div>
								</div>
							</div>
						)}
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	)
}

export default ProductDetailedPage
