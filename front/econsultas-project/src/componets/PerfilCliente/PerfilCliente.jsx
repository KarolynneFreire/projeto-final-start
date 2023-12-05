import "./assets/css/styles.css"

function PerfilCliente() {
    return(
        
                <div className='pfc'>
                
                <div className="info">
                <h3>Editar Perfil</h3>
                </div>

                <div className="user_icon">
                <img id="icon"src="../src/components/PerfilCliente/assets/img/user_icon.png" alt="imagem" /> 
                <img id="edit" src="./src/components/PerfilCliente/assets/img/pencil_icon.png" alt="imagem" />
                </div>
                
                <div className="detalhes">
                <label className="frase" htmlFor="">Nome</label>    
                <input type="text" className="phrase" placeholder='ex:Maria' 
                />
                <label className="frase" htmlFor="">Localização</label>
                <input type="text" className="phrase" placeholder='ex:Bairro,N°'/>
                <label className="frase" htmlFor="">Data de nascimento</label>
                <input type="text" className="phrase" placeholder='ex:00/00/0000'/>
                <label className="frase" htmlFor="">Gênero</label>
                <input type="text" className="phrase" placeholder='ex:Cis'/>
                </div>
                <button>Salvar</button>
                </div>
        
        
    )
}

export default PerfilCliente