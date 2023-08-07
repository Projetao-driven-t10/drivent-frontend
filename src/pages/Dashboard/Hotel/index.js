import { useEffect, useState } from 'react';
import useHotel from '../../../hooks/api/useHotel';
import { Title, Subtitle, CardConteiner } from './style';
import HotelCard from './Card';
import { NonAvailablePage } from '../Payment/style';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const { hotel, hotelLoading, hotelError } = useHotel();
  useEffect(() => {
    if (hotel) {
      setHotels(hotel.data);
      console.log(hotel.data);
    }
    else {
      setError(hotelError);
    }
  }, [hotelLoading]);
  if (hotelLoading) return <></>;
  if (error === 'Not Found') return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NonAvailablePage>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</NonAvailablePage>
    </>);
  if (error === 'Payment Required') return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NonAvailablePage>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</NonAvailablePage>
    </>
  );
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <CardConteiner>
        {hotels?.map((h => <HotelCard key={h.id} name={h.name} image={h.image} rooms={h.Rooms} />))}
      </CardConteiner>
    </>);
};

