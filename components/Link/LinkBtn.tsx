import Link from 'next/link';
import css from './LinkBtn.module.css';

interface LinkBtnProps {
  children: React.ReactNode;
  horizontalPaddings: string;
  href: string;
}

export default function LinkBtn({ children, horizontalPaddings, href }: LinkBtnProps) {
  return (
    <Link
      className={css.linkBtn}
      href={href}
      style={{ paddingLeft: horizontalPaddings, paddingRight: horizontalPaddings }}
    >
      {children}
    </Link>
  );
}
