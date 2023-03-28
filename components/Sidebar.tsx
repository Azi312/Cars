import { FC } from 'react'

import Makes from './UI/sidebar/Makes'
import Miles from './UI/sidebar/Miles'
import Models from './UI/sidebar/Models'
import NewAndUsed from './UI/sidebar/NewAndUsed'
import Prices from './UI/sidebar/Prices'
import Years from './UI/sidebar/Years'

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
