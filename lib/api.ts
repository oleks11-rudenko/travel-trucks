import axios from 'axios';
import { Camper } from '@/types/camper';
import { Filters } from '@/types/filter';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface CampersHttpResponse {
  total: number;
  items: Camper[];
}

export async function fetchCampers(location: string, filters: Filters, page: number) {
  const response = await axios.get<CampersHttpResponse>('/campers', {
    params: { ...(location !== '' && { location }), ...filters, page, limit: 4 },
  });
  return response.data;
}

export async function fetchCamperById(camperId: Camper['id']) {
  const response = await axios.get<Camper>(`/campers/${camperId}`);
  return response.data;
}
