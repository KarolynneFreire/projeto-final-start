import pix from '../EscolhaPagamento/assets/img/pix_icon.png'
import cartao from '../EscolhaPagamento/assets/img/card_icon.png'
import boleto from '../EscolhaPagamento/assets/img/boleto_icon.png'
import '../EscolhaPagamento/assets/css/styles.css'


const EscolhaPagamento = ({data, updateFielHandler}) => {
  return (

    <div className="container-escolha-pagamento">
      <div className="container-selecionar-pagamento">
        <h2 className='titulo-escolha'>Escolha a forma de pagamento</h2>
        <div className="selecionar-opcao">

          <div className="escolha-opcao">
            <img src={pix} alt="ícone de pix" />
            <p>Pix</p>
            <input type="radio" value="pix" name="verification" required 
          checked={data.verification === "pix"} onChange={ (e) => updateFielHandler ( "verification", e.target.value)}/>
          </div>

          <div className="escolha-opcao">
            <img src={cartao} alt="ícone de cartao" />
            <p>Cartão</p>
            <input type="radio" value="cartao" name="verification" required 
          checked={data.verification === "cartao"} onChange={ (e) => updateFielHandler ( "verification", e.target.value)}/>
          </div>

          <div className="escolha-opcao">
            <img src={boleto} alt="ícone de boleto" />
            <p>Boleto</p>
            <input type="radio" value="boleto" name="verification" required 
          checked={data.verification === "boleto"} onChange={ (e) => updateFielHandler ( "verification", e.target.value)}/>
          </div>

        </div>

      </div>

    </div>
  )
}

export default EscolhaPagamento