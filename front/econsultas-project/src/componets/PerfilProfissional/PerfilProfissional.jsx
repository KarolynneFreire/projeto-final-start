import "../PerfilProfissional/assets/css/styles.css"

function PerfilProfissional() {
    return(
        
                <div className="perfil-profissional">
                
                <div className="info-profissional">
                <h3>Editar Perfil</h3>
                </div>

                <div className="user_icon-profissional">
                <img id="icon-profissional"src="../src/components/PerfilProfissional/assets/img/user_icon.png" alt="imagem" /> 
                <img id="edit-profissional" src="./src/components/PerfilProfissional/assets/img/pencil_icon.png" alt="imagem" />
                </div>
                
                <div className="detalhes-profissional">
                <label className="frase-profissional" htmlFor="">Nome</label>    
                <input type="text" className="phrase-profissional" placeholder='ex:Maria' 
                />
                <label className="frase-profissional" htmlFor="">Localização</label>
                <input type="text" className="phrase-profissional" placeholder='ex:Bairro,N°'/>
                <label className="frase-profissional" htmlFor="">Data de nascimento</label>
                <input type="text" className="phrase-profissional" placeholder='ex:00/00/0000'/>
                <label className="frase-profissional" htmlFor="">CRM/CRN</label>
                <input type="text" className="phrase-profissional" placeholder='ex:0.000/0000'/>
                <label className="frase-profissional" htmlFor="">Sobre mim</label>
                <input type="text" className="phrase-sobre" placeholder=''/>
                <label className="frase-profissional" htmlFor="">Formação</label>
                <input type="text" className="phrase-formacao" placeholder=''/>

                </div>
                <button>Salvar</button>
                </div>
        
        
    )
}

export default PerfilProfissional 