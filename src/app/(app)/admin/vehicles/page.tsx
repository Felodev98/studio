import { mockVehicles } from '@/lib/data';
import { VehicleTable } from '@/components/admin/VehicleTable';

export default function VehiclesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Vehicle Management</h1>
        <p className="text-muted-foreground">View, add, and manage your fleet of vehicles.</p>
      </div>
      <VehicleTable data={mockVehicles} />
    </div>
  );
}
