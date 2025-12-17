import { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CampersClient from './Campers.client';
import { fetchServerCampers } from '@/lib/api/serverApi';
import { getPageUrl } from '@/utils/getPageUrl';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'TravelTrucks - Catalog',
    description: 'Catalog of all travel campers with filtering',
    openGraph: {
      title: 'TravelTrucks - Catalog',
      description: 'Catalog of all travel campers with filtering',
      url: getPageUrl(`/catalog`),
      siteName: 'NoteHub',
      type: 'website',
      images: [
        {
          url: '/travel-trucks-og-meta.webp',
          width: 1200,
          height: 630,
          alt: 'TravelTrucks - Catalog',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TravelTrucks - Catalog',
      description: 'Catalog of all travel campers with filtering',
      images: [
        {
          url: '/travel-trucks-og-meta.webp',
          width: 1200,
          height: 630,
          alt: 'TravelTrucks - Catalog',
        },
      ],
    },
  };
}

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
