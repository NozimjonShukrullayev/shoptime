import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign in',
	description:
		"Sign in to your account to access your profile, settings, and more. If you don't have an account, you can create one for free in shoptime. Sign in now and begin your shopping experience. Register your shoping products and start selling your products with shoptime. Sign in now and start shopping. O'z shaxsiy hisobingizga kirish uchun ro'yxatdan o'ting va profil, sozlamalar va boshqalariga kirishingiz mumkin. Agar hisobingiz bo'lmasa, bepul hisob yarata olasiz. Hozir kirish qiling va savdo tajribangizni boshlang. Savdo mahsulotlarini ro'yxatga oling va mahsulotlarini sotib boshlang. Hozir kirish qiling va savdo qiling. shoptime.uz",
	keywords: 'shoptime shoptime.uz',
}

export default function SignInLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div>{children}</div>
}
