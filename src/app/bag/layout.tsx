import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Your Bag',
	description:
		"your shopping bag in shoptime. All the technicalities of life and many home decor items are in your shopping bag. Fill your shopping bag with discounts. Barcha maishiy texnikalar va boshqa ko'plab uy-ro'zg'or buyumlari sizning xarid sumkangiz yoki xarid savatingizda. Qaynoq chegirmalar bilan xarid savatingizni to'ldiring. shoptime.uz",
	keywords: 'shoptime shoptime.uz',
}

export default function BagLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
