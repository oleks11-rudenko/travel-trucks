import { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchServerCamperById } from '@/lib/api/serverApi';
import CamperDetailsClient from './CamperDetails.client';
import { getPageUrl } from '@/utils/getPageUrl';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CamperDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const camper = await fetchServerCamperById(id);

  return {
    title: `Camper - ${camper.name}`,
    description: camper.description.slice(0, 30),
    openGraph: {
      title: `Camper - ${camper.name}`,
      description: camper.description.slice(0, 100),
      url: getPageUrl(`/catalog/${id}`),
      siteName: 'TravelTrucks',
      type: 'website',
      images: [
        {
          url: '/travel-trucks-og-meta.webp',
          width: 1200,
          height: 630,
          alt: 'TravelTrucks - Moving your home',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Note - ${camper.name}`,
      description: camper.description.slice(0, 100),
      images: [
        {
          url: '/travel-trucks-og-meta.webp',
          width: 1200,
          height: 630,
          alt: 'TravelTrucks - Moving your home',
        },
      ],
    },
  };
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
