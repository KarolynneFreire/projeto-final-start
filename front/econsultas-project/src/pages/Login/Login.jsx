import { Link, useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import Validacao from './LoginValidacao';
import axios from 'axios';
import login from "../Login/assets/img/log-in.webp"
import "../Login/assets/css/styles.css"
import google from "../Login/assets/img/logotipo-google.jpg"


function Login() {

  const [values, setValues] = useState({
    email: '',
    senha: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({
  })

  const handleInput = (event) =>{
    setValues(prev =>({...prev,[event.target.email]: [event.target.value]}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validacao(values));
    if(errors.email === "" && errors.senha === ""){
      axios.post('https://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Sucesso"){
          navigate('/home');
        }else{
          alert("Não existe nenhum registro");
        }
      })
      .catch(err => console.log(err));
    }
  }


  return (
  <>
  <div className='container d-flex justify-content-center align-items-center min-vh-100 card-content'>
    <div className='row border rounder-5 p-3 bg-white shadow box-area'>
      <div className='col-md-6 rounder-4 d-flex justify-content-center align-items-center flex-column left-box card-image'>
        <div className='feature-image m-3'>
        <img src={login} alt="login" className='img-fluid img-form' />
        </div>
        <p className='text-white fs-2'>Seja Cliente</p>
        <small className='text-white text-wrap text-center' > junte-se concosco nessa experiencia </small>
      </div>

      <div className='col-md-6 right-box'>
        <div className='row align-items-center '>
          <div className='header-text mb-4'>
            <h1>Login</h1>
            <p>Estamos felizes em ter você de volta </p>

            <form className ='form-card' action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input className="form-control form-control-lg bg-light fs-6 rounded-0" type="email" placeholder='Digite seu email'
                onChange={handleInput} name='email'/>
                {errors.email && <span className='text-danger'>{errors.email}</span> }
                </div>
                <div className='mb-1'>
                <label htmlFor="password">Senha</label>
                <input className="form-control rounded-0" type="password" placeholder='Digite sua senha'
                onChange={handleInput} name='senha'/>
                {errors.senha && <span className='text-danger'>{errors.senha}</span> }
                </div>
                <div className='input-group mb-5 d-flex justify-content-between'>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input' name="" id="formCheck" />
                    <label htmlFor="formCheck" className='form-check-label text-secondary'><small>Lembre-me</small></label>
                  </div>
                  <div className='forgot'>
                      <small><a href="#">Esqueceu a senha? </a></small>
                  </div>
                </div>
                <div className='input-group mb-3'>
                <button type='submit' className='btn btn-lg btn-success w-100 fs-6'>Logar</button>
                </div>
                <div className='input-group mb-3'>
                <button type='submit' className='btn btn-lg btn-light w-100  fs-6'> <img src={google} alt="marca da google" className='google m-2'/>
                <small>Faça login pelo Google</small></button>
                </div>
                <div className='form-check mb-3'>
                    <input type="checkbox" className='form-check-input' name="" id="formCheck" />
                    <label htmlFor="formCheck" className='form-check-label text-secondary'><small>Você concorda com nossos termos e politicas</small></label>
                  </div>
                <div className='row'>
                    <small>Não tem conta? <Link to="/cadastro">Cadastra-se</Link> </small>
                </div>
                
            </form>

          </div>

        </div>

      </div>
    </div>

  </div>
  
  
  
  </>
  )
}

export default Login
