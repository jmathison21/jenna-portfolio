import Navigation from "./Navigation";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center gap-4 bg-transparent p-4">
      <h1 className="text-xl font-bold sm:text-2xl">Jenna Mathison</h1>
      <ThemeSwitch />
      <Navigation />
    </header>
  );
}
