import React from 'react'
import { Transition } from '@headlessui/react'

export default function TransitionCard(props: React.PropsWithChildren & { show: boolean; appear?: boolean }) {
	return (
		<Transition
			show={props.show}
			appear={props.appear}
			enter='transition-all duration-600 ease-in'
			enterFrom='opacity-0 translate-x-12'
			enterTo='opacity-100'
			leave='transition-all duration-300 ease-out'
			leaveFrom='opacity-100'
			leaveTo='opacity-0 -translate-x-12'>
			{props.children}
		</Transition>
	)
}
