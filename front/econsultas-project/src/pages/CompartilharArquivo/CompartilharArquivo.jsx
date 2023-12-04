import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/CompartilharArquivo.css';

const CompartilharArquivo = () => {
  const [arquivo, setArquivo] = useState(null);
  const navigate = useNavigate();

  const selecionarArquivo = (evento) => {
    setArquivo(evento.target.files[0]);
  };

  const pular = () => {
    navigate('/pagamento');
  };

  const [mensagemErro, setMensagemErro] = useState('');

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    if (!arquivo) {
        setMensagemErro('Por favor, adicione um arquivo ou escolha pular.');
        return;
    }
    console.log("Arquivo enviado:", arquivo);
    setMensagemErro('');
    navigate('/pagamentos');
};


  return (
    <div className="conteudo-centralizado">
      <p className="texto-informativo">Você tem arquivos para compartilhar durante a consulta?</p>
      <p className="texto-informativo">Compartilhe resultados de exames ou fotos que possam ajudar o diagnóstico.</p>

      <form onSubmit={enviarFormulario} className="formulario-compartilhamento">
        <div className="opcoes-compartilhamento">
          <label><input type="radio" name="tipoArquivo" value="Exame" /> Exame</label>
          <label><input type="radio" name="tipoArquivo" value="Foto" /> Foto</label>
          <label><input type="radio" name="tipoArquivo" value="ReceitaMedica" /> Receita médica</label>
          <label><input type="radio" name="tipoArquivo" value="Outros" /> Outros</label>
        </div>

        <div className="caixa-upload">
          <p>Arraste seus arquivos até aqui</p>
          <p>ou carregue arquivos que estão no seu dispositivo</p>
          <input type="file" id="selecao-arquivo" hidden onChange={selecionarArquivo} />
          <label htmlFor="selecao-arquivo" className="botao-selecionar">Selecionar arquivos</label>
        </div>

        {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
        <div className="area-botoes">
          <button type="button" className="botao-pular" onClick={pular}>Pular</button>
          <button type="submit" className="botao-salvar">Salvar e continuar</button>
        </div>
      </form>
    </div>
  );
};

export default CompartilharArquivo;
