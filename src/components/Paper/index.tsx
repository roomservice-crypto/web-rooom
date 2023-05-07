import React from 'react'

export default function Paper({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
	return (
		<div
			className='ba ml-3 flex flex-1 items-center justify-center gap-x-4 rounded-[24px] border-2 border-[#1c1c1c]  py-6 px-6 text-center text-xl font-semibold leading-[26px] shadow-[0_4px_#141414] transition-all'
			style={style}>
			{children}
		</div>
	)
}
