import { Card } from "./style";

export default function HotelCard(){
    return (
        <Card>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl7wnKXlkPujvGtuCFKDJgMrbocSfVqJURg&usqp=CAU' alt='hotel' />
        <h6>Nome do hotel</h6>
        <p>Tipos de acomodação:</p>
        <span>Single e Double</span>
        <p>Vagas disponíveis:</p>
        <span>103</span>
      </Card>
    );
};