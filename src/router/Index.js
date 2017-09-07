import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'

import RouterComment from './Comment/Comment'
import RouterLogin from './Login/RouterLogin'
const allRoutes = RouterSource.concat(RouterTourists, RouterRental, RouterComment, RouterLogin)

export default allRoutes
