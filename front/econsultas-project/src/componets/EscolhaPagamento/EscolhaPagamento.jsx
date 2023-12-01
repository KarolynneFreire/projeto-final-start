

function EscolhaPagamento() {
  return (

    <div className="container-escolha-pagamento">

      <div className="container-selecionar-pagamento">

        <h2>Escolha a forma de pagamento</h2>
        <div className="selecionar-opcao">

          <div className="escolha-opcao">
           
            <p>Pix</p>
            <input type="checkbox" />
          </div>

          <div className="escolha-opcao">
           
            <p>Cartão</p>
            <input type="checkbox" />
          </div>

          <div className="escolha-opcao">
           
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