import "../Beneficios/assets/css/styles.css"
import relogio from "../Beneficios/assets/img/5.png"
import seguranca from "../Beneficios/assets/img/6.png"
import calendario from "../Beneficios/assets/img/7.png"
import estetoscopio from "../Beneficios/assets/img/8.png"
import mulher from "../Beneficios/assets/img/mulherprof.png"


function beneficios() {
  return (
    <div> 
    
    <div className="beneficios-container">
    <div className="item-2">Descubra os 4 beneficios de contratar novos profissionais</div>

    <div className="item-3">Oferecemos planos pensados especialmente para você e sua família. Conheça os 4 benefícios de contratar nossos planos de Assinatura Club Pessoal ou Familiar, e desfrute de uma experiência em telemedicina única e completa.</div>
    
    <div className="item-4">
    <img src={relogio} alt="relogio" />
    </div>

    <div className="item-5">Economia e flexibilidade</div>

    <div className="item-6">Serviços desenvolvidos para proporcionar economia e flexibilidade</div>

    <div className="item-7">
    <img src={seguranca} alt="segurança" />
    </div>

    <div className="item-8">Segurança e privacidade</div>

    <div className="item-9">Nossos serviços asseguram a proteção dos seus dados e informações médicas. </div>

    <div className="item-10">
    <img src={calendario} alt="calendario" />
    </div>

    <div className="item-11">Agendamento fácil  e rápido</div>

    <div className="item-12">Facilitamos o agendamento de consultas, permitindo que você marque horários com apenas um clique de qualquer lugar.</div>

    <div className="item-13">
    <img src={estetoscopio} alt="estetoscopio"/>
    </div>

    <div className="item-14">Acesso a diversos profissionais</div>

    <div className="item-15">Ao contratar nosso serviço, você poderá ter acesso a uma vasa rede de profissionais qualificados.</div>
    
</div>
</div>
  )
}

export default beneficios