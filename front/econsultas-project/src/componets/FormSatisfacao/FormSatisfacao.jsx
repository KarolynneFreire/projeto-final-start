
function FormSatisfacao() {
  return (
    <div className='form-satisfacao'>
        <div>
            <h2>Deixe sua avaliação</h2>
            <p>Ficamos felizes pela conclução da sua consulta, utilize abaixo para 
                avaliar o atendimento: </p>
        </div>
        <div className="form-contanier">
            <p>Etapas :</p>
            <form action="">
                <div className="actions">
                    <button type="button">Voltar</button>
                    <button type="submit">Avançar</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default FormSatisfacao