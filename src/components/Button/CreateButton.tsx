import { UserInfo } from '@/hooks/useUserInfo'
import CreateModal from '../Modal/createModal'
import { useCallback, useEffect, useState } from 'react'
import Wallet from '../ConnectWallet'

export default function CreateButton({
	info,
	refreshCb,
	needCreate
}: {
	info: UserInfo | undefined
	refreshCb: () => void
	needCreate?: boolean
}) {
	const [createOpen, setCreateOpen] = useState(needCreate)

	useEffect(() => {
		setCreateOpen(needCreate)
	}, [needCreate])

	return (
		<>
			<Wallet info={info} />
			<CreateModal
				info={info}
				refreshCb={refreshCb}
				isOpen={!!createOpen}
				onDismiss={() => {
					setCreateOpen(false)
				}}
			/>
		</>
	)
}
