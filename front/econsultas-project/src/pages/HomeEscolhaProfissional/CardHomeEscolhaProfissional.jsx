import { Link } from 'react-router-dom';
import maria from "../HomeEscolhaProfissional/assets/img/pessoa-maria.jpg"
import joana from "../HomeEscolhaProfissional/assets/img/pessoa-joao.jpg"
import josefa from "../HomeEscolhaProfissional/assets/img/pessoa-josefa.jpg"
import "../HomeEscolhaProfissional/assets/css/styles.css"
import fotoCard from "../HomeEscolhaProfissional/assets/img/fotocard.png"

function Card() {
    return (
        <div className="paginatoda" >

            <div className="ola">
                <h2>Olá, Carlos!</h2>
                <p>Selecione o(a) profissional que você deseja atendimento.</p>
            </div>
 

            <div className="todososcards">

                {/*  1*/}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />

                    </div>

                    <div className="cardtexto">
                        <h2>Joana Dark</h2>
                        <p>Nutrição Clínica - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>

                    </div>

                </div>


                {/* 2*/}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />

                    </div>

                    <div className="cardtexto">
                        <h2>Roberto Junior</h2>
                        <p>Nutrição Esportiva - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>

                    </div>

                </div>


                {/* 3*/}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />

                    </div>


                    <div className="cardtexto">
                        <h2>João Campelo</h2>
                        <p>Nutrição Esportiva - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>
                    </div>


                </div>

                {/* 4 */}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />
                    </div>

                    <div className="cardtexto">
                        <h2>Diana Montez</h2>
                        <p>Nutrição Clínica - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>
                    </div>

                </div>


                {/* 5 */}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />
                    </div>

                    <div className="cardtexto">
                        <h2>Silvia Coelho</h2>
                        <p>Nutrição Clínica - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>
                    </div>

                </div>

                {/*  6*/}
                <div className="card-item">

                    <div className="fotodocard">
                        <img src={fotoCard} alt="fotocard" />
                    </div>

                    <div className="cardtexto">
                        <h2>Deborah Bazante</h2>
                        <p>Nutrição Esportiva - CRN:12345(PE)</p>
                        <Link to="/agendamento-consulta">
                            <button className="card-button">Agendar consulta</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Card