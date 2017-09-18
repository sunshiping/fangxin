import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'
import RouterComment from './Comment/RouterComment'
import RouterLogin from './Login/RouterLogin'
import RouterEntrust from './Entrust/RouterEntrust'
import RouterPersonal from './Personal/RouterPersonal'
import RouterDown from './Down/RouterDown'

const allRoutes = RouterSource.concat(
  RouterTourists,
  RouterRental,
  RouterComment,
  RouterLogin,
  RouterEntrust,
  RouterPersonal,
  RouterDown
)

export default allRoutes
