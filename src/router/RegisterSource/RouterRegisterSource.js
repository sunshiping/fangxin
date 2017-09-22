import RegisterHouse from '../../components/RegisterSource/RegisterHouse.vue'
import SellStep1 from '../../components/RegisterSource/Sell/Step1.vue'
import SellStep2 from '../../components/RegisterSource/Sell/Step2.vue'
import SellStep3 from '../../components/RegisterSource/Sell/Step3.vue'
import SellStep4 from '../../components/RegisterSource/Sell/Step4.vue'
import SellStep5 from '../../components/RegisterSource/Sell/Step5.vue'

import Broker from '../../components/RegisterSource/Sell/Entrust/Broker/Broker.vue'
import SortB from '../../components/RegisterSource/Sell/Entrust/Broker/SortB.vue'
import CountB from '../../components/RegisterSource/Sell/Entrust/Broker/CountB.vue'
import GradeB from '../../components/RegisterSource/Sell/Entrust/Broker/GradeB.vue'

import Medi from '../../components/RegisterSource/Sell/Entrust/Medi/Medi.vue'
import SortM from '../../components/RegisterSource/Sell/Entrust/Medi/SortM.vue'
import CountM from '../../components/RegisterSource/Sell/Entrust/Medi/CountM.vue'
import GradeM from '../../components/RegisterSource/Sell/Entrust/Medi/GradeM.vue'
export default [{
  path: '/registerhouse',
  name: '登记房源',
  component: RegisterHouse
},
{
  path: '/sell/step1',
  name: 'houseName',
  component: SellStep1
},
{
  path: '/sell/step2',
  name: 'pos',
  component: SellStep2
},
{
  path: '/sell/step3',
  name: 'houseType',
  component: SellStep3
},
{
  path: '/sell/step4',
  name: 'areaPrice',
  component: SellStep4
},
{
  path: '/sell/step5',
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
