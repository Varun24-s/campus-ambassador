import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local"

const myFont = localFont({
  src: './fonts/Raleway,Roboto_Slab/Raleway/Raleway-Italic-VariableFont_wght.ttf',
  display: "swap",
})

export const metadata: Metadata = {
  title: "My App",
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
    >
      <html lang="en" className={`${myFont.className} relative`}>
        <body className="bg-gray-50 min-h-screen">{children}</body>
      </html>
    </ClerkProvider>
  );
}
