import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { Habitation, PersonIcon, SelectedPersonIcon } from './style';

export default function Rooms({ id, name, capacity, vacancy, isSelected, setSelectedRoomId, selectedRoomId, selectedIconIndex, setSelectedIconIndex, setDisplayButton, setSelectedRoom, booking }) {
  const remainingVacancies = capacity - booking.length;

  function handleChoice(id, icon) {
    if (selectedIconIndex === icon && selectedRoomId === id) {
      // Se o ícone já estiver selecionado, desmarque-o
      setSelectedIconIndex(null);
      setSelectedRoomId(null);
      setSelectedRoom(null);
      setDisplayButton(false);
    } else if (remainingVacancies > 0) {
      // Se houver vagas, marque o ícone como selecionado e atualize o estado
      setSelectedIconIndex(icon);
      setSelectedRoomId(id);
      setSelectedRoom({ name, capacity });
      setDisplayButton(true);
    }
  }

  return (
    <Habitation isSelected={isSelected} isAvailable={remainingVacancies > 0}>
      <span>{name}</span>
      <span>
        {vacancy.map((v, i) => (
          <PersonIcon key={i} selected={selectedIconIndex === i} onClick={() => handleChoice(id, i)}>
            {i < booking.length ? (
              <BsPersonFill />
            ) : i < capacity ? (
              remainingVacancies > 0 ? (
                selectedIconIndex === i && selectedRoomId === id ? (
                  <SelectedPersonIcon />
                ) : (
                  <BsPerson />
                )
              ) : (
                <BsPersonFill />
              )
            ) : null}
          </PersonIcon>
        ))}
      </span>
    </Habitation>
  );
}
