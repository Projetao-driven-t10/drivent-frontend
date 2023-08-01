import { PaymentPage, Title, Description, OptionBox, OptionType, OpetionPrice, OpetionContainer, ConfirmButton } from './style';

export default function Payment() {
  return (
    <PaymentPage>
      <Title>Ingresso e Pagamento</Title>
      <Description>Primeiro, escolha sua modalidade de ingresso</Description>
      <OpetionContainer>
        <OptionBox>
          <OptionType>Presencial</OptionType>
          <OpetionPrice>R$ 250</OpetionPrice>
        </OptionBox>
        <OptionBox>
          <OptionType>Presencial</OptionType>
          <OpetionPrice>R$ 250</OpetionPrice>
        </OptionBox>
      </OpetionContainer>

      {/* Aparecer somente em caso de tipo de Hospedagem === Presencial */}
      <Description>Ótimo! Agora escolha sua modalidade de Hospedagem</Description>
      <OpetionContainer>
        <OptionBox>
          <OptionType>Sem hotel</OptionType>
          <OpetionPrice>+ R$ 0</OpetionPrice>
        </OptionBox>
        <OptionBox>
          <OptionType>Com Hotel</OptionType>
          <OpetionPrice>+ R$ 250</OpetionPrice>
        </OptionBox>
      </OpetionContainer>

      <Description>Fechado! O total ficou em <strong>R$ 600</strong>. Agora é só confirmar!</Description>
      <ConfirmButton>RERSERVAR INGRESSO</ConfirmButton>
    </PaymentPage>
  );
}
