import * as S from "./styles";
import {
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

export function ReviewForm() {
  return (
    <S.ReviewForm>
      <S.ScoreContainer>
        <S.RadioContainer>
          <input type="radio" name="review" value="unsatisfied" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input type="radio" name="review" value="neutral" required />
          <BsEmojiNeutralFill />
          <p>Pode ser melhor</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input type="radio" name="review" value="satisfied" required />
          <BsEmojiSmileFill />
          <p>Satisfeito</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input type="radio" name="review" value="very_satisfied" required />
          <BsEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </S.RadioContainer>
      </S.ScoreContainer>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="conte como foi a sua experiencia com o produto"
          required
        ></textarea>
      </div>
    </S.ReviewForm>
  );
}
