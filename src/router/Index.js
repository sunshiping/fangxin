import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'
import RouterLogin from './Login/RouterLogin'

const allRoutes = RouterSource.concat(RouterTourists, RouterRental, RouterLogin)

export default allRoutes

