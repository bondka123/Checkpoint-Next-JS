import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <Link href="/">Accueil</Link> |{' '}
      <Link href="/about">À propos</Link>
    </nav>
  );
}
