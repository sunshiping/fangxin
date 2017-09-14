import SourceTest from '../../components/Source/SourceTest.vue'
import SourceList from '../../components/Source/SourceList.vue'
import Test from '../../components/Test.vue'
import SourceInfo from '../../components/Source/SourceInfo.vue'
import PersonalInfo from '../../components/Personal/PersonalInfo.vue'

export default [{
  path: '/sourceTest',
  name: '房源列表筛选弹框测试',
  component: SourceTest
},
{
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
  path: '/personalInfo',
  name: 'PersonalInfo',
  component: PersonalInfo
},
{
  path: '/test',
  name: 'test',
  component: Test
}]
