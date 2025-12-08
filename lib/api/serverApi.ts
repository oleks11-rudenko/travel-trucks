import { nextServer } from './api';
import { CampersHttpResponse } from './clientApi';
import { Filters } from '@/types/filter';
import { Camper } from '@/types/camper';

export async function fetchServerCampers(filters: Filters, page: number) {
  const response = await nextServer.get<CampersHttpResponse>('/campers', {
    params: { ...filters, page, limit: 4 },
  });
  return response.data;
}

export async function fetchServerCamperById(camperId: Camper['id']) {
  const response = await nextServer.get<Camper>(`/campers/${camperId}`);
  return response.data;
}
