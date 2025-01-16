'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { FC, ReactNode } from 'react'
import { Client, HydrationProvider } from 'react-hydration-provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<HydrationProvider>
			<Client>
				{children}
				<ProgressBar
					height='4px'
					color='#00bfff'
					options={{ showSpinner: true }}
					shallowRouting
				/>
				<ToastContainer />
			</Client>
		</HydrationProvider>
	)
}

export default Provider
