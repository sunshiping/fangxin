import PersonalInfo from '../../components/Personal/PersonalInfo.vue'
import Collection from '../../components/Personal/Collection/Collection.vue'
import RentalC from '../../components/Personal/Collection/RentalC.vue'
import SecondC from '../../components/Personal/Collection/SecondC.vue'
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
  redirect: '/collection/second',
  component: Collection,
  children: [
    {
      path: '/collection/second',
      component: SecondC
    },
    {
      path: '/collection/rental',
      component: RentalC
    }
  ]
}]
