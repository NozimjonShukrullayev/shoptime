import CategoryProducts from '@/components/CategoryProducts'
import { ProductsType } from '@/interfaces'

const ProductsPage = async () => {
	const res2 = await fetch(`https://fakestoreapi.in/api/products?limit=${100}`)
	const products: ProductsType = await res2.json()

	return (
		<>
			<div className='w-full p-4'>
				<CategoryProducts products={products.products} />
			</div>
		</>
	)
}

export default ProductsPage
