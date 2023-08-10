import api from './api';

export async function getAllDaysOfActivities() {
  const response = await api.get('/?');
  return response.data;
}
//
export const fakeDays = [
'sexta, 01/01', 'sábado, 02/02', 'domingows 03/03'
];
