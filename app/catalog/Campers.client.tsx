'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';
import { fetchCampers } from '@/lib/api';
import Container from '@/components/Container/Container';
import SearchField from '@/components/SearchField/SearchField';
import FilterForm from '@/components/FilterForm/FilterForm';
import css from './Campers.module.css';

export default function CampersClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['campers', { location: searchQuery, filters, currentPage }],
    queryFn: () => fetchCampers(searchQuery, filters, currentPage),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  console.log(data);

  const showedItems = data ? Math.min(currentPage * 4, data.total) : 0;

  const handleSearchChange = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 300);

  return (
    <section className={css.catalog}>
      <Container>
        <div className={css.filtration}>
          <SearchField initialValue={searchQuery} onSearchChange={handleSearchChange} />
          <FilterForm setFilters={setFilters} />
        </div>
        <div className={css.campers}>
          {data && showedItems < data.total && (
            <button
              className={css.loadMoreBtn}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
            >
              Load more
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
