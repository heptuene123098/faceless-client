"use client";

import AppTopNav from "@/components/AppTopNav";
import SideBar from "@/components/Sidebar";
import { useApp } from "@/contexts/AppContext";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isSideBarOpen, setIsSideBarOpen } = useApp();
  return (
    <main className="flex h-screen xl:overflow-hidden">
      <SideBar />

      <div className="flex flex-col flex-1">
        <AppTopNav />

        <div className="flex-1 overflow-y-auto py-10 px-6">{children}</div>
      </div>

      {isSideBarOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/40 z-10"
          onClick={() => setIsSideBarOpen(false)}
        />
      )}
    </main>
  );
}
