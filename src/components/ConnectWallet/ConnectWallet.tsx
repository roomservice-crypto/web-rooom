import { useCallback, useState } from 'react'

import { ConnectWalletDialog } from './ConnectWalletDialog'
import ModalWithStepper from '../Modal/ModalWithStepper'

interface ConnectWalletProps {
	disabled?: boolean
}

export default function ConnectWallet({ disabled }: ConnectWalletProps) {
	// Opens a dialog that initiates own wallet connection flow
	const [open, setOpen] = useState(false)
	const onClose = () => setOpen(false)

	const onClick = useCallback(async () => {
		setOpen(true)
	}, [])

	return (
		<>
			<button
				onClick={onClick}
				data-testid='connect-wallet'
				className='h-[48px] w-[150px] rounded-3xl bg-dark px-4 py-2 text-sm font-[500] text-white disabled:bg-black disabled:bg-opacity-5 disabled:text-black disabled:text-opacity-10'
				style={{ visibility: disabled ? 'hidden' : 'visible' }}>
				Connect Wallet
			</button>

			<ModalWithStepper isOpen={open} onDismiss={onClose} activeStep={0}>
				<ConnectWalletDialog />
			</ModalWithStepper>
		</>
	)
}
