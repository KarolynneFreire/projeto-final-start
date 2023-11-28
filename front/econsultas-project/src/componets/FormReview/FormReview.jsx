import{BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
   BsFillEmojiNeutralFill, BsFillEmojiFrownFill }  from "react-icons/bs";
import "../FormReview/assets/css/styles.css";



const FormReview = ({data , updataFielHandler})  => {
  return (
    <div className="form-review">
      <div className="form-controol score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required 
          checked={data.review === "unsatisfied"} onChange={ (e) => updataFielHandler ( "review", e.target.value)}/>
          <BsFillEmojiFrownFill/>
          <p className="paraf">Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutal" name="review" required 
          checked={data.review === "neutal"} onChange={ (e) => updataFielHandler ( "review", e.target.value)}/>
          <BsFillEmojiNeutralFill/>
          <p className="paraf">Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required 
          checked={data.review === "satisfied"} onChange={ (e) => updataFielHandler ( "review", e.target.value)}/>
          <BsFillEmojiSmileFill/>
          <p className="paraf">Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required
          checked={data.review === "very_satisfied"} onChange={ (e) => updataFielHandler ( "review", e.target.value)} />
          <BsFillEmojiHeartEyesFill/>
          <p className="paraf">Muito Satisfeito</p>
        </label>
      </div>

      <div className="form-controlle">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Conte como foi sua experiência ... " required
        value={data.comment || ""} onChange={ (e) => updataFielHandler ( "comment", e.target.value)}> </textarea>
      </div>
      
    </div>
  )
}

export default FormReview