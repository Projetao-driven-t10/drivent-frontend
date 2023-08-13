import styled from 'styled-components';
import dayjs from 'dayjs';
import React from 'react';
import Activity from './activity';
export default function ContainerActivities({ activitiesByDay }) {
  const [places, setPlaces] = React.useState([]);

  React.useEffect(() => {
    const groupedActivities = getActivitiesPlaces(activitiesByDay);
    setPlaces(groupedActivities);
  }, [activitiesByDay]);
  function vacancies(a) {
    return a.vacancies - a.Subscription.length;
  }

  function countActivityHours(a) {
    const start = dayjs(a.start);
    const startHour = start.hour();
    const startMinute = start.minute();
    const end = dayjs(a.end);
    const endHour = end.hour();
    const endMinute = end.minute();
                
    if (startMinute + endMinute >= 60) {
      return endHour - startHour + 1;
    }
    return endHour - startHour;
  }

  function getActivitiesPlaces(activities) {
    const places = [];
    const groupedActivities = {};
        
    for (let i = 0; i < activities.length; i++) {
      const place = activities[i].place;
      if (!places.includes(place)) {
        places.push(place);
        groupedActivities[place] = [activities[i]];
      } else {
        groupedActivities[place].push(activities[i]);
      }
    }
    return groupedActivities;
  }

  return (
    <Container>
      {Object.keys(places).map(place => (
        <ContainerPlace key={place}>
          <Title>{place}</Title>
          <SubContainer>
            {places[place].map(activity => (
              <Activity
                key={activity.id}
                name={activity.name}
                start={activity.start}
                end={activity.end}
                vacancies={vacancies(activity)}
                activityHours={countActivityHours(activity)}
              />
            ))}
          </SubContainer>
        </ContainerPlace>
      ))}
    </Container>
  );
}

const Container = styled.div`
display: flex;
// background-color: red;
margin-top: 50px;
`;
const ContainerPlace = styled.div`
position: relative;
height: 432px;
width: 288px;
// background: yellow;
`;
const Title = styled.h2`
width: 170px;
height: 20px;
position: absolute;
top: -10px;
left: 70px;
// background: pink;
font-family: Roboto;
font-size: 17px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #7B7B7B;
`;
const SubContainer = styled.div`
height: 392px;
width: 288px;
// background: green;
border: 1px solid #D7D7D7;
margin-top: 40px;
padding: 10px;
`;
