import maria from "../CardsProfissionais/assets/img/pessoa-maria.jpg"
import joana from "../CardsProfissionais/assets/img/pessoa-joao.jpg"
import josefa from "../CardsProfissionais/assets/img/pessoa-josefa.jpg"
import "../CardsProfissionais/assets/css/styles.css"

function card() {
  return (


    <div className="#">
    <button  type="button" data-bs-toggle="collapse" data-bs-target="#fisioterapeuta" className="btn btn-color1">Fisioterapeutas</button>&nbsp;&nbsp;
    <button   data-bs-toggle="collapse" data-bs-target="#psicologo"type="button" className="btn btn-color">Nutricionistas</button>&nbsp;&nbsp;
    <button type="button" data-bs-toggle="collapse" data-bs-target="#nutricionista" className="btn btn-color1">Psicologos</button>&nbsp;&nbsp;
    
    <div className="boody collapse" id ="fisioterapeuta">
        <div className='container'>
            <div className='box'>
                <div className='imagem'>
                <img src={maria} alt="Profissional Maria" />
                </div>
                <div className="nome">Maria Rodrigues</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={josefa} alt="Profissional Josefa" />
                </div>
                <div className="nome">Josefa Pereira</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={joana} alt="Profissional Joao" />
                </div>
                <div className="nome">Joana Lima</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>


        </div>
    </div>
    <div className="boody collapse" id ="nutricionista">
        <div className='container'>
            <div className='box'>
                <div className='imagem'>
                <img src={maria} alt="Profissional Maria" />
                </div>
                <div className="nome">Maria Rodrigues</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={josefa} alt="Profissional Josefa" />
                </div>
                <div className="nome">Josefa Pereira</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={joana} alt="Profissional Joao" />
                </div>
                <div className="nome">Joana Lima</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>


        </div>
    </div>
    <div className="boody collapse" id ="psicologo">
        <div className='container'>
            <div className='box'>
                <div className='imagem'>
                <img src={maria} alt="Profissional Maria" />
                </div>
                <div className="nome">Maria Rodrigues</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={josefa} alt="Profissional Josefa" />
                </div>
                <div className="nome">Josefa Pereira</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btns">
                    <button type="submit">Agendar</button>
                    <button type="submit">Saber +</button>
                </div>
            </div>
            <div className='box'>
                <div className='imagem'>
                <img src={joana} alt="Profissional Joao" />
                </div>
                <div className="nome">Joana Lima</div>
                <div className="estrela">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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