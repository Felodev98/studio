import { mockDrivers } from '@/lib/data';
import { DriverTable } from '@/components/admin/DriverTable';

export default function DriversPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Driver Management</h1>
        <p className="text-muted-foreground">View, add, and manage your team of drivers.</p>
      </div>
      <DriverTable data={mockDrivers} />
    </div>
  );
}
