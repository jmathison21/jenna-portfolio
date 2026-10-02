"use client";

import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    function closeOnClickAway(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("pointerdown", closeOnClickAway);
    }

    return () => document.removeEventListener("pointerdown", closeOnClickAway);
  }, [isOpen]);

  return (
    <nav
      ref={navigationRef}
      aria-label="Primary navigation"
      className="ml-auto"
    >
      <ul className="hidden items-center gap-4 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <NextLink href={link.href} className="hover:underline">
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="grid size-11 place-items-center rounded-md hover:bg-foreground/10 md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>

      <ul
        id="mobile-navigation"
        hidden={!isOpen}
        className="absolute top-full right-4 mt-2 min-w-40 space-y-1 rounded-lg border bg-background/95 p-2 shadow-lg backdrop-blur md:hidden"
      >
        {links.map((link) => (
          <li key={link.href}>
            <NextLink
              href={link.href}
              className="block rounded-md px-4 py-3 hover:bg-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
