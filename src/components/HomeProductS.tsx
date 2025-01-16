import { ProductsType } from '@/interfaces'
import { FC } from 'react'
import Product from './Product'

const HomeProductS: FC<{ data: ProductsType; title?: string }> = ({
	data,
	title,
}) => {
	return (
		<section className='flex flex-col space-y-12'>
			<div className='flex flex-wrap w-full mb-10 flex-col items-center text-center'>
				<h2 className='sm:text-4xl text-2xl font-medium title-font text-gray-900'>
					{title}
				</h2>
			</div>
			<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6'>
				{data.products.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}

export default HomeProductS
