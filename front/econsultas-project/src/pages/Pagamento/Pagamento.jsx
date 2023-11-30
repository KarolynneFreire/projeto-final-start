import Steps from "../../componets/Steps/Steps"
import { useForm } from "../../hooks/useForm"
import { useState } from 'react';
import React from 'react'
import EscolhaPagamento from "../../componets/EscolhaPagamento/EscolhaPagamento";
import PagamentoForma from "../../componets/PagamentoForma/PagamentoForma";
import RevisaoPagamento from "../../componets/RevisaoPagamento/RevisaoPagamento";

export default function Pagamento() {
 
    const pagComponets = [
      < EscolhaPagamento/>, 
      <PagamentoForma  />, 
      <RevisaoPagamento  />,
    ];
  
    const {curretStep, curretComponent, changeStep, isLastStep, isFirstStep} = useForm(pagComponets);
      return (
        <div className='form-satisfacao'>
      <div className="header">
          <h2>Faça seu Pagamento</h2>
          <p>Ficamos feliz pela sua preferência, utilize abaixo para 
              fazer a compra: </p>
          </div>
          <div className="form-contanier">
      <Steps curretStep= {curretStep }/>
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

