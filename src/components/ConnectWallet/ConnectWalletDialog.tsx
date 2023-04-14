import { Box, Button, Typography, styled } from '@mui/material'
import { Connector } from '@web3-react/types'
import METAMASK_ICON_URL from '@/assets/img/metamaskIcon.png'

import useConnectors from '@/hooks/web3/useConnectors'
import { useCallback, useEffect, useState } from 'react'
import { WalletConnectQR } from '@/utils/WalletConnect'

const Body = styled(Box)`
	display: grid;
	gap: 12px;
	grid-template-columns: repeat(2, calc(50% - 0.5em / 2));
	grid-template-rows: 2fr 1fr;
	height: calc(100% - 2.5em);
`

const StyledButtonContents = styled(Box)`
	display: grid;
	gap: 0.75em;
	justify-items: center;
`

const StyledMainButton = styled(Button)`
	border-radius: ${({ theme }) => theme.shape.borderRadius};
	grid-column: 1 / 3;
	height: 100%;
	padding: 22px;
`

const StyledMainButtonRow = styled(Box)`
	display: flex;
	grid-template-columns: repeat(2, calc(50% - 1em / 2));
	justify-items: center;
`

const StyledSmallButton = styled(Button)`
	border-radius: ${({ theme }) => theme.shape.borderRadius * 0.75}em;
	height: 88px;
	padding: 16px;
`

const QRCodeWrapper = styled('div')`
	height: 110px;
	width: 110px;
	path {
		/* Maximize contrast: transparent in light theme, otherwise hard-coded to light theme. */
		fill: #00000000;
	}
`

function ButtonContents({ walletName, logoSrc, caption }: ButtonProps) {
	return (
		<StyledButtonContents>
			<img src={logoSrc} alt={walletName} width={26} />
			<Typography>{walletName}</Typography>
			{caption && (
				<Typography color='secondary'>
					<Typography>{caption}</Typography>
				</Typography>
			)}
		</StyledButtonContents>
	)
}

interface ButtonProps {
	walletName?: string
	logoSrc?: string
	caption?: string
	onClick?: () => void
}

function WalletConnectButton({
	walletName,
	logoSrc,
	walletConnectQR: walletConnect,
	onClick
}: ButtonProps & { walletConnectQR: WalletConnectQR }) {
	const [svg, setSvg] = useState(walletConnect.svg)
	useEffect(() => {
		if (!svg) walletConnect.activate()

		walletConnect.events.on(WalletConnectQR.SVG_AVAILABLE, setSvg)
		return () => {
			walletConnect.events.off(WalletConnectQR.SVG_AVAILABLE, setSvg)
		}
	}, [svg, walletConnect])

	return (
		<StyledMainButton color='primary' onClick={onClick}>
			<StyledMainButtonRow>
				<ButtonContents
					logoSrc={logoSrc}
					walletName={walletName}
					caption={'Scan to connect your wallet. Works with most wallets.'}
				/>
				{svg && <QRCodeWrapper dangerouslySetInnerHTML={{ __html: svg }} />}
			</StyledMainButtonRow>
		</StyledMainButton>
	)
}

function MetaMaskButton({ walletName, logoSrc, onClick }: ButtonProps) {
	return (
		<StyledSmallButton color='primary' onClick={onClick}>
			<ButtonContents logoSrc={logoSrc} walletName={walletName} />
		</StyledSmallButton>
	)
}

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
		} catch (error) {}
	}, [])

	return (
		<>
			<Box>
				<Typography>Connect wallet</Typography>
			</Box>
			<Body alignItems='stretch'>
				<WalletConnectButton
					walletName='WalletConnect'
					logoSrc={METAMASK_ICON_URL.src}
					walletConnectQR={connectors.walletConnectQR}
					onClick={() => onActivate(connectors.walletConnect)}
				/>
				<MetaMaskButton
					walletName='MetaMask'
					logoSrc={METAMASK_ICON_URL.src}
					onClick={() => onActivate(connectors.metaMask)}
				/>
			</Body>
		</>
	)
}
