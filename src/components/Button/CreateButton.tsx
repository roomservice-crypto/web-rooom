import { Box } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'

import { PrimaryButton } from '.'
import Logout from '@/svgs/logout.svg'
import { ALL_SUPPORTED_CHAIN_IDS } from '@/constants/chains'
import ETH from '@/svgs/web3/eth.svg'
import { Error } from '@mui/icons-material'
import useModal from '@/hooks/useModal'
import Modal from '../Modal'
import { SupportedChainId } from '@/constants/chains'
import useBreakpoint from '@/hooks/useBreakpoint'
import { UserInfo } from '@/hooks/useUserInfo'

export default function CreateButton({ info }: { info: UserInfo | undefined }) {
	const router = useRouter()
	const { account, chainId, provider, connector } = useWeb3React()

	const { showModal, hideModal } = useModal()

	const isDownMd = useBreakpoint('md')

	return (
		<>
			{account ? (
				<Box display={'flex'} gap={10} alignItems={'center'}>
					{chainId && ALL_SUPPORTED_CHAIN_IDS.includes(chainId) ? (
						<button
							className='mt-1 flex h-[40px] w-[40px] items-center justify-center rounded-3xl border-2 border-[#1c1c1c] font-[500] shadow-[0_2px_#141414]'
							disabled>
							<ETH />
						</button>
					) : (
						<button
							className='mt-1 flex h-[40px] w-[40px] items-center justify-center rounded-3xl border-2 border-[#1c1c1c] bg-[red] shadow-[0_2px_#141414] hover:bg-white'
							onClick={() => {
								showModal(
									<Modal>
										<Box padding='60px' display='flex' alignItems={'center'}>
											<PrimaryButton
												bgClass='bg-[transparent]'
												onClick={() => {
													provider?.send('wallet_switchEthereumChain', [
														{ chainId: '0x' + SupportedChainId.SEPOLIA.toString(16) },
														account
													])
													hideModal()
												}}>
												<ETH />
												Switch to Sepolia
											</PrimaryButton>
										</Box>
									</Modal>
								)
							}}>
							<Error />
						</button>
					)}
					<PrimaryButton
						onClick={() => (connector.deactivate ? connector.deactivate() : connector.resetState())}
						shadowClass='shadow-[0_2px_#141414]'
						style={{
							display: 'flex',
							gap: 10,
							alignItems: 'center',
							borderRadius: '50px',
							fontWeight: 300,
							fontSize: 14,
							padding: isDownMd ? '10px 0' : '20px 10px',
							...(isDownMd
								? {
										width: 40,
										height: 40,
										marginTop: 4
								  }
								: {
										height: '30px'
								  })
						}}
						bgClass={'bg-[transparent]'}>
						{!isDownMd && (
							<>
								{!!info?.avatar && (
									<Box
										height='32px'
										width='32px'
										sx={{ borderRadius: 5, background: `#cccccc url(${info.avatar})` }}></Box>
								)}
								{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}
							</>
						)}
						<Logout className='ml-2' />
					</PrimaryButton>
				</Box>
			) : (
				<button
					onClick={() => router.push('/rooms/create')}
					className='h-[48px] w-[150px] rounded-3xl bg-dark px-4 py-2 text-sm font-[500] text-white disabled:bg-black disabled:bg-opacity-5 disabled:text-black disabled:text-opacity-10'>
					Connect wallet
				</button>
			)}
		</>
	)
}
