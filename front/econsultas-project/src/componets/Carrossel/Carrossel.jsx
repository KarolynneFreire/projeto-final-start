import eletronicos from "../Carrossel/assets/img/mockup-start.png"
import "../Carrossel/assets/css/styles.css"


function Carrossel() {
  return (
    <header>
        <div className="conteudo-header">
            <div className="texto-header">
                <h1>Cuide da sua saúde de qualquer lugar!</h1>
                <p>Acesse de qualquer dispositivo, notebook, tablet, smartphone, você decide! Teleconsultas ao seu
                    alcance.</p>
            </div>

            <div className="imagem-header">
            <img src={eletronicos} alt="notebook,pc,celular,tablet" />
            </div>
        </div>
    </header>
  )
}

export default Carrossel