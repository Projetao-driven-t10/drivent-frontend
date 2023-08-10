import { DaysButtonList } from './components/daysButtons';
import { Description, Title } from './style';
// import { getAllDaysOfActivities } from '../../../services/activitiesApi';

export default function Activities() {
  return (<>
    <Title>Escolha de atividades</Title>
    <Description hotelAlreadySelected={true}>Primeiro, filtre pelo dia do evento:</Description>

    <DaysButtonList/>
  </>
  );
}
