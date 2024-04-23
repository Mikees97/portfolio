import Header from "../../components/Header";
import * as S from "./styled";

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <div>
          <h2>Bem vindo</h2>
          <p>
            Sou Michael, um estudannte de Front end. Comecei com a programçao em
            2017, programando em C++ na faculdade de desenvolvimento de jogos
            digitais, na qual me apaixonei com o poder dos códigos e a mágica
            que eles podem executar, desde a primeira vez fiquei muito empolgado
            com as infinitas possibilidades que a programção poderia atingir.
          </p>
        </div>
      </S.Container>
    </S.Main>
  );
}
