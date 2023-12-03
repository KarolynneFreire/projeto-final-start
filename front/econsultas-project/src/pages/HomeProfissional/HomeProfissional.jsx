import '../HomeProfissional/assets/css/HomeProfissional.css';
import Painel from '../../componets/Painel/Painel';
import Calendario from '../../componets/Calendario/Calendario';

const HomeProfissional = () => {

    return (
        <div className='containerProfissional'>
            <Painel></Painel>
            <div className="container-especialidades">
                <div className="saudacao">
                    <h1>Meus serviços</h1>
                </div>
                <Calendario></Calendario>
                <div className="agenda-semanal">
                    <div className="dia-atual">
                        <h2>Hoje (01/12/2023)</h2>
                        <p>Não serviços ativos.</p>
                    </div>
                    <div className="dia-seguinte">
                        <h2>Amanhã (02/12/2023)</h2>
                        <p>Não serviços ativos.</p>
                    </div>
                    <div className="semana-atual">
                        <h2>Esta semana</h2>
                        <ul>
                            <li>Rosangela Maria - 20/11/2023 - 10:30h</li>
                            <li>Carlos Henrique - 22/11/2023 - 12:30h</li>
                            <li>Eduardo Siqueira - 26/11/2023 - 08:15h</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeProfissional;
