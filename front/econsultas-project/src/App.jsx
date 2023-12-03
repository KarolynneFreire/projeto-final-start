import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './componets/NavBar/NavBar';
import Cadastro from './pages/Cadastro/Cadastro';
import Cliente from './pages/Cliente';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import HomePaciente from './pages/HomePaciente/HomePaciente';
import HomeProfissional from './pages/HomeProfissional/HomeProfissional';
import Footer from './componets/Footer/Footer';
import Satisfacao from './pages/Satisfacao/Satisfacao';
import Sobre from './pages/Sobre';
import AgendamentoConsulta from './pages/AgendamentoConsulta/AgendamentoConsulta';
import CompartilharArquivo from './pages/CompartilharArquivo/CompartilharArquivo';
import CriarServicoProfissional from './pages/CriarServicoProfissional/CriarServicoProfissional';
import MeusServicos from './pages/MeusServicos/MeusServicos';
import Rendimentos from './pages/Rendimentos/Rendimentos';
import Pagamento from './pages/Pagamento/Pagamento';
import HomeEscolhaProfissional from './pages/HomeEscolhaProfissional/CardHomeEscolhaProfissional';

function App() {
  return (
    <UserProvider>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/satisfacao" element={<Satisfacao />} />
          <Route path= '/pagamento' element = {<Pagamento/>}></Route>
          <Route path="/home-paciente" element={<HomePaciente />} />
          <Route path="/home-profissional" element={<HomeProfissional />} />
          {/* <Route path="/escolha-profissional" element={<CardsProfissionais />} /> */}
          <Route path="/agendamento-consulta" element={<AgendamentoConsulta />} />
          <Route path="/compartilhar-arquivo" element={<CompartilharArquivo />} />
          <Route path="/criar-servico-profissional" element={<CriarServicoProfissional />} />
          <Route path="/meus-servicos" element={<MeusServicos />} />
          <Route path="/meus-rendimentos" element={<Rendimentos />} />
          <Route path="/escolha-profissional" element={<HomeEscolhaProfissional />} />
        </Routes>

        <Footer />
      </>
    </UserProvider>
  );
}

export default App;
