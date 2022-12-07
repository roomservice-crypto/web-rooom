import MenuSvg from '@/svgs/menu.svg'
import { useState } from 'react'
import Image from 'next/image'
import LogoText from '@/svgs/logo-text.svg'
import Close from '@/svgs/close-menu.svg'
import Medium from '@/svgs/medium.svg'
import Twitter from '@/svgs/twitter.svg'
import Email from '@/svgs/email.svg'
import { useRouter } from 'next/router'

export default function MobileMenu() {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	return (
		<>
			<button onClick={() => setOpen(true)} className='ml-auto hidden rounded-md p-2 mobile:inline-block'>
				<MenuSvg />
			</button>

			{open && (
				<div className='fixed left-0 right-0 top-0 bottom-0 z-10 bg-[#F0F0F0] mobile:block'>
					<div className='flex h-[72px] items-center justify-between border-b border-dark px-4'>
						<span className='flex items-center'>
							<Image src='/logo.svg' width='36px' height='36px' />
							<LogoText className='ml-[10px] mt-1' />
						</span>

						<button className='p-2' onClick={() => setOpen(false)}>
							<Close />
						</button>
					</div>

					<div
						onClick={() => {
							setOpen(false)
							router.push('/')
						}}
						className='border-b border-dashed border-dark px-4 pt-10 pb-4 text-2xl font-semibold'>
						Home
					</div>
					<div
						onClick={() => {
							setOpen(false)
							router.push('/about')
						}}
						className='border-b border-dashed border-dark px-4 pt-7 pb-4 text-2xl font-semibold'>
						About
					</div>
					<div className='px-4 pt-7 pb-4 text-2xl font-semibold'>Contact</div>
					<ul>
						<li>
							<a
								className='flex cursor-pointer items-center gap-x-3 px-4 py-4 hover:rounded-md hover:bg-black hover:bg-opacity-5'
								target='_blank'
								rel='noreferrer'>
								<Twitter />
								Twitter
							</a>
						</li>
						<li>
							<a
								className='flex cursor-pointer items-center gap-x-3 px-4 py-4 hover:rounded-md hover:bg-black hover:bg-opacity-5 '
								href='https://medium.com/@roomservicegg'
								target='_blank'
								rel='noreferrer'>
								<Medium />
								Medium
							</a>
						</li>
						<li>
							<a
								className='flex cursor-pointer items-center gap-x-3 px-4 py-4 hover:rounded-md hover:bg-black hover:bg-opacity-5 '
								href='mailto:contact@roomservice.gg'>
								<Email />
								Email
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	)
}
