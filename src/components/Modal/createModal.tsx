import { Box, Divider, FormControl, IconButton, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import Pin from '@/svgs/location.svg'
import { PrimaryButton } from '@/components/Button'
import { useRouter } from 'next/router'
import SelectLocation from '@/components/Modal/SelectLocationModal'
import { editUserCallback } from '@/utils/userCallback'
import { UserInfo, useEditUserInfo } from '@/hooks/useUserInfo'
import ModalWithStepper from './ModalWithStepper'

export default function CreateModal({
	isOpen,
	onDismiss,
	info,
	refreshCb
}: {
	info: UserInfo | undefined
	refreshCb: () => void
	isOpen: boolean
	onDismiss: () => void
}) {
	const [mapOpen, setMapOpen] = useState(false)
	const [completed, setCompleted] = useState(false)

	const router = useRouter()

	const { address, setAddress, bio, setBio, roomName, setRoomName } = useEditUserInfo(info, refreshCb)

	return (
		<>
			<ModalWithStepper isOpen={isOpen} onDismiss={onDismiss} activeStep={completed ? 2 : 1}>
				<Box
					display='flex'
					width='100%'
					sx={{
						maxHeight: '100%',
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start',
						overflow: 'auto'
					}}>
					{!completed ? (
						<Box paddingTop={8} paddingLeft={24} paddingRight={24} width='100%'>
							<Typography fontSize={24} fontWeight={600} paddingTop={24}>
								CREATE ROOM
							</Typography>
							<Divider sx={{ margin: '24px 0px 24px 0px', border: '2px dashed #1C1C1C' }} />
							<FormControl fullWidth>
								<Typography fontWeight={500} fontSize={16} paddingBottom={8}>
									Room name
								</Typography>
								<TextField
									value={roomName}
									onChange={e => setRoomName(e.target.value)}
									variant='outlined'
									fullWidth
									placeholder='The name you want to give to your room'></TextField>
								<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
									Select room address
								</Typography>
								<TextField
									disabled
									value={address?.toString()}
									InputProps={{
										endAdornment: (
											<IconButton
												onClick={() => {
													setMapOpen(true)
												}}>
												<Pin />
											</IconButton>
										)
									}}
									fullWidth
									placeholder='Select a location for your room'></TextField>
								<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
									Description (optional){' '}
								</Typography>
								<TextField
									fullWidth
									multiline
									placeholder='Give a description to your room'
									rows={4}
									value={bio}
									onChange={e => setBio(e.target.value)}></TextField>
								<PrimaryButton
									bgClass='bg-[transparent]'
									disabled={!bio || !roomName || !address}
									onClick={() => {
										if (!bio || !roomName || !address) return
										editUserCallback({
											bio,
											address,
											roomName
										})
										setCompleted(true)
									}}
									style={{ marginTop: '20px', marginBottom: '48px' }}>
									Create
								</PrimaryButton>
							</FormControl>
						</Box>
					) : (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								padding: '48px 32px 32px 32px',
								alignItems: 'center',
								width: '100%'
							}}>
							<Typography fontWeight={800} fontSize={24} paddingBottom={16}>
								🎉
							</Typography>
							<Typography fontWeight={800} fontSize={24} paddingBottom={16}>
								Congratulations, the room was created successfully!
							</Typography>
							<Typography fontWeight={400} fontSize={16} color='#00000066'>
								Next, you can choose to complete your information and let others know you, or you can decorate your room
								first
							</Typography>
							<PrimaryButton
								onClick={() => router.push('/room/myroom')}
								bgClass='bg-[transparent]'
								style={{ marginTop: '24px', marginBottom: '16px' }}
								variant='outlined'>
								Start decorating the room
							</PrimaryButton>
							<Typography onClick={onDismiss} fontWeight={500} fontSize={14} color='#00000066'>
								Maybe later
							</Typography>
						</Box>
					)}
				</Box>
			</ModalWithStepper>
			<SelectLocation
				setLocation={setAddress}
				isOpen={mapOpen}
				onDismiss={() => {
					setMapOpen(false)
				}}
			/>
		</>
	)
}
