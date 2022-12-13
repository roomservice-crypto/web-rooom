import HeaderRoom from '@/layout/header-room'
import pattern1 from '@/mock/svgs/pattern-1.svg?url'
import Head from 'next/head'
import Earth from '@/mock/svgs/earth.svg'
import Buttons from '@/mock/svgs/buttons.svg'
import User from '@/mock/svgs/user-pixel.svg'
import Folder from '@/mock/svgs/folder.svg'
import Microphone from '@/mock/svgs/microphone.svg'
import PoundSign from '@/mock/svgs/#.svg'
import Add from '@/mock/svgs/add.svg'
import Chat from '@/mock/svgs/chat.svg'
import ArrowUp from '@/mock/svgs/arrow-up.svg'
import { shortenAddress } from '@/utils'
import speaker from '@/mock/images/speaker.png'
import human1 from '@/mock/images/human-1.png'
import human2 from '@/mock/images/human-2.png'
import human3 from '@/mock/images/human-3.png'
import human4 from '@/mock/images/human-4.png'
import human5 from '@/mock/images/human-5.png'
import human6 from '@/mock/images/human-6.png'
import human7 from '@/mock/images/human-7.png'
import human8 from '@/mock/images/human-8.png'
import human9 from '@/mock/images/human-9.png'
import human10 from '@/mock/images/human-10.png'
import human11 from '@/mock/images/human-11.png'
import human12 from '@/mock/images/human-12.png'
import avatar from '@/mock/images/avatar.png'
import custom from '@/mock/images/diy-custom.png'
import colors from '@/mock/images/diy-colors.png'

const LISTENERS = [
	{ avatar: human1.src, name: 'Luc Ganssou' },
	{ avatar: human2.src, name: 'Savannah Nguyen' },
	{ avatar: human3.src, name: 'Jacob Jones' },
	{ avatar: human4.src, name: 'Geraud Babalola' },
	{ avatar: human5.src, name: 'Devon Lane' },
	{ avatar: human6.src, name: 'Savannah Nguyen' },
	{ avatar: human7.src, name: 'Theresa Webb' },
	{ avatar: human8.src, name: 'Leslie Alexander' },
	{ avatar: human9.src, name: 'Bessie Cooper' },
	{ avatar: human10.src, name: 'Arlene McCoy' },
	{ avatar: human11.src, name: 'Jane Cooper' },
	{ avatar: human12.src, name: 'Albert Flores' },
	{ avatar: human8.src, name: 'Leslie Alexander' },
	{ avatar: human1.src, name: 'Devon Lane' },
	{ avatar: human10.src, name: 'Arlene McCoy' }
]

export default function Room4(props: { room: any }) {
	const { room } = props

	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap'
					rel='stylesheet'></link>
			</Head>

			<HeaderRoom className='text-dark' />

			<div
				className='min-h-[100vh] bg-white pt-20 pb-40 text-dark'
				style={{
					backgroundImage: `url(${pattern1})`
				}}>
				{/* paper */}
				<div className='mx-auto w-[1440px] px-20'>
					<div className='bg-[#97FFDA] shadow-[16px_12px_black]'>
						{/* head */}
						<div className='flex h-[46px] items-center bg-black px-8 font-ibm text-2xl uppercase leading-[1] text-white'>
							<span className=''>roomService.os</span>
							<span className='ml-auto'>12:00PM (GMT-5:00)</span>
							<div className='mx-4 h-full border-l-2 border-white'></div>
							<Earth className='mr-6' />
							<span>USA</span>
						</div>

						{/* body */}
						<div className='p-[60px] pb-[100px]'>
							{/* first section - introduce */}
							<div className='flex justify-between'>
								{/* introduce */}
								<div className='bg-white shadow-[16px_12px_black]'>
									{/* introduce - head */}
									<div className='flex h-[46px] w-[960px] items-center justify-between bg-black px-3 font-ibm text-white'>
										<Buttons />
										<span className='text-2xl leading-[1]'>BIO.DMG</span>
										<User />
									</div>

									{/* introduce - body */}
									<div className='flex items-center gap-x-6 px-10 py-8'>
										<div className='h-[256px] w-[256px] border-[20px] border-[#04866E] p-6'>
											<img src={avatar.src} className='h-full w-full rounded-full' />
										</div>
										<div>
											<div className='text-[48px] leading-[52px]'>{room.name}</div>
											<div className='mt-4 text-lg leading-[24px] text-black text-opacity-80'>
												Room NFT owned by {shortenAddress(room.address)}
											</div>
										</div>
									</div>

									{/* introduce - footer */}
									<div
										className='flex gap-x-3 border-t border-black px-10 py-6 font-ibm'
										style={{
											backgroundImage: `url(${pattern1})`
										}}>
										<button className='border border-black bg-[#DDF247] px-6 py-[10px] shadow-[6px_6px_black]'>
											Follow
										</button>
										<button className='border border-black bg-white px-6 py-[10px] shadow-[6px_6px_black]'>
											Share Room
										</button>
									</div>
								</div>

								<div className='flex flex-col justify-between font-ibm text-xl'>
									<div>
										<Folder />
										<div className=' uppercase'>DIY Avatar</div>
									</div>
									<div>
										<Folder />
										<div className=' uppercase'>Voice chat</div>
									</div>
								</div>
							</div>

							{/* second section - voice chat */}
							<div className='mt-10 bg-white shadow-[16px_12px_black]'>
								{/* voice - head */}
								<div className='flex h-[46px] items-center justify-between bg-black px-3 font-ibm text-white'>
									<Buttons />
									<span className='text-2xl uppercase leading-[1]'>Voice chat</span>
									<Microphone />
								</div>

								{/* voice - speaker */}
								<div className='py-16 text-center' style={{ backgroundImage: `url(${pattern1})` }}>
									<div>
										<img src={speaker.src} className='inline-block h-[84px] w-[84px]' />
									</div>
									<div className='mt-3 font-ibm text-sm text-[#11B97C]'>Syncina is talking...</div>
								</div>

								{/* voice listener */}
								<div className='flex flex-wrap gap-x-[42px] gap-y-[9px] border-t border-black px-10 py-6 text-center font-ibm font-semibold'>
									{LISTENERS.map((l, i) => (
										<div key={i}>
											<figure className='relative flex h-[68px] w-[68px] items-center justify-center gap-y-[9px] rounded-full border-2 border-black p-[5px]'>
												<img src={l.avatar} className='h-full w-full rounded-full' />

												<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white border-opacity-20 bg-[#11B97C]'></span>
											</figure>
											<div className='mt-3 w-[68px] text-xs'>{l.name}</div>
										</div>
									))}
									<div>
										<div className='flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#11B97C]'>
											<Add />
										</div>
										<div className='mt-3 w-[68px] text-xs'>Invite to play</div>
									</div>
								</div>
							</div>

							{/* third section - others */}
							<div className='mt-14 flex items-start justify-between'>
								{/* DIY */}
								<div className='w-[500px] bg-white shadow-[16px_12px_black]'>
									<div className='flex h-[46px] items-center justify-between bg-black px-3 font-ibm text-white'>
										<Buttons />
										<span className='text-2xl uppercase leading-[1]'>DIY Avatar</span>
										<PoundSign />
									</div>

									<div className='flex justify-between px-10 pt-8 pb-2'>
										<div>
											<img src={custom.src} className='w-[68px]' />
										</div>
										<div
											className='flex w-[328px] items-center justify-center'
											style={{
												backgroundImage: `url(${pattern1})`
											}}>
											<img src={avatar.src} className='w-[200px]' />
										</div>
									</div>

									<div className='border-t border-black px-10 py-6 text-center'>
										<img src={colors.src} className='items-center' />
									</div>
								</div>

								{/* message */}
								<div className='mt-[80px] w-[532px] bg-white shadow-[16px_12px_black]'>
									<div className='flex h-[46px] items-center justify-between bg-black px-3 font-ibm text-white'>
										<Buttons />
										<span className='text-2xl uppercase leading-[1]'>Message chat</span>
										<Chat />
									</div>

									<div className='h-[400px] flex-col px-10 font-ibm'>
										<div className='mt-8 flex'>
											<figure className='relative flex h-[39px] w-[39px] items-center justify-center gap-y-[9px] rounded-full border-[1.2px] border-black border-opacity-60 p-[2px]'>
												<img src={human1.src} className='h-full w-full rounded-full' />

												<span className='absolute right-0 bottom-0 h-2 w-2 rounded-full border-2 border-white border-opacity-20 bg-[#11B97C]'></span>
											</figure>
											<div className='ml-3'>
												<div className='text-sm'>Luc Ganssou</div>
												<div className='mt-[6px] w-[260px] bg-[#F2F4F7] px-[14px] py-[10px]'>
													Thanks everyone! Almost there.
												</div>
											</div>
										</div>
										<div className='mt-4 flex'>
											<figure className='relative flex h-[39px] w-[39px] items-center justify-center gap-y-[9px] rounded-full border-[1.2px] border-black border-opacity-60 p-[2px]'>
												<img src={human2.src} className='h-full w-full rounded-full' />

												<span className='absolute right-0 bottom-0 h-2 w-2 rounded-full border-2 border-white border-opacity-20 bg-[#11B97C]'></span>
											</figure>
											<div className='ml-3'>
												<div>Luc Ganssou</div>
												<div className='mt-[6px] w-[260px] bg-[#F2F4F7] px-[14px] py-[10px]'>
													Hey team, I’ve finished with the requirements doc!
												</div>
											</div>
										</div>
										<div className='mt-4 self-end'>
											<div className='flex flex-col items-end'>
												<div>
													<div className='text-sm'>You</div>
													<div className='mt-[6px] w-[260px] bg-black px-[14px] py-[10px] text-white'>
														Awesome! Thanks.
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='flex items-center gap-x-3 border-t border-black px-10 py-6'>
										<input
											type='text'
											placeholder='Message'
											className='flex-1 border-2 border-black px-[14px] py-[10px]'
										/>
										<button
											className='border-2 border-black bg-[#04866E] p-3 text-black'
											style={{ boxShadow: '6px 6px 0px #000000, 0px 1px 2px rgba(16, 24, 40, 0.05);' }}>
											<ArrowUp />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
