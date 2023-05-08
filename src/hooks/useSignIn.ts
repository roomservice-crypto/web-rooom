import { useCallback, useEffect, useMemo, useState } from 'react'
import { Axios, axiosInstance } from '@/utils/axios'
import { API_TOKEN, getCookie, setCookie } from '@/utils/cookies'
import { useWeb3Instance } from './useWeb3Instance'
import { useWeb3React } from '@web3-react/core'

interface SignInResponse {
  bio: string
  id: string
  token: string
  username: string
}

export function useSignIn() {
  const { account } = useWeb3React()
  const web3 = useWeb3Instance()

  const sign = useCallback(async () => {
    if (!web3 || !account) return

    const message = 'Sign in to Settlement'
    const signature = await web3.eth.personal.sign(message, account, '')
    const formData = new FormData()
    formData.append('message', message)
    formData.append('publicAddress', account)
    formData.append('signature', signature)

    return Axios.post<SignInResponse>('/accountSign', formData)
  }, [account, web3])

  useEffect(() => {
    if (!account) return
    if (getCookie(API_TOKEN + account)) {
      axiosInstance.defaults.headers.common['token'] = getCookie(API_TOKEN + account)
      return
    }
    sign()
      .then(r => {
        if (r?.data.code === 200) {
          setCookie(API_TOKEN + account, r.data.data.token)
          axiosInstance.defaults.headers.common['token'] = r.data.data.token
        } else {
          throw Error('Sign in error')
        }
      })
      .catch(e => {
        console.error(e)
      })
  }, [account, sign])

  return
}

export function useSign() {
  const { account } = useActiveWeb3React()
  const web3 = useWeb3Instance()
  const [random, setRandom] = useState(Math.random())

  const sign = useCallback(async () => {
    if (!web3 || !account) return

    const message = 'Sign in to Settlement'
    const signature = await web3.eth.personal.sign(message, account, '')
    const formData = new FormData()
    formData.append('message', message)
    formData.append('publicAddress', account)
    formData.append('signature', signature)

    Axios.post<SignInResponse>('/accountSign', formData)
      .then(r => {
        if (r?.data.code === 200) {
          setCookie(API_TOKEN + account, r.data.data.token)
          axiosInstance.defaults.headers.common['token'] = r.data.data.token
        } else {
          throw Error('Sign in error')
        }
      })
      .catch(e => {
        console.error(e)
      })
  }, [account, web3])

  const token = useMemo(() => {
    setTimeout(() => setRandom(Math.random()), 2000)
    return getCookie(API_TOKEN + account)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, random])

  return {
    sign,
    token
  }
}
