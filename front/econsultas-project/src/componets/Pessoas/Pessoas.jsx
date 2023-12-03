import '../Pessoas/assets/css/styles.css'
function Pessoas() {
  return (
    <section className="equipe">
    <p className="equipe__descricao">Conheça a comunidade por trás da iniciativa</p>
    <div className="pessoas">
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--jonatha"></div>
            <span className="pessoa__nome">Jonata Fabrício</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--karolynne"></div>
            <span className="pessoa__nome">Karolynne Freire</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--lais"></div>
            <span className="pessoa__nome">Laís Serafim</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--leticia"></div>
            <span className="pessoa__nome">Letícia Siqueira</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--maju"></div>
            <span className="pessoa__nome">Maria Júlia</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
        <div className="pessoa">
            <div className="pessoa__imagem pessoa__imagem--rogerio"></div>
            <span className="pessoa__nome">Rogério Lucena</span>
            <span className="pessoa__funcao">Front-End</span>
        </div>
    </div>
</section>
  )
}

export default Pessoas