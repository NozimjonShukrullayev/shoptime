'use client'

import { shoptimeLogoMobile } from '@/assets'
import { useAuth } from '@/context/authcontext'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

type FormValuesType = {
	email: string
	password: string
}

const schema = yup.object().shape({
	email: yup.string().required('email is required'),
	password: yup.string().required('Password is required'),
})

const SignInPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)
	const { login } = useAuth()
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<FormValuesType> = async data => {
		setIsLoading(true)
		try {
			await login(data.email, data.password)
			toast.success('Signed in successfully')
			router.push('/')
		} catch (error) {
			toast.error(`${error}`)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
				<form
					className='bg-white p-6 rounded shadow-md w-5/6 sm:w-full max-w-md '
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='flex justify-between mb-4 items-center'>
						<h1 className='text-xl font-bold'>Sign In</h1>
						<Image
							src={shoptimeLogoMobile}
							alt='shoptime-logo'
							width={40}
							priority
							className='h-auto'
						/>
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor='email'
							className='block text-sm/6 font-medium text-gray-900'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								type='email'
								{...register('email')}
								autoComplete='email address'
								className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
							/>
						</div>
						{errors.email?.message ? (
							<p className='text-red-500 text-sm'>{errors.email?.message}</p>
						) : (
							<p className='text-red-500 invisible text-sm'>' '</p>
						)}
					</div>

					{/* Password */}
					<div className='mt-3 mb-4'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Password
							</label>
						</div>
						<div className='mt-2 relative'>
							<input
								id='password'
								type={`${passwordVisible ? 'text' : 'password'}`}
								{...register('password')}
								autoComplete='current-password'
								className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
							/>
							<EyeIcon
								onClick={() => setPasswordVisible(true)}
								className={`size-5 absolute ${
									passwordVisible ? 'invisible' : 'visible'
								} top-2.5 right-2.5 cursor-pointer text-gray-500`}
							/>
							<EyeSlashIcon
								onClick={() => setPasswordVisible(false)}
								className={`size-5 absolute ${
									passwordVisible ? 'visible' : 'invisible'
								} top-2.5 right-2.5 cursor-pointer text-gray-500`}
							/>
							{errors.password?.message ? (
								<p className='text-red-500 text-sm'>
									{errors.password?.message}
								</p>
							) : (
								<p className='text-red-500 invisible text-sm'></p>
							)}
						</div>
					</div>

					{/* Submit */}
					<div>
						<button
							type='submit'
							disabled={isLoading}
							className='button flex mt-2 w-full justify-center'
						>
							{isLoading ? 'Signing In...' : 'Sign In'}
						</button>
					</div>

					{/* Navigate to Sign Up */}
					<p className='text-sm text-gray-500 mt-4 text-center'>
						Don't have an account?
						<Link href='/sign-up'>
							<span className='text-blue-500 underline ml-2'>Sign Up</span>
						</Link>
					</p>
				</form>
			</div>
		</>
	)
}

export default SignInPage
