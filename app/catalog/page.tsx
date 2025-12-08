import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CampersClient from './Campers.client';
import { fetchServerCampers } from '@/lib/api/serverApi';

export default async function Campers() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['campers', { filters: {}, page: 1 }],
    queryFn: () => fetchServerCampers({}, 1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CampersClient />;
    </HydrationBoundary>
  );
}
