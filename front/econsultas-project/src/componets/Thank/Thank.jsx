import "../Thank/assets/css/styles.css"

import{BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill, BsFillEmojiFrownFill }  from "react-icons/bs";


const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutal: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}



const Thank =  ({data}) => {
  return (
    <div className="thack-container">
      <h2>Falta só um pouquinho ... </h2>
      <p > A sua opnião é muito importante,em breve você receberá um desconto na próxima consulta!</p>
      <p>Para concluir aperto o botão abaixo: </p>

      <h3> Aqui está um resumo da sua avalição {data.name}: </h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thank;