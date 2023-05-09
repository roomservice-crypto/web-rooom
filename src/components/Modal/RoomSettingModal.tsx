import React, { useEffect, useState } from 'react'
import Modal from '.'
import AccountIcon from '@/svgs/settings/account.svg'
import BoxIcon from '@/svgs/settings/box.svg'
import ThumbIcon from '@/svgs/settings/thumb.svg'
import Pin from '@/svgs/location.svg'
import { Box, Checkbox, Divider, FormControl, Grid, IconButton, TextField, Typography } from '@mui/material'
import { SettingsTab, SettingsTabs, TabPanel, a11yProps } from '../Tabs/SettingsTabs'
import { useEditUserInfo } from '@/hooks/useUserInfo'
import SelectLocation from './SelectLocationModal'
import { PrimaryButton } from '../Button'
import useBreakpoint from '@/hooks/useBreakpoint'

export default function RoomSettingModal({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
	const [value, setValue] = useState(0)
	const [mapOpen, setMapOpen] = useState(false)

	const {
		address,
		setAddress,
		bio,
		setBio,
		roomName,
		setRoomName,
		editUserInfo,
		showErc20,
		showNft,
		setShowErc20,
		setShowNft,
		emailNotify,
		setEmailNotify
	} = useEditUserInfo()

	const isDownMd = useBreakpoint('md')

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue)
	}

	useEffect(() => {})

	return (
		<>
			<Modal
				maxWidth='1200px'
				customIsOpen={isOpen}
				borderRadius='46px'
				customOnDismiss={onDismiss}
				height='100%'
				closeIcon>
				<Box
					display='flex'
					width='100%'
					height='100%'
					sx={{
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start',
						border: '2px solid',
						borderRadius: '34px'
					}}>
					<Grid container height='100%' overflow={'hidden'}>
						<Grid item xs={12} md={4} sx={{ height: { xs: '60px', md: 'auto' } }}>
							<Box
								sx={{
									height: '100%',
									backgroundColor: { xs: 'transparent', md: 'white' },
									borderTopLeftRadius: '34px',
									borderBottomLeftRadius: '34px',
									paddingTop: { xs: 5, md: '36px' },
									paddingLeft: '24px',
									paddingRight: '24px',
									justifyContent: 'flex-start'
								}}>
								<SettingsTabs orientation={isDownMd ? 'horizontal' : 'vertical'} value={value} onChange={handleChange}>
									<SettingsTab label={isDownMd ? '' : 'Account'} icon={<AccountIcon />} {...a11yProps(0)} />
									<SettingsTab label={isDownMd ? '' : 'Assets'} icon={<BoxIcon />} {...a11yProps(1)} />
									<SettingsTab label={isDownMd ? '' : 'Social'} icon={<ThumbIcon />} {...a11yProps(2)} />
								</SettingsTabs>
							</Box>
						</Grid>
						<Grid item xs={12} md={8} overflow={'hidden'} sx={{ height: { xs: 'calc(100% - 60px)', md: '100%' } }}>
							<Box
								padding='20px'
								height='100%'
								overflow='auto'
								sx={{
									['&::-webkit-scrollbar']: {
										display: 'none'
									}
								}}>
								<TabPanel value={value} index={0}>
									<Typography fontSize={24} fontWeight={600}>
										ACCOUNT
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
											Description (optional)
										</Typography>
										<TextField
											fullWidth
											multiline
											value={bio}
											onChange={e => setBio(e.target.value)}
											placeholder='Give a description to your room'
											rows={4}></TextField>
										<Box marginTop={24}>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Show my ERC20 assets</Typography>
												<Checkbox
													checked={showErc20}
													onChange={() => {
														setShowErc20(prev => !prev)
													}}
												/>
											</Box>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Show my NFT assets</Typography>
												<Checkbox
													checked={showNft}
													onChange={() => {
														setShowNft(prev => !prev)
													}}
												/>
											</Box>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Get email notifications</Typography>
												<Checkbox
													checked={emailNotify}
													onChange={() => {
														setEmailNotify(prev => !prev)
													}}
												/>
											</Box>
										</Box>
									</FormControl>
									<PrimaryButton onClick={e => editUserInfo()} style={{ height: 60, marginTop: 10, width: '100%' }}>
										Save
									</PrimaryButton>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Typography fontSize={24} fontWeight={600} padding={24}>
										ASSETS
									</Typography>
									<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />{' '}
								</TabPanel>
								<TabPanel value={value} index={2}>
									<Typography fontSize={24} fontWeight={600} padding={24}>
										SOCIAL
									</Typography>
									<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />{' '}
								</TabPanel>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Modal>
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
