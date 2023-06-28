import { func, string } from "prop-types";
import { FormControl } from "../UserForm/styles";
import * as S from "./styles";
import {
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

ReviewForm.propTypes = {
  data: {
    name: string,
    email: string,
    review: string,
    comment: string,
  },
  updateFieldHandler: func,
};

export function ReviewForm({ data, updateFieldHandler }) {
  return (
    <S.ReviewForm>
      <S.ScoreContainer>
        <S.RadioContainer>
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input
            type="radio"
            name="review"
            value="neutral"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsEmojiNeutralFill />
          <p>Pode ser melhor</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input
            type="radio"
            name="review"
            value="satisfied"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsEmojiSmileFill />
          <p>Satisfeito</p>
        </S.RadioContainer>
        <S.RadioContainer>
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </S.RadioContainer>
      </S.ScoreContainer>

      <FormControl>
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="conte como foi a sua experiencia com o produto"
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          required
        ></textarea>
      </FormControl>
    </S.ReviewForm>
  );
}
