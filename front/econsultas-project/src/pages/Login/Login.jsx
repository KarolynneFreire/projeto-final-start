import {  useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import Validacao from './LoginValidacao';
import axios from 'axios';
import "../Login/assets/css/styles.css"
import google from "../Login/assets/img/logotipo-google.jpg"
import { useEffect } from 'react';


function Login() {

  const [values, setValues] = useState({
    email: '',
    senha: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({
  })

  useEffect(
    function() {
      const container = document.getElementById('container')
      const registroBnt = document.getElementById('cadastre');
      const loginBnt = document.getElementById('login');
      
      
      registroBnt.addEventListener('click', () => {
          container.classList.add("active");
      });
      
      
      loginBnt.addEventListener('click',() => {
          container.classList.remove("active");
      });
      
    },
    []
  )

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
  <div className='container-top' id='container'>
    <div className='form-container sign-up'>
        <form className ='form-card' action="" onSubmit={handleSubmit}>
                  <h1>Login</h1>
                <div className='mb-2'>
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
                <div className='input-group mb-3 d-flex justify-content-between'>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input' name=""  />
                    <label htmlFor="#" className='form-check-label text-secondary'><small>Lembre-me</small></label>
                  </div>
                  <div className='forgot'>
                      <small><a href="#">Esqueceu a senha? </a></small>
                  </div>
                </div>
                <div className='input-group mb-2'>
                <button type='submit' className='btn btn-lg btn-success w-100 fs-6'>Logar</button>
                </div>
                <div className='input-group mb-2'>
                <button type='submit' className='btn btn-lg btn-light w-100  fs-6'> <img src={google} alt="marca da google" className='google m-2'/>
                <small>Faça login pelo Google</small></button>
                </div>
                <div className='form-check mb-2'>
                    <input type="checkbox" className='form-check-input' name="" />
                    <label htmlFor="#" className='form-check-label text-secondary'><small>Você concorda com nossos termos e politicas</small></label>
                  </div>  
            </form>
    </div>
    <div className='form-container sign-in'>
    <form action="" onSubmit={handleSubmit} >
                <h1>Criar Cadastro</h1>
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
                <div className='form-check mb-2'>
                    <input type="checkbox" className='form-check-input' name="" />
                    <label htmlFor="#" className='form-check-label text-secondary'><small>Você concorda com nossos termos e politicas</small></label>
                  </div>  
            </form>
            </div>
       <div className='togle-container'> 
          <div className='togle'>
            <div className='togle-painel togle-painel-left'>
              <h1>Estamos felizes em ter você de volta</h1>
              <p> Insira seus dados pessoais para usar todos os recursos do site</p>
              <button className='hidden btn btn-success w-90 hiddeen' id='login'>Logar</button>
            </div>
            <div className='togle-painel togle-painel-right'>
              <h1>Olá, amigo!!</h1>
              <p> Cadastre-se seus dados pessoais para usar todos os recursos do site</p>
              <button className='hidden btn btn-success w-80 hiddeen' id='cadastre'>Cadastrar</button>
            </div>
          </div>
       </div>
  </div>
  
  
  
  </>
  )
}

export default Login
