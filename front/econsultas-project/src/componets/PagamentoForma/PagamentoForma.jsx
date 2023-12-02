import "../PagamentoForma/assets/css/styles.css"
import Card from './assets/img/card_icon.png'
import MasterCard from './assets/img/mastercard_icon.png'
import VisaCard from './assets/img/visa_icon.png'
import SetaBaixo from './assets/img/arrow_down_icon.png'

function PagamentoForma() {

    return(

        <div className="formas-pagamento">

            <div className="pagamento-com-cartao">

                <div className="alterar-forma-e-cartao">

                    <div className="alterar-forma-credito">
                        <a href="#">Alterar forma de pagamento</a>
                    </div>

                    <div className="pagamento-credito">
                        <img src={Card} alt="" />
                        <h2>Pagamento com cartão</h2>
                    </div>

                </div>

                <div className="selecionar-opcoes-credito">

                    <div className="texto-escolha-forma">
                        <p>Escolha a forma:</p>
                    </div>

                    <div className="input-escolha-forma">

                        <div className="opcoes-forma-cartao">
                            <p>Cartão de crédito: </p>
                            <input type="checkbox" className="checkbox-selecionar-forma" />
                        </div>

                        <div className="opcoes-forma-cartao">
                            <p>Cartão de dédito:</p>
                            <input type="checkbox" className="checkbox-selecionar-forma" />
                        </div>

                    </div>

                </div>

                <div className="container-cartoes-pagamento">

                    <div className="container-cartoes-cadastrados">

                        <div className="cartoes-cadastrados">
                            <img src={MasterCard} alt="Logo do mastercard" />
                            <p>Cartão de crédito Master ****0905</p>
                            <input type="checkbox" />
                        </div>

                        <div className="cartoes-cadastrados">
                            <img src={VisaCard} alt="Logo do visacard" />
                            <p>Cartão de crédito Visa ****1256</p>
                            <input type="checkbox" />
                        </div>

                        <div className="cartoes-cadastrados">
                            <img src={MasterCard} alt="Logo do mastercard" />
                            <p>Cartão de crédito Master ****0855</p>
                            <input type="checkbox" />
                        </div>

                        <div className="cartoes-cadastrados">
                            <img src={VisaCard} alt="Logo do visacard" />
                            <p>Cartão de crédito Visa ****4079</p>
                            <input type="checkbox" />
                        </div>

                    </div>

                    <div className="confirmar-qtd-parcelas">

                        <div className="selecionar-parcelas-pagamento">
                            <p>1x sem juros de R$ 80,00</p>
                            <img src={SetaBaixo} alt="Seta para baixo" />
                        </div>

                        <button className="botao-pagamento-parcelas">Confirmar pagamento</button>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default PagamentoForma