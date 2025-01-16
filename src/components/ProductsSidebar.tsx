'use client'

import Link from 'next/link'
import { FC } from 'react'

interface SidebarProps {
	categories: string[]
}

const ProductsSidebar: FC<SidebarProps> = ({ categories }) => {
	return (
		<div className='w-1/4 bg-gray-100 p-4'>
			<ul>
				<li className='mb-2'>
					<Link href='/products'>
						<p className='text-blue-500'>All</p>
					</Link>
				</li>
				{categories.map(category => (
					<li key={category} className='mb-2'>
						<Link href={`/products/${category}`}>
							<p className='text-blue-500 capitalize'>{category}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductsSidebar
