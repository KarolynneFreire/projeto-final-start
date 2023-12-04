import { FaRegCreditCard } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import '../Progress/assets/css/styles.css'
import { FaRegSquareCheck } from "react-icons/fa6";


const Progress = ({ curretStep }) => {
    return (
      <div className='steps'>
          <div className='step active'>
          <FaRegCreditCard />
              <p>Forma</p>
          </div>
          <div className= {`step ${ curretStep  >=1 ? "active" : ""}`}>
          <MdAttachMoney />
              <p>Pagamento</p>
          </div>
          <div className={`step ${ curretStep  >=2 ? "active" : ""}`}>
          <FaRegSquareCheck />
              <p>Revisão</p>
          </div>
      </div>
    )
  }

  export default Progress