import LogoText from '@/svgs/logo-text.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Menu from '@/svgs/menu.svg'

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
									'px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5',
									router.pathname === '/about' && 'rounded-md bg-black bg-opacity-5'
								)}>
								About
							</a>
						</Link>
					</li>
					<li>
						{/* <Link href='/map'>
							<a
								className={clsx('px-3 py-2 hover:rounded-md hover:bg-black hover:bg-opacity-5', router.pathname.startsWith('/map') && 'rounded-md bg-black bg-opacity-5')}>
								Map
							</a>
						</Link> */}
						<Link
							href='mailto:contact@roomservice.gg'
							className={clsx('cursor-not-allowed px-3 py-2 hover:rounded-md')}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			{/* <button className='rounded-3xl bg-dark px-4 py-2 text-sm text-white font-[500] hover:bg-opacity-80  mobile:hidden'>Explore Demo</button> */}
			<button className='cursor-not-allowed rounded-3xl bg-dark bg-opacity-60 px-4 py-2 text-sm font-[500] text-white mobile:hidden'>
				Explore Demo
			</button>

			<button className='ml-auto p-2'>
				<Menu />
			</button>
		</header>
	)
}
