import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/contexts/AuthContext";
import { AppProvider } from "@/contexts/AppContext";
import ClientLayout from "@/components/dashboard/ClientLayout";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faceless",
  description:
    "A secure platform for experts to share knowledge and for curious minds to discover, learn, and engage anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${urbanist.className} antialiased`}>
        <AuthProvider>
          <AppProvider>
            <ClientLayout>{children}</ClientLayout>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
