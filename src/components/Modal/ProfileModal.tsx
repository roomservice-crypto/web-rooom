import { Box, Divider, Typography, Grid } from '@mui/material'
import Modal from '.'
import map from '@/assets/img/map.png'
import { UserInfo } from '@/hooks/useUserInfo'
import EditIcon from '@mui/icons-material/Edit'
import { CircleButton } from '../Button'
import { useState } from 'react'

export default function ProfileModal({
	isOpen,
	onDismiss,
	info
}: {
	isOpen: boolean
	onDismiss: () => void
	info: UserInfo | undefined
}) {
	const [avatarOpen, setAvatarOpen] = useState(false)

	return (
		<>
			<Modal
				maxWidth='400px'
				customIsOpen={isOpen && !!info}
				borderRadius='46px'
				customOnDismiss={onDismiss}
				height='400px'
				closeIcon>
				<Box
					display='flex'
					width='100%'
					height='100%'
					flexDirection={'column'}
					sx={{
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start'
					}}>
					<Box
						height='200px'
						sx={{ background: `url(${map.src}) no-repeat`, width: '100%', backgroundSize: 'cover', mb: -50 }}></Box>
					<Box display='flex' alignItems={'flex-start'} padding='20px'>
						<Box
							sx={{
								position: 'relative',
								height: '80px',
								width: '80px',
								borderRadius: '50%',
								background: `#cccccc url(${info?.avatar})`
							}}>
							<CircleButton sx={{ position: 'absolute', top: -10, right: 0, width: 30, height: 30, minWidth: 'unset' }} onClick={()=>{setAvatarOpen(true)}}>
								<EditIcon style={{ width: 20, height: 20 }} />
							</CircleButton>
						</Box>
						<Box padding='20px'>
							<Typography fontWeight={600} fontSize={24}>
								{info?.roomName}.room
							</Typography>
							<Typography fontSize={14} mt={4}>
								{info?.bio}
							</Typography>
						</Box>
					</Box>
					<Grid container padding='0 20px' spacing={20}>
						<Grid item xs={4} sx={{ borderRight: '1px solid #cccccc' }}>
							<Typography fontSize={12} color='#888888' mb={5}>
								Followers
							</Typography>
							<Typography fontSize={16} fontWeight={500}>
								{info?.fansCount}
							</Typography>
						</Grid>
						<Grid item xs={4} sx={{ borderRight: '1px solid #cccccc' }}>
							<Typography fontSize={12} color='#888888' mb={5}>
								Following
							</Typography>
							<Typography fontSize={16} fontWeight={500}>
								{info?.followCount}
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography fontSize={12} color='#888888' mb={5}>
								Likes
							</Typography>
							<Typography fontSize={16} fontWeight={500}>
								{info?.likesCount}
							</Typography>
						</Grid>
					</Grid>
					{/* <Divider color='#1c1c1c' sx={{ height: '2px' }} /> */}
				</Box>
			</Modal>
			<Modal
				maxWidth='400px'
				customIsOpen={avatarOpen && !!info}
				borderRadius='46px'
				customOnDismiss={() => {
					setAvatarOpen(false)
				}}
				height='400px'
				closeIcon>
				<Box></Box>
			</Modal>
		</>
	)
}
