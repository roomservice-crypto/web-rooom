import React, { useEffect, useState } from 'react'
import Modal from '.'
import AccountIcon from '@/svgs/settings/account.svg'
import BoxIcon from '@/svgs/settings/box.svg'
import ThumbIcon from '@/svgs/settings/thumb.svg'
import Pin from '@/svgs/location.svg'
import { Box, Checkbox, FormControl, Grid, IconButton, Tab, Tabs, TextField, Typography, styled } from '@mui/material'
import { SettingsTab, SettingsTabs, TabPanel, a11yProps } from '../Tabs/SettingsTabs'
import { UserInfo, useEditUserInfo } from '@/hooks/useUserInfo'
import SelectLocation from './SelectLocationModal'
import { PrimaryButton } from '../Button'
import useBreakpoint from '@/hooks/useBreakpoint'
import Discord from '@/svgs/social/discord.svg'
import Telegram from '@/svgs/social/telegram.svg'
import GlobeIcon from '@/svgs/social/website.svg'

const StyledTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: '2px solid black'
		},
		'&:hover fieldset': {
			borderColor: '#00000D'
		},
		'&.Mui-focused fieldset': {
			borderColor: '#FAE76C'
		}
	}
})

export default function RoomSettingModal({
	isOpen,
	onDismiss,
	setRefresh,
	info
}: {
	isOpen: boolean
	onDismiss: () => void
	setRefresh: () => void
	info: UserInfo | undefined
}) {
	const [value, setValue] = useState(0)
	const [value2, setValue2] = useState(0)

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
		setEmailNotify,
		websiteUrl,
		setWebsiteUrl,
		discordUrl,
		setDiscordUrl,
		telegramUrl,
		setTelegramUrl
	} = useEditUserInfo(info, setRefresh)

	const isDownMd = useBreakpoint('md')

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue)
	}

	const handleChange2 = (event: any, newValue: number) => {
		setValue2(newValue)
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
						justifyContent: 'flex-start'
					}}>
					<Grid container height='100%' overflow={'hidden'}>
						<Grid item xs={12} md={4} sx={{ height: { xs: '80px', md: 'auto' } }}>
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
						<Grid item xs={12} md={8} overflow={'hidden'} sx={{ height: { xs: 'calc(100% - 80px)', md: '100%' } }}>
							<Box
								padding='20px'
								height='100%'
								overflow='auto'
								sx={{
									['&::-webkit-scrollbar']: {
										display: 'none'
									}
								}}>
								<TabPanel value={value} index={0} label='ACCOUNT' divider>
									<FormControl fullWidth>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8}>
											Room name
										</Typography>
										<StyledTextField
											value={roomName}
											onChange={e => setRoomName(e.target.value)}
											variant='outlined'
											fullWidth
											placeholder='The name you want to give to your room'></StyledTextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Select room address
										</Typography>
										<StyledTextField
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
											placeholder='Select a location for your room'></StyledTextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Description (optional)
										</Typography>
										<StyledTextField
											fullWidth
											multiline
											value={bio}
											onChange={e => setBio(e.target.value)}
											placeholder='Give a description to your room'
											rows={4}></StyledTextField>
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
									<PrimaryButton
										onClick={() => {
											editUserInfo()
										}}
										style={{ height: 60, marginTop: 10, width: '100%' }}>
										Save
									</PrimaryButton>
								</TabPanel>
								<TabPanel value={value} index={1} label='ASSETS'>
									<Tabs
										value={value2}
										onChange={handleChange2}
										sx={{
											margin: '20px 0px 28px',
											'& .MuiTabs-indicator': {
												backgroundColor: 'black'
											},
											borderBottom: '2px solid #0000001A'
										}}>
										<Tab
											label='Wallet'
											sx={{
												'&.Mui-selected': {
													color: 'black'
												},
												textTransform: 'none'
											}}
										/>
										<Tab
											label='NFT'
											sx={{
												'&.Mui-selected': {
													color: 'black'
												},
												textTransform: 'none'
											}}
										/>
									</Tabs>
								</TabPanel>
								<TabPanel value={value} index={2} label={'SOCIAL'}>
									<FormControl fullWidth>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8}>
											Website
										</Typography>
										<StyledTextField
											value={websiteUrl}
											onChange={e => setWebsiteUrl(e.target.value)}
											variant='outlined'
											fullWidth
											placeholder='Enter Website URL'
											InputProps={{
												endAdornment: <GlobeIcon />
											}}></StyledTextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Twitter
										</Typography>
										{/* <StyledTextField
											disabled
											value={'Bound or not'}
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
											placeholder='Select a location for your room'></StyledTextField> */}
										<PrimaryButton style={{ maxHeight: '56px' }}>Bind</PrimaryButton>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Discord
										</Typography>
										<StyledTextField
											value={discordUrl}
											onChange={e => setDiscordUrl(e.target.value)}
											variant='outlined'
											fullWidth
											placeholder='Enter Discord URL'
											InputProps={{
												endAdornment: <Discord />
											}}></StyledTextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Telegram
										</Typography>
										<StyledTextField
											value={telegramUrl}
											onChange={e => setTelegramUrl(e.target.value)}
											variant='outlined'
											fullWidth
											placeholder='Enter Telegram URL'
											InputProps={{
												endAdornment: <Telegram />
											}}></StyledTextField>
									</FormControl>
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
