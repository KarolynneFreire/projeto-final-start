import React, { useState } from 'react';

import seta from "../Faq/assets/img/seta.png";
import "../Faq/assets/css/styles.css";

function Faq() {
    const [botaoSelecionado, setBotaoSelecionado] = useState(null);

    const toggleButton = (numeroId) => {
        if (botaoSelecionado === numeroId) {
            setBotaoSelecionado(null);
        } else {
            setBotaoSelecionado(numeroId);
        }
    };

    return (
        <div>
            <section>
                <div className="container-faq">

                    <div className="texto-faq">

                        <h3>FAQ</h3>
                        <h2>Perguntas e Respostas</h2>
                        <p>Confira algumas das perguntas mais frequentes sobre o e-consultas e obtenha
                            respostas rápidas para suas dúvidas. Estamos sempre prontos para ajudá-lo
                            a entender melhor nossa plataforma e os serviços oferecidos.</p>

                    </div>

                    <div className="faq-colunas">

                        <div className="faq-coluna-esquerda">

                        <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(1)}>
                                <div className='faq-pergunta-'>
                                    <p>
                                    <span>Como funciona o e-consultas?</span>
                                    <img src={seta} alt="seta para baixo" />
                                    </p>
                                    {botaoSelecionado === 1 && (
                                        <div className="faq-resposta">
                                            <p>O e-Consultas funciona como uma plataforma de telemedicina, conectando pacientes profissionais de saúde. Os pacientes podem se cadastrar no site, escolher a especialidade desejada e agendar consultas remotas, proporcionando acesso fácil a serviços de saúde.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(2)}>
                                <p>
                                <span>É seguro usar o e-consultas?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 2 && (
                                    <div className="faq-resposta">
                                        <p>Sim, a segurança dos pacientes é nossa prioridade. Adotamos medidas rigorosas para proteger a privacidade e confidencialidade das informações.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(3)}>
                                <p>
                                <span>Quais especialidades estão disponíveis?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 3 && (
                                    <div className="faq-resposta">
                                        <p>Oferecemos serviços nas especialidades de psicologia, psiquiatria, nutrição e fisioterapia.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(4)}>
                                <p>
                                <span>Posso cancelar uma consulta?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 4 && (
                                    <div className="faq-resposta">
                                        <p>Sim, é possível cancelar consultas na plataforma e-consultas. Os usuários têm a flexibilidade de gerenciar suas agendas e cancelar consultas, obedecendo às diretrizes condicionais para o cancelamento.</p>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="faq-coluna-direita">

                        <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(5)}>
                                <p>
                                <span>Os profissionais são qualificados?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 5 && (
                                    <div className="faq-resposta">
                                        <p>Sim, todos os profissionais cadastrados na plataforma e-Consultas atendam aos padrões exigidos em suas respectivas áreas. Isso inclui profissionais recém-formados e aqueles com experiência, garantindo um atendimento de qualidade aos pacientes.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(6)}>
                                <p>
                                <span>Quais opções de pagamentos?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 6 && (
                                    <div className="faq-resposta">
                                        <p>No momento estamos com as opções de pagamento cartão de crédito e débito.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(7)}>
                                <p>
                                <span>Quais horários de funcionamento?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 7 && (
                                    <div className="faq-resposta">
                                        <p>A plataforma e-consultas oferece agendamento flexível 24 horas por dia, 7 dias por semana. Isso permite que os pacientes marquem consultas online de acordo com a sua disponibilidade, garantindo acessibilidade a qualquer momento.</p>
                                    </div>
                                )}
                            </div>

                            <div className="faq-pergunta" id="botao-faq" onClick={() => toggleButton(8)}>
                                <p>
                                <span>Vocês aceitam plano de saúde?</span>
                                <img src={seta} alt="seta para baixo" />
                                </p>
                                {botaoSelecionado === 8 && (
                                    <div className="faq-resposta">
                                        <p>Não. Nossa proposta é oferecer serviços personalizados com flexibilidade de horário para oferecer mais conforto a nossos pacientes e profissionais.</p>
                                    </div>
                                )}
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Faq;