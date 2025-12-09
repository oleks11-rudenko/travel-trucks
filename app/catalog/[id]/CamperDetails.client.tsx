'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { fetchCamperById } from '@/lib/api/clientApi';
import Loader from '@/components/Loader/Loader';
import RatingAndLocation from '@/components/RatingAndLocation/RatingAndLocation';
import Container from '@/components/Container/Container';
import css from './CamperDetails.module.css';
import Reviews from '@/components/Reviews/Reviews';
import Features from '@/components/Features/Features';
import OrderForm from '@/components/OrderForm/OrderForm';

type TabType = 'features' | 'reviews';

export default function CamperDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('features');

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

  return (
    <main>
      <Container>
        {camper && (
          <>
            <section className={css.truckInfo}>
              <h1 className={css.truckName}>{camper.name}</h1>
              <RatingAndLocation camper={camper} />
              <p className={css.truckPrice}>€{camper.price.toFixed(2)}</p>
              <ul className={css.galleryList}>
                {camper.gallery.map((image) => (
                  <li className={css.galleryItem} key={image.original}>
                    <Image
                      className={css.image}
                      src={image.original}
                      alt={`${camper.name} photo`}
                      width={292}
                      height={312}
                    />
                  </li>
                ))}
              </ul>
              <p className={css.truckDesc}>{camper.description}</p>
            </section>
            <section className={css.featuresReviewsAndForm}>
              <div className={css.tabs}>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`${css.tab} ${activeTab === 'features' ? css.active : ''}`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`${css.tab} ${activeTab === 'reviews' ? css.active : ''}`}
                >
                  Reviews
                </button>
              </div>
              <div className={css.content}>
                <div>
                  {activeTab === 'features' && <Features camper={camper} />}
                  {activeTab === 'reviews' && <Reviews reviews={camper.reviews} />}
                </div>
                <OrderForm />
              </div>
            </section>
          </>
        )}
        {(error || !camper) && <p className={css.error}>Something went wrong. Camper not found.</p>}
      </Container>
    </main>
  );
}
