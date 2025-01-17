'use client'

import { shoptimeLogo, shoptimeLogoMobile } from '@/assets'
import { useAuth } from '@/context/authcontext'
import { CategoriesType } from '@/interfaces'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverGroup,
} from '@headlessui/react'
import {
	ArrowRightEndOnRectangleIcon,
	ChevronDownIcon,
} from '@heroicons/react/20/solid'
import {
	Bars3Icon,
	ShoppingBagIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const { user, logout } = useAuth()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [activeProductsModal, setActiveProductsModal] = useState(false)
	const [allCategories, setAllCategories] = useState([''])
	const [openAccount, setOpenAccount] = useState(false)

	useEffect(() => {
		async function getCategories(): Promise<void> {
			const res = await fetch(`https://fakestoreapi.in/api/products/category`)
			const data: CategoriesType = await res.json()
			setAllCategories(data.categories)
		}
		getCategories()
	}, [])

	const accountToggle = (): void => {
		setOpenAccount(false)
		logout()
	}

	return (
		<header className='bg-white border-b-2 sticky top-0 z-50'>
			<nav
				aria-label='Global'
				className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8'
			>
				<div className='flex lg:flex-1'>
					{/* logo */}
					<Link href='/' className='m-0'>
						<span className='sr-only'>Your Company</span>
						<Image
							alt='shoptime'
							src={shoptimeLogo}
							height={30}
							priority
							className='hidden md:flex md:h-11 w-auto'
						/>
						<Image
							alt='shoptime'
							src={shoptimeLogoMobile}
							height={30}
							className='md:hidden md:h-12 w-auto'
						/>
					</Link>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon aria-hidden='true' className='size-5' />
					</button>
				</div>

				{/* nav link desktop */}
				<PopoverGroup className='hidden lg:flex lg:gap-x-12'>
					{/* home link */}
					<Link href='/' className='text-md/6 font-semibold text-gray-900'>
						Home
					</Link>

					{/* products link width modal display */}
					<Popover
						onMouseEnter={() => setActiveProductsModal(true)}
						onMouseLeave={() => setActiveProductsModal(false)}
						className='relative'
					>
						<div className='outline-none flex items-center gap-x-1 text-md/6 font-semibold text-gray-900'>
							<Link href='/products#products-hero'>Products</Link>
							<ChevronDownIcon
								aria-hidden='true'
								className='size-6 flex-none text-gray-400'
							/>
						</div>

						{activeProductsModal && (
							<div
								onClick={() => setActiveProductsModal(false)}
								className='absolute -left-36 top-4 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-400 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
							>
								<div className='p-4'>
									{allCategories.map(category => (
										<div
											key={category}
											className='group mt-1 relative border-b-2 flex items-center gap-x-6 rounded-lg text-sm/6 hover:bg-gray-50'
										>
											<div className='flex-auto'>
												<Link
													href={`/products/${category.toLowerCase()}`}
													onClick={() => window.scrollTo(0, 1)}
													className='block font-semibold p-4 text-gray-900'
												>
													<p className='capitalize text-gray-600'>{category}</p>
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</Popover>

					{/* bag link */}
					<Link
						href='/bag'
						className='flex justify-between items-center gap-1 text-md/6 font-semibold text-gray-900'
					>
						Bag
						<ShoppingBagIcon aria-hidden='true' className='size-7' />
					</Link>
				</PopoverGroup>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end text-nowrap'>
					{/* login link */}
					{user ? (
						<div className='relative border w-10 h-10 rounded-full cursor-pointer'>
							<Image
								src={`${user?.avatar}`}
								alt='avatar'
								fill
								sizes='w-10 h-10'
								onClick={() => setOpenAccount(!openAccount)}
							/>
							<Dialog
								open={openAccount}
								onClose={() => setOpenAccount(!openAccount)}
								className='w-full bg-orange-300'
							>
								<DialogBackdrop
									transition
									className='fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black bg-opacity-100 opacity-30 backdrop-blur-sm transition-opacity duration-300     bg-gray-500/75 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
								/>
								<DialogPanel
									className={`fixed top-16 ${
										openAccount ? 'visible' : 'invisible'
									} right-5 z-50 w-80 rounded-md border bg-white`}
								>
									<h4 className='text-base/10 text-center my-1'>
										Manager account
									</h4>
									<button
										onClick={accountToggle}
										className='flex items-center font-semibold text-lg text-gray-900 border-b-2 hover:bg-slate-100 py-2.5 px-5 w-full'
									>
										<ArrowRightEndOnRectangleIcon className='mr-5 size-6 mt-0.5' />
										Log out
									</button>
								</DialogPanel>
							</Dialog>
						</div>
					) : (
						<Link
							href='/sign-in'
							className={`${
								user ? 'hidden' : 'flex'
							} flex-grow-0 button py-2 px-5`}
						>
							Sign in
							<ArrowRightEndOnRectangleIcon className='size-6 ml-1 mt-0.5' />
						</Link>
					)}
				</div>
			</nav>

			{/* ================= mobile navbar ============== */}
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className='lg:hidden'
			>
				<div className='fixed inset-0 z-10' />
				<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white pl-6 pr-9 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						{/* logo */}
						<Link href='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Your Company</span>
						</Link>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(false)}
							className='m-2.5 rounded-md p-2.5 text-gray-700'
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon aria-hidden='true' className='size-6' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{/* home link */}
								<Link
									href='/'
									onClick={() => setMobileMenuOpen(false)}
									className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
								>
									Home
								</Link>

								{/* product link width opening bar */}
								<Disclosure as='div' className='-mx-3'>
									<DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
										Products
										<ChevronDownIcon
											aria-hidden='true'
											className='size-5 flex-none group-data-[open]:rotate-180'
										/>
									</DisclosureButton>
									<DisclosurePanel className='mt-2 space-y-2 bg-slate-100'>
										{allCategories.map(category => (
											<Link
												key={category}
												href={`/products/${category.toLowerCase()}`}
												onClick={() => {
													setMobileMenuOpen(false)
													window.scrollTo(0, 1)
												}}
												className='block capitalize rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-slate-200'
											>
												{category}
											</Link>
										))}
									</DisclosurePanel>
								</Disclosure>

								{/* bag link */}
								<Link
									href='/bag'
									onClick={() => setMobileMenuOpen(false)}
									className='-mx-3 rounded-lg px-3 py-2 text-base/7 flex justify-start items-center gap-1 text-md/6 font-semibold text-gray-900 hover:bg-gray-50'
								>
									Bag
									<ShoppingBagIcon aria-hidden='true' className='size-7' />
								</Link>
							</div>
							<div className='py-6'>
								{/* login link */}
								{!user && (
									<Link
										onClick={() => setMobileMenuOpen(false)}
										href='/sign-in'
										className={`${
											user ? 'hidden' : 'flex'
										} flex-grow-0 button py-2 px-5`}
									>
										Sign in
										<ArrowRightEndOnRectangleIcon className='size-6 ml-1 mt-0.5' />
									</Link>
								)}
								{user && (
									<button
										onClick={accountToggle}
										className='flex flex-grow-0 button py-2 px-5 w-full'
									>
										<ArrowRightEndOnRectangleIcon className='mr-2 size-6 mt-0.5' />
										Log out
									</button>
								)}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}

export default Navbar
