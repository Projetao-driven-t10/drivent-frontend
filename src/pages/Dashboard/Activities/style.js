import styled from 'styled-components';

export const Title = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2rem;
`;

export const Description = styled.p`
  width: 600px;
  height: 23px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
  margin-top: 30px;
  display: ${(props) => props.hotelAlreadySelected ? 'init' : 'none'};
`;
