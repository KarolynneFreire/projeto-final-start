import { Link, useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import Validacao from './CadastroValidacao';
import axios from 'axios';


function Cadastro() {

  const [values, setValues] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({
  })

  const handleInput = (event) =>{
    setValues(prev =>({...prev,[event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validacao(values));
    if(errors.nome ==="" && errors.email === "" && errors.senha === ""){
      axios.post('https://localhost:8081/cadastro', values)
      .then(res => {
        navigate ('/login');
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25  border'>
            <h2>Cadastra-se</h2>
            <form action="" onSubmit={handleSubmit} >
                <div className='mb-3'>
                <label htmlFor="name">Nome</label>
                <input className="form-control rounded-0" type="text" placeholder='Digite seu nome'
                 onChange={handleInput} name='nome'/>
                 {errors.nome && <span className='text-danger'>{errors.nome}</span> }
                </div>
                <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input className="form-control rounded-0" type="email" placeholder='Digite seu email'
                 onChange={handleInput} name='email'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span> }
                </div>
                <div className='mb-3'>
                <label htmlFor="password">Senha</label>
                <input className="form-control rounded-0" type="password" placeholder='Digite sua senha'
                onChange={handleInput} name='senha'/>
                {errors.senha && <span className='text-danger'>{errors.senha}</span> }
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Confirmar</button>
                <p>Você concorda com nossos termos e politicas</p>
                <Link to="/login" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Cadastro