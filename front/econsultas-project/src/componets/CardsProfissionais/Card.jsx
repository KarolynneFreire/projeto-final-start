import maria from "../CardsProfissionais/assets/img/pessoa-maria.jpg"
import "../CardsProfissionais/assets/css/styles.css"

function card() {
  return (
    <div className="boody">
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


        </div>
    </div>
  )
}

export default card