import { BsPerson } from 'react-icons/bs';
import { Habitation, PersonIcon, SelectedPersonIcon } from './style';

export default function Rooms({ id, name, capacity, vacancy, isSelected, setSelectedRoomId, selectedRoomId, selectedIconIndex, setSelectedIconIndex, setDisplayButton, setSelectedRoom }) {
  function handleChoice(id, icon) {
    if(selectedIconIndex === icon && selectedRoomId === id) return;
    setSelectedIconIndex(icon);
    setSelectedRoomId(id);
    setSelectedRoom({ name, capacity });
    setDisplayButton(true);
  };
  return (
    <Habitation isSelected={isSelected} >
      <span>
        {name}
      </span>
      <span>
        {vacancy.map((v, i) => 
          <PersonIcon 
            key={i}
            selected={selectedIconIndex === i} 
            onClick={() => handleChoice(id, i)}>
            {selectedIconIndex === v && selectedRoomId === id ? <SelectedPersonIcon /> : <BsPerson />}
          </PersonIcon>)}
      </span>
    </Habitation>
  );
};
