'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/lib/api/clientApi';
import Container from '@/components/Container/Container';
import FilterForm from '@/components/FilterForm/FilterForm';
import CamperList from '@/components/CamperList/CamperList';
import css from './Campers.module.css';
import Loader from '@/components/Loader/Loader';

export default function CampersClient() {
  const [filters, setFilters] = useState({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['campers', filters],
      queryFn: ({ pageParam = 1 }) => fetchCampers(filters, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.items.length < 4) {
          return undefined;
        }
        return allPages.length + 1;
      },
      refetchOnMount: false,
    });

  const allCampers = data?.pages.flatMap((page) => page.items) || [];

  if (isLoading) return <Loader />;

  return (
    <main className={css.catalog}>
      <Container>
        <div className={css.catalogWrapper}>
          <section className={css.filtration}>
            <FilterForm setFilters={setFilters} />
          </section>
          {isSuccess && allCampers.length === 0 && (
            <p className={css.notFound}>No campers found with these filters</p>
          )}
          {allCampers.length > 0 && (
            <section className={css.campers}>
              <CamperList campers={allCampers} />
              {hasNextPage && (
                <button
                  className={css.loadMoreBtn}
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </button>
              )}
              {!hasNextPage && allCampers.length > 0 && (
                <p className={css.endMessage}>No more campers</p>
              )}
            </section>
          )}
          {isError && <p className={css.error}>Something went wrong!</p>}
        </div>
      </Container>
    </main>
  );
}
