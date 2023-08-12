import { useEffect, useState } from 'react';
import useHotel from '../../../hooks/api/useHotel';
import { Title, Subtitle, CardConteiner, RoomContainer, Button } from './style';
import HotelCard from './Card';
import { NonAvailablePage } from '../Payment/style';
import Rooms from './Rooms';
import useToken from '../../../hooks/useToken';
import { createBooking } from '../../../services/bookingApi';
import { toast } from 'react-toastify';

export default function Hotel() {
  const token = useToken();
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [bedrooms, setBedrooms] = useState([]);
  const [displayRooms, setDisplayRooms] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedIconIndex, setSelectedIconIndex] = useState(null);
  const [displayButton, setDisplayButton] = useState(false);
  const [warning, setWarning] = useState('');
  const { hotel, hotelLoading, hotelError } = useHotel();
  useEffect(() => {
    if (hotel) {
      setHotels(hotel.data);
      console.log(hotel.data);
    }
    else {
      setError(hotelError);
      if(hotelError === 'Not Found') {
        setWarning('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
      };
      if(hotelError === 'Payment Required') {
        setWarning('Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades');
      };
    };
  }, [hotelLoading]);
  if (hotelLoading) return <></>;
  if (error) return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NonAvailablePage>{warning}</NonAvailablePage>
    </>);

  function typeOfHotelRooms(rooms) {
    const roomsCapacity = [];
    let result = '';
    let stringCapacity = '';
    console.log(hotel);
    rooms.map(r => {
      if (!roomsCapacity.includes(r.capacity)) {
        roomsCapacity.push(r.capacity);
      }
    });
    if (roomsCapacity.includes(1)) result += 'Single ';
    if (roomsCapacity.includes(2)) result += 'Double ';
    if (roomsCapacity.includes(3)) result += 'Triple ';
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

  function countVacancies(capacity) {
    const vacancies = [];
    for(let i = 0; i < capacity; i++) {
      vacancies.push(i);
    };
    return vacancies;
  };
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <CardConteiner>
        {hotels?.map((h => <HotelCard
          key={h.id}
          id={h.id}
          name={h.name}
          image={h.image}
          roomsCapacity={typeOfHotelRooms(h.Rooms)}
          rooms={h.Rooms}
          setDisplayRooms={setDisplayRooms}
          setBedrooms={setBedrooms}
          isSelected={selectedHotelId === h.id}
          setSelectedHotelId={setSelectedHotelId}
        />))}
      </CardConteiner>
      <RoomContainer displayRooms={displayRooms} >
        <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
        <div>
          {bedrooms?.map((bed) => <Rooms
            key={bed.id}
            id={bed.id}
            name={bed.name}
            capacity={bed.capacity}
            vacancy={countVacancies(bed.capacity)}
            isSelected={selectedRoomId === bed.id}
            setSelectedRoomId={setSelectedRoomId}
            selectedRoomId={selectedRoomId}
            selectedIconIndex={selectedIconIndex}
            setSelectedIconIndex={setSelectedIconIndex}
            setDisplayButton={setDisplayButton}
          />)}
        </div>
        <Button 
          displayButton={displayButton}
          onClick={() => {
            const body = {
              roomId: selectedRoomId
            };
            createBooking(body, token)
              .then(res => {
                toast('Reserva finalizada com sucesso');
                console.log(res);
              })
              .catch(err => {
                toast.error('Ops! Falha ao reservar quarto');
                console.log(err);
              }
              );
          }} >
          RESERVAR QUARTO
        </Button>
      </RoomContainer>
    </>);
};
