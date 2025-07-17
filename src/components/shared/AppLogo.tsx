import Link from 'next/link';
import { Bus } from 'lucide-react';

export function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Bus className="h-6 w-6 text-primary" />
      <span className="text-xl font-semibold tracking-tight font-headline">TripTrek</span>
    </Link>
  );
}
