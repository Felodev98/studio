'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { recommendTrips } from '@/ai/flows/recommendTrips';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useActionState, useState } from 'react';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  departurePoint: z.string().min(3, {
    message: 'Departure point must be at least 3 characters.',
  }),
  duration: z.string().min(3, {
    message: 'Please provide a desired duration (e.g., "weekend", "3 days").',
  }),
});

async function getRecommendation(
  prevState: { recommendation: string | null },
  formData: FormData
) {
  const departurePoint = formData.get('departurePoint') as string;
  const duration = formData.get('duration') as string;
  const tripContext = formData.get('tripContext') as string;

  try {
    const recommendation = await recommendTrips({
      input: {
        departurePoint,
        duration,
        tripContext,
      },
    });
    return { recommendation };
  } catch (error) {
    console.error(error);
    return { recommendation: 'Sorry, I was unable to generate a recommendation. Please try again.' };
  }
}

export function RecommendationTool({ tripContext }: { tripContext: string }) {
  const [state, formAction, isPending] = useActionState(getRecommendation, { recommendation: null });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departurePoint: 'Nairobi',
      duration: 'a day trip',
    },
  });

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-primary" />
            Your Preferences
          </CardTitle>
          <CardDescription>
            Tell us what you&apos;re looking for, and we&apos;ll suggest some trips.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form action={formAction}>
             <input type="hidden" name="tripContext" value={tripContext} />
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="departurePoint"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Departure Point</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Nairobi, Mombasa..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., a weekend, 5 hours..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Recommendation
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Bot className="text-primary" />
                AI Recommendation
            </CardTitle>
            <CardDescription>
                Here&apos;s what our AI assistant suggests for your trip.
            </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
            {isPending && (
                <div className="flex items-center justify-center h-full flex-col gap-4 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Generating your personalized itinerary...</p>
                </div>
            )}
            {!isPending && state.recommendation && (
                <div
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: state.recommendation }}
                />
            )}
            {!isPending && !state.recommendation && (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p>Your recommendation will appear here.</p>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
