import "../PagamentoForma/assets/css/styles.css"

import MasterCard from './assets/img/mastercard_icon.png'
import VisaCard from './assets/img/visa_icon.png'


const PagamentoForma = ({data, updateFielHandler}) => {

    return(

        <div className="formas-pagamento">
         <div className="pagamento-com-cartao">
                <div className="alterar-forma-e-cartao">
                <h2 className="titulo-pagamento">Preencha os dados abaixo :</h2>
                </div>

        < div className="form-controlle">
        <label className='form-label' htmlFor="nome">Nome: </label>
        <input className='form-input' type="text" name="nome" id="nome" placeholder="Digite o nome do cartão" required 
        value={data.nome || ""} onChange={ (e) => updateFielHandler ( "nome", e.target.value)}/>
      </div>
      <div className="form-controlle">
        <label className='form-label' htmlFor="email">Numero do cartão: </label>
        <input className='form-input' type="text" id="numero" placeholder="Digite o numero do cartão" required
        value={data.numero || ""} onChange={ (e) => updateFielHandler ( "numero", e.target.value)}
         />
      </div>
      <div className="form-controlle">
        <label className='form-label' htmlFor="email">CVC: </label>
        <input className='form-input' type="number" id="cvc" placeholder="Digite o cvc" required
        value={data.cvc || ""} onChange={ (e) => updateFielHandler ( "cvc", e.target.value)}/>
        </div>

                <div className="container-cartoes-pagamento">
                    <div className="container-cartoes-cadastrados">
                        <div className="cartoes-cadastrados">
                            <img src={MasterCard} alt="Logo do mastercard" />
                            <input type="radio" value="MasterCard" name="cartao" required 
          checked={data.cartao === "MasterCard"} onChange={ (e) => updateFielHandler ( "cartao", e.target.value)} />
                        </div>
                        <div className="cartoes-cadastrados">
                            <img src={VisaCard} alt="Logo do visacard" />
                            <input type="radio" value="VisaCard" name="cartao" required 
          checked={data.cartao === "VisaCard"} onChange={ (e) => updateFielHandler ( "cartao", e.target.value)} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PagamentoForma