import { Box, Divider, Typography } from '@mui/material'
import Card from '.'
import { PrimaryButton } from '../Button'

interface NewDeco {
	img: string
	title: string
	desc: string
	price: string
	priceU: string
}

export default function NewDecorationCard({ data }: { data: NewDeco }) {
	return (
		<Card padding={'24px'} sx={{ width: '100%' }}>
			<Box display='grid' gridTemplateColumns={'40% 1fr'} width='100%' sx={{ color: '#1C1C1C' }} gap={40}>
				<Box
					sx={{
						background: '#333333',
						width: '100%',
						height: '100%',
						borderRadius: 1.5,
						overflow: 'hidden',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						['& img']: {
							width: '80%',
							height: '80%',
							objectFit: 'contain'
						}
					}}>
					<img src={data.img}></img>
				</Box>
				<Box display='grid'>
					<Box>
						<Box height={42}></Box>
						<Typography fontSize={30} fontWeight={600}>
							{data.title}
						</Typography>
						<Typography color='#00000040' mt={8}>
							{data.desc}
						</Typography>
					</Box>
					<Box sx={{ background: '#FAE76C' }} padding='32px' borderRadius={2} mt={'auto'}>
						<Box>
							<Typography mb={14} color='#00000040'>
								Offer price
							</Typography>

							<Typography component={'span'} fontWeight={800} fontSize={36}>
								{data.price}
							</Typography>
							<Typography component={'span'} color='#00000040' ml={10}>
								≈${data.priceU}
							</Typography>
						</Box>
						<Divider sx={{ margin: '20px 0' }} />
						<PrimaryButton style={{ width: '100%', background: '#ffffff' }} disabled>
							Coming Soon...
						</PrimaryButton>
					</Box>
				</Box>
			</Box>
		</Card>
	)
}
