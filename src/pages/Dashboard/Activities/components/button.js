import styled from 'styled-components';
import dayjs from 'dayjs';
import useToken from '../../../../hooks/useToken';
import api from '../../../../services/api';
import { useEffect } from 'react';
import React from 'react';

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function Button({ day, setActivitiesByDay, id, token, selected, setButtonSelected }) {
  const [dayOfButton, setDay] = React.useState(day);
  const formatedDay = (new Date(day));
  const formatedMonth = dayjs(day).format('MM');
  const formatedYear = dayjs(day).format('YYYY');
  const [weekPosition, setWeekPosition] = React.useState((new Date(`${formatedYear}-${formatedMonth}-${formatedDay.getDate() + 2}`).getDay()));
  const [dateDay, setDateDay] = React.useState(`${formatedDay.getDate() + 1}/${formatedMonth}`);

  function getActivitiesByDay() {
    // console.log(localStorage.getItem(TICKET_ID));
    setButtonSelected({ day: day });
    api.get(`/activities/${dayOfButton}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((data) => {
        // console.log(data);
        setActivitiesByDay([...data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ButtonContainer 
      selected={selected}
      onClick={() => getActivitiesByDay(day)} 
      key={id}
    >{ weekDays[weekPosition] }, { dateDay }
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  background-color: ${(props) => props.selected ? '#FFD37D' : 'lightgray'};
  padding: 12px;
  border-radius: 12px;
  
`;
