import Housing from '../../components/Source/Housing.vue'
import SellStep1 from '../../components/Source/Sell/Step1.vue'
import SellStep2 from '../../components/Source/Sell/Step2.vue'
import SellStep3 from '../../components/Source/Sell/Step3.vue'
import SellStep4 from '../../components/Source/Sell/Step4.vue'
import SellStep5 from '../../components/Source/Sell/Step5.vue'

import Broker from '../../components/Source/Sell/Entrust/Broker/Broker.vue'
import SortB from '../../components/Source/Sell/Entrust/Broker/SortB.vue'
import CountB from '../../components/Source/Sell/Entrust/Broker/CountB.vue'
import GradeB from '../../components/Source/Sell/Entrust/Broker/GradeB.vue'

import Medi from '../../components/Source/Sell/Entrust/Medi/Medi.vue'
import SortM from '../../components/Source/Sell/Entrust/Medi/SortM.vue'
import CountM from '../../components/Source/Sell/Entrust/Medi/CountM.vue'
import GradeM from '../../components/Source/Sell/Entrust/Medi/GradeM.vue'

export default [{
  path: '/housing',
  name: '登记房源',
  component: Housing
},
{
  path: '/step1',
  name: 'houseName',
  component: SellStep1
},
{
  path: '/step2',
  name: 'pos',
  component: SellStep2
},
{
  path: '/step3',
  name: 'houseType',
  component: SellStep3
},
{
  path: '/step4',
  name: 'areaPrice',
  component: SellStep4
},
{
  path: '/step5',
  name: 'personalInfo',
  component: SellStep5
},
{
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
