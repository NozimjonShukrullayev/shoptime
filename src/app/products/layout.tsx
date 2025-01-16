import ProductsHero from '@/components/ProductsHero'
import { CategoriesType } from '@/interfaces'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'All products',
	description:
		"Latest products from the fake store API in shoptime. Find the best deals on electronics, mobile, and more with shoptime. shoptime your online shopping store. Everything with shoptime in one place. shoptime.uz. Eng so'nggi mahsulotlar do'kon API dan shoptime. Elektronika, mobil va boshqalar uchun eng yaxshi takliflar shoptime da. shoptime onlayn do'koningiz. Shoptime bilan barcha narsa bir joyda. shoptime.uz. har bir telefon va kompyuteringizda oson va qlay xarid qilish shoptime bilan",
	keywords: 'shoptime shoptime.uz',
}

export default async function ProductsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const res = await fetch(`https://fakestoreapi.in/api/products/category`)
	const data: CategoriesType = await res.json()

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='mb-10'>
				<ProductsHero />
			</div>
			<h1 className='text-center border-b font-semibold my-6 py-5 text-4xl'>
				Our all products
			</h1>
			<div className='flex flex-wrap sm:flex-nowrap relative sm:left-3'>
				<div className='sm:h-[80vh] sm:sticky top-20 mt-2 mr-5 w-full ml-5 sm:-mr-6 sm:w-1/2 md:w-1/4'>
					<ul>
						<li>
							<Link
								href='/products'
								className='text-gray-900 font-semibold capitalize border-b block py-2.5 px-5 hover:bg-slate-100'
							>
								All
							</Link>
						</li>
						{Array.from([...data.categories]).map(category => (
							<li key={category}>
								<Link
									href={`/products/${category}`}
									className='text-gray-900 font-semibold capitalize border-b block py-2.5 px-5 hover:bg-slate-100'
								>
									{category}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='w-full py-4 sm:-mt-28'>{children}</div>
			</div>
		</div>
	)
}
