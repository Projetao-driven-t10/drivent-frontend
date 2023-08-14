import { Card } from './style';

export default function HotelCard({ id, name, image, rooms, roomsCapacity, setDisplayRooms, setBedrooms, isSelected, setSelectedHotelId, setSelectedHotel, booking }) {
  function chooseHotel(id) {
    setSelectedHotelId(id);
    setBedrooms(rooms);
    setSelectedHotel({ name, image });
    setDisplayRooms(true);
    console.log(booking);
  }
  return (
    <Card onClick={() => chooseHotel(id)} isSelected={isSelected} >
      <img src={image} alt='hotel' />
      <h6>{name}</h6>
      <p>Tipos de acomodação:</p>
      <span>{roomsCapacity}</span>
      <p>Vagas disponíveis:</p>
      <span>{rooms.reduce((total, objetos) => total + objetos.capacity, 0)}</span>
    </Card>
  );
};
