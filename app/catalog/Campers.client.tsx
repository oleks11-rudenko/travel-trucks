'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchCampers } from '@/lib/api/clientApi';
import Container from '@/components/Container/Container';
import FilterForm from '@/components/FilterForm/FilterForm';
import CamperList from '@/components/CamperList/CamperList';
import css from './Campers.module.css';

export default function CampersClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const { data, isSuccess } = useQuery({
    queryKey: ['campers', { filters, currentPage }],
    queryFn: () => fetchCampers(filters, currentPage),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  return (
    <section className={css.catalog}>
      <Container>
        <div className={css.catalogWrapper}>
          <div className={css.filtration}>
            <FilterForm setFilters={setFilters} />
          </div>
          <div className={css.campers}>
            {data?.items && isSuccess && <CamperList campers={data.items} />}
            <button className={css.loadMoreBtn}>Load More</button>{' '}
          </div>
        </div>
      </Container>
    </section>
  );
}
