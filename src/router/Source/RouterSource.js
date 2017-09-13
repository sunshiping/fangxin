import Source from './../../components/Source/Source.vue'
import SourceList from './../../components/SourceList.vue'
import Test from '../../components/Test.vue'
import List from '../../components/common/ListHeader.vue'
import SourceInfo from '../../components/SourceInfo.vue'
import PersonalInfo from '../../components/PersonalInfo.vue'

export default [{
  path: '/source',
  name: '房源',
  component: Source
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
  path: '/list',
  name: 'list',
  component: List
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
