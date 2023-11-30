import "../QuemSomos/assets/css/styles.css"
import profissionais from "../QuemSomos/assets/img/profissionais.png"

function QuemSomos() {
  return (
    <div>
       <div className="quem-somos">
            <div className="imagem-quem-somos">
            <img src={profissionais} alt="Primeiro depoimento do cliente Renan" />
            </div>

            <div className="textos-quem-somos">
                <div className="texto-1-quem-somos">
                    <h3>Quem somos</h3>
                    <h2>Sobre o e-consultas</h2>
                    <p>Somos um clube de benefícios inovador que fornece planos de assinatura com telemedicina de forma
                        rápida e eficiente para pacientes. Nossa missão é oferecer atendimento médico de qualidade,
                        acessível e conveniente para todos.</p>
                </div>
            
                <div className="texto-2-quem-somos">
                    <div className="texto-2-quem-somos-1">
                        <h3> Acesso rápido e fácil 24h</h3>
                        <p>Diga adeus às longas esperas e filas de espera.</p>
                    </div>
                    <div className="texto-2-quem-somos-1">
                        <h3> Atendimento personalizado</h3>
                        <p>Esteja sempre em dia com sua saúde e a de sua família.</p>
                    </div>
                </div>
            </div>
        </div>
               
            
    </div>

  )
}

export default QuemSomos