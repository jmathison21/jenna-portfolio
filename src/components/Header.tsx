import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center gap-2 fixed top-0 left-0 right-0 p-4 bg-transparent text-white">
      <h1 className="text-2xl font-bold">Jenna Mathison</h1>
      <ThemeSwitch />
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}