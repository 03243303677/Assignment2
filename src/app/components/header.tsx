// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo or Site Title */}
      <div className="text-white text-2xl font-bold">
        <Link href="/">My Next.js Site</Link>
      </div>

      {/* Navigation Links with custom styles */}
      <nav className="flex space-x-4">
        <Link href="/" className="text-blue-300 hover:text-white">Home</Link>
        <Link href="/about" className="text-blue-300 hover:text-white">About</Link>
        <Link href="/contact" className="text-blue-300 hover:text-white">Contact</Link>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-l-md border-none"
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-md">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
