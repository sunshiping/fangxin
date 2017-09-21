import Broker from '../../components/Entrust/Broker/Broker.vue'
import SortB from '../../components/Entrust/Broker/SortB.vue'
import CountB from '../../components/Entrust/Broker/CountB.vue'
import GradeB from '../../components/Entrust/Broker/GradeB.vue'

import Medi from '../../components/Entrust/Medi/Medi.vue'
import SortM from '../../components/Entrust/Medi/SortM.vue'
import CountM from '../../components/Entrust/Medi/CountM.vue'
import GradeM from '../../components/Entrust/Medi/GradeM.vue'

export default [{
  path: '/broker',
  name: 'broker',
  redirect: '/broker/sort',
  component: Broker,
  children: [
    {
      path: '/broker/sort',
      component: SortB
    },
    {
      path: '/broker/count',
      component: CountB
    },
    {
      path: '/broker/grade',
      component: GradeB
    }
  ]
},
{
  path: '/medi',
  name: 'medi',
  redirect: '/medi/sort',
  component: Medi,
  children: [
    {
      path: '/medi/sort',
      component: SortM
    },
    {
      path: '/medi/count',
      component: CountM
    },
    {
      path: '/medi/grade',
      component: GradeM
    }
  ]
}]
