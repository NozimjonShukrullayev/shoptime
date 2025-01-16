import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const NotFound = () => {
	return (
		<div className='w-full text-lg font-medium max-w-7xl mx-auto p-8 min-h-[90vh] flex flex-col items-center justify-center'>
			<ExclamationTriangleIcon
				aria-hidden='true'
				className='size-16 text-red-600'
			/>
			<h2>Not found</h2>
			<p>Could not find requested recource</p>
		</div>
	)
}

export default NotFound
