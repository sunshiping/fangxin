import SourceList from '../../components/Source/SourceList.vue'
import RentalList from '../../components/Source/RentalList.vue'
import SourceInfo from '../../components/Source/SourceInfo.vue'
import SecondhandList from '../../components/Source/SecondhandList.vue'
import SourceTest from '../../components/Source/SourceTest.vue'
import Test from '../../components/Test.vue'
import MapTest from '../../components/Comment/MapComp.vue'
import Sell from '../../components/Source/Sell.vue'
import Housing from '../../components/Source/Housing.vue'
import FindHouse from '../../components/Source/FindHouse.vue'

export default [{
  path: '/sourceList',
  name: 'sourceList',
  component: SourceList
},
{
  path: '/rentalList',
  name: 'rentalList',
  component: RentalList
},
{
  path: '/secondhandList',
  name: 'SecondhandList',
  component: SecondhandList
},
{
  path: '/sourceInfo',
  name: 'sourceInfo',
  component: SourceInfo
},
{
  path: '/sell',
  name: 'sell',
  component: Sell
},
{
  path: '/sourceTest',
  name: '房源列表筛选弹框测试',
  component: SourceTest
},
{
  path: '/map',
  name: '测试百度地图2',
  component: MapTest
},
{
  path: '/test',
  name: 'test',
  component: Test
},
{
  path: '/housing',
  name: '登记房源',
  component: Housing
},
{
  path: '/findhouse',
  name: '委托找房',
  component: FindHouse
}]
