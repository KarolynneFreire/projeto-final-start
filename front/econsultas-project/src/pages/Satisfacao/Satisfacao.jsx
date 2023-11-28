import "../Satisfacao/styles.css"
import Steps from "../../componets/Steps/Steps"
import FormReview from "../../componets/FormReview/FormReview";
import FormUser from "../../componets/FormUser/FormUser";
import Thank from "../../componets/Thank/Thank";
import { useForm } from "../../hooks/useForm"
import { useState } from 'react';


const formTemplates = {
    name: "",
    email: "",
    review: "",
    comment: "",
};

function Satisfacao( ) {

  const [data, setData] = useState(formTemplates);  

  const updataFielHandler = (key, value)=>{
    setData((prev) =>{
            return{...prev, [key]: value};
         } );
};
  
  const formComponets = [
  <FormUser key="id-user" data = {data} updataFielHandler = {updataFielHandler}/>, 
  <FormReview key="id-review" data = {data} updataFielHandler = {updataFielHandler} />, 
  <Thank  key="id-thank" data = {data} />,
];

  const {curretStep, curretComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponets);

  return (
    <div className='form-satisfacao'>
    <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes pela conclução da sua consulta, utilize abaixo para 
            avaliar o atendimento: </p>
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

export default Satisfacao