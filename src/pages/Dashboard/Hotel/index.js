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

  function typeOfHotelRooms(rooms) {
    const roomsCapacity = [];
    let result = '';
    let stringCapacity = '';
    console.log(hotel); 
    rooms.map (r => {
      if (!roomsCapacity.includes(r.capacity)) {
        roomsCapacity.push(r.capacity);
      }
    });
    if (roomsCapacity.includes(1)) result+= 'Single ';
    if (roomsCapacity.includes(2)) result+= 'Double ';
    if (roomsCapacity.includes(3)) result+= 'Triple ';
    const arrayCapacity = result.split(' ');
    // no método split() se o separador estiver no início ou final da string 
    // é adicionada uma string vazia no início ou final do array
    if (arrayCapacity.length === 3) {
      stringCapacity += arrayCapacity[0] + ' e ' + arrayCapacity[1];
    }
    if (arrayCapacity.length === 4) {
      stringCapacity += arrayCapacity[0] + ', ' + arrayCapacity[1] + ' e ' + arrayCapacity[2];
    }
    return stringCapacity;
  };

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <CardConteiner>
        {hotels?.map((h => <HotelCard key={h.id} name={h.name} image={h.image} roomsCapacity={typeOfHotelRooms(h.Rooms)} rooms={h.Rooms} />))}
      </CardConteiner>
    </>);
};

