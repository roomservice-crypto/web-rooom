import LogoText from '@/svgs/logo-text.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '@headlessui/react'
import Medium from '@/svgs/medium.svg'
import Twitter from '@/svgs/twitter.svg'
import Email from '@/svgs/email.svg'
import MobileMenu from './MobileMenu'

export default function Header(props: { className?: string }) {
	const router = useRouter()

	return (
		<header
			className={clsx(
				'flex h-[60px] items-center border-b border-dark px-20 mobile:h-[72px] mobile:px-4',
				props.className
			)}>
			<Link href='/'>
				<a className='flex items-center'>
					<Image src='/logo.svg' width='36px' height='36px' />
					<LogoText className='ml-[10px] mt-1' />
				</a>
			</Link>

			<nav className='mx-auto flex items-center mobile:hidden'>
				<ul className='flex items-center gap-x-6'>
					<li>
						<Link href='/'>
							<a
								className={clsx(
									'px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5',
									router.pathname === '/' && 'rounded-md bg-black bg-opacity-5'
								)}>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a
								className={clsx(
									'px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5 ',
									router.pathname === '/about' && 'rounded-md bg-black bg-opacity-5'
								)}>
								About
							</a>
						</Link>
					</li>
					{/* <Link href='/map'>
							<a
								className={clsx('px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5', router.pathname.startsWith('/map') && 'rounded-md bg-black bg-opacity-5')}>
								Map
							</a>
						</Link> */}
					<li className='relative'>
						<span className='peer cursor-pointer px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5'>
							Contact
						</span>
						<div className='absolute left-[-50px] z-10 hidden pt-[18px] hover:block peer-hover:block mobile:hidden'>
							<ul className='w-[206px] rounded-[20px] border border-dark bg-white p-3 text-sm shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)]'>
								<li>
									<a
										className='flex cursor-pointer items-center gap-x-3 px-4 py-[10px] hover:rounded-[10px] hover:bg-black hover:bg-opacity-5'
										href='https://twitter.com/roomservice_gg'
										target='_blank'
										rel='noreferrer'>
										<Twitter />
										Twitter
									</a>
								</li>
								<li>
									<a
										className='flex cursor-pointer items-center gap-x-3 px-4 py-[10px] hover:rounded-[10px] hover:bg-black hover:bg-opacity-5 '
										href='https://medium.com/@roomservicegg'
										target='_blank'
										rel='noreferrer'>
										<Medium />
										Medium
									</a>
								</li>
								<li>
									<a
										className='flex cursor-pointer items-center gap-x-3 px-4 py-[10px] hover:rounded-[10px] hover:bg-black hover:bg-opacity-5 '
										href='mailto:contact@roomservice.gg'>
										<Email />
										Email
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>

			{/* <button className='rounded-3xl bg-dark px-4 py-2 text-sm text-white font-[500] hover:bg-opacity-80  mobile:hidden'>Explore Demo</button> */}
			<button className='cursor-not-allowed rounded-3xl bg-dark bg-opacity-60 px-4 py-2 text-sm font-[500] text-white mobile:hidden'>
				Explore Demo
			</button>

			<MobileMenu />
		</header>
	)
}
