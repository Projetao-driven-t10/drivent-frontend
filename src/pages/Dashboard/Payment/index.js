import React, { useEffect } from 'react';
import { PaymentPage, Title, Description, OptionBox, OptionType, OpetionPrice, OpetionContainer, ConfirmButton, NonAvailablePage } from './style';

import useGetEnrollment from '../../../hooks/api/useGetEnrollment';
import { ticketTypeApi } from '../../../services/ticketTypeApi';
import useToken from '../../../hooks/useToken';
import Option from './Option';

export default function Payment() {
  const token = useToken();
  const [ticketsType, setTicketsType] = React.useState([]);
  const [typeSelected, setTypeSelected] = React.useState({ name: '', price: '', includesHotel: false });
  const [hotelSelected, setHotelSelected] = React.useState({ name: '', price: '' });
  const { data: enrollmentData, getEnrollmentLoading } = useGetEnrollment();
  const [savedEnrollment, setSavedEnrollment] = React.useState(enrollmentData ? true : false);

  function calculateFinalPrice() {
    if(typeSelected.name !== 'Online') return Number(typeSelected.price) + Number(hotelSelected.price);  
    return typeSelected.price;
  }

  useEffect(() => {
    // info data sobre enrollment check
    if(enrollmentData) {
      setSavedEnrollment(true);
    }else {
      setSavedEnrollment(false);
    }
    // requisicao para API
    ticketTypeApi(token)
      .then((data) => setTicketsType(data))
      .catch((err) => console.log(err));
  }, [getEnrollmentLoading]);

  // utiliza verificação da funcao assincrona para
  // obter o valor atualizado do dado requerido
  if(getEnrollmentLoading) return <></>;

  return (
    <>
      <PaymentPage isAllowed={savedEnrollment}>
        <Title>Ingresso e Pagamento</Title>
        <Description includesHotel={true}>Primeiro, escolha sua modalidade de ingresso</Description>
        
        <OpetionContainer includesHotel={true}>
          {ticketsType.map(({ id, name, includesHotel, isRemote, price }) => {
            return (
              <Option key={id} 
                name={name} 
                includesHotel={includesHotel}
                isRemote={isRemote}
                price={price}
                setTypeSelected={setTypeSelected}
                selected={(name === typeSelected.name)}
              ></Option>
            );
          })}
        </OpetionContainer>
        
        {/* Aparecer somente em caso de tipo de Hospedagem === Presencial */}
        <Description includesHotel={typeSelected.includesHotel}>Ótimo! Agora escolha sua modalidade de Hospedagem</Description>
        <OpetionContainer includesHotel={typeSelected.includesHotel}>
          <OptionBox selectedBackground={hotelSelected.name === 'Sem hotel'} 
            onClick={() => setHotelSelected({ name: 'Sem hotel', price: '0' })}>
            <OptionType>Sem hotel</OptionType>
            <OpetionPrice>+ R$ 0</OpetionPrice>
          </OptionBox>

          <OptionBox selectedBackground={hotelSelected.name === 'Com hotel'} 
            onClick={() => setHotelSelected({ name: 'Com hotel', price: '250' })}>
            <OptionType>Com Hotel</OptionType>
            <OpetionPrice>+ R$ 250</OpetionPrice>
          </OptionBox>
        </OpetionContainer>
        <Description includesHotel={hotelSelected.name !== '' || typeSelected.name === 'Online'}>Fechado! O total ficou em <strong>R$ {calculateFinalPrice()}</strong>. Agora é só confirmar!</Description>
        <ConfirmButton includesHotel={hotelSelected.name !== '' || typeSelected.name === 'Online'}>RERSERVAR INGRESSO</ConfirmButton>
      </PaymentPage>
      <NonAvailablePage isAllowed={savedEnrollment}>Voce precisa completar sua incrição antes de prosseguir pra escolha de ingresso</NonAvailablePage>
    </>
  );
}
