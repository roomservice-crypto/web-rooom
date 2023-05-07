import { Box, Typography } from '@mui/material'
import { PrimaryButton } from '../Button'
import fillerImg from '@/assets/img/filler.png'

export default function RoomOverviewCard() {
	return (
		<div className='grid w-full rounded-[28px]  border-2 border-dark shadow-[0_6px_#FAE76C] transition-all'>
			<Box className='border-bottom-2' display={{ xs: 'grid', md: 'flex' }}>
				<Box width={{ xs: '100%', md: '40%' }} padding='20px'>
					<Box display='grid'>
						<Box
							width='100%'
							pb='100%'
							height={0}
							position='relative'
							sx={{ borderRadius: 1.5, overflow: 'hidden' }}
							mb={10}>
							<img
								src={fillerImg.src}
								style={{ position: 'absolute', top: 0, left: 0, height: '100%', objectFit: 'cover' }}
							/>
						</Box>
						<Box display='grid'>
							<Typography fontSize={24} fontWeight={600}>
								Monopoly Dreams World
							</Typography>
							<Typography
								fontSize={14}
								sx={{
									color: 'rgba(0, 0, 0, 0.4)'
								}}>
								Room ID: 25899222
							</Typography>
						</Box>
						<Box display='flex'>
							<Box>
								<Typography>Followers</Typography>
								<Typography>302</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					display='grid'
					gap={32}
					sx={{
						padding: 20,
						flexGrow: 1,
						backgroundColor: 'rgba(0, 0, 0, 0.05)'
					}}>
					<Box>
						<Typography fontSize={24} fontWeight={500} mb={16}>
							NFTs
						</Typography>
						<hr
							style={{
								borderBottom: '2px dashed #1C1C1C',
								height: 0
							}}
						/>
						<Box
							display={'grid'}
							gap={{ xs: '16px', md: '16px' }}
							gridTemplateColumns={{ xs: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
							padding='20px 0'>
							{[...Array(10).keys()].map(index => (
								<Box
									key={index}
									height='0'
									pb='100%'
									width='100%'
									sx={{
										background: '#cccccc',
										borderRadius: 1
									}}></Box>
							))}
						</Box>
					</Box>

					<Box>
						<Box display={'flex'} justifyContent={'space-between'} mb={16}>
							<Typography fontSize={24} fontWeight={500}>
								Wallet
							</Typography>
							<Typography fontSize={24} fontWeight={600}>
								$38,418.68
							</Typography>
						</Box>

						<hr
							style={{
								borderBottom: '2px dashed #1C1C1C',
								height: 0
							}}
						/>
						<Box display={'grid'} gap='16px' padding='16px'>
							<Box display='flex' justifyContent={'space-between'}>
								<Box display={'flex'} gap={12}>
									<Box sx={{ height: 32, width: 32, borderRadius: '50%', background: 'orange' }}></Box>
									<Box>
										<Typography>BTC</Typography>
										<Typography fontSize={16} fontWeight={500}>
											2.097875
										</Typography>
									</Box>
								</Box>

								<Typography fontSize={16} fontWeight={500}>
									$1,976.00
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<hr className='border-2 border-dark' />
			<Box display={{ xs: 'grid', md: 'flex' }} gap={20} className='justify-between px-[24px] py-[20px]'>
				<Box>
					<Typography mb={16}>Recent visitors</Typography>
					<Box display='flex'>
						{[...Array(3).keys()].map(index => (
							<Box
								key={index}
								sx={{
									height: '32px',
									width: '32px',
									borderRadius: '50%',
									marginLeft: index === 0 ? '0' : '-6px',
									background:
										'conic-gradient(from 180deg at 50% 50%, #5FFF5C -18.66deg, #FFE249 22.23deg, #F35950 78.14deg, #7C5BFF 159deg, #1CE4FF 202.32deg, #5FFF5C 341.34deg, #FFE249 382.23deg)',
									borderImageSource: ''
								}}></Box>
						))}
					</Box>
				</Box>

				<Box>
					<Box
						display={'flex'}
						sx={{
							['& button']: {
								['&:first-of-type']: {
									margin: 0
								},
								height: { xs: '40px', md: '74px' },
								fontSize: { xs: '16px', md: undefined }
							}
						}}>
						<PrimaryButton bg='#000000'>Follow</PrimaryButton>
						<PrimaryButton bg='transparent' style={{ whiteSpace: 'nowrap' }}>
							Explore room
						</PrimaryButton>
					</Box>
				</Box>
			</Box>
		</div>
	)
}
