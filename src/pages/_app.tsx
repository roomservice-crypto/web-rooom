import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/state'
import { Provider as Web3Provider } from '@/hooks/web3'
import { MulticallUpdater } from '@/state/multicall'
import { BlockNumberProvider } from '@/hooks/useBlockNumber'
import { ModalProvider } from '@/context/ModalContext'
import { ThemeProvider } from '@/theme'
import HeaderBar from '@/components/map/HeaderBar'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<ReduxProvider store={store}>
				<Web3Provider>
					<BlockNumberProvider>
						<MulticallUpdater />
						<ModalProvider>
							<div>
								<Toaster position='bottom-center' />
							</div>
							<Component {...pageProps} />
						</ModalProvider>
					</BlockNumberProvider>
				</Web3Provider>
			</ReduxProvider>
		</ThemeProvider>
	)
}

export default App
