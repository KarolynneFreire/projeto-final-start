import '../FormUser/assets/css/styles.css'

const FormUser = ({data , updataFielHandler}) => {
  return (
    <div>
      <div className="form-controlle">
        <label className='form-label' htmlFor="nome">Nome: </label>
        <input className='form-input' type="text" name="name" id="name" placeholder="Digite seu nome" required 
        value={data.name || ""} onChange={ (e) => updataFielHandler ( "name", e.target.value)}/>
      </div>
      <div className="form-controlle">
        <label className='form-label' htmlFor="email">Email: </label>
        <input className='form-input' type="text" id="email" placeholder="Digite seu email" required
        value={data.email || ""} onChange={ (e) => updataFielHandler ( "email", e.target.value)} />
      </div>
    </div>
  )
}

export default FormUser