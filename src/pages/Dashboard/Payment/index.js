import React, { useEffect } from 'react';
import { PaymentPage, Title, Description, OptionBox, OptionType, OpetionPrice, OpetionContainer, ConfirmButton, NonAvailablePage } from './style';

import useGetEnrollment from '../../../hooks/api/useGetEnrollment';
import useTicketType from '../../../hooks/api/useTicketType';

export default function Payment() {
  const { data: ticketTypeData, ticketTypeLoading } = useTicketType();
  const { data: enrollmentData, getEnrollmentLoading } = useGetEnrollment();
  const [savedEnrollment, setSavedEnrollment] = React.useState(enrollmentData ? true : false);

  useEffect(() => {
    // info data sobre enrollment check
    console.log(ticketTypeData);

    if(enrollmentData) {
      setSavedEnrollment(true);
    }else {
      setSavedEnrollment(false);
    }
  }, [getEnrollmentLoading]);

  // utiliza verificação da funcao assincrona para
  // obter o valor atualizado do dado requerido
  if(getEnrollmentLoading) return <></>;

  return (
    <>
      <PaymentPage isAllowed={savedEnrollment}>
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
      <NonAvailablePage isAllowed={savedEnrollment}>Voce precisa completar sua incrição antes de prosseguir pra escolha de ingresso</NonAvailablePage>
    </>
  );
}
