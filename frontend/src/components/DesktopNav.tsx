"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NAV_LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/treasury", label: "Treasury" },
  { href: "/governance", label: "Governance" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map(({ href, label }) => {
        const active = isActiveRoute(pathname, href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={twMerge(
              "nav-link px-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stellar-blue",
              active && "text-white bg-white/10"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
