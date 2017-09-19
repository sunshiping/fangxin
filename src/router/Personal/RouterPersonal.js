import PersonalInfo from '../../components/Personal/PersonalInfo.vue'
import Collection from '../../components/Personal/Collection.vue'
import Personal from '../../components/Personal/Personal.vue'

export default [{
  path: '/personal',
  name: 'Personal',
  component: Personal
},
{
  path: '/personalInfo',
  name: 'PersonalInfo',
  component: PersonalInfo
},
{
  path: '/collection',
  name: 'Collection',
  component: Collection
}]
