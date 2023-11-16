import renan from "../Depoimento/assets/img/renan.png"
import givaldo from "../Depoimento/assets/img/givaldo.png"
import taina from "../Depoimento/assets/img/taina.png"
import "../Depoimento/assets/css/styles.css"

function index() {
  return (
    <div>
        <section>
        <div className="container-dep">

            <div className="cards">
                <p>
                Estou bem satisfeito com o serviço.
                    O atendimento do profissional foi ótimo,
                    bem atencioso e parece gostar do que faz.
                    Com certeza, voltarei a utilizar a plataforma.
                </p>

                    <img src={renan} alt="Primeiro depoimento do cliente Renan" />
                
                <h3>Renan Albuquerque</h3>

            </div>

            <div className="cards">

                <p>“Encontrei na SuaSaude a solução perfeita para
                    minha família. Os preços são acessíveis e os
                    médicos são ótimos. Recomendo a todos que
                    precisam de uma alternativa aos planos de
                    saúde tradicionais.”</p>

                    <img src={taina} alt="Primeiro depoimento do cliente Taina" />
                <h3>Taina Costa</h3>

            </div>

            <div className="cards">

                <p>Bom, meu primeiro contato com a plataforma
                    foi excelente. Profissionais qualificados, valor
                    em conta e sem precisar me deslocar. Com
                    certeza irei utilizar desse serviço mais vezes.</p>

                    <img src={givaldo} alt="Primeiro depoimento do cliente Givaldo" />
                
                <h3>Givaldo Silva</h3>

            </div>
        </div>
    </section>
    </div>
  )
}

export default index