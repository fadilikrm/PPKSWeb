import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
    // Tambahkan logika untuk mengubah tema gelap atau terang di seluruh aplikasi Anda
    // misalnya dengan menggunakan CSS classes pada elemen body
    if (darkmode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return (
    <nav className="py-4 px-6 mb-8 flex flex-col justify-between fixed w-full bg-transparent md:flex-row md:justify-between md:items-center">
      <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <li>
          <BsFillMoonStarsFill
            className={`cursor-pointer text-xl ${darkmode ? 'text-green-400' : 'text-green-400'}`}
            onClick={toggleDarkMode}
          />
        </li>
        <li className="relative">
          <a href="#" onClick={toggleDropdown} className="text-green-400 ">Menu</a>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 space-y-2 bg-white rounded-lg shadow-md bg-green-400">
              <li className="text-dark-400"><a href="#dashboard-ppks">Dashboard</a></li>
              <li className="text-dark-400"><a href="#chatbot-ppks">ChatBot</a></li>
              <li className="text-dark-400"><a href="#about-ppks">Dasar Hukum</a></li>
              <li className="text-dark-400"><a href="#news-ppks">Berita Terkait</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
