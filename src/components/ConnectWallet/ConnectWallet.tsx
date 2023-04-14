import { useCallback, useState } from 'react'

import { ConnectWalletDialog } from './ConnectWalletDialog'
import { Box, Button, Typography, styled } from '@mui/material'
import { useConditionalHandler } from '@/hooks/useConditionalHandler'
import Modal from '../Modal'

interface ConnectWalletProps {
	disabled?: boolean
}

const WalletButton = styled(Button)<{ hidden?: boolean }>`
	filter: none;
	visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`

export default function ConnectWallet({ disabled }: ConnectWalletProps) {
	// Opens a dialog that initiates own wallet connection flow
	const [open, setOpen] = useState(false)
	const onClose = () => setOpen(false)

	const onConnectWalletClick = useConditionalHandler(() => {})
	const onClick = useCallback(async () => {
		setOpen(await onConnectWalletClick())
	}, [onConnectWalletClick])

	return (
		<>
			<WalletButton hidden={disabled} onClick={onClick} color='secondary' data-testid='connect-wallet'>
				<Box display='flex'>
					<Typography>Connect wallet</Typography>
				</Box>
			</WalletButton>

			<Modal customIsOpen={open} customOnDismiss={onClose}>
				<ConnectWalletDialog />
			</Modal>
		</>
	)
}
