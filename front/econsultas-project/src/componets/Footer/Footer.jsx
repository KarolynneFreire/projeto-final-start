import "../Footer/assets/css/style.css"

function footer() {
  return (
    <div>
      <footer className="text-center text-lg-start text-muted custom-footer">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block teste">
            <span>Conecte-se conosco nas redes sociais:</span>
          </div>

          <div className="">
            <a href="" className="me-4 link-secondary">
              <i className="bi bi-facebook teste tam-ico"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="bi bi-twitter-x teste tam-ico"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="bi bi-google teste tam-ico"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="bi bi-instagram teste tam-ico"></i>
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 teste">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>e-Consultas
                </h6>
                <p>
                  Junte-se à nós nessa jornada para um futuro mais saúdavel e conectado!
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 teste">

                <h6 className="text-uppercase fw-bold mb-4">
                  Sobre nós
                </h6>
                <p>
                  <a href="#!" className="text-reset">Quem somos?</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Como funciona?</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Trabalhe conosco</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">FAQ</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 teste">

                <h6 className="text-uppercase fw-bold mb-4">
                  Links úteis
                </h6>
                <p>
                  <a href="#!" className="text-reset">Especialidades</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Política de privacidade</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Termos de uso</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Fale conosco</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 teste">

                <h6 className="text-uppercase fw-bold mb-4">Informações</h6>
                <p>
                  <i className="bi bi-envelope me-3 teste"></i>
                  econsultas@gmail.com
                </p>
                <p><i className="bi bi-whatsapp me-3 teste"></i> + 01 234 567 88</p>
                <p><i className="bi bi-shield-check me-3 teste "></i> Google Safe Browsing - Site 100% seguro</p>
                <p className="texto-aviso">AVISO LEGAL: e-consultas é um clube de assinatura que disponibiliza uma plataforma de telemedicina que oferece serviços de consultas
                  médicas online. É fundamental compreender que a e-consultas não é um plano de saúde e não deve ser considerada como tal.
                  Nossa plataforma não oferece atendimento médico presencial, sendo exclusivamente focada em consultas médicas realizadas
                  de forma virtual. Valores sujeitos a alteração sem aviso prévio.</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4 teste">
          © 2023 e-consultas:
          <a className="text-reset fw-bold" href="#"> e-consultas.com</a>
        </div>

      </footer>
    </div>
  )
}

export default footer