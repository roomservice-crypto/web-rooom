import { Box, Typography } from '@mui/material'

export default function CommunityCard() {
	return (
		<Box width='100%'>
			<Box
				height='0'
				width='100%'
				pb={'100%'}
				sx={{
					border: '1px solid #000000',
					borderRadius: 2
				}}></Box>
			<Box mt={10} mb={24}>
				<Typography fontSize={24} fontWeight={600}>
					Riot Games
				</Typography>
				<Typography fontSize={16} fontWeight={600} sx={{ color: ' rgba(0, 0, 0, 0.4)' }}>
					100 users
				</Typography>
			</Box>
			<button
				style={{
					width: '100%',
					border: '2px solid #000000',
					padding: '15px',
					borderRadius: '15px'
				}}>
				View community
			</button>
		</Box>
	)
}
