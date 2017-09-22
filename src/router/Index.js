import RouterSource1 from './Source1/RouterSource'
import RouterSource from './Source/RouterSource'
import RouterTourists from './Tourists/RouterTourists'
import RouterRental from './Rental/RouterRental'
import RouterComment from './Comment/RouterComment'
import RouterLogin from './Login/RouterLogin'
import RouterMine from './Mine/RouterMine'
import RouterDown from './Down/RouterDown'
import RouterHome from './Home/RouterHome'
import RouterSecond from './Second/RouterSecond'

const allRoutes = RouterSource.concat(
  RouterSource1,
  RouterTourists,
  RouterRental,
  RouterComment,
  RouterLogin,
  RouterMine,
  RouterDown,
  RouterHome,
  RouterSecond
)

export default allRoutes
