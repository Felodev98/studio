import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Trip } from '@/lib/data';
import { ArrowRight, Clock, DollarSign, Truck } from 'lucide-react';

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{trip.origin} to {trip.destination}</CardTitle>
        <CardDescription>Trip ID: {trip.id}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{trip.departureTime} - {trip.arrivalTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="h-4 w-4" />
          <span>{trip.vehicle.model} ({trip.vehicle.plateNumber})</span>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <DollarSign className="h-5 w-5 text-primary" />
          <span>KES {trip.cost.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group">
          <Link href={`/book/${trip.id}`}>
            Book Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
