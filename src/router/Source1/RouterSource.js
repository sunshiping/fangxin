// import SourceList from '../../components/Source/SourceList.vue'
import SourceTest from '../../components/Source/SourceTest.vue'
import Test from '../../components/Test.vue'
import MapTest from '../../components/Comment/MapComp.vue'
// import SellStep1 from '../../components/Source/Sell/Step1.vue'
// import SellStep2 from '../../components/Source/Sell/Step2.vue'
// import SellStep3 from '../../components/Source/Sell/Step3.vue'
// import SellStep4 from '../../components/Source/Sell/Step4.vue'
// import SellStep5 from '../../components/Source/Sell/Step5.vue'
// import Housing from '../../components/Source/Housing.vue'
export default [{
//   path: '/sourceList',
//   name: 'sourceList',
//   component: SourceList
// },
// {
//   path: '/sell/step1',
//   name: 'step1',
//   component: SellStep1
// },
// {
//   path: '/sell/step2',
//   name: 'step2',
//   component: SellStep2
// },
// {
//   path: '/sell/step3',
//   name: 'step3',
//   component: SellStep3
// },
// {
//   path: '/sell/step4',
//   name: 'step4',
//   component: SellStep4
// },
// {
//   path: '/sell/step5',
//   name: 'step5',
//   component: SellStep5
// },
// {
  path: '/sourceTest',
  name: '房源列表筛选弹框测试',
  component: SourceTest
},
{
  path: '/mapTest',
  name: '测试百度地图2',
  component: MapTest
},
{
  path: '/test',
  name: 'test',
  component: Test
}
// {
//   path: '/housing',
//   name: '登记房源',
//   component: Housing
// },
]
