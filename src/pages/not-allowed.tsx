import { NOT_ALLOWED_WIDTH } from '@/constants'
import NotAllowedSvg from '@/svgs/not-allowed.svg'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotAllowded() {
	const router = useRouter()

	useEffect(() => {
		const handler = () => {
			if (window.innerWidth >= NOT_ALLOWED_WIDTH) router.push('/')
		}

		window.addEventListener('resize', handler)

		return () => window.removeEventListener('resize', handler)
	}, [])

	return (
		<main className='text-center'>
			<NotAllowedSvg className='mx-auto' />
			<div>Please open this page with pc</div>
			<button
				onClick={() => {
					if (window.innerWidth >= NOT_ALLOWED_WIDTH) router.push('/')
				}}
				className='mt-6 rounded-2xl bg-dark py-3 px-[100px] text-white'>
				Home
			</button>
			<br />
			<button
				onClick={() => {
					if (window.innerWidth >= NOT_ALLOWED_WIDTH) history.back()
				}}
				className='mt-4 rounded-2xl border border-dark py-3 px-[100px]'>
				Back
			</button>
		</main>
	)
}