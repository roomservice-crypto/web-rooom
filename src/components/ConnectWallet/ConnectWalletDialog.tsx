import { Box, Card, Grid, Typography, Divider } from '@mui/material'
import { Connector } from '@web3-react/types'
import MetamaskLogo from '@/assets/img/metamask.svg'
import WalletConnectLogo from '@/assets/img/walletconnect.svg'
import CoinbaseLogo from '@/assets/img/coinbasewallet.svg'
import useConnectors from '@/hooks/web3/useConnectors'
import { useCallback } from 'react'
// import { WalletConnectQR } from '@/utils/WalletConnect'

// const StyledButtonContents = styled(Box)`
// 	display: grid;
// 	gap: 0.75em;
// 	justify-items: center;
// `

// const StyledMainButton = styled(Button)`
// 	border-radius: ${({ theme }) => theme.shape.borderRadius};
// 	grid-column: 1 / 3;
// 	height: 100%;
// 	padding: 22px;
// `

// const StyledMainButtonRow = styled(Box)`
// 	display: flex;
// 	grid-template-columns: repeat(2, calc(50% - 1em / 2));
// 	justify-items: center;
// `

// const StyledSmallButton = styled(Button)`
// 	border-radius: ${({ theme }) => theme.shape.borderRadius * 0.75}em;
// 	height: 88px;
// 	padding: 16px;
// `

// const QRCodeWrapper = styled('div')`
// 	height: 110px;
// 	width: 110px;
// 	path {
// 		/* Maximize contrast: transparent in light theme, otherwise hard-coded to light theme. */
// 		fill: #00000000;
// 	}
// `

// function ButtonContents({ walletName, logoSrc, caption }: ButtonProps) {
// 	return (
// 		<StyledButtonContents>
// 			<img src={logoSrc} alt={walletName} width={26} />
// 			<Typography>{walletName}</Typography>
// 			{caption && (
// 				<Typography color='secondary'>
// 					<Typography>{caption}</Typography>
// 				</Typography>
// 			)}
// 		</StyledButtonContents>
// 	)
// }

// interface ButtonProps {
// 	walletName?: string
// 	logoSrc?: string
// 	caption?: string
// 	onClick?: () => void
// }

// function WalletConnectButton({
// 	walletName,
// 	logoSrc,
// 	walletConnectQR: walletConnect,
// 	onClick
// }: ButtonProps & { walletConnectQR: WalletConnectQR }) {
// 	const [svg, setSvg] = useState(walletConnect.svg)
// 	useEffect(() => {
// 		if (!svg) walletConnect.activate()

// 		walletConnect.events.on(WalletConnectQR.SVG_AVAILABLE, setSvg)
// 		return () => {
// 			walletConnect.events.off(WalletConnectQR.SVG_AVAILABLE, setSvg)
// 		}
// 	}, [svg, walletConnect])

// 	return (
// 		<StyledMainButton color='primary' onClick={onClick}>
// 			<StyledMainButtonRow>
// 				<ButtonContents
// 					logoSrc={logoSrc}
// 					walletName={walletName}
// 					caption={'Scan to connect your wallet. Works with most wallets.'}
// 				/>
// 				{svg && <QRCodeWrapper dangerouslySetInnerHTML={{ __html: svg }} />}
// 			</StyledMainButtonRow>
// 		</StyledMainButton>
// 	)
// }

// function NoWalletButton() {
// 	return (
// 		<StyledSmallButton color='primary' onClick={() => window.open(NO_WALLET_HELP_CENTER_URL)}>
// 			<StyledNoWalletText>
// 				<Typography>{`I don't have a wallet`}</Typography>
// 			</StyledNoWalletText>
// 		</StyledSmallButton>
// 	)
// }

export function ConnectWalletDialog() {
	const connectors = useConnectors()
	const onActivate = useCallback(async (connector: Connector) => {
		try {
			await connector.activate()
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<Box paddingTop={8}>
			<Typography fontSize={24} fontWeight={600} padding={24}>
				CONNECT TO A WALLET
			</Typography>
			<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />
			<Grid container spacing={12} padding={24}>
				<Grid item xs={4}>
					<Card
						onClick={() => {
							onActivate(connectors.metaMask)

							// handleNext()
						}}
						sx={{
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'center',
							height: '160px',
							width: '100%',
							borderRadius: '24px',
							border: '2px solid'
						}}>
						<MetamaskLogo />
						<Typography fontSize={14} fontWeight={500}>
							MetaMask
						</Typography>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card
						sx={{
							opacity: 0.5,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'center',
							height: '160px',
							width: '100%',
							borderRadius: '24px',
							border: '2px solid'
						}}>
						{/* <WalletConnectButton
					walletName='WalletConnect'
					logoSrc={METAMASK_ICON_URL.src}
					walletConnectQR={connectors.walletConnectQR}
					onClick={() => onActivate(connectors.walletConnect)}
				/> */}
						<WalletConnectLogo />
						<Typography fontSize={14} fontWeight={500}>
							Wallet Connect
						</Typography>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'center',
							height: '160px',
							width: '100%',
							borderRadius: '24px',
							border: '2px solid',
							opacity: 0.5
						}}>
						<CoinbaseLogo />
						<Typography fontSize={14} fontWeight={500}>
							Coinbase Wallet
						</Typography>
					</Card>
				</Grid>
			</Grid>
		</Box>
	)
}
