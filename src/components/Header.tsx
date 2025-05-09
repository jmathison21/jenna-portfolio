import NextLink from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center gap-4 fixed top-0 left-0 right-0 p-4 bg-transparent text-white">
      <h1 className="text-2xl font-bold">Jenna Mathison</h1>
      <ThemeSwitch />
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li>
            <NextLink href="/" className="hover:underline">
              Home
            </NextLink>
          </li>
          <li>
            <NextLink href="/about" className="hover:underline">
              About
            </NextLink>
          </li>
          <li>
            <NextLink href="/projects" className="hover:underline">
              Projects
            </NextLink>
          </li>
          <li>
            <NextLink href="/contact" className="hover:underline">
              Contact
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}