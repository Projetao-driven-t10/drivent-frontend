import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import { Title, Subtitle, CardConteiner } from './style';
export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const { hotel, hotelLoading, hotelError } = useHotel();
  useEffect(() => {
    if (hotel) {
      setHotels(hotel);
      console.log(hotels);
    }
    else{
      setError(hotelError);
    }
  }, [hotelLoading]);
  if(hotelLoading) return <></>;
  if(error === 'Not Found') return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
    </>);
  if(error === 'Payment Required') return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</p>
    </>
  );
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <CardConteiner>
        <Card>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl7wnKXlkPujvGtuCFKDJgMrbocSfVqJURg&usqp=CAU' alt='hotel' />
          <h6>Nome do hotel</h6>
          <p>Tipos de acomodação:</p>
          <span>Single e Double</span>
          <p>Vagas disponíveis:</p>
          <span>103</span>
        </Card>
      </CardConteiner>
    </>);
};

const Card = styled.div`
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
