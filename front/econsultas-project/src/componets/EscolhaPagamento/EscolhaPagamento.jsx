import React from 'react'
import "../EscolhaPagamento/assets/css/styles.css"
import pix from '../EscolhaPagamento/assets/img/pix_icon.png'
import cartao from '../EscolhaPagamento/assets/img/card_icon.png'
import boleto from '../EscolhaPagamento/assets/img/boleto_icon.png'

function EscolhaPagamento() {
  return (

    <div className="container-escolha-pagamento">

      <div className="container-selecionar-pagamento">

        <h2>Escolha a forma de pagamento</h2>
        <div className="selecionar-opcao">

          <div className="escolha-opcao">
            <img src={pix} alt="ícone de pix" />
            <p>Pix</p>
            <input type="checkbox" />
          </div>

          <div className="escolha-opcao">
            <img src={cartao} alt="ícone de pix" />
            <p>Cartão</p>
            <input type="checkbox" />
          </div>

          <div className="escolha-opcao">
            <img src={boleto} alt="ícone de pix" />
            <p>Boleto</p>
            <input type="checkbox" />
          </div>

        </div>

        <button className="botao-forma-pagamento">Confirmar</button>

      </div>

    </div>
  )
}

export default EscolhaPagamento