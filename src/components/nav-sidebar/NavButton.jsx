"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function matchPath(href, url) {
  const escapedPath = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^${escapedPath}(\\/.*|\\/?)$`);
  return pattern.test(url);
}

function NavButton({ href, children }) {
  const pathname = usePathname();
  const isActive = matchPath(href, pathname);
  return (
    <Link
      href={href}
      className={`cursor-pointer grid place-items-center h-8 hover:text-accent ${
        isActive ? "current-page" : null
      }`}
    >
      {children}
    </Link>
  );
}

export default NavButton;
