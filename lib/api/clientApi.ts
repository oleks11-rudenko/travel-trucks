import { Camper } from '@/types/camper';
import { Filters } from '@/types/filter';
import { nextServer } from './api';

export interface CampersHttpResponse {
  total: number;
  items: Camper[];
}

export async function fetchCampers(filters: Filters, page: number) {
  const response = await nextServer.get<CampersHttpResponse>('/campers', {
    params: { ...filters, page, limit: 4 },
  });
  return response.data;
}

export async function fetchCamperById(camperId: Camper['id']) {
  const response = await nextServer.get<Camper>(`/campers/${camperId}`);
  return response.data;
}
