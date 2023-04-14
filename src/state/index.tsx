import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import multicall from './multicall'

const reducer = combineReducers({
	[multicall.reducerPath]: multicall.reducer
})
export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: true
		})
})
