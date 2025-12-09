import Container from '@/components/Container/Container';
import LinkBtn from '@/components/Link/LinkBtn';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.home}>
      <Container>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}> You can find everything you want in our catalog</h2>
        <LinkBtn horizontalPaddings="48px" href="/catalog">
          View Now
        </LinkBtn>
      </Container>
    </section>
  );
}
