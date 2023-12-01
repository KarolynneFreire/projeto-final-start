import "../TelaTeleconsulta/assets/css/styles.css"
import PersonaProfissional from './assets/img/personas_medico.jpg'
import PersonaPaciente from './assets/img/persona_paciente.jpg'
import MicrofoneIco from './assets/img/microphone_icon_white.png'
import CameraIco from './assets/img/camera_video_icon_white.png'
import MaoIco from './assets/img/mao_levantada_white_icon.png'
import OpcoesIco from './assets/img/opcoes_icon_white.png'
import PowerOffIco from './assets/img/power_off_icon_red.png'
import ChatIco from './assets/img/chat_media_icon_white.png'
import InformationIco from './assets/img/information_sign_icon_white.png'


function TelaTeleconsulta() {

    return (
        <div className="container-consulta">

            <div className="fotos-consulta">

                <div className="call-profissional">
                    <img src={PersonaProfissional} alt="" />
                    <p>Dr. Brandon Swotz</p>
                </div>

                <div className="call-cliente">
                    <img src={PersonaPaciente} alt="" />
                    <p>Matheus Jordan (você)</p>
                </div>

            </div>

            <div className="botões">

                <div className="botões-centro">
                    <img src={MicrofoneIco} alt="imagem"/>
                    <img src={CameraIco} alt="imagem"/>
                    <img src={MaoIco} alt="imagem"/>
                    <img src={OpcoesIco} alt="imagem"/>
                    <img src={PowerOffIco} alt="imagem"/>
                </div>

                <div className="botões-direita">
                    <img src={ChatIco} alt="imagem"/>
                    <img src={InformationIco} alt="imagem"/>
                </div>

            </div>

        </div>

    )
}

export default TelaTeleconsulta