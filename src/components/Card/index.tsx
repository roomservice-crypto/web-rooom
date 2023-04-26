import React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className='ml-[10%] h-[500px] w-[80%] max-w-[1200px] cursor-pointer overflow-hidden rounded-[28px] border-[12px] border-[#FAE76C] bg-light bg-white shadow-[0_0_0_2px_#000000] transition-all'>
			<div className='flex h-full w-full rounded-[20px] border-2 border-dark bg-white p-10'>{children}</div>
		</div>
	)
}
