'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <Link className={css.logoLink} href="/">
            <svg className={css.logoIcon} width="136" height="16">
              <use href="/icons.svg#logo"></use>
            </svg>
          </Link>
          <nav className={css.navigation}>
            <ul className={css.navigationList}>
              <li className={`${css.navigationItem} ${pathname === '/' ? css.activeLink : ''}`}>
                <Link className={css.navigationLink} href="/">
                  Home
                </Link>
              </li>
              <li
                className={`${css.navigationItem} ${pathname === '/catalog' ? css.activeLink : ''}`}
              >
                <Link className={css.navigationLink} href="/catalog">
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
