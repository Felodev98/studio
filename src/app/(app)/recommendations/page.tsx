import { RecommendationTool } from '@/components/recommendations/RecommendationTool';
import { mockTrips } from '@/lib/data';

export default function RecommendationsPage() {
  const availableTripsContext = mockTrips
    .map(
      (trip) =>
        `- Trip from ${trip.origin} to ${trip.destination}, departing at ${trip.departureTime}. Price: KES ${trip.cost}. Vehicle: ${trip.vehicle.model}.`
    )
    .join('\n');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">AI Trip Recommender</h1>
        <p className="text-muted-foreground">
          Let our AI assistant help you find the perfect trip based on your preferences.
        </p>
      </div>
      <RecommendationTool tripContext={availableTripsContext} />
    </div>
  );
}
