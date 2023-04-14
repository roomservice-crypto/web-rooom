import { Button, Typography, styled } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { useState } from 'react'

const AccountButton = styled(Button)<{ hidden?: boolean }>`
	filter: none;
	visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`

export default function ConnectedWalletChip({ disabled, account }: { disabled?: boolean; account?: string }) {
	const [hover, setHover] = useState(false)
	const { connector } = useWeb3React()

	return (
		<>
			<AccountButton
				hidden={disabled}
				onClick={() => (connector.deactivate ? connector.deactivate() : connector.resetState())}
				color='secondary'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				data-testid='account'>
				{hover ? (
					<Typography>Disconnect wallet</Typography>
				) : (
					<Typography>
						{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}
					</Typography>
				)}
			</AccountButton>
		</>
	)
}
