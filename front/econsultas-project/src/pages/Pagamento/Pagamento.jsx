import EscolhaPagamento from '../../componets/EscolhaPagamento/EscolhaPagamento';
import PagamentoForma from '../../componets/PagamentoForma/PagamentoForma';
import RevisaoPagamento from '../../componets/RevisaoPagamento/RevisaoPagamento';
import { useForm } from "../../hooks/useForm"
import Progress from "../../componets/Progress/Progress"
import { useState } from 'react';


const formTemplates = {
    nome: "",
    numero: "",
    cvc: "",
    verification: "",
    cartao: "",
};

export default function Pagamento() {

    const [data, setData] = useState(formTemplates);  

    const updateFielHandler = (key, value)=>{
      setData((prev) =>{
              return{...prev, [key]: value};
           } );
  };

    const pagComponets = [
        <EscolhaPagamento key="id-escolha" data ={data} updateFielHandler = {updateFielHandler}/>,
        <PagamentoForma key="id-forma" data = {data} updateFielHandler = {updateFielHandler}/>,
        <RevisaoPagamento key="id-revisao" data = {data}/>,
    ];
    const {curretStep, curretComponent, changeStep, isLastStep, isFirstStep} = useForm(pagComponets);
  return (
    
     < div className='form-satisfacao'>
      <div className="header">
          <h2>Faça seu Pagamento</h2>
          <p>Ficamos felizes pela sua preferência, utilize abaixo para 
              fazer a compra: </p>
          </div>
          <div className="form-contanier">
    <Progress curretStep= {curretStep }/>
        <form onSubmit={(e) => changeStep(curretStep +1, e)}>
            <div className="inputs-container">{curretComponent}</div>
            <div className="actions">
                {!isFirstStep && (<button type="button" onClick={() => changeStep(curretStep -1)}> Voltar</button>)}
                {!isLastStep ? (<button type="submit">Avançar</button>) : (<button type="button">Enviar</button>)}
            </div>
        </form>

    </div>

    </div>
   
  )
}
