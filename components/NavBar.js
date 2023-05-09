import React, {useState} from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
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
        <>
            <header aria-label="Site Header"
        className="shadow-sm bg-white fixed top-0 left-0 right-0 z-50">
                <div className="mx-auto flex h-8 max-w-screen-xl items-center justify-between px-4">
                    <nav aria-label="Site Nav" className="hidden items-center justify-center gap-3 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
                        <a className="text-gray-900" href><BsFillMoonStarsFill
            className={`cursor-pointer text-xl ${darkmode ? 'text-green-400' : 'text-green-400'}`}
            onClick={toggleDarkMode}
          /></a>
                        <a className="text-gray-900" href="#dashboard-ppks">Dashboard</a>
                        <a className="text-gray-900" href="#chatbot-ppks">Chatbot</a>
                        <a className="text-gray-900" href="#about-ppks">Dasar Hukum</a>
                        <a className="text-gray-900" href="#news-ppks">Berita Terkait</a>
                    </nav>
                </div>
                <div className="lg:hidden">
                    <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
                        <a className="flex-shrink-0 pl-4 text-gray-900" href><BsFillMoonStarsFill
            className={`cursor-pointer text-xl ${darkmode ? 'text-green-400' : 'text-green-400'}`}
            onClick={toggleDarkMode}
          /></a>
                        <a className="flex-shrink-0 pl-4 text-gray-900" href="#dashboard-ppks">Dashboard</a>
                        <a className="flex-shrink-0 pl-4 text-gray-900" href="#chatbot-ppks">Chatbot</a>
                        <a className="flex-shrink-0 pl-4 text-gray-900" href="#about-ppks">Dasar Hukum</a>
                        <a className="flex-shrink-0 pl-4 text-gray-900" href="#news-ppks">Berita Terkait</a>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;