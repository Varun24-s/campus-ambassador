import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local"

const myFont = localFont({
  src: './fonts/Raleway-VariableFont_wght.ttf',
  display: "swap",
})

export const metadata: Metadata = {
  title: "E-Cell NITB CA",
  description: "Custom Clerk Sign-Up with College/Branch/Year",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#2563EB", // blue
          borderRadius: "0.5rem",
          fontFamily: "Inter, sans-serif",
        },
        elements: {
          // Only affects built-in Clerk components if you use them
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          card: "shadow-lg rounded-xl p-4",
        },
      }}
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/complete-profile"
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.webp" sizes="any" />
        </head>
        <body className={`${myFont.className} bg-white min-h-screen`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
