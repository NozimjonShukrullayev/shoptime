'use client'

import Image, { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

interface Props {
	staticImg: StaticImageData | string
	fill?: boolean
	title: string
	sizes?: string
	imgClassName: string
}

const StaticImage: FC<Props> = ({
	staticImg,
	fill,
	title,
	imgClassName,
	sizes,
}) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<>
			{fill ? (
				<Image
					src={staticImg}
					alt={title}
					fill
					sizes={sizes}
					priority
					className={`${imgClassName}
				${
					isLoading
						? 'scale-110 blur-lg bg-transparent'
						: 'scale-100 blur-0 grayscale-0'
				}`}
					onLoad={() => setIsLoading(false)}
				/>
			) : (
				<Image
					src={staticImg}
					alt={title}
					width={400}
					height={1000}
					priority
					className={`${imgClassName}
				${
					isLoading
						? 'scale-110 blur-lg bg-transparent'
						: 'scale-100 blur-0 grayscale-0'
				}`}
					onLoad={() => setIsLoading(false)}
				/>
			)}
		</>
	)
}

export default StaticImage
