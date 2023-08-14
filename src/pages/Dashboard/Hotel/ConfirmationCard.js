import { useEffect, useState } from 'react';
import { Card, Button } from './style';

export default function ConfirmationCard({ selectedHotel, selectedRoom, setFinished }) {
  const [roomType, setRoomType] = useState('');
  const [roomates, setRoomates] = useState('');

  useEffect(() => {
    if (selectedRoom.capacity === 1) {
      setRoomType('Single');
      setRoomates('Somente você');
    };
    if (selectedRoom.capacity === 2) {
      setRoomType('Double');
      setRoomates('Você e mais 1');
    };
    if (selectedRoom.capacity === 3) {
      setRoomType('Triple');
      setRoomates('Você e mais 2');
    };
  }, [selectedRoom]);
  return (
    <>
      <Card isSelected={true} >
        <img src={selectedHotel.image} alt='hotel' />
        <h6>{selectedHotel.name}</h6>
        <p>Quarto reservado:</p>
        <span>{selectedRoom.name} ({roomType})</span>
        <p>Pessoas no seu quarto:</p>
        <span>{roomates} </span>
      </Card>
      <Button displayButton={true} onClick={() => setFinished('not finished')} >TROCAR QUARTO</Button>
    </>
  );
};
