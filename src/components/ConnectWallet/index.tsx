import { useWeb3React } from '@web3-react/core'

import ConnectedWalletChip from './ConnectedWalletChip'
import ConnectWallet from './ConnectWallet'
import { UserInfo } from '@/hooks/useUserInfo'

interface WalletProps {
	disabled?: boolean
	info?: UserInfo | undefined
}

export default function Wallet({ disabled, info }: WalletProps) {
	const { account, isActive } = useWeb3React()
	return isActive && Boolean(account) ? <ConnectedWalletChip info={info} /> : <ConnectWallet disabled={disabled} />
}
