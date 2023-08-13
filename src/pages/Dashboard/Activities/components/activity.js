import styled from 'styled-components';
import dayjs from 'dayjs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { createActivitySubscription } from '../../../../services/activityApi';
import useToken from '../../../../hooks/useToken';
import React from 'react';
import { toast } from 'react-toastify';
export default function Activity({ name, start, end, vacancies, id, activityHours, subscription }) {
  const startTime = dayjs(start).add(3, 'hour').format('HH:mm');
  const endTime = dayjs(end).add(3, 'hour').format('HH:mm');
  const [iconSubscription, setIconSubscription] = React.useState(false);
  const token = useToken();
  function handleSubscription(id) {
    createActivitySubscription({ activityId: id }, token)
      .then (() => setIconSubscription(true))
      .catch((error) => {
        console.log(error);
        toast.error('This activity has a time overlap with an existing activity subscription!');
      });
  }

  return (
    <Container activityHours={activityHours} iconSubscription={iconSubscription} subscription={subscription}>
      <SubContainer>
        <Name>{name}</Name>
        <Time>{startTime} - {endTime}</Time>
      </SubContainer>
      
      <Separator/>
      
      <SubContainerB>
        {vacancies <= 0 ? (<IconX/>) : (iconSubscription || subscription !== undefined ? <IconV/> : <IconSubscription onClick={() => handleSubscription(id)}/>)}
        <Text activityHasVacancies={vacancies}>
          {vacancies <= 0 ? 'Esgotado':(iconSubscription || subscription !== undefined ? 'Inscrito' : `${vacancies} vagas`)}
        </Text>
      </SubContainerB>
    </Container>
  );
}

const SubContainer = styled.div`
width: 100%;
height: 100%;
// background-color: red;
`;

const SubContainerB = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Container = styled.div`
box-sizing: border-box;
height: ${props => 70 * props.activityHours}px;
width: 265px;
background-color: ${props => props.iconSubscription || props.subscription !== undefined ? '#D0FFDB' : '#F1F1F1'};
border-radius: 5px;
margin-bottom: 10px;
padding: 10px;
display: flex;
`;

const Name = styled.h3`
font-family: Roboto;
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #343434;
width: 171px;
margin-bottom: 5px;
`;

const Time = styled.p`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
`;

const Separator = styled.div`
width: 1px;
height: 100%;
background-color: #D7D7D7;
`;

const IconV = styled(AiOutlineCheckCircle)`
width: 20px;
height: 20px;
color: #078632;
`;

const IconX = styled(AiOutlineCloseCircle)`
width: 20px;
height: 20px;
color: #CC6666;
`;

const IconSubscription = styled(BiExit)`
width: 20px;
height: 20px;
color: #078632;
`;

const Text = styled.p`
font-family: Roboto;
font-size: 9px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
color: ${(props) => props.activityHasVacancies ? '#078632' : '#CC6666'};
`;
