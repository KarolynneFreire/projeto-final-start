import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import "../Steps/assets/css/styles.css"


const Steps = ({ curretStep }) => {
  return (
    <div className='steps'>
        <div className='step active'>
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>
        <div className= {`step ${ curretStep >=1 ? "active" : ""}`}>
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>
        <div className={`step ${ curretStep >=2 ? "active" : ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Steps