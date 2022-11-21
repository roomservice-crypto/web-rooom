import React from 'react'
import { Transition } from '@headlessui/react'

export default function TransitionBadge(props: React.PropsWithChildren & { show: boolean; appear?: boolean }) {
	return (
		<Transition
			show={props.show}
			appear={props.appear}
			enter='transition-transform duration-600 ease-in'
			enterFrom='opacity-0 -translate-x-12'
			enterTo='opacity-100'
			leave='transition-all duration-1000 ease-out translate-x-0'
			leaveFrom='opacity-100'
			leaveTo='opacity-0 -translate-x-12'>
			{props.children}
		</Transition>
	)
}
