import React, { FC } from 'react'

import NewAndUsed from './UI/select/sidebar/NewAndUsed'
import Miles from './UI/select/sidebar/Miles'
import Makes from './UI/select/sidebar/Makes'
import Models from './UI/select/sidebar/Models'
import Years from './UI/select/sidebar/Years'
import Prices from './UI/select/sidebar/Prices'

interface Items {
	id: number
	name: string
	model: string
}

type SidebarProps = {
	items: Items[]
}

const Sidebar: FC<SidebarProps> = ({ items }) => {
	return (
		<div className='sidebar'>
			<div className='sidebar__selects'>
				<NewAndUsed />
				<Miles />
				<Makes />
			</div>
			<Models items={items} />
			<div className='sidebar__selects-2'>
				<Years />
				<Prices />
			</div>
		</div>
	)
}

export default Sidebar
