import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CampersClient from './Campers.client';
import { fetchCampers } from '@/lib/api';

export default async function Campers() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['campers', { location: '', filters: {}, page: 1 }],
    queryFn: () => fetchCampers('', {}, 1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CampersClient />;
    </HydrationBoundary>
  );
}
