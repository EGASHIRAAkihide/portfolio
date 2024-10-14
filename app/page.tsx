import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/login">
            login
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
          dashboard</Link>
        </li>
      </ul>
    </main>
  );
}
