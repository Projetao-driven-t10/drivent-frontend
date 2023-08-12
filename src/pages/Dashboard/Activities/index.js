import React, { useEffect } from 'react';
import { Description, Title } from './style';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import DaysButtonList from './components/daysButtons';
import ContainerActivities from './components/containerActivities';

export default function Activities() {
  const [daysList, setDaysList] = React.useState([]);
  // atividades que serão listadas no quadro
  const [activitiesByDay, setActivitiesByDay] = React.useState([]);
  const token = useToken();
  useEffect(() => {
    console.log(activitiesByDay);
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

  if(daysList.length === 0) return <>Não há atividades cadastradas</>;

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Description hotelAlreadySelected={true}>Primeiro, filtre pelo dia do evento:</Description>
      <DaysButtonList 
        daysList={daysList}
        setActivitiesByDay={setActivitiesByDay}
      ></DaysButtonList>
      <ContainerActivities activitiesByDay={activitiesByDay}/>
    </>
  );
}
