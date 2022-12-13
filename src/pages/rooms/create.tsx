import Image from 'next/image'
import Link from 'next/link'
import LogoText from '@/svgs/logo-text.svg'
import Metamask from '@/svgs/metamask.svg'
import ChevronDown from '@/svgs/chevron-down.svg'
import { useRef, useState } from 'react'
import { Listbox, Dialog } from '@headlessui/react'
import Card1 from '@/svgs/create/card-1.svg'
import Card2 from '@/svgs/create/card-2.svg'
import Card3 from '@/svgs/create/card-3.svg'
import Card4 from '@/svgs/create/card-4.svg'
import Card5 from '@/svgs/create/card-5.svg'
import Card6 from '@/svgs/create/card-6.svg'
import Card7 from '@/svgs/create/card-7.svg'
import Card8 from '@/svgs/create/card-8.svg'

const TYPES = [
	{ name: 'Social', src: '/assets/map/tags/social.png' },
	{ name: 'Game Playing', src: '/assets/map/tags/game.png' },
	{ name: 'Voice Chat', src: '/assets/map/tags/voice.png' },
	{ name: 'Music Sessions', src: '/assets/map/tags/music.png' },
	{ name: 'DIY Avatar', src: '/assets/map/tags/diy.png' },
	{ name: 'Key Users', src: '/assets/map/tags/key.png' },
	{ name: 'Web3 Projects', src: '/assets/map/tags/web3.png' }
]

const CARDS = [
	{ card: Card1, name: 'Gallery' },
	{ card: Card2, name: 'Voice chat' },
	{ card: Card3, name: 'DIY avatar' },
	{ card: Card4, name: 'Post' },
	{ card: Card5, name: 'Music sessions' },
	{ card: Card6, name: 'Gaming profile' },
	{ card: Card7, name: 'Game room' },
	{ card: Card8, name: 'Hall of fame' }
]

export default function Create() {
	const formRef = useRef<HTMLFormElement>(null)
	const [type, setType] = useState(TYPES[0])

	// dialog control
	const [dialog, setDialog] = useState(false)

	return (
		<>
			<main className='flex min-h-[100vh]'>
				<div className='w-[50%] bg-white p-14'>
					<div>
						<Link href='/'>
							<a className='flex items-center'>
								<Image src='/logo.svg' width='36px' height='36px' />
								<LogoText className='ml-[10px] mt-1' />
							</a>
						</Link>
					</div>

					<form
						ref={formRef}
						className='pt-[108px] text-center'
						onSubmit={e => {
							e.preventDefault()
							const checked = formRef.current?.reportValidity()
							if (checked) {
								setDialog(true)
							}
						}}>
						<h3 className='mb-8 text-[30px] font-semibold leading-[1.2]'>Create Room</h3>
						<div>
							<img src='/assets/create/avatar-create.png' className='inline-block h-16 w-16' />
						</div>
						<div className='mx-auto mt-5 w-[360px] text-left'>
							<div className='text-sm font-medium'>Room Name</div>
							<input
								required
								type='text'
								placeholder='Enter your room name'
								className='mt-[6px] w-full rounded-[10px] border border-black border-opacity-10 py-[10px] px-[14px]'
							/>
						</div>
						<div className='mx-auto mt-5 w-[360px] text-left'>
							<div className='text-sm font-medium'>Connect your wallet</div>
							<div className='mt-[6px] flex w-full items-center rounded-[10px] border border-black border-opacity-10 py-[10px] px-[14px]'>
								<Metamask className='mr-2 h-5 w-5' />
								<span>Metamask</span>
								<button type='button' className='ml-auto rounded-lg bg-black bg-opacity-10 px-3 py-1 text-xs'>
									Connect
								</button>
							</div>
						</div>
						<div className='mx-auto mt-5 w-[360px] text-left'>
							<div className='mb-[6px] text-sm font-medium'>Room type</div>

							<div className='relative'>
								<Listbox value={type} onChange={setType}>
									<Listbox.Button className='mt-[6px] flex w-full items-center rounded-[10px] border border-black border-opacity-10 py-[10px] px-[14px]'>
										<img src={type.src} className='mr-3 h-5 w-5' />
										{type.name}
										<ChevronDown className='ml-auto' />
									</Listbox.Button>
									<Listbox.Options
										className='absolute top-[58px] w-full gap-y-1 rounded-[10px] border border-dark bg-white p-[6px]'
										style={{
											boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);'
										}}>
										{TYPES.map(t => (
											<Listbox.Option key={t.name} value={t} className='flex gap-x-3 px-4 py-[10px]'>
												<img src={t.src} className='h-5 w-5' />
												<span>{t.name}</span>
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Listbox>
							</div>
						</div>

						<div className='mx-auto mt-8 mb-6 w-[360px] border-t border-black border-opacity-10'></div>

						<button
							type='submit'
							className='inline-block w-[360px] rounded-[10px] bg-black py-3 font-semibold text-white'>
							Continue
						</button>
					</form>
				</div>
				<div className='relative flex h-[100vh] w-[50%] items-center justify-center overflow-hidden bg-[#F0F0F0]'>
					<img src='/assets/create/bg.png' className='w-full scale-[1.6]' />

					<div
						className=' z-1 absolute left-0 right-0 top-0 bottom-0'
						style={{
							background:
								'radial-gradient(50.49% 104.08% at 73.33% 50%, rgba(28, 28, 28, 0) 0%, rgba(28, 28, 28, 0.2) 100%)'
						}}></div>
				</div>
			</main>

			<Dialog
				open={dialog}
				onClose={() => setDialog(false)}
				className='fixed top-0 left-0 right-0 bottom-0 z-[20] flex items-center justify-center'
				style={{
					backgroundImage:
						'radial-gradient(50.49% 104.08% at 73.33% 50%, rgba(28, 28, 28, 0) 0%, rgba(28, 28, 28, 0.2) 100%)'
				}}>
				<Dialog.Panel className='w-[932px] rounded-[32px] border border-dark bg-[#BAEDBD] p-3'>
					<div className='border-1 rounded-[32px] border border-dark bg-white'>
						<div className='p-6'>
							<Dialog.Title className='mb-5 text-2xl'>Deactivate account</Dialog.Title>

							<div className='grid grid-cols-4 gap-5'>
								{CARDS.map(c => (
									<div
										className='w-[200px] overflow-hidden rounded-2xl border border-black border-opacity-10'
										key={c.name}>
										<c.card />
										<div className='py-3 px-5'>{c.name}</div>
									</div>
								))}
							</div>
						</div>

						<div className='mt-8 mb-6 border-t'></div>

						<div className='flex justify-end gap-x-3 px-6 pb-6'>
							<button className='w-[180px] rounded-[10px] border border-dark py-3' onClick={() => setDialog(false)}>
								Cancel
							</button>
							<button className='w-[180px] rounded-[10px] bg-black text-white'>Create room</button>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</>
	)
}
