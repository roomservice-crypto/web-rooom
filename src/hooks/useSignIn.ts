import { useCallback, useMemo} from 'react'
import { Axios, axiosInstance } from '@/utils/axios'
import { API_TOKEN, getCookie, setCookie } from '@/utils/cookies'
import { useWeb3React } from '@web3-react/core'

interface SignInResponse {
  code: number,
  data: "string",
  msg: "string"
}

export function useSignIn(cb?:()=>void) {
  // const [random, setRandom] = useState(Math.random())
  const { account,provider ,connector} = useWeb3React()

  const signIn = useCallback(async () => {
    if (!account) return

    const message = 'Sign in to World Room'
    try{
    // const signature = await web3.eth.personal.sign(message, account, '')
    const signature=await provider?.send('personal_sign', [message, account, message],
    )
    const res = await Axios.post<SignInResponse>('/user/signIn', {message,account,signature})
      if (res?.status === 200) {
        setCookie(API_TOKEN + account, res.data.data)
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data}`
          cb&&cb()
      } else {
        throw Error('Sign in error')
      }
    } catch (e) {
      (connector.deactivate ? connector.deactivate() : connector.resetState())
      console.error(e)
  }
    
  }, [account, cb, connector, provider])


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
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
      return storedToken
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {token}
}