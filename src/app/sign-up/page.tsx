'use client'

import { shoptimeLogoMobile } from '@/assets'
import { UserType } from '@/interfaces'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

interface FormValuesType {
	email: string
	name: string
	avatar: string
	password: string
}

const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.matches(/[A-Z]/, 'Password must contain only letters and numbers')
		.matches(/[0-9]/, 'Password must contain only letters and numbers')
		.required('Password is required'),
	name: yup.string().required('Name is required'),
	avatar: yup
		.string()
		.url('Avatar must be a URL address')
		.required('Avatar is required'),
})

const SignUpPage = () => {
	const router = useRouter()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<FormValuesType> = async data => {
		setIsSubmitting(true)
		try {
			const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})
			const result: UserType = await response.json()
			if (response.ok) {
				localStorage.setItem('user_id', `${result.id}`)
				toast.success('Signed up successfully')
				router.push('/sign-in')
			} else {
				throw 'Please, write correct your data'
			}
		} catch (error) {
			toast.error(`${error}`)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<form
				className='bg-white p-6 rounded shadow-md w-5/6 sm:w-full max-w-md '
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex justify-between mb-4 items-center'>
					<h1 className='text-xl font-bold'>Sign up</h1>
					<Image
						src={shoptimeLogoMobile}
						alt='shoptime-logo'
						width={40}
						priority
						className='h-auto'
					/>
				</div>

				{/* Name */}
				<div>
					<label
						htmlFor='name'
						className='block text-sm/6 font-medium text-gray-900'
					>
						Name
					</label>
					<div className='mt-2'>
						<input
							id='name'
							type='name'
							{...register('name')}
							// autoComplete='name'
							className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
						/>
					</div>
					{errors.name?.message ? (
						<p className='text-red-500 text-sm'>{errors.name?.message}</p>
					) : (
						<p className='text-red-500 invisible text-sm'></p>
					)}
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
							autoComplete='email'
							className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
						/>
					</div>
					{errors.email?.message ? (
						<p className='text-red-500 text-sm'>{errors.email?.message}</p>
					) : (
						<p className='text-red-500 invisible text-sm'></p>
					)}
				</div>

				{/* Avatar */}
				<div>
					<label
						htmlFor='avatar'
						className='block text-sm/6 font-medium text-gray-900'
					>
						Avatar
					</label>
					<div className='mt-2'>
						<input
							id='avatar'
							type='avatar'
							list='avatars'
							{...register('avatar')}
							autoComplete='avatar'
							className='block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
						/>
						<datalist id='avatars'>
							<option value='https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-bussinesman-cartoon-avatar-png-image_11591521.png' />
						</datalist>
					</div>
					{errors.avatar?.message ? (
						<p className='text-red-500 text-sm'>{errors.avatar?.message}</p>
					) : (
						<p className='text-red-500 invisible text-sm'></p>
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
							<p className='text-red-500 text-sm'>{errors.password?.message}</p>
						) : (
							<p className='text-red-500 invisible text-sm'></p>
						)}
					</div>
				</div>

				{/* Submit */}
				<div>
					<button
						type='submit'
						disabled={isSubmitting}
						className='button flex w-full justify-center'
					>
						{isSubmitting ? 'Signing Up...' : 'Sign Up'}
					</button>
				</div>

				{/* Navigate to Sign Up */}
				<p className='text-sm text-gray-500 mt-4 text-center'>
					Already have an account?{' '}
					<Link href='/sign-in'>
						<span className='text-blue-500 underline ml-2'>Sign In</span>
					</Link>
				</p>
			</form>
		</div>
	)
}

export default SignUpPage
