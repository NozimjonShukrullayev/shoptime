import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign up',
	description:
		"Sign up for a free account to access your profile, settings, and more. If you don't have an account, you can create one for free. Sign up now and begin your shopping experience in shoptime. Register your shoping products and start selling your products. Sign up now and start shopping. O'z uchun bepul hisob yaratib, profil, sozlamalar va boshqalariga kirishingiz mumkin. Agar hisobingiz bo'lmasa, bepul hisob yarata olasiz. Hozir ro'yxatdan o'ting va savdo tajribangizni boshlang. Savdo mahsulotlarini ro'yxatga oling va mahsulotlarini sotib boshlang. Hozir ro'yxatdan o'ting va savdo qiling. shoptime.uz",
	keywords: 'shoptime shoptime.uz',
}

export default function SignInLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
