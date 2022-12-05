import LogoText from '@/svgs/logo-text.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='flex h-[60px] items-center border-b border-dark px-20'>
			<Link href='/'>
				<a className='flex items-center'>
					<Image src='/logo.svg' width='36px' height='36px' />
					<LogoText className='ml-[10px] mt-1' />
				</a>
			</Link>

			<nav className='mx-auto flex items-center'>
				<ul className='flex items-center gap-x-6'>
					<li>
						<Link href='/'>
							<a className='px-2 py-3'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='px-2 py-3'>About</a>
						</Link>
					</li>
					<li>
						<Link href='/map'>
							<a className='px-2 py-3'>Map</a>
						</Link>
					</li>
				</ul>
			</nav>

			<button className='rounded-3xl bg-dark px-[14px] py-2 text-sm text-white'>Explore Demo</button>
		</header>
	)
}
