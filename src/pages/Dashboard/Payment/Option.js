import React from 'react';
import { OptionBox, OptionType, OpetionPrice } from './style';

export default function Option({ name, isRemote, includesHotel, price }) {
  const [isRemoteOption, setIsRemote] = React.useState(isRemote);
  const [includesHotelOption, setIncludesHotel] = React.useState(includesHotel);
  const [nameOption, setName] = React.useState(name);
  const [priceOption, setPrice] = React.useState(price);

  return (
    <OptionBox>
      <OptionType>{name}</OptionType>
      <OpetionPrice>R$ {price}</OpetionPrice>
    </OptionBox>
  );
}