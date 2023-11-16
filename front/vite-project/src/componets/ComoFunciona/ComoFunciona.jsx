
import profissional from "../ComoFunciona/assets/img/profissional.png"
import um from "../ComoFunciona/assets/img/1.png"
import dois from "../ComoFunciona/assets/img/2.png"
import tres from "../ComoFunciona/assets/img/3.png"
import quatro from "../ComoFunciona/assets/img/4.png"

import "../ComoFunciona/assets/css/styles.css"


function index() {
  return (
    <div>
          <div className="como-funciona">

<div className="imagem-profissional">
 <img src={profissional} alt="Profissional de saúde" />
    

</div>

<div className="passos">

    <div className="intro">
        <h2>Como Funciona em 4 Passos Simples</h2>
        <p>SuaSaúde veio para tornar o acesso a teleconsultas médicas fácil e mais
            acessível para todos. Descubra como utilizar a nossa plataforma de uma
            maneira muito simples seguindo apenas 4 passos:</p>
    </div>

    <div className="passo">
        <div className="passo-conteudo">
            <div className="passo-imagem">
            <img src={um} alt="Profissional de saúde" />
            </div>
            <div>
                <h2>Faça o seu cadastro</h2>
                <p>Inscreva-se com informações pessoais como nome, e-mail, idade. Após o cadastro será
                    enviado uma confirmação por email para garantir mais segurança na plataforma.</p>
            </div>
        </div>
    </div>

    <div className="passo">
        <div className="passo-conteudo">
            <div className="passo-imagem">
            <img src={dois} alt="Profissional de saúde" />
            </div>
            <div>
                <h2>Marque sua consulta</h2>
                <p>Marque sua consulta escolhendo a especialidade e profissional desejado e escolha o valor de
                    acordo com o seu orçamento. Selecione uma data e horário com disponibilidade e confirme.
                </p>
            </div>
        </div>
    </div>

    <div className="passo">
        <div className="passo-conteudo">
            <div className="passo-imagem">
            <img src={tres} alt="Profissional de saúde" />
            </div>
            <div>
                <h2>Efetue o pagamento</h2>
                <p>Opte pela opção de pagamento que melhor corresponda às suas preferências e selecione
                    o período de cobrança que mais se alinhe com suas expectativas para desfrutar plenamente da
                    nossa plataforma.</p>
            </div>
        </div>
    </div>

    <div className="passo">
        <div className="passo-conteudo">
            <div className="passo-imagem">
            <img src={quatro} alt="Profissional de saúde" />
            </div>
            <div>
                <h2>Seja atendido(a)</h2>
                <p>Após efetuar o pagamento, você receberá acesso imediato à nossa plataforma. Lembre-se
                    de que suas consultas serão personalizadas e devem ser agendadas com antecedência no
                    horário e data desejados.</p>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default index