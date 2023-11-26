import '../FormUser/assets/css/styles.css'

function FormUser () {
  return (
    <div>
      <div className="form-control">
        <label className='form-label' htmlFor="nome">Nome: </label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
      </div>
      <div className="form-control">
        <label className='form-label' htmlFor="email">Email: </label>
        <input className='form-input' type="email" id="email" placeholder="Digite seu email" required />
      </div>
    </div>
  )
}

export default FormUser