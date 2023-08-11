import styled from 'styled-components';
import dayjs from 'dayjs';
import useToken from '../../../../hooks/useToken';
import api from '../../../../services/api';
import { useEffect } from 'react';
import React from 'react';

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function Button({ day, setActivitiesByDay, id, token }) {
  const [dayOfButton, setDay] = React.useState(day);
  const [weekPosition, setWeekPosition] = React.useState(new Date(day).getDay());
  const [dateDay, setDateDay] = React.useState(dayjs(day).format('DD/MM'));

  function getActivitiesByDay() {
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
      onClick={() => getActivitiesByDay(day)} 
      key={id}
    >{ weekDays[weekPosition] }, { dateDay }
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  background-color: lightgray;
  padding: 12px;
  border-radius: 12px;
`;
