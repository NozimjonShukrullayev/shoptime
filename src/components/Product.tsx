'use client'

import { ProductType } from '@/interfaces'
import Link from 'next/link'
import { FC } from 'react'
import CustomImage from './CustomImage'

const Product: FC<{ product: ProductType }> = ({ product }) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className='group relative duration-200 border rounded-lg'
		>
			<div className='relative max-h-64 h-64'>
				<CustomImage product={product} fill sizes='max-h-64 h-64' />
			</div>
			<div className='p-4'>
				<p className='mt-2 text-sm capitalize text-black opacity-90'>
					{product.category}
				</p>
				<div className='mt-3 flex justify-between'>
					<h3 className='text-sm text-gray-900 font-semibold line-clamp-1'>
						<div>
							<span aria-hidden='true' className='absolute inset-0' />
							{product.title}
						</div>
					</h3>
					<p className='text-md font-medium text-gray-800 ml-1'>
						${product.price}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Product
