import Collection from '../../components/Mine/Collection/Collection.vue'
import RentalC from '../../components/Mine/Collection/RentalC.vue'
import SecondC from '../../components/Mine/Collection/SecondC.vue'
import Mine from '../../components/Mine/Mine.vue'

export default [{
  path: '/mine',
  name: 'mine',
  component: Mine
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
