import api from './api';

export async function createActivitySubscription(body, token) {
  const response = await api.post('/activities/subscription', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response;
}
