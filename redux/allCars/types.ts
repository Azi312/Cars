export interface Items {
	id: number
	name: string
	model: string
	color: string
	interiorColor: string
	location: string
	condition: string
	year: number
	price: number
	mileage: number
	fuelType: string
	engineCapacity: number
	transmission: string
	steeringWheel: string
	images: string[]
}

export interface Params {
	names: string
	models: string
	mileage: string
	conditions: string
	oldestYear: string
	newestYear: string
	lowestPrice: string
	highestPrice: string
	sortById: string
	order: string
}
