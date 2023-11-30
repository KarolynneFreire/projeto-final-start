
import Beneficios from '../componets/Beneficios/Beneficios'
import Carrossel from '../componets/Carrossel/Carrossel'
import ComoFunciona from '../componets/ComoFunciona/ComoFunciona'
import Depoimento from '../componets/Depoimento/Depoimento'
import Faq from '../componets/Faq/Faq'
import QuemSomos from '../componets/QuemSomos/QuemSomos'
import CardsProfissionais from '../componets/CardsProfissionais/Card'


export default function Home() {
  return (
    <div>
      <Carrossel></Carrossel>
      <ComoFunciona></ComoFunciona>
      <Depoimento></Depoimento>
      <QuemSomos></QuemSomos>
      <CardsProfissionais></CardsProfissionais>
      <Beneficios></Beneficios>
      <Faq></Faq> 
    </div>
  )
}
