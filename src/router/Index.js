import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'
import RouterComment from './Comment/Comment'
const allRoutes = RouterSource.concat(RouterTourists, RouterRental, RouterComment)

export default allRoutes
