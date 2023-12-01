import { SlCheck } from "react-icons/sl";
import '../Progress/assets/css/styles.css'


const Progress = ({ curretStep }) => {
    return (
      <div className='steps'>
          <div className='step active'>
          <SlCheck />
              <p>Forma</p>
          </div>
          <div className= {`step ${ curretStep  >=1 ? "active" : ""}`}>
          <SlCheck />
              <p>Pagamento</p>
          </div>
          <div className={`step ${ curretStep  >=2 ? "active" : ""}`}>
          <SlCheck />
              <p>Revisão</p>
          </div>
      </div>
    )
  }

  export default Progress