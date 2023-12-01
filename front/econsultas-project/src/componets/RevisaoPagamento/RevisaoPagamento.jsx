
const RevisaoPagamento =  ({data}) => {
  return (
    <div className="thack-container">
      <h2>Está quase lá... </h2>
      <p > Ficamos bastantes felizes pela preferência!</p>
      <p>Para concluir aperte o botão abaixo: </p>

      <h3> Aqui está um resumo da sua compra {data.name}: </h3>
      <p className="review-data">
        <span> : </span>
        {/* {emojiData[data.review]} */}
      </p>

      <p className="review-data">
        <span> Número do Cartão: </span>
        {/* {emojiData[data.review]} */}
      </p>
      <p className="review-data">
        <span>Valor: </span>
        <p>R$ 100,0</p>
        {/* {data.comment} */}
      </p>
    </div>
  )
}

export default RevisaoPagamento;