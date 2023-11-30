import "../Beneficios/assets/css/styles.css"
import relogio from "../Beneficios/assets/img/5.png"
import seguranca from "../Beneficios/assets/img/7.png"
import calendario from "../Beneficios/assets/img/6.png"
import estetoscopio from "../Beneficios/assets/img/8.png"

function beneficios() {
  return (
    <div> 

      <div className="beneficios-container">

        <div className="beneficios-intro">

          <h3>Benefícios</h3>
          <h2>Descubra os 4 beneficios de contratar novos profissionais</h2>
          <p>Oferecemos planos pensados especialmente para você e sua família. Conheça os 4 benefícios de contratar nossos planos de Assinatura Club Pessoal ou Familiar, e desfrute de uma experiência em telemedicina única e completa.</p>

        </div>

        <div className="container-4-beneficios">

          <div className="beneficios-1-2">

            <div className="beneficio-1">
            <img src={relogio} alt="relogio" />
            <h4>Economia e flexibilidade</h4>
            <p>Serviços desenvolvidos para proporcionar economia e flexibilidade</p>
            </div>

            <div className="beneficio-2">
              <img src={seguranca} alt="segurança" />
              <h4>Segurança e privacidade</h4>
              <p>Nossos serviços asseguram a proteção dos seus dados e informações médicas.</p>
            </div>

          </div>

          <div className="beneficios-3-4">

            <div className="beneficio-3">

              <img src={calendario} alt="calendario" />
              <h4>Agendamento fácil  e rápido</h4>
              <p>Facilitamos o agendamento de consultas, permitindo que você marque horários com apenas um clique de qualquer lugar.</p>

            </div>

            <div className="beneficio-4">

              <img src={estetoscopio} alt="estetoscopio"/>
              <h4>Acesso a diversos profissionais</h4>
              <p>Ao contratar nosso serviço, você poderá ter acesso a uma vasa rede de profissionais qualificados.</p>

            </div>

          </div>

        </div>

      </div>

</div>
  )
}

export default beneficios