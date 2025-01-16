import { StaticImageData } from 'next/image'

export interface ProductsType {
	products: ProductType[]
	product: ProductType
}

export interface ProductType {
	id: number
	title: string
	description: string
	price: number
	category: string
	image: string
	discount?: number
	model: string
	brand: string
	color: string
	quantity: number
}

export interface CategoriesType {
	categories: string[]
}

export interface UserType {
	id: number
	email: string
	name: string
	avatar: string
	password: string
	creationAt: Date
	updatedAt: Date
	role: string
}

export interface LoginResType {
	access_token: string
	refresh_token: string
	message: string
}

export interface HeroSlideType {
	id: number
	title: string
	category: string
	img: StaticImageData
	description: string
}
