import { Box, Typography, Grid } from '@mui/material'
import Modal from '.'
import map from '@/assets/img/map.png'
import { UserInfo } from '@/hooks/useUserInfo'
import EditIcon from '@mui/icons-material/Edit'
import { CircleButton, PrimaryButton } from '../Button'
import { useCallback, useState } from 'react'
import Dropzone from '../Dropzone'
import { editUserCallback } from '@/utils/userCallback'
import { Axios } from '@/utils/axios'

export default function ProfileModal({
	isOpen,
	onDismiss,
	info,
	setRefresh
}: {
	isOpen: boolean
	onDismiss: () => void
	info: UserInfo | undefined
	setRefresh: () => void
}) {
	const [avatarOpen, setAvatarOpen] = useState(false)
	const [formData, setFormData] = useState<undefined | FormData>(undefined)

	const onUpload = useCallback(() => {
		setAvatarOpen(false)
		if (!info || !formData) return
		Axios.post(
			'/img/upload',
			formData,
			{},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		)
			.then(response => {
				editUserCallback({ ...info, avatar: response.data.data })
					.then(() => {
						setRefresh()
					})
					.catch(error => {
						console.error('edit', error)
					})
			})
			.catch(error => {
				console.error('upload-img', error)
			})
	}, [formData, info, setRefresh])

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
								height: '60px',
								width: '60px',
								borderRadius: '50%',
								background: `#cccccc url(${info?.avatar}) no-repeat center center`,
								backgroundSize: 'cover'
							}}>
							<CircleButton
								sx={{ position: 'absolute', top: -10, right: 0, width: 30, height: 30, minWidth: 'unset' }}
								onClick={() => {
									setAvatarOpen(true)
								}}>
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
				<Box display={'flex'} alignItems={'center'} height='100%' flexDirection={'column'}>
					<Dropzone
						title={'Click to upload avatar image'}
						onUploadSrc={formData => {
							setFormData(formData)
						}}
					/>
					<PrimaryButton onClick={onUpload} style={{ height: 30, marginBottom: 10, width: '90%' }}>
						Save
					</PrimaryButton>
				</Box>
			</Modal>
		</>
	)
}
