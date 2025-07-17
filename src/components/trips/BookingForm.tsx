'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { Trip } from '@/lib/data';
import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

const formSchema = z.object({
  alightingPoint: z.string().min(1, { message: 'Please select an alighting point.' }),
  paymentMethod: z.enum(['mpesa', 'airtel', 'bank'], {
    required_error: 'You need to select a payment method.',
  }),
});

type BookingFormProps = {
  trip: Trip;
};

export function BookingForm({ trip }: BookingFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const allStops = [...trip.stops, trip.destination];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        alightingPoint: '',
        paymentMethod: undefined,
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate booking and payment
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Booking Successful!',
        description: `Your trip to ${trip.destination} has been confirmed.`,
      });
      router.push('/dashboard');
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>Select your preferences and payment method.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <FormField
                control={form.control}
                name="alightingPoint"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Alighting Point</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select where to get off" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {allStops.map((stop) => (
                            <SelectItem key={stop} value={stop}>
                            {stop}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                        >
                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 has-[:checked]:border-primary">
                            <FormControl>
                            <RadioGroupItem value="mpesa" />
                            </FormControl>
                            <FormLabel className="font-normal w-full">M-Pesa</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 has-[:checked]:border-primary">
                            <FormControl>
                            <RadioGroupItem value="airtel" />
                            </FormControl>
                            <FormLabel className="font-normal w-full">Airtel Money</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 has-[:checked]:border-primary">
                            <FormControl>
                            <RadioGroupItem value="bank" />
                            </FormControl>
                            <FormLabel className="font-normal w-full">Bank Transfer</FormLabel>
                        </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </CardContent>
            <CardFooter>
                 <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <CreditCard className="mr-2 h-4 w-4" />
                    )}
                    Pay KES {trip.cost.toLocaleString()} & Book
                </Button>
            </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
