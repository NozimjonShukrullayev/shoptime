import AdToBagBtn from '@/components/AdToBagBtn'
import CategoryProducts from '@/components/CategoryProducts'
import CustomImage from '@/components/CustomImage'
import { ProductsType } from '@/interfaces'
import { notFound } from 'next/navigation'

async function ProductDetailedPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	try {
		const id = (await params).id

		const res = await fetch(`https://fakestoreapi.in/api/products/${id}`)
		const data: ProductsType = await res.json()
		const { product } = data

		const resByCategory = await fetch(
			`https://fakestoreapi.in/api/products/category?type=${product.category}`
		)
		const databyCategory: ProductsType = await resByCategory.json()
		const { products } = databyCategory

		return (
			<>
				<section className='overflow-hidden'>
					<div className='pb-10 pt-4 mx-auto'>
						<div className='lg:max-w-7xl px-5 lg:px-8 mx-auto flex flex-wrap items-center md:justify-between'>
							<div className='relative w-full lg:w-2/4 h-96'>
								<CustomImage product={product} sizes='w-52 h-52' />
								<div className='absolute bottom-1 right-1 sm:bottom-4 sm:right-16 w-28 h-28 border overflow-hidden'>
									<CustomImage fill product={product} sizes='w-28 h-28' />
								</div>
							</div>

							<div className='lg:w-2/4 w-full lg:pl-6 lg:py-6 mt-6 lg:mb-0'>
								<span className='text-sm capitalize title-font font-medium text-gray-700 tracking-widest'>
									Category: {product.category}
								</span>
								<h3 className='text-gray-900 text-lg md:text-3xl title-font font-medium my-2'>
									{product.model}
								</h3>
								<span className='text-sm capitalize my-3 block title-font font-medium text-gray-700 tracking-widest'>
									Brand: {product?.brand}
								</span>
								<div className='flex'>
									<span className='mr-3 text-gray-700'>
										Color: {product.color}
									</span>
								</div>
								{product?.discount && (
									<span className='text-sm capitalize my-3 block title-font font-medium text-gray-700 tracking-widest'>
										Discount: {product.discount}%
									</span>
								)}
								<p className='leading-relaxed text-gray-900 my-2 text-justify text-sm sm:text-base'>
									{product?.description}
								</p>
								<div className='flex justify-between mt-4'>
									<p className='font-medium text-lg mt-2'>
										{product?.discount ? (
											<>
												<del className='text-gray-400'>${product.price}</del>
												<span className='inline-block ml-5'>
													$
													{(
														product.price -
														(product.price * product.discount) / 100
													).toFixed(2)}
												</span>
											</>
										) : (
											<span className='text-lg'>${product?.price}</span>
										)}
									</p>
									<AdToBagBtn product={product} />
								</div>
							</div>
						</div>
					</div>
				</section>

				<CategoryProducts
					products={products}
					categoryTitle={'Similar products'}
				/>
			</>
		)
	} catch (error) {
		notFound()
	} finally {
	}
}

export default ProductDetailedPage
