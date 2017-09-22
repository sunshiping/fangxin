import FindHouse from '../../components/FindRoom/FindHouse.vue'
import HouseType from '../../components/FindRoom/RentRoom/HouseType.vue'
import RentAreaPrice from '../../components/FindRoom/RentRoom/RentAreaPrice.vue'
import RentOther from '../../components/FindRoom/RentRoom/RentOther.vue'
import RentPersonal from '../../components/FindRoom/RentRoom/RentPersonal.vue'
import BuyAreaPrice from '../../components/FindRoom/BuyRoom/BuyAreaPrice.vue'
import BuyOther from '../../components/FindRoom/BuyRoom/BuyOther.vue'

export default [{
  path: '/findhouse',
  name: '委托找房',
  component: FindHouse
},
{
  path: '/houseType',
  name: '户型',
  component: HouseType
},
{
  path: '/rentareaprice',
  name: '求租/面积及售价',
  component: RentAreaPrice
},
{
  path: '/rentother',
  name: '其他要求',
  component: RentOther
},
{
  path: '/rentpersonal',
  name: '求租/个人信息',
  component: RentPersonal
},
{
  path: '/buyareaprice',
  name: '求购/面积及售价',
  component: BuyAreaPrice
},
{
  path: '/buyother',
  name: '求购/用途及其他',
  component: BuyOther
}
]
