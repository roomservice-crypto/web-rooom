import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import ChevronUp from '@/svgs/chevron-up.svg'

export default function ToTop() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handler = () => {
			// console.log('[window pageYOffset]', window.pageYOffset)

			if (window.pageYOffset > 720) setShow(true)
			else setShow(false)
		}

		window.addEventListener('scroll', handler)

		return () => window.removeEventListener('scroll', handler)
	}, [])

	return (
		<Transition
			as={React.Fragment}
			show={show}
			appear
			enterFrom={clsx('opacity-0 scale-75')}
			enterTo={clsx('opacity-100 scale-100')}
			leaveFrom={clsx('opacity-100')}
			leaveTo={clsx('opacity-0')}>
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className='fixed bottom-8 right-8 rounded-full border border-transparent bg-white p-4 shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] transition-all hover:border-dark hover:bg-[#f0f0f0]'>
				<ChevronUp />
			</button>
		</Transition>
	)
}
