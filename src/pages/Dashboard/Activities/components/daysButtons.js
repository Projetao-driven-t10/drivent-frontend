import styled from 'styled-components';
import dayjs from 'dayjs';
import useToken from '../../../../hooks/useToken';
import api from '../../../../services/api';
import React, { useEffect } from 'react';
import Button from './button';

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function DaysButtonList({ daysList, setActivitiesByDay, buttonSelected, setButtonSelected }) {
  const token = useToken();
  function getActivitiesByDay(day) {
    useEffect(() => {
      api.get(`/activities/${day}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((data) => {
          console.log(data);
          setActivitiesByDay([...data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }
  return(
    <List>
      {daysList.map((day, index) => {
        return (
          <Button 
            onClick={() => getActivitiesByDay(day)} 
            key={index}
            day={day.day}
            id={index}
            setActivitiesByDay={setActivitiesByDay}
            token={token}
            selected={buttonSelected.day === day.day ? true : false}
            setButtonSelected={setButtonSelected}
          ></Button>
        );
      })}
    </List>
  );
}

const List = styled.div`
margin-top: 32px;
  display: flex;
  gap: 16px;
`;
