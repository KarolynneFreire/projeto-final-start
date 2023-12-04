
import './assets/css/Rendimentos.css'
import Painel from '../../componets/Painel/Painel';

const Rendimentos = () => {
    const rendimentos = {
        saldoAtual: 'R$ 250,00',
        transacoes: [
            { data: '02 de outubro de 2023', valor: 'R$ 400,00' },
            { data: '16 de setembro de 2023', valor: 'R$ 850,00' },
            { data: '06 de setembro de 2023', valor: 'R$ 200,00' },
        ],
    };

    const dadosRetirada = {
        metodo: 'Pix',
        valor: 'R$250,00',
        tarifa: '-R$2,00',
        totalReceber: 'R$ 248,00',
        titular: 'Carlos Alexandre da Silva',
        cpfCnpj: '01234567890',
        chavePix: '01234567890',
    };

    return (
        <div className='container-rendimentos'>
                <Painel></Painel>
            <div className="pagina-rendimentos">
                <h1>Rendimentos</h1>
                <div className="saldo-atual">
                    <p>Saldo atual: {rendimentos.saldoAtual}</p>
                </div>

                <div className="solicitar-retirada">
                    <h2>Solicitar retirada</h2>
                    <div className="detalhes-retirada">
                        <div className="informacao-retirada">
                            <span>Método</span>
                            <strong>{dadosRetirada.metodo}</strong>
                        </div>
                        <div className="informacao-retirada">
                            <span>Valor</span>
                            <strong>{dadosRetirada.valor}</strong>
                        </div>
                        <div className="informacao-retirada">
                            <span>Tarifa</span>
                            <strong>{dadosRetirada.tarifa}</strong>
                        </div>
                        <div className="informacao-retirada total-receber">
                            <span>Total a receber</span>
                            <strong>{dadosRetirada.totalReceber}</strong>
                        </div>
                    </div>
                    <div className="dados-titular">
                        <p>Nome do titular/Razão social</p>
                        <strong>{dadosRetirada.titular}</strong>
                        <p>CPF/CNPJ Cadastrado no banco</p>
                        <strong>{dadosRetirada.cpfCnpj}</strong>
                        <p>Chave-Pix</p>
                        <strong>{dadosRetirada.chavePix}</strong>
                    </div>
                    <button className="botao-retirar">Retirar</button>
                </div>

                <div className="retiradas-pendentes">
                    <h2>Retiradas pendentes</h2>
                    <p>Não existem retiradas pendentes</p>
                </div>

                <div className="extrato-transacoes">
                    <h2>Extrato de transações</h2>
                    {rendimentos.transacoes.map((transacao, index) => (
                        <p key={index}>• {transacao.valor} ({transacao.data})</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Rendimentos;




