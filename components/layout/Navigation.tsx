"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigationItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="flex items-center space-x-1">
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors",
              activeDropdown === item.label && "text-primary"
            )}
          >
            {item.label}
            {item.children && (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.children && activeDropdown === item.label && (
            <div className="absolute left-0 top-full mt-0 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}