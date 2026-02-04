export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 lg:px-16 py-6">
      <h1 className="text-lg font-medium tracking-wide">
        Lilac Template
      </h1>

      <nav className="hidden md:flex gap-8 text-sm">
        <a className="hover:underline" href="#">Blog</a>
        <a className="hover:underline" href="#">Contact</a>
      </nav>
    </header>
  );
}
