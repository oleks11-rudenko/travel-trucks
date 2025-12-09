'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchCamperById } from '@/lib/api/clientApi';
import Loader from '@/components/Loader/Loader';
import css from './CamperDetails.module.css';
import RatingAndLocation from '@/components/RatingAndLocation/RatingAndLocation';

export default function CamperDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => fetchCamperById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (error || !camper) return <p>Something went wrong.</p>;

  return (
    <main>
      <section>
        <h1>{camper.name}</h1>
        <RatingAndLocation camper={camper} />
        <p>€{camper.price.toFixed(2)}</p>
      </section>
    </main>
  );
}
