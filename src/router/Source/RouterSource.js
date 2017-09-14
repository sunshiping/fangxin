import SourceList from '../../components/Source/SourceList.vue'
import SourceInfo from '../../components/Source/SourceInfo.vue'
import SourceTest from '../../components/Source/SourceTest.vue'
import Test from '../../components/Test.vue'

export default [{
  path: '/sourceList',
  name: 'sourceList',
  component: SourceList
},
{
  path: '/sourceInfo',
  name: 'sourceInfo',
  component: SourceInfo
},
{
  path: '/sourceTest',
  name: '房源列表筛选弹框测试',
  component: SourceTest
},
{
  path: '/test',
  name: '测试',
  component: Test
}]
