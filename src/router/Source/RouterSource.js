import Source from './../../components/Source/Source.vue'
import SourceList from './../../components/SourceList.vue'
import Test from './../../components/Test.vue'
import List from '../../components/common/ListHeader.vue'

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
  path: '/list',
  name: 'list',
  component: List
},
{
  path: '/test',
  name: 'test',
  component: Test
}]
