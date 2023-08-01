import api from './api';

export async function ticketTypeApi(token) {
  const response = await api.get('/ticket/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
