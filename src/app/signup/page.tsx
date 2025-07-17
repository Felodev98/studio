import { AppLogo } from '@/components/shared/AppLogo';
import { SignUpForm } from '@/components/auth/SignUpForm';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <AppLogo />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold font-headline">Create an Account</h1>
          <p className="text-muted-foreground">Start your journey with TripTrek today!</p>
        </div>
        <SignUpForm />
         <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline" prefetch={false}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
