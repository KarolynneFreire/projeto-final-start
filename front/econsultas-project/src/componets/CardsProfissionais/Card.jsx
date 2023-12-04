
import "../CardsProfissionais/assets/css/styles.css"

function card() {
  return (


    <div className="#">
    
    <div className="boody" id ="fisioterapeuta">
        <div className='container'>
            <div className='box'>
                <div className='imagem'>
                
                </div>
                <div className="nome">Maria Rodrigues</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Fisioterapeuta especializado e focado em reabilitação musculoesquelética.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
               
                </div>
                <div className="nome">Josefa Pereira</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Psicólogo dedicado a facilitar jornadas de autodescoberta e bem-estar.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                
                </div>
                <div className="nome">Joana Lima</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Nutricionista comprometido em promover hábitos alimentares saudáveis.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>


        </div>
    </div>
    

        </div>
   
  )
}

export default card