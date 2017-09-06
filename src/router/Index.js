import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'

const allRoutes = RouterSource.concat(RouterTourists, RouterRental)

export default allRoutes

