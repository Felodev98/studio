import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AppLogo } from '@/components/shared/AppLogo';
import Image from 'next/image';
import { ArrowRight, Bus, MapPin, Ticket } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <AppLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Journey, Simplified
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Welcome to TripTrek. Book bus trips, manage your journey, and travel with confidence. Fast, easy, and reliable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                   <Button size="lg" asChild className="group">
                    <Link href="/dashboard">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero Bus"
                data-ai-hint="modern bus road"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Travel Smarter, Not Harder</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need for a seamless bus travel experience, right at your fingertips.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-1 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-fit mx-auto mb-4">
                  <Bus className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold font-headline">Easy Trip Booking</h3>
                <p className="text-sm text-muted-foreground">Find and book your ideal trip in just a few taps. View destinations, times, and prices at a glance.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold font-headline">Choose Your Alighting Point</h3>
                <p className="text-sm text-muted-foreground">Flexibility is key. Select exactly where you want to get off the bus along the route.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 w-fit mx-auto mb-4">
                  <Ticket className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold font-headline">Secure Payment Options</h3>
                <p className="text-sm text-muted-foreground">Pay your way with M-Pesa, Airtel Money, or Bank Transfer. All transactions are secure and encrypted.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 TripTrek. All rights reserved.</p>
      </footer>
    </div>
  );
}
