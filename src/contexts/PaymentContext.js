import React, { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const PaymentInfoContext = createContext();
export default PaymentInfoContext;

export function PaymentInfoProvider({ children }) {
  const [paymentData, setPaymentData] = React.useState({});
  
  return (
    <PaymentInfoContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </PaymentInfoContext.Provider>
  );
}
