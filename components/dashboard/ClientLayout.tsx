"use client";

import { usePathname } from "next/navigation";
import PagesNav from "@/components/dashboard/pagesNavbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const excludedPaths = [
    "/",
    "/login",
    "/sign-up",
    "/my-webinars",
    "/discover",
    "/expo",
    "/settings",
  ];

  // Hide when:
  // 1. pathname is exactly in excludedPaths
  // 2. pathname starts with /dashboard (includes nested)
  const hideNavbar =
    excludedPaths.includes(pathname) || pathname.startsWith("/dashboard");

  const showNavbar = !hideNavbar;

  return (
    <>
      {showNavbar && <PagesNav />}
      {children}
    </>
  );
}
