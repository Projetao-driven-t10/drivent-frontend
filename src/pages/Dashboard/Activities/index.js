import React, { useEffect } from 'react';
import { Description, Title } from './style';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import DaysButtonList from './components/daysButtons';
import ContainerActivities from './components/containerActivities';
import { useContext } from 'react';
import PaymentInfoContext from '../../../contexts/PaymentContext';
import { getPayment } from '../../../services/paymentApi';
import styled from 'styled-components';

export default function Activities() {
  const PaymentContext = useContext(PaymentInfoContext);
  const [daysList, setDaysList] = React.useState([]);
  const [buttonSelected, setButtonSelected] = React.useState({ day: '' });
  // atividades que serão listadas no quadro
  const [activitiesByDay, setActivitiesByDay] = React.useState([]);
  const token = useToken();
  useEffect(() => {
    api.get('/activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((data) => {
        setDaysList([...data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activitiesByDay]);

  if(PaymentContext.paymentData.typeSelected?.isRemote) return <Warning>Sua modalidade de ingresso não precisa escolher as atividade. Voce terá acesso a todas as atividades</Warning>;
  if(!PaymentContext.paymentData) return <Warning>Voce precisa ter realizado o pagamento antes de fazer a escolha de atividades</Warning>;
  if(daysList.length === 0) return <Warning>Não há atividades cadastradas</Warning>;

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Description hotelAlreadySelected={buttonSelected.day === '' ? true : false}>Primeiro, filtre pelo dia do evento:</Description>
      <DaysButtonList 
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
        daysList={daysList}
        setActivitiesByDay={setActivitiesByDay}
      ></DaysButtonList>
      <ContainerActivities activitiesByDay={activitiesByDay}/>
    </>
  );
}

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8E8E8E;
  width: 100%;
  height: 100%;
`;
