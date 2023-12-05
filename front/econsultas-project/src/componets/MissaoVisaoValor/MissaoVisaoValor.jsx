import React from 'react'
import './assets/css/styles.css'
import missaoImg from './assets/img/missaoImg.png'
import visaoImg from './assets/img/visaoImg.png'
import valoresImg from './assets/img/valoresImg.png'


const MissaoVisaoValores = () => {
    return (
        <div>
            <div className="tudo">
                <div className="missao">
                    <div className="imagemMissao">
                        <img src={missaoImg} alt="missao" />
                    </div>


                    <div className="textoMissao">
                        <h2>Missão</h2>
                        <p>Facilitar o acesso a serviços de saúde mental e física para pessoas de baixa renda, conectando profissionais recém-formados em diversas áreas da saúde a pacientes menos favorecidos financeiramente.</p>
                    </div>
                </div>


                <div className="visao">
                    <div className="imagemVisao">
                        <img src={visaoImg} alt="Visão" />
                    </div>


                    <div className="textoVisao">
                        <h2>Visão</h2>
                        <p>Buscamos ser uma plataforma líder em serviços de saúde online, destacada por contribuir significativamente para a promoção da saúde, especialmente para pessoas de baixa renda.</p>
                    </div>
                </div>


                <div className="valor">
                    <div className="imagemValor">
                        <img src={valoresImg} alt="Valor" />
                    </div>


                    <div className="textoValor">
                        <h2>Valor</h2>
                        <ul>
                            <li>Comprometimento social</li>
                            <li>Colaboração</li>
                            <li>Cooperativismo</li>
                            <li>Ética</li>
                            <li>Empatia</li>
                            <li>Flexibilidade</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>




    )
}


export default MissaoVisaoValores