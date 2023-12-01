import "../PagamentoForma/assets/css/styles.css"
import pix from '../PagamentoForma/assets/img/pix_icon.png'
import qrcode from '../PagamentoForma/assets/img/qr_code_icon.png'
import clipboard from '../PagamentoForma/assets/img/clipboard_icon_white.png'


function PagamentoForma() {

    return (

        <div className="container-forma-pix">

            <div className="voltar-e-texto">

                <div className="voltar-escolha-pagamento">
                    <a href="#">Alterar forma de pagamento</a>
                </div>

                <div className="titulo-pix">
                    <img src={pix} alt="" />
                    <h2>Pagamento com pix</h2>
                </div>

            </div>

            <div className="instruções-pagamento">

                <div className="instruções-pix-qrcode">
                    <h4>Instruções de pagamento</h4>

                    <ol>

                        <li>Abra o app do seu banco ou de pagamento.</li>
                        <li>Acesse área pix.</li>
                        <li>Clique em ler QR Code.</li>
                        <li>Escaneie o seguinte QR Code:</li>

                    </ol>

                    <img src={qrcode} alt="ícone de qr code" />

                </div>

                <div className="intruções-pix-copia-e-cola">
                    <h4 id="titulo-pix-copia-e-cola">Ou se preferir</h4>
                    <p>Copie o código abaixo e acesse o app de seu banco
                        ou de pagamentos. Clique em “área pix”, escolha a
                        opção pagar por "Pix copia e cola" e cole o código.
                        Depois, volte aqui e clique no botão
                        "Confirmar pagamento".</p>

                    <div className="borda-pix-copia-e-cola">
                        <p id="codigo-copia-e-cola"> 000000000000000000000br.example.pix2542pix.
                            axaas.com/qr/sale/pay_145738039323484885204
                            000053039802BR591E-CONSULTAS SERVICOS600
                            9Recife61009870131020062070503***63043C8Z </p>
                    </div>

                    <button className="botao-copiar-pix">Copiar <img src={clipboard} alt="ícone de copiar" /></button>

                </div>

            </div>
  
                    <button className="botao-confirmar-pagamento-pix">Confirmar pagamento</button>
                
        </div>

    )
}

export default PagamentoForma