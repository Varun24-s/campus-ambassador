"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <p className="text-lg text-gray-600 mb-10">Manage your college events effortlessly.</p>

      <SignedOut>
        <div className="flex flex-col gap-4">
          <SignUpButton
            mode="redirect"
            forceRedirectUrl="/complete-profile"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
              Sign Up with Google
            </button>
          </SignUpButton>

          <SignInButton mode="redirect" fallbackRedirectUrl="/">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700">
              Login
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <a
          href="/dashboard"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700"
        >
          Go to Dashboard
        </a>
      </SignedIn>
    </main>
  );
}

