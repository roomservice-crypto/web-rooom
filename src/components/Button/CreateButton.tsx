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

export default function CreateButton() {
	const router = useRouter()
	const { account, chainId, provider } = useWeb3React()

	const { showModal, hideModal } = useModal()

	return (
		<>
			{account ? (
				<Box display={'flex'} gap={10} alignItems={'center'}>
					{chainId && ALL_SUPPORTED_CHAIN_IDS.includes(chainId) ? (
						<button
							className='mt-1 flex h-[40px] w-[40px] items-center justify-center rounded-3xl border-2 border-[#1c1c1c] font-[500] shadow-[0_2px_#141414] '
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
						shadowClass='shadow-[0_2px_#141414]'
						style={{
							display: 'flex',
							gap: 10,
							alignItems: 'center',
							height: '30px',
							borderRadius: '50px',
							fontWeight: 300,
							fontSize: 14,
							padding: '20px 10px'
						}}
						bgClass={'bg-[transparent]'}>
						<Box height='32px' width='32px' sx={{ background: '#cccccc', borderRadius: 5 }}></Box>
						{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}
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
