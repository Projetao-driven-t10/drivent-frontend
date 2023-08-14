import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { Habitation, PersonIcon, SelectedPersonIcon } from './style';

export default function Rooms({ id, name, capacity, vacancy, isSelected, setSelectedRoomId, selectedRoomId, selectedIconIndex, setSelectedIconIndex, setDisplayButton, setSelectedRoom, booking }) {
  function handleChoice(id, icon) {
    if(selectedIconIndex === icon && selectedRoomId === id) return;
    setSelectedIconIndex(icon);
    setSelectedRoomId(id);
    setSelectedRoom({ name, capacity });
    setDisplayButton(true);
    console.log(booking);
  };
  return (
    <Habitation isSelected={isSelected} isAvailable={booking.length !== capacity} >
      <span>
        {name}
      </span>
      <span>
        {vacancy.map((v, i) => 
          <PersonIcon 
            key={i}
            selected={selectedIconIndex === i} 
            onClick={() => handleChoice(id, i)}>
            {booking.length === capacity ? ( <BsPersonFill />) : (selectedIconIndex === v && selectedRoomId === id ? <SelectedPersonIcon /> : <BsPerson />)}
          </PersonIcon>)}
      </span>
    </Habitation>
  );
};
//booking.length > 0 ? (booking.length === capacity ? (<BsPersonFill />) : )
