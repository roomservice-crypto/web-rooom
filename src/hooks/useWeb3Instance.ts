import Web3 from 'web3'
import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

export function useWeb3Instance() {
  const { isActive, provider } = useWeb3React()
  const [web3jsInstance, setWeb3jsInstance] = useState<Web3 | null>(null)

  useEffect(() => {
    if (provider) {
      // const instance = new Web3(
      //   Web3.givenProvider
      //   ||
      //   (provider.provider)
      // )
      // setWeb3jsInstance(instance)
    }
  }, [isActive, provider])

  return web3jsInstance
}
