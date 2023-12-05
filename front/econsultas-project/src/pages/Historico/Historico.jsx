import './assets/css/styles.css'
import Painel from '../../componets/Painel/Painel';
import Calendario from '../../componets/Calendario/Calendario';


function Historico() {
    return (
        <div className="container-historico">
            <Painel></Painel>
            <div className="historicoTotal">
                <div className="historicoTexto">
                    <h1>Histórico</h1>
                </div>
                <Calendario></Calendario>


                <div className="mes">
                    <div className="mesAtual">
                        <h2>Mês atual</h2>
                        <ul>
                            <li>10/11/2023 - João Pablo - Crio dieta para atletas de alto rendimento.</li>
                            <li>18/11/2023 - Carla Bruna - Crio dieta focada em emagrecimento.</li>
                            <li>22/11/2023 - Adriana Andrade - Crio dieta focada no emagrecimento.</li>
                            <li>30/11/2023 - João Pablo - Crio dieta para atletas de alto rendimento.</li>
                        </ul>
                    </div>


                    <div className="mesPassado">
                        <h2>Mês anterior</h2>
                        <ul>
                            <li>10/10/2023 - João Pablo - Crio dieta para atletas de alto rendimento.</li>
                            <li>18/10/2023 - Carla Bruna - Crio dieta focada em emagrecimento.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Historico
