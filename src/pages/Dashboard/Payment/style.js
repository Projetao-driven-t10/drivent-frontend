import styled from 'styled-components';

export const PaymentPage = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  display: ${(props) => props.isAllowed ? '' : 'none'};
`;

export const Title = styled.h1`
  width: 338px;
  height: 40px;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

export const Description = styled.p`
  width: 479px;
  height: 23px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
  margin-top: 30px;
  display: ${(props) => props.includesHotel ? 'init' : 'none'};
`;

export const OptionBox = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin-top: 15px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // recebe props
  background-color: ${(props) => props.selectedBackground ? '#FFEED2' : 'white'};
`;

export const OptionType = styled.p`
  width: 75px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;

export const OpetionPrice = styled.p`
  width: 44px;
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #898989;
  margin-top: 8px;
`;

export const OpetionContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    display: ${(props) => props.includesHotel ? 'init' : 'none'};
`;

export const ConfirmButton = styled.button`
    width: 182px;
    height: 37px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    margin-top: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const NonAvailablePage = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props) => !props.isAllowed ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
`;
