"use client";

import { usePathname } from "next/navigation";
import PagesNav from "@/components/dashboard/pagesNavbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excludedPaths = ["/", "/login", "/sign-up"];
  const showNavbar = !excludedPaths.includes(pathname);

  return (
    <>
      {showNavbar && <PagesNav />}
      {children}
    </>
  );
}
