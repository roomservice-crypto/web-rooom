import { useCallback, useEffect, useMemo, useState } from 'react'
import { Axios, axiosInstance } from '@/utils/axios'
import { API_TOKEN, getCookie, setCookie } from '@/utils/cookies'
import { useWeb3Instance } from './useWeb3Instance'
import { useWeb3React } from '@web3-react/core'

interface SignInResponse {
  code: number,
  data: "string",
  msg: "string"
}

export function useSignIn() {
  // const [random, setRandom] = useState(Math.random())
  const { account } = useWeb3React()
  const web3 = useWeb3Instance()

  const signIn = useCallback(async () => {
    if (!web3 || !account) return

    const message = 'Sign in to Room Service'
    try{
    const signature = await web3.eth.personal.sign(message, account, '')
    const res = await Axios.post<SignInResponse>('/user/signIn', {message,account,signature})

        if (res?.status === 200) {
          setCookie(API_TOKEN + account, res.data.data)
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data}`
        } else {
          throw Error('Sign in error')
        }
    } catch (e) {
      console.error(e)
  }
    
  }, [account, web3])


  const token = useMemo(() => {
    // setTimeout(() => setRandom(Math.random()), 2000)
    if(!account) return null
    const storedToken = getCookie(API_TOKEN + account)
    if (storedToken) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
      return storedToken
    } else {
      signIn()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])


  return {token,signIn}
}


export function useSignInToken() {
  const { account } = useWeb3React()

  const token = useMemo(() => {
 
    if(!account) return null
    const storedToken = getCookie(API_TOKEN + account)
    if (storedToken) {
      return storedToken
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {token}
}