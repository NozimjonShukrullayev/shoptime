import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/authcontext'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Provider from './provider'

const openSans = Open_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Shoptime | Your shopping time',
	description:
		"Your shopping time in shoptime. Welcome to the future of shopping! We have everything you need. Appliance, Electronics, Fashion, Mobile, Vacuum Cleaner, Telephones, tv, gaming products, smart-watch, clock, and more. We're here to help you and in shoptime. Fast delivery and best price guaranteed. Shop now! Discover the best products in Shoptime. shoptime.uz. Discount today in shoptime. Discount from 10% to 90%. Shop now! Sizning xarid qilish vaqtingiz. Shoptime'da xush kelibsiz. Sotib olishning kelajagi. Bizda sizning kerak bo'lgan barcha narsa bor. Qurilmalar, elektronika, moda, mobil qurilmalar, pylesos, telefonlar, tv, o'yin mahsulotlari, smart-saat, soat va boshqalar shoptimeda. Biz sizga yordam berish uchun shu yerda. Tezkor etkazib berish va eng yaxshi narx ta'minlanadi. Hozir sotib oling! Shoptime'da eng yaxshi mahsulotlarni toping. Bugungi chegirma. Chegirma 10% dan 90% gacha. Hozir sotib oling! Barcha joylarda, sizning telefoningizda, kompyuteringizda shoptime. shoptime.uz.",
	keywords: 'shoptime shoptime.uz',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${openSans.variable} antialiased min-h-screen flex flex-col`}
			>
				<div className='min-h-screen flex-grow'>
					<AuthProvider>
						<Navbar />
						<Provider>{children}</Provider>
					</AuthProvider>
				</div>
				<Footer />
			</body>
		</html>
	)
}
