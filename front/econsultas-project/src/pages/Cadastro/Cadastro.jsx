import { Link, useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import Validacao from './CadastroValidacao';
import axios from 'axios';
import "../Cadastro/assets/css/styles.css"
import cadastro from"../Cadastro/assets/img/cadastro-casa.jpg"


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
    setValues({...values, [event.target.name]: event.target.value.trim()});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const newErrors = Validacao(values);
    setErrors(newErrors);

    if(Object.values(newErrors).every(error => error === "")){
      axios.post('http://localhost:8081/cadastro', values)
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  }

  return (

    <div className='container d-flex justify-content-center align-items-center min-vh-100 card-contentt'>
    <div className='row border rounder-5 p-3 bg-white shadow box-area'>
      <div className='col-md-6 rounder-4 d-flex justify-content-center align-items-center flex-column left-box card-imagee'>
        <div className='feature-image m-3'>
         <img src={cadastro} alt="login" className='img-fluid img-form-cadastro' />
        </div>
        <p className='fs-2 text-black'>Olá, realize seu cadastro!</p>
        <small className='text-wrap text-center text-black' > junte-se concosco nessa experiencia </small>
      </div>

      <div className='col-md-6 right-box card-form'>
        <div className='row align-items-center '>
          <div className='header-text mb-4'>
            <h1 className='text-black'>Cadastro</h1>
            <p className='text-black'>Bem-vindo, simbora fazer o seu cadastro? </p>

            <form className ='form-card' action="" onSubmit={handleSubmit} >
                <div className='mb-3'>
                <label className='text-black' htmlFor="name">Nome</label>
                <input className="form-control rounded-0" type="text" placeholder='Digite seu nome'
                 onChange={handleInput} name='nome'/>
                 {errors.nome && <span className='text-danger'>{errors.nome}</span> }
                </div>
                <div className='mb-3'>
                <label className='text-black' htmlFor="email">Email</label>
                <input className="form-control rounded-0" type="email" placeholder='Digite seu email'
                 onChange={handleInput} name='email'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span> }
                </div>
                <div className='mb-3'>
                <label className='text-black' htmlFor="password">Senha</label>
                <input className="form-control rounded-0" type="password" placeholder='Digite sua senha'
                onChange={handleInput} name='senha'/>
                {errors.senha && <span className='text-danger'>{errors.senha}</span> }
                </div>
                <button type='submit' className='btn btn-lg btn-success w-100 fs-6'>Confirmar</button>
                <div className='form-check mb-3'>
                    <input type="checkbox" className='form-check-input' name="" id="formCheck" />
                    <label htmlFor="formCheck" className='form-check-label text-secondary'><small className='text-black'>Você concorda com nossos termos e politicas</small></label>
                  </div>
                <Link to="/login" className='btn btn-default border w-100 fs-6 text-decoration-none text-black'>Login</Link>
            </form>

</div>

</div>
</div>

</div>
</div>
  )
}

export default Cadastro