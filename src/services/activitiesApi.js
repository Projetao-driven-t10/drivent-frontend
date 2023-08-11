import api from './api';

export async function getActiviesDays(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response;
};
//
export const fakeDays = [
  'sexta, 01/01', 'sábado, 02/02', 'domingows 03/03'
];
