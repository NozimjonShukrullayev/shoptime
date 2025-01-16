import CategoryProducts from '@/components/CategoryProducts'
import { ProductsType } from '@/interfaces'
import { FC } from 'react'

interface CategoryPageProps {
	params: { category: string }
}

const CategoryPage: FC<CategoryPageProps> = async ({ params }) => {
	const category = params.category

	const res = await fetch(
		`https://fakestoreapi.in/api/products/category?type=${category}`
	)
	const productsByCategory: ProductsType = await res.json()

	return (
		<div className='flex'>
			<div className='w-full p-4'>
				<CategoryProducts products={productsByCategory.products} />
			</div>
		</div>
	)
}

export default CategoryPage
