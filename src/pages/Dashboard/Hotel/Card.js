import { Card } from './style';

export default function HotelCard({ name, image, rooms }) {
  return (
    <Card>
      <img src={image} alt='hotel' />
      <h6>{name}</h6>
      <p>Tipos de acomodação:</p>
      <span>Single e Double</span>
      <p>Vagas disponíveis:</p>
      <span>{rooms.reduce((total, objetos) => total + objetos.capacity, 0)}</span>
    </Card>
  );
};
