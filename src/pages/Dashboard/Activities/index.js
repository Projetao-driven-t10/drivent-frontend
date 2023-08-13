import React, { useEffect } from 'react';
import { Description, Title } from './style';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import DaysButtonList from './components/daysButtons';
import ContainerActivities from './components/containerActivities';
import { useContext } from 'react';
import PaymentInfoContext from '../../../contexts/PaymentContext';
import { getPayment } from '../../../services/paymentApi';

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

  if(PaymentContext.paymentData.typeSelected?.isRemote) return <>Sua modalidade de ingresso não precisa escolher as atividade. Voce terá acesso a todas as atividades</>;
  if(!PaymentContext.paymentData) return <>Voce precisa ter realizado o pagamento antes de fazer a escolha de atividades</>;
  if(daysList.length === 0) return <>Não há atividades cadastradas</>;

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
