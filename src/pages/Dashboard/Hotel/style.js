import styled from 'styled-components';

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
background-color: #EBEBEB;
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
