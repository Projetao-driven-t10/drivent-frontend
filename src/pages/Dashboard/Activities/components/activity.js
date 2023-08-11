import styled from 'styled-components';
import dayjs from 'dayjs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export default function Activity({ name, start, end, activityHasVacancies, activityHours }) {
  // de acordo com a requisição feita para inscrever a pessoa na atividade, usar o IconV se der certo
  // de acordo com a função do activityhasvacancies, usar o IconX se for false
  const startTime = dayjs(start).add(3, 'hour').format('HH:mm');
  const endTime = dayjs(end).add(3, 'hour').format('HH:mm');

  return (
    <Container activityHours={activityHours}>
      <SubContainer>
        <Name>{name}</Name>
        <Time>{startTime} - {endTime}</Time>
      </SubContainer>
      
      <Separator/>
      
      <SubContainerB>
        <IconV/>
        {/* <IconX/> */}
        <Text activityHasVacancies={activityHasVacancies}>Esgotado</Text>
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
height: ${props => 80 * props.activityHours}px;
width: 265px;
background-color: #F1F1F1;
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

const Text = styled.p`
font-family: Roboto;
font-size: 9px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
color: ${(props) => props.activityHasVacancies ? '#078632' : '#CC6666'};
`;
