import React, { useEffect, useState } from 'react'
import Modal from '.'
import AccountIcon from '@/svgs/settings/account.svg'
import BoxIcon from '@/svgs/settings/box.svg'
import ThumbIcon from '@/svgs/settings/thumb.svg'
import Pin from '@/svgs/location.svg'
import {
	Box,
	Checkbox,
	FormControl,
	Grid,
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tabs,
	TextField,
	Typography,
	styled
} from '@mui/material'
import { SettingsTab, SettingsTabs, TabPanel, a11yProps } from '../Tabs/SettingsTabs'
import { UserInfo, useEditUserInfo } from '@/hooks/useUserInfo'
import SelectLocation from './SelectLocationModal'
import { PrimaryButton } from '../Button'
import useBreakpoint from '@/hooks/useBreakpoint'
import Discord from '@/svgs/social/discord.svg'
import Telegram from '@/svgs/social/telegram.svg'
import GlobeIcon from '@/svgs/social/website.svg'
import { theme } from '@/theme'
import axios from 'axios'
import { useWeb3React } from '@web3-react/core'

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

	const [data, setData] = useState([
		['hi', 'hi2', 'hi3'],
		['hi', 'hi2', 'hi3'],
		['hi', 'hi2', 'hi3']
	])

	const [nftData, setNftData] = useState<any[]>([])
	const headerKeys = ['Token', 'Price', 'Balance']
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

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
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	const { account, chainId } = useWeb3React()

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`https://api-rs.z-crypto.ml/room/rpc/nfts?chain=${1}&accountAddress=${'0x51ba9D1d64c6278BfBDf3c073d5aFBC6c372a939'}`
				)
				const rawData = response.data.data.data
				// console.log(rawData)
				const mappedData = rawData.map(
					({ metadata: { imageURL, gatewayImageURL, collectionName, name }, tokenId }: any) => ({
						imageURL,
						gatewayImageURL,
						collectionName,
						name,
						tokenId
					})
				)
				// console.log(mappedData)
				setNftData(mappedData)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

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
									<TabPanel value={value2} index={0} label={''}>
										<TableContainer
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												flexDirection: 'column',
												height: 1,
												borderRadius: '22px'
											}}>
											<Table>
												<TableHead>
													<TableRow key={'header'}>
														{headerKeys.map(key => (
															<TableCell
																key={key}
																sx={{
																	padding: '24px',
																	backgroundColor: 'transparent',
																	color: '#00000066',
																	border: 0
																}}
																padding='none'>
																{key}
															</TableCell>
														))}
													</TableRow>
												</TableHead>
												<TableBody sx={{ backgroundColor: theme.palette.background.paper }}>
													{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, idx) => (
														<TableRow key={idx}>
															{Object.values(item).map(val => (
																<TableCell key={val} sx={{ paddingLeft: '24px', borderBottom: 'none' }}>
																	{val as string}
																</TableCell>
															))}
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</TabPanel>
									<TabPanel value={value2} index={1} label={''}>
										<Box sx={{ borderRadius: '22px', backgroundColor: theme.palette.background.paper }}>
											<ImageList
												cols={3}
												sx={{
													padding: '24px 30px 24px 30px',
													width: '100%',
													height: '100%',
													scrollbarWidth: 'thin',
													'&::-webkit-scrollbar': {
														width: 8,
														height: 8
													},
													'&::-webkit-scrollbar-thumb': {
														backgroundColor: 'rgba(0, 0, 0, 0.4)',
														borderRadius: 8
													},
													'&::-webkit-scrollbar-track': {
														backgroundColor: 'transparent'
													}
												}}>
												{nftData.map((item, index) => (
													<ImageListItem key={item.contract + item.tokenId + index}>
														<img
															src={`${item.gatewayImageURL}?w=248&fit=crop&auto=format`}
															srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
															loading='lazy'
															style={{ borderRadius: '22px', width: '144px', height: '144px' }}
														/>
														<ImageListItemBar
															title={item.collectionName + ' - ' + item.name}
															subtitle={<span># {item.tokenId}</span>}
															position='below'
														/>
													</ImageListItem>
												))}
											</ImageList>
										</Box>
									</TabPanel>
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
