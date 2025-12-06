import Container from '@/components/Container/Container';
import css from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={css.home}>
      <Container>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}> You can find everything you want in our catalog</h2>
        <Link className={css.link} href="/catalog">
          View Now
        </Link>
      </Container>
    </section>
  );
}
