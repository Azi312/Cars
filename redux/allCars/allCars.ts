import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Items, Params } from './types'

export const allCars = createApi({
	reducerPath: 'allCars',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: build => ({
		getItems: build.query<Items[], Params>({
			query: ({
				names,
				models,
				mileage,
				conditions,
				oldestYear,
				newestYear,
				lowestPrice,
				highestPrice,
				sortById,
				order,
			}) => ({
				url: `/items?${conditions}${names}${models}${mileage}${oldestYear}${newestYear}${lowestPrice}${highestPrice}&_sort=${sortById}&_order=${order}`,
			}),
		}),
	}),
})

export const { useGetItemsQuery } = allCars
