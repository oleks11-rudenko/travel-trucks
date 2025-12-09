import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchServerCamperById } from '@/lib/api/serverApi';
import CamperDetailsClient from './CamperDetails.client';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CamperDetails({ params }: CamperDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['camper', { id }],
    queryFn: () => fetchServerCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
}
