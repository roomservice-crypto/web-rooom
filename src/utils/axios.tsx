import axios, { AxiosResponse, AxiosPromise } from 'axios'

export const BASE_URL = 'https://api-rs.23crypto.club/room'

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: { 'content-type': 'application/json', accept: 'application/json' }
})

export const Axios = {
	get<T = any>(url: string, params: { [key: string]: any } = {}): AxiosPromise<T> {
		return axiosInstance.get(url, { params })
	},
	post<T = any>(url: string, data: { [key: string]: any }, params = {}, config: any = {}): AxiosPromise<T> {
		return axiosInstance.post(url, data, { params, ...config })
	}
}

export type AxiosResponseType<T = any> = AxiosResponse<T>

export interface ResponseType<T = any> {
	msg: string
	code: number
	data: T
}
