import { ticketTypeApi } from '../../services/ticketTypeApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicketType() {
  const token = useToken();

  const {
    data,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType,
  } = useAsync(ticketTypeApi(token), false);

  return {
    data,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType,
  };
}
