/* eslint-disable react/prop-types */
import { Container, ReviewData } from "./styles";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export function Thanks({ data }) {
  return (
    <Container>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está um resumo da sua avaliação {data.name}:</h3>
      <ReviewData>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </ReviewData>
      <ReviewData>
        <span>Comentário:</span>
        {data.comment}
      </ReviewData>
    </Container>
  );
}
