"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();
  const paths = segments.map(
    (_, index) => "/" + segments.slice(0, index + 1).join("/")
  );
  const trail = segments.slice(0, -1);

  return (
    <ul className="flex space-x-2 text-gray-600">
      {trail.map((segment, index) => {
        return (
          <li key={index} className="capitalize flex items-center">
            <Link href={paths[index]} className="hover:underline">
              {decodeURIComponent(segment)}
            </Link>
            <span className="mx-1">
              <ChevronLeft className="w-5 h-5" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}
