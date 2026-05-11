import './Button.css';

export default function Button({ children, variant = 'primary', size = 'md', onClick, href }) {
  const cls = `btn btn--${variant} btn--${size}`;
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button className={cls} onClick={onClick}>{children}</button>;
}
