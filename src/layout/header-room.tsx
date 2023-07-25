// import LogoText from '@/svgs/logo-text.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArrowTopLeft from '@/svgs/arrow-top-left.svg'

export default function HeaderRoom(props: { className?: string }) {
	const router = useRouter()

	return (
		<header className={clsx('absolute left-0 right-0 top-0 px-20', props.className)}>
			<div className='flex justify-between px-8 py-[18px]'>
				<Link href='/'>
					<a className='flex items-center'>
						<Image src='/logo.svg' width='100px' height='36px' />
						{/* <LogoText className='ml-[10px] mt-1' /> */}
					</a>
				</Link>

				<button
					onClick={() => router.back()}
					className='group overflow-hidden rounded-full bg-white bg-opacity-40 p-[10px]'>
					<div className='relative transition-transform duration-300 ease-out-back group-hover:-translate-y-6 group-hover:-translate-x-6'>
						<ArrowTopLeft />
						<ArrowTopLeft className='absolute left-[120%] top-[120%]' />
					</div>
				</button>
			</div>
		</header>
	)
}
