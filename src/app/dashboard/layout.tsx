"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const linkClasses = (href: string) =>
    `flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 ${
      pathname === href ? "bg-gray-700" : "hover:bg-gray-700"
    }`;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {isOpen && (
        <aside className="bg-gray-900 text-white flex flex-col p-4 w-64 transition-all duration-200 ease-in-out">
          <h1 className="text-xl font-bold mb-6 flex justify-between items-center">
            My Dashboard
            <button
              className="text-white hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </h1>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className={linkClasses("/dashboard")}>
              <LayoutDashboard size={18} /> Overview
            </Link>
            <Link
              href="/dashboard/analytics"
              className={linkClasses("/dashboard/analytics")}
            >
              <BarChart3 size={18} /> Analytics
            </Link>
            <Link
              href="/dashboard/settings"
              className={linkClasses("/dashboard/settings")}
            >
              <Settings size={18} /> Settings
            </Link>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Top Bar */}
        <div className="flex items-center bg-white shadow p-4">
          <button
            className="text-gray-700 hover:text-gray-900 mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="text-lg font-semibold">Dashboard Content</h2>
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
