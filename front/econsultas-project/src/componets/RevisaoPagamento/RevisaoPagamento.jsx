import '../RevisaoPagamento/assets/css/styles.css'
const RevisaoPagamento =  ({data}) => {
  return (
    <div className="thack-container">
      <h2 className="titulo-resisao">Está quase lá... </h2>
      <p > Ficamos bastantes felizes pela preferência!</p>
      <p>Para concluir aperte o botão abaixo: </p>

      <h3> Aqui está um resumo da sua compra {data.name}: </h3>
      <p className="review-data">
        <span> Tipo da Compra: </span>
        {data.verification}
      </p>
      <p className="review-data">
        <span> Número do Cartão: </span>
        {data.numero}
      </p>
      <p className="review-data">
        <span> Tipo do Cartão: </span>
        {data.cartao}
      </p>
      <p className="review-data">
        <span>Valor: </span>
        <p>R$ 100,0</p>
        
      </p>
    </div>
  )
}


export default RevisaoPagamento;