import seta from "../Faq/assets/img/seta.png" 
import "../Faq/assets/css/styles.css"

function Faq() {
  return (
    <div>
         <section>
        <div className="container-faq">

            <div className="texto-faq">

                <h3>FAQ</h3>
                <h2>Perguntas e Respostas</h2>
                <p>Confira algumas das perguntas mais frequentes sobre o e-consultas e obtenha
                    respostas rápidas para suas dúvidas. Estamos sempre prontos para ajudá-lo
                    a entender melhor nossa plataforma e os serviços oferecidos.</p>

            </div>

            <div className="faq-colunas">

                <div className="faq-coluna-esquerda">

                    <div className="faq-pergunta">
                        <p>Como funciona o e-consultas?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>É seguro usar o e-consultas?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>Quais especialidades estão disponíveis?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>Posso cancelar uma consulta?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                </div>

                <div className="faq-coluna-direita">

                    <div className="faq-pergunta">
                        <p>Os profissionais são qualificados?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>Quais opções de pagamentos?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>Quais horários de funcionamento?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                    <div className="faq-pergunta">
                        <p>Vocês aceitam plano de saúde?</p>
                        <img src={seta} alt="seta para baixo" />
                    </div>

                </div>

            </div>

        </div>
    </section>
    </div>
  )
}

export default Faq