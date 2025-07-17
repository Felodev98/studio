import { mockTrips } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft, Clock, DollarSign, MapPin, Truck } from 'lucide-react';
import { BookingForm } from '@/components/trips/BookingForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BookTripPage({ params }: { params: { tripId: string } }) {
  const trip = mockTrips.find((t) => t.id === params.tripId);

  if (!trip) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
        <div>
            <Button variant="ghost" asChild className="mb-4">
                <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Trips
                </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight font-headline">Book Your Trip</h1>
            <p className="text-muted-foreground">Confirm your details and complete your booking.</p>
        </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{trip.origin} to {trip.destination}</CardTitle>
            <CardDescription>Review your trip details before booking.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Route</p>
                <p className="text-muted-foreground">{trip.origin} → {trip.destination}</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Schedule</p>
                <p className="text-muted-foreground">{trip.departureTime} → {trip.arrivalTime}</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Vehicle</p>
                <p className="text-muted-foreground">{trip.vehicle.model} ({trip.vehicle.plateNumber})</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Price</p>
                <p className="text-muted-foreground">KES {trip.cost.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <BookingForm trip={trip} />
      </div>
    </div>
  );
}
