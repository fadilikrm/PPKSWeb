// imports
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import NavBar from "../components/NavBar";


// images
import Image from "next/image";
import p4 from "../public/p4.png";
import p5 from "../public/p5.png";
import web8 from "../public/web8.png";
import web7 from "../public/web7.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";
// hooks
import { useState} from "react";

// applicaiton
export default function Home() {
  // functions
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <div>
      <Head>
        <title>WEB PPKS</title>
        <meta name="description" content="Generated by create next app" />
        <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap&apos;);
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <br />
      <main className="font-poppins bg-white px-10 md:px -20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <div className="text-center p-10 " id="dashboard-ppks">
            <div>
              <br />
            <h2 className=" text-5xl font-bold text-green-400 md:text-6xl lg:text-7xl lg:mb-4">
              Selamat Datang
            </h2>
            <h3 className="text-2xl py-4 md:text-3xl dark:text-white">
              Website Pencegahan dan Penanganan Kekerasan Seksual
            </h3>
            <p className=" text-2x1 py-4 text-gray-400 leading-6 md:text-3x1 text-center">
              Selamat datang di situs kami yang berfokus pada Pencegahan dan Penanggulangan Kekerasan Seksual. Kami hadir untuk menyebarkan kesadaran, memberikan informasi, dan menyediakan sumber daya tentang pentingnya mencegah kekerasan seksual.
              Di sini, Anda akan menemukan informasi tentang definisi kekerasan seksual, tanda-tanda peringatan, dampaknya, serta langkah-langkah praktis dalam merespon dan melindungi diri. </p>
              <p className=" text-2x1 py-4 text-gray-400 leading-6 md:text-3x1 text-center">
              Tujuan kami adalah membangun komunitas yang aman dan peduli, serta memberikan dukungan kepada mereka yang terkena dampak kekerasan seksual.</p>
              <p className=" text-2x1 py-4 text-gray-400 leading-6 md:text-3x1 text-center">
              Bersama-sama, kita dapat menciptakan dunia yang bebas dari kekerasan seksual. <b>Data anda dijamin keamanannya</b>. jangan ragu dan bimbang, bergabunglah dengan kami dalam upaya ini dan mari bersama-sama mencegah kekerasan seksual serta mendukung korban yang membutuhkan.
              Terima kasih telah mengunjungi situs kami.
            </p>
          </div>
          </div>
          <div className="text-center p-5" id="chatbot-ppks">
            <br />
            <br />
            <h3 className=" font-bold text-green-400 md:text-2xl lg:text-4xl lg:mb-4">
            CHATBOT
            </h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-400">
            <a href="https://wa.me/+6281524166607">
            <FaWhatsapp />
            </a>
            <a href="http://t.me/satgasPPKS_bot">
            <FaTelegram />
            </a>
          </div>
          <br />
          <div className="text-gray-400 text-center container">
              Kami memiliki chatbot yang bisa digunakan untuk mendukung program PPKS dan memiliki berbagai fitur yang
              dapat membantu anda dalam berbagai masalah yang berhubungan dengan PPKS.
            </div>
            <br />
          <div className="font-bold text-green-400 text-center container">
            Silahkan Klik Icon Whatsapp atau Telegram diatas Untuk Menggunakan Chatbot PPKS
            </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="shadow-lg p-5 rounded-xl my-10 bg-green-400 basis-1/3 flex-1">
            <Image  
                src={p4}
                alt="design"
                className=" rounded-lg object-cover w-full h-full"
                layout="responsive"
            />
            <ul>
            <li className="text-sm py-2 text-dark-400 leading-6 text-center">Ini adalah Bot Whatsapp yang telah kami buat, terdapat berbagai fitur seperti yang ada pada gambar. <b>Untuk Memulai dan Menjalankan Kembali Bot Dari Awal Anda Bisa Mengetik Hi atau Halo Pada Bot Tersebut.</b></li>
            </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 basis-1/3 flex-1 bg-green-400">
            <Image  
                src={p5}
                alt="design"
                className=" rounded-lg object-cover w-full h-full"
                layout="responsive"
            />
              <ul>
            <li className="text-sm py-2 text-dark-400 leading-6 text-center">Ini adalah Bot Telegram yang telah kami buat, terdapat berbagai fitur seperti yang ada pada gambar. <b>Untuk Memulai dan Menjalankan Kembali Bot Dari Awal Anda Bisa klik Start Pada Bot Tersebut.</b></li>
            </ul>
            </div>
          </div>
        {/* last section */}
          <div className="text-center p-5" id="about-ppks">
          <br />
            <br />
            <h3 className="  font-bold text-green-400 md:text-2xl lg:text-4xl lg:mb-4">
              Dasar Hukum PPKS 
            </h3>
            <ul>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify">    
            1.	Undang-Undang Nomor 23 Tahun 2004 tentang Penghapusan Kekerasan dalam Rumah Tangga: Undang-undang ini mencakup perlindungan terhadap semua bentuk kekerasan dalam rumah tangga, termasuk kekerasan seksual.</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify"> 
            2.	Undang-Undang Nomor 35 Tahun 2014 tentang Perlindungan Anak: Undang-undang ini menyediakan kerangka kerja perlindungan anak yang komprehensif, termasuk melindungi anak dari kekerasan seksual.</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify"> 
            3.	Undang-Undang Nomor 23 Tahun 2002 tentang Perlindungan Anak: Undang-undang ini juga memberikan perlindungan terhadap anak, termasuk melindungi mereka dari kekerasan seksual.</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify"> 
            4.	Undang-Undang Nomor 13 Tahun 2006 tentang Perlindungan Saksi dan Korban: Undang-undang ini memberikan perlindungan dan keamanan kepada saksi dan korban kejahatan, termasuk korban kekerasan seksual.</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify"> 
            5.	Undang-Undang Nomor 17 Tahun 2016 tentang Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 1 Tahun 2016 tentang Perubahan Kedua atas Undang-Undang Nomor 23 Tahun 2002 tentang Perlindungan Anak Menjadi Undang-Undang: Undang-undang ini menguatkan perlindungan terhadap anak, termasuk melindungi mereka dari kekerasan seksual.</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify"> 
            6.	Peraturan Pemerintah Nomor 27 Tahun 2020 tentang Perlindungan Anak dalam Pencarian dan Pengambilan Keputusan: Peraturan pemerintah ini mengatur prosedur pencarian dan pengambilan keputusan terkait anak yang terancam kekerasan, termasuk kekerasan seksual.
            </li>
            <li className="text-sm py-2 text-gray-400 leading-6 text-justify">7. Peraturan Menteri Pendidikan, Kebudayaan, Riset, Dan Teknologi Republik Indonesia Nomor 30 Tahun 2021 Tentang Pencegahan Dan Penanganan Kekerasan Seksual Di Lingkungan Perguruan Tinggi</li>
            <li className=" text-sm py-2 text-gray-400 leading-6 text-justify">
            Perlu dicatat bahwa daftar ini tidak lengkap dan masih banyak peraturan hukum lainnya yang terkait dengan pencegahan dan penanggulangan kekerasan seksual di Indonesia. Sebaiknya selalu merujuk pada undang-undang dan peraturan terkait yang terbaru dan memperhatikan perkembangan terkini dalam hal ini. </li>
            </ul>
          </div>
          <div className="text-center p-5" id="news-ppks">
          <h3 className="font-bold text-green-400 md:text-2xl lg:text-4xl lg:mb-4">
            Berita Terkait
          </h3>
          {/* images */}
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="shadow-lg p-5 rounded-xl my-10 basis-1/3 flex-1">
              <a href="https://merdekadarikekerasan.kemdikbud.go.id/kekerasan-seksual/"><Image
                src={web9}
                alt="web images"
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
              /></a>
               <ul>
            <li className="text-sm py-2 text-gray-400 leading-6 text-center">Apa itu Kekerasan Seksual? Cari tau informasi mengenai kekerasan seksual disini</li>
            </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 basis-1/3 flex-1">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSczG1YebRSp_APCUiH5VIfyZrF7IgE-d_GZFEp9KiSdcjmRnA/viewform"><Image
                src={web7}
                alt="web images"
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
              /></a>
            <ul>
            <li className="text-sm py-2 text-gray-400 leading-6 text-center">Survey Pencegahan dan Penanganan Kekerasan Seksual di
            Perguruan Tinggi (Jika berkenan, anda bisa mengisi survey ini)</li>
            </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 basis-1/3 flex-1">
              <a href="https://merdekadarikekerasan.kemdikbud.go.id/pencegahan/#"><Image
                src={web8}
                alt="web images"
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
              /></a>
               <ul>
            <li className="text-sm py-2 text-gray-400 leading-6 text-center">Pencegahan dan Penanganan Kekerasan Seksual (Terdapat Berbagai cara yang dapat dilakukan untuk mencegah dan menangani kekerasan seksual, anda bisa melihatnya disini)</li>
            </ul>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 basis-1/3 flex-1">
              <a href="https://merdekadarikekerasan.kemdikbud.go.id/peraturan/#"><Image
                src={web10}
                alt="web images"
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
              /></a>
               <ul>
            <li className="text-sm py-2 text-gray-400 leading-6 text-center">Peraturan Pencegahan dan Penanganan Kekerasan Seksual (Terdapat Berbagai cara yang dapat dilakukan untuk mencegah dan menangani kekerasan seksual, anda bisa melihatnya disini)</li>
            </ul>
            </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
