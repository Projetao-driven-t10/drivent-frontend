import styled from 'styled-components';
import { fakeDays } from '../../../../services/activitiesApi';

export function DaysButtonList() {
  console.log(fakeDays);
  return(<List>
    {fakeDays.map((name) => (
      <Button>{name}</Button>
    ))}
  </List>);
}

const List = styled.div`
margin-top: 32px;
  display: flex;
  gap: 16px;
`;
const Button = styled.div`
  background-color: lightgray;
  padding: 12px;
  border-radius: 12px;
`;
