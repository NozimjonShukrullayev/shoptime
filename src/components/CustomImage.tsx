'use client'

import { ProductType } from '@/interfaces'
import Image from 'next/image'
import { FC, useState } from 'react'

interface Props {
	product: ProductType
	fill?: boolean
	sizes?: string
}

const CustomImage: FC<Props> = ({ product, fill, sizes }) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<>
			{fill ? (
				<Image
					src={product.image}
					alt={product.title}
					fill
					sizes={sizes}
					priority
					className={`custom-img 
				${isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0'}`}
					onLoad={() => setIsLoading(false)}
				/>
			) : (
				<Image
					src={product.image}
					alt={product.title}
					width={400}
					height={400}
					priority
					sizes={sizes}
					className={`custom-img
				${isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0'}`}
					onLoad={() => setIsLoading(false)}
				/>
			)}
		</>
	)
}

export default CustomImage
