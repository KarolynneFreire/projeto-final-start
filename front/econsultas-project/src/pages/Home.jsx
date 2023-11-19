
import Beneficios from '../componets/Beneficios/beneficios'
import Carrossel from '../componets/Carrossel/Carrossel'
import ComoFunciona from '../componets/ComoFunciona/ComoFunciona'
import Depoimento from '../componets/Depoimento/Depoimento'
import Faq from '../componets/Faq/Faq'
import QuemSomos from '../componets/QuemSomos/QuemSomos'


export default function Home() {
  return (
    <div>
      <Carrossel></Carrossel>
      <ComoFunciona></ComoFunciona>
      <Depoimento></Depoimento>
      <QuemSomos></QuemSomos>
      <Beneficios></Beneficios>
      <Faq></Faq>
    
      
    </div>
  )
}
