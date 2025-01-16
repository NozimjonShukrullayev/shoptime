'use client'

import { useAuth } from '@/context/authcontext'
import { ProductType } from '@/interfaces'
import Link from 'next/link'
import { FC } from 'react'
import { toast } from 'react-toastify'

interface Props {
	product: ProductType
}

const AdToBagBtn: FC<Props> = ({ product }) => {
	const { user } = useAuth()

	const adToBagHandler = () => {
		const bagProducts: ProductType[] =
			JSON.parse(localStorage.getItem('bags') as string) || []
		const isExistProduct = bagProducts.find(
			bagProduct => bagProduct.id === product?.id
		)

		if (isExistProduct) {
			const updatedBagProducts = bagProducts.map(bagProduct => {
				if (bagProduct.id === product?.id) {
					return { ...bagProduct, quantity: bagProduct.quantity + 1 }
				}
				return bagProduct
			})
			localStorage.setItem('bags', JSON.stringify(updatedBagProducts))
		} else {
			const productData = [...bagProducts, { ...product, quantity: 1 }]
			localStorage.setItem('bags', JSON.stringify(productData))
		}

		toast.success('Product added to bag')
	}

	return (
		<>
			{!user ? (
				<Link href={'/sign-in'} className='button text-center'>
					Add to bag
				</Link>
			) : (
				<button className='button' onClick={adToBagHandler}>
					Add to bag
				</button>
			)}
		</>
	)
}

export default AdToBagBtn
