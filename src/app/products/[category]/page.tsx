import CategoryProducts from '@/components/CategoryProducts'
import { ProductsType } from '@/interfaces'

const CategoryPage = async ({
	params,
}: {
	params: Promise<{ category: string }>
}) => {
	const category = (await params).category

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
