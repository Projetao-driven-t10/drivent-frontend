import styled from 'styled-components';
import { BsPersonFill } from 'react-icons/bs';

export const Title = styled.h4`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 2rem;
`;
export const Subtitle = styled.h6`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 1.2rem;
color: #8e8e8e;
margin-top: 2.2rem;
`;
export const CardConteiner = styled.div`
display: flex;
`;
export const Card = styled.div`
width: 12.25rem;
height: 16.5rem;
border-radius: 10px;
background-color: ${props => props.isSelected ? '#FFEED2' : '#EBEBEB'};
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding-left: 0.7rem;
margin: 1rem;
font-family: 'Roboto', sans-serif;
img {
  width: 10.5rem;
  height: 7rem;
  border-radius: 5px;
  padding-top: 1rem;
};
h6{
  font-size: 1.2rem;
  font-weight: 400;
  color: #343434;
};
p{
  font-weight: 700;
  font-size: 0.8rem;
  color: #3C3C3C;
};
span{
  font-size: 0.8rem;
  font-weight: 400;
  color: #3C3C3C;
};
`;
export const RoomContainer = styled.div`
 display: ${props => props.displayRooms ? 'flex' : 'none'};
 flex-direction: column;
 flex-wrap: wrap;
`;
export const Button = styled.button`
width: 12rem;
height: 2rem;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, .6);
border: none;
background-color: #e0e0e0;
display: ${props => props.displayButton ? 'flex' : 'none'};
justify-content: center;
align-items: center;
margin-top: 55px;
`;
export const Habitation = styled.div`
width: 190px;
height: 45px;
border: 1px solid #cecece;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
margin-top: 13px;
background-color: ${props => props.isSelected ? '#FFEED2' : '#fff'};
`;
export const PersonIcon = styled.span`
width: 27px;
height: 27px;
`;
export const SelectedPersonIcon = styled(BsPersonFill)`
color: hotpink;
`;
