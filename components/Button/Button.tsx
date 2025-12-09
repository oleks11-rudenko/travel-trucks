import css from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  horizontalPaddings: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, horizontalPaddings, type = 'button' }: ButtonProps) {
  return (
    <button
      className={css.button}
      type={type}
      style={{ paddingLeft: horizontalPaddings, paddingRight: horizontalPaddings }}
    >
      {children}
    </button>
  );
}
