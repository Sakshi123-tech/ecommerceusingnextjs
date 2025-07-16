import { Facebook, Twitter, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white py-8 px-4 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Filters */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:None">All</a></li>
            <li><a href="#" className="hover:None">Electronics</a></li>
            <li><a href="#" className="hover:None">Clothing</a></li>
            <li><a href="#" className="hover:None">Home</a></li>
          </ul>
        </div>

        {/* Center: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:None">About Us</a></li>
            <li><a href="#" className="hover:None">Contact</a></li>
          </ul>
        </div>

        {/* Right: Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
  <a href="#" aria-label="Facebook" className="hover:text-blue-400">
    <Facebook size={20} />
  </a>
  <a href="#" aria-label="Twitter" className="hover:text-blue-400">
    <Twitter size={20} />
  </a>
  <a href="#" aria-label="Instagram" className="hover:text-pink-400">
    <Instagram size={20} />
  </a>
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} WhatBytes | Built with ❤️
      </div>
    </footer>
  );
};

export default Footer;
