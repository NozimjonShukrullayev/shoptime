import Blogs from '@/components/Blogs'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import HomeProductS from '@/components/HomeProductS'
import Stats from '@/components/Stats'
import Texnical from '@/components/Texnical'
import { ProductsType } from '@/interfaces'

const Home = async () => {
	const res = await fetch('https://fakestoreapi.in/api/products?limit=8')
	const data: ProductsType = await res.json()
	const res2 = await fetch(
		'https://fakestoreapi.in/api/products?page=2&limit=8'
	)
	const data2: ProductsType = await res2.json()

	return (
		<>
			<Hero />
			<main className='min-h-screen max-w-7xl mx-auto px-5 lg:px-8'>
				<Feature />
				<HomeProductS data={data} />
				<Texnical />
				<HomeProductS data={data2} title={'Discount techniques'} />
				<Stats />
				<Blogs />
			</main>
		</>
	)
}

export default Home
