import {
	selectSearchSlice,
	setMaxYear,
	setMinYear,
} from '@/redux/slices/searchSlice'
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon'
import { useDispatch, useSelector } from 'react-redux'

const years = [2023, 2022, 2021, 2020, 2019]

const Years = () => {
	const { minYear, maxYear } = useSelector(selectSearchSlice)
	const dispatch = useDispatch()
	return (
		<>
			<div className='select-block'>
				<ChevronDownIcon className='select-block__icon' />
				<select
					id='minYear'
					value={minYear}
					onChange={e => dispatch(setMinYear(e.target.value))}
				>
					<option value={''}>Newest</option>

					{years.map(value => (
						<option value={value}>{value}</option>
					))}
				</select>
				<label htmlFor='minYear'>Min year</label>
			</div>
			<div className='select-block'>
				<ChevronDownIcon className='select-block__icon' />
				<select
					id='maxYear'
					value={maxYear}
					onChange={e => dispatch(setMaxYear(e.target.value))}
				>
					<option value={''}>Oldest</option>
					{years.map(value => (
						<option value={value}>{value}</option>
					))}
				</select>
				<label htmlFor='maxYear'>Max year</label>
			</div>
		</>
	)
}

export default Years
