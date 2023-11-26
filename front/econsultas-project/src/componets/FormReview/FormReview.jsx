import{BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
   BsFillEmojiNeutralFill, BsFillEmojiFrownFill }  from "react-icons/bs";
import "../FormReview/assets/css/styles.css";



function FormReview  (data)  {
  return (
    <div className="form-review">
      <div className="form-controol score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill/>
          <p className="paraf">Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutal" name="review" required />
          <BsFillEmojiNeutralFill/>
          <p className="paraf">Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill/>
          <p className="paraf">Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill/>
          <p className="paraf">Muito Satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Conte como foi sua experiência ... " required> </textarea>
      </div>
      
    </div>
  )
}

export default FormReview