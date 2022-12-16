import HeaderRoom from '@/layout/header-room'
import bg from '@/mock/images/bg-2.png'
import game1 from '@/mock/images/game-1.png'
import game3 from '@/mock/images/game-3.png'
import game6 from '@/mock/images/game-6.png'
import game7 from '@/mock/images/game-7.png'
import game8 from '@/mock/images/game-8.png'
import game9 from '@/mock/images/game-9.png'
import avatar1 from '@/mock/images/avatar-1.png'
import avatar2 from '@/mock/images/avatar-2.png'
import avatar3 from '@/mock/images/avatar-3.png'
import avatar4 from '@/mock/images/avatar-4.png'
import avatar5 from '@/mock/images/avatar-5.png'
import avatar6 from '@/mock/images/avatar-6.png'
import avatar7 from '@/mock/images/avatar-7.png'
import avatar9 from '@/mock/images/avatar-9.png'
import avatar10 from '@/mock/images/avatar-10.png'
import avatar11 from '@/mock/images/avatar-11.png'
import avatar12 from '@/mock/images/avatar-12.png'
import avatar13 from '@/mock/images/avatar-13.png'
import avatar14 from '@/mock/images/avatar-14.png'
import nft1 from '@/mock/nfts/nft-1.png'
import nft2 from '@/mock/nfts/nft-2.png'
import nft3 from '@/mock/nfts/nft-3.png'
import nft4 from '@/mock/nfts/nft-4.png'
import nft5 from '@/mock/nfts/nft-5.png'
import nft6 from '@/mock/nfts/nft-6.png'
import token1 from '@/mock/tokens/token-1.png'
import token2 from '@/mock/tokens/token-2.png'
import token3 from '@/mock/tokens/token-3.png'
import token4 from '@/mock/tokens/token-4.png'
import { shortenAddress } from '@/utils'
import Play from '@/mock/svgs/play.svg'
import User from '@/mock/svgs/user.svg'
import Add from '@/mock/svgs/add.svg'
import Gaming from '@/mock/svgs/gaming.svg'
import ThumbsUp from '@/mock/svgs/thumbs-up.svg'
import Users from '@/mock/svgs/users.svg'
import ExternalLink from '@/mock/svgs/external-link.svg'
import Edit from '@/mock/svgs/edit.svg'
import Maximize from '@/mock/svgs/maximize.svg'
import ArrowRight from '@/mock/svgs/arrow-right.svg'

export default function Room2(props: { room: any }) {
	const { room } = props

	return (
		<div className=' overflow-hidden'>
			<HeaderRoom className='text-white' />
			<div
				className='min-h-[100vh] bg-white pt-[176px] pb-[124px] text-dark'
				style={{
					backgroundImage: `url(${bg.src})`,
					backgroundPosition: '100% top',
					backgroundSize: '100% 240px',
					backgroundRepeat: 'no-repeat'
				}}>
				{/* avatar */}
				<figure className='flex justify-center'>
					<img src={room.avatar} className='h-40 w-40 rounded-full border-4 border-dark' />
				</figure>

				{/* introduce */}
				<div>
					<div className='mx-auto mt-6 w-max text-[30px] font-semibold leading-[1.2]'>{room.name}.rooom</div>
					<div className='mx-auto w-max opacity-40'>Room NFT owned by {shortenAddress(room.address)}</div>
					<div className='mx-auto mt-5 flex w-max gap-x-3'>
						<button className='flex items-center gap-x-2 rounded-full bg-[#FAE76C] px-6 py-[10px]'>
							<Users />
							Follow
						</button>
						<button className='flex items-center gap-x-2 rounded-full border border-black border-opacity-10 px-6 py-[10px]'>
							<ExternalLink />
							Share Room
						</button>
						<button className='rounded-full border border-black border-opacity-10 p-3'>
							<Edit />
						</button>
					</div>
				</div>

				<div className='border-t border-black border-opacity-10 mt-10'></div>

				{/* grid */}
				<div className='mx-auto mt-8 flex w-[1440px] gap-8 px-20'>
					{/* left */}
					<div className='flex flex-[520] flex-col rounded-3xl bg-black bg-opacity-5'>
						<div className='relative mt-6 flex-1 px-6'>
							<div className='flex justify-between border-b border-white border-opacity-10 pb-5 text-lg font-semibold'>
								<span>Game asset auction</span>
								<Maximize />
							</div>

							<div className='border-t border-black border-opacity-10'></div>

							{/* nfts */}
							<div className='mt-6'>
								<div className='font-semibold opacity-80'>NFTs</div>

								<div className='mt-2 flex justify-between gap-x-2'>
									<img src={nft1.src} className='h-[70px] w-[70px] rounded-lg' />
									<img src={nft2.src} className='h-[70px] w-[70px] rounded-lg' />
									<img src={nft3.src} className='h-[70px] w-[70px] rounded-lg' />
									<img src={nft4.src} className='h-[70px] w-[70px] rounded-lg' />
									<img src={nft5.src} className='h-[70px] w-[70px] rounded-lg' />
									<figure className='relative flex h-[70px] w-[70px] items-center justify-center'>
										<img src={nft6.src} className='h-[70px] w-[70px] rounded-lg' />
										<span className=' absolute'>+26</span>
									</figure>
								</div>
							</div>

							{/* wallet */}
							<div className='mt-6 pb-6'>
								<div className='font-semibold opacity-80'>Wallet</div>

								<div className='mt-2 text-2xl font-semibold'>$38,418.68</div>

								<div className='my-2 border-t border-black opacity-10'></div>

								<ul className='flex flex-col gap-y-1'>
									<li className='flex items-center gap-x-3'>
										<figure>
											<img src={token1.src} className='rounful h-10 w-10' />
										</figure>
										<span className='font-semibold opacity-80'>GALA</span>

										<div className='ml-auto text-right text-lg'>
											<div>887530.63</div>
											<div className=' opacity-40'>$887530.00</div>
										</div>
									</li>
									<li className='flex items-center gap-x-3'>
										<figure>
											<img src={token2.src} className='rounful h-10 w-10' />
										</figure>
										<span className='font-semibold opacity-80'>MANA</span>

										<div className='ml-auto text-right text-lg'>
											<div>2.0086</div>
											<div className=' opacity-40'>$20861.09</div>
										</div>
									</li>
									<li className='flex items-center gap-x-3'>
										<figure>
											<img src={token3.src} className='rounful h-10 w-10' />
										</figure>
										<span className='font-semibold opacity-80'>AXS</span>

										<div className='ml-auto text-right text-lg'>
											<div>36.25</div>
											<div className=' opacity-40'>$10930.00</div>
										</div>
									</li>
									<li className='flex items-center gap-x-3'>
										<figure>
											<img src={token4.src} className='rounful h-10 w-10' />
										</figure>
										<span className='font-semibold opacity-80'>GMT</span>

										<div className='ml-auto text-right text-lg'>
											<div>2568.12</div>
											<div className=' opacity-40'>$9861.09</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='relative flex-[720] rounded-3xl bg-black bg-opacity-5 p-4'>
						<div className='flex justify-between border-b border-white border-opacity-10 pb-5 text-lg font-semibold'>
							<span>Private Game Room</span>
							<Maximize />
						</div>

						<div className='border-t border-black border-opacity-10'></div>

						<ul className='mt-6 flex flex-col gap-y-3'>
							<li className='flex gap-x-6 rounded-3xl bg-white bg-opacity-40 p-2'>
								<figure>
									<img src={game3.src} className='h-[180px] w-[256px]' />
								</figure>
								<div className='flex-1 pt-6'>
									<div>
										<span className='inline-flex items-center gap-x-[6px] rounded-full bg-[#7B61FF] bg-opacity-25 px-2 py-[2px] text-[#7B61FF]'>
											<Gaming />
											<span>In Progress</span>
										</span>
									</div>
									<div className='mt-1 text-lg font-semibold'>Kathryn Murphy</div>
									<div className='mt-2 opacity-40'>3v3 Confrontation</div>
									<div className='mt-5 flex justify-between'>
										<div className='flex items-center'>
											<img src={avatar5.src} className='h-8 w-8' />
											<img src={avatar6.src} className='-m-1 h-8 w-8' />
											<img src={avatar7.src} className='-m-1 h-8 w-8' />
											<img src={avatar2.src} className='-m-1 h-8 w-8' />
										</div>

										<button className='flex items-center gap-x-2 rounded-full bg-black bg-opacity-80 px-4 py-2 text-white'>
											<span>Ask to join</span> <ArrowRight />
										</button>
									</div>
								</div>
							</li>

							<li className='flex gap-x-6 rounded-3xl bg-white bg-opacity-40 p-2'>
								<figure>
									<img src={game1.src} className='h-[180px] w-[256px]' />
								</figure>
								<div className='flex-1 pt-6'>
									<div>
										<span className='inline-flex items-center gap-x-[6px] rounded-full bg-[#7B61FF] bg-opacity-25 px-2 py-[2px] text-[#7B61FF]'>
											<Gaming />
											<span>In Progress</span>
										</span>
									</div>
									<div className='mt-1 text-lg font-semibold'>Monopoly Dreams World</div>
									<div className='mt-2 opacity-40'>Multiplayer Group Game</div>
									<div className='mt-5 flex justify-between'>
										<div className='flex items-center'>
											<img src={avatar1.src} className='h-8 w-8' />
											<img src={avatar2.src} className='-m-1 h-8 w-8' />
											<img src={avatar3.src} className='-m-1 h-8 w-8' />
											<img src={avatar4.src} className='-m-1 h-8 w-8' />
										</div>

										<button className='flex items-center gap-x-2 rounded-full bg-black bg-opacity-80 px-4 py-2 text-white'>
											<span>Ask to join</span> <ArrowRight />
										</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Gaming */}
				<div className='mx-auto mt-6 w-[1440px] px-20'>
					<div className='relative rounded-3xl bg-black bg-opacity-5 p-[26px]'>
						<div className='flex justify-between border-b border-white border-opacity-10 pb-5 text-lg font-semibold'>
							<span>Gaming Profile</span>
							<Maximize />
						</div>

						<div className='border-t border-black border-opacity-10'></div>

						{/* smalls cards */}
						<div className='mt-6 flex justify-between gap-x-6'>
							<div className='flex flex-1 gap-x-6 rounded-2xl bg-white bg-opacity-40'>
								<figure>
									<img src={game6.src} className='h-[96px] w-[72px]' />
								</figure>
								<div className='py-3'>
									<div>Robert Fox</div>
									<div className='mt-1 flex gap-x-3'>
										<span className='flex items-center'>
											<ThumbsUp />
											<span className='text-xs opacity-80'>98%</span>
										</span>
										<span className='flex items-center'>
											<User />
											<span className='text-xs opacity-80'>36.7K</span>
										</span>
									</div>
									<div className='mt-3 flex gap-x-2 font-semibold'>
										<span className='text-xs'>Just playing</span>
										<Play />
									</div>
								</div>
							</div>

							<div className='flex flex-1 gap-x-6 rounded-2xl bg-white bg-opacity-40'>
								<figure>
									<img src={game7.src} className='h-[96px] w-[72px]' />
								</figure>
								<div className='py-3'>
									<div>Floyd Miles</div>
									<div className='mt-1 flex gap-x-3'>
										<span className='flex items-center'>
											<ThumbsUp />
											<span className='text-xs opacity-80'>98%</span>
										</span>
										<span className='flex items-center'>
											<User />
											<span className='text-xs opacity-80'>36.7K</span>
										</span>
									</div>
									<div className='mt-3 flex gap-x-2 font-semibold'>
										<span className='text-xs'>Just playing</span>
										<Play />
									</div>
								</div>
							</div>

							<div className='flex flex-1 gap-x-6 rounded-2xl bg-white bg-opacity-40'>
								<figure>
									<img src={game8.src} className='h-[96px] w-[72px]' />
								</figure>
								<div className='py-3'>
									<div>Darrell Steward</div>
									<div className='mt-1 flex gap-x-3'>
										<span className='flex items-center'>
											<ThumbsUp />
											<span className='text-xs opacity-80'>98%</span>
										</span>
										<span className='flex items-center'>
											<User />
											<span className='text-xs opacity-80'>36.7K</span>
										</span>
									</div>
									<div className='mt-3 flex gap-x-2 font-semibold'>
										<span className='text-xs'>Just playing</span>
										<Play />
									</div>
								</div>
							</div>

							<div className='flex flex-1 gap-x-6 rounded-2xl bg-white bg-opacity-40'>
								<figure>
									<img src={game9.src} className='h-[96px] w-[72px]' />
								</figure>
								<div className='py-3'>
									<div>Bessie Cooper</div>
									<div className='mt-1 flex gap-x-3'>
										<span className='flex items-center'>
											<ThumbsUp />
											<span className='text-xs opacity-80'>98%</span>
										</span>
										<span className='flex items-center'>
											<User />
											<span className='text-xs opacity-80'>36.7K</span>
										</span>
									</div>
									<div className='mt-3 flex gap-x-2 font-semibold'>
										<span className='text-xs'>Just playing</span>
										<Play />
									</div>
								</div>
							</div>
						</div>

						<div className='mt-6 flex justify-between gap-x-6 text-center'>
							<div>
								<div className='flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#11B97C]'>
									<Add className='text-white' />
								</div>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Invite to play</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar4.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Luc Ganssou</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar3.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Jacob Jones</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar2.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Christian Apithy</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar9.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Jane Cooper</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar10.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Wade Warren</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar11.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Savannah Nguyen</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C]  p-[1px]'>
									<img src={avatar12.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Jacob Jones</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar13.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Darlene Robertson</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#11B97C] p-[1px]'>
									<img src={avatar6.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white  bg-[#11B97C]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Robert Fox</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-white border-opacity-20 p-[1px]'>
									<img src={avatar14.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white border-opacity-20 bg-[#2B2F3D]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Ronald Richards</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
							<div>
								<figure className='relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-white border-opacity-20 p-[1px]'>
									<img src={avatar5.src} className='h-full w-full rounded-full' />

									<span className='absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white border-opacity-20 bg-[#2B2F3D]'></span>
								</figure>
								<div className='mt-3 w-[68px] text-xs font-semibold'>Albert Flores</div>
								<div className='text-xs opacity-40 '>14m ago</div>
							</div>
						</div>
					</div>
				</div>

				{/* table */}
				<div className='mx-auto w-[1440px] px-20'>
					<div className='relative mt-6 flex-1 rounded-3xl bg-black bg-opacity-5 p-[26px]'>
						<div className='flex justify-between border-b border-white border-opacity-10 pb-5 text-lg font-semibold'>
							<span>Hall of fame</span>
							<Maximize />
						</div>

						<div className='border-t border-black border-opacity-10'></div>

						<table className='w-full border-separate border-spacing-0 border-spacing-y-4'>
							<thead>
								<tr>
									<th className='py-2 text-left font-semibold opacity-80'></th>
									<th className='py-2 text-left font-semibold opacity-80'>Name</th>
									<th className='py-2 text-left font-semibold opacity-80'>Sales</th>
									<th className='py-2 text-left font-semibold opacity-80'>Income</th>
									<th className='py-2 text-left font-semibold opacity-80'>Items</th>
									<th className='py-2 text-left font-semibold opacity-80'>Followers</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>1</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar4.src} className='mr-4 h-14 w-14 rounded-full' />
										Luc Ganssou
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark '>
											Follow
										</button>
									</td>
								</tr>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>2</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar3.src} className='mr-4 h-14 w-14 rounded-full' />
										Jacob Jones
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark '>
											Follow
										</button>
									</td>
								</tr>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>3</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar4.src} className='mr-4 h-14 w-14 rounded-full' />
										Christian Apithy
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark '>
											Follow
										</button>
									</td>
								</tr>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>4</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar1.src} className='mr-4 h-14 w-14 rounded-full' />
										Geraud Babalola
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark '>
											Follow
										</button>
									</td>
								</tr>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>5</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar1.src} className='mr-4 h-14 w-14 rounded-full' />
										Jaurès Kpobli
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark '>
											Follow
										</button>
									</td>
								</tr>
								<tr>
									<td className='rounded-l-2xl bg-white bg-opacity-40 py-4 pl-6'>5</td>
									<td className='flex items-center bg-white bg-opacity-40 py-4'>
										<img src={avatar5.src} className='mr-4 h-14 w-14 rounded-full' />
										Abdias Cossou
									</td>
									<td className='bg-white bg-opacity-40 py-4'>15,085,035.95</td>
									<td className='bg-white bg-opacity-40 py-4'>111,850</td>
									<td className='bg-white bg-opacity-40 py-4'>50,850</td>
									<td className='bg-white bg-opacity-40 py-4'>10,150</td>
									<td className='rounded-r-2xl bg-white bg-opacity-40 py-4 pr-6 text-right'>
										<button className=' rounded-[10px] bg-black bg-opacity-10 py-[6px] px-[10px] font-helve font-bold text-dark'>
											Follow
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
