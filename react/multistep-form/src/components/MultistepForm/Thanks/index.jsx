import { Container, ReviewData } from "./styles";

export function Thanks() {
  return (
    <Container>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está um resumo da sua avaliação:</h3>
      <ReviewData>
        <span>Satisfação com o produto:</span>
      </ReviewData>
      <ReviewData>
        <span>Comentário:</span>
      </ReviewData>
    </Container>
  );
}
