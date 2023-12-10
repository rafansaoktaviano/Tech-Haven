"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          product_name: "ASUS ROG PHONE 3 / 2 5G 8GB/128GB",
          product_description: `
          Asus Rog phone 3 8/128GB 12/128 12/256GB
          FULLSETT TAM : FULLSET DENGAN ACC DAN BOX ORIGINAL
          UNIT ONLY : SECOND BATANGAN TIDAK TERMASUK ACC DAN BOX
          
          Asus Rog Phone 2 8/128GB 12/256GB
          FULLSETT TAM : FULLSET DENGAN ACC DAN BOX ORIGINAL ( 90% -95% unit second tidak mulus 100% )
          UNIT ONLY : SECOND BATANGAN TIDAK TERMASUK ACC DAN BOX
          GARANSI  TOKO 30 HARI UNTUK VARIAN SECOND FULLSET TAM , ( di luar human eror `,
          product_price: 3600000,
          product_weight: 700,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 2,
          product_name: "Asus ROG Phone 5s 12/256",
          product_description: `
            Berikut deskripsi produk : 👇
            • Ukuran layar: 6.78 inci, 109.5cm2, 1080 x 2448 pixels (~395 ppi density) AMOLED, 1B colors, 144Hz, HDR10+
            • Memori: RAM 12GB 8GB, ROM 256GB 128GB
            • Sistem operasi: Android 11; ROG UI
            • CPU: Qualcomm SM8350 Snapdragon 888+ 5G (5 nm), Octa-core (1x2.99 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680)
            • GPU: Adreno 660
            • Kamera Belakang: 64 MP f/1.8 26mm PDAF (wide), 13 MP f/2.4 125˚(ultrawide), & 5 MP f/2.0 (macro)
            • Kamera Depan: 24 MP f/2.5 27mm (wide)
            • SIM: Dual SIM (Nano-SIM, dual stand-by)
            • Baterai: Li-Po 6000 mAh, non-removable
            • Berat: 238 gr
            • Garansi Resmi TAM`,
          product_price: 8000000,
          product_weight: 500,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 3,
          product_name: "Realme Smartphone GT Neo 5 SE",
          product_description: `Berikut deskripsi produk : 👇
          • Ukuran layar: 6.78 inci, 109.5cm2, 1080 x 2448 pixels (~395 ppi density) AMOLED, 1B colors, 144Hz, HDR10+
          • Memori: RAM 12GB 8GB, ROM 256GB 128GB
          • Sistem operasi: Android 11; ROG UI
          • CPU: Qualcomm SM8350 Snapdragon 888+ 5G (5 nm), Octa-core (1x2.99 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680)
          • GPU: Adreno 660
          • Kamera Belakang: 64 MP f/1.8 26mm PDAF (wide), 13 MP f/2.4 125˚(ultrawide), & 5 MP f/2.0 (macro)
          • Kamera Depan: 24 MP f/2.5 27mm (wide)
          • SIM: Dual SIM (Nano-SIM, dual stand-by)
          • Baterai: Li-Po 6000 mAh, non-removable
          • Berat: 238 gr
          • Garansi Resmi TAM`,
          product_price: 8500000,
          product_weight: 600,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 4,
          product_name: "Apple iPhone 13 128GB, Pink",
          product_description: `## Deskripsi Produk

          iPhone 13. Sistem kamera ganda paling canggih yang pernah ada di iPhone. Chip A15 Bionic yang secepat kilat. Lompatan besar dalam kekuatan baterai. Desain kokoh. Dan layar Super Retina XDR yang lebih cerah.
          
          Isi Kotak :
          
          - iPhone dengan iOS 15.
          - Kabel USB-C ke Lightning.
          - Buku Manual dan Dokumentasi lain.
          
          Poin-poin fitur utama
          
          - Layar Super Retina XDR 6,1 inci(1)
          - Mode Sinematik menambahkan kedalaman bidang yang dangkal dan pindah fokus secara otomatis di video Anda
          - Sistem kamera ganda canggih dengan kamera Wide dan Ultra Wide 12 MP; Gaya Fotografi, Smart HDR 4, mode Malam, perekaman HDR 4K Dolby Vision
          - Kamera depan TrueDepth 12 MP dengan mode Malam, perekaman HDR 4K Dolby Vision
          - Chip A15 Bionic untuk performa secepat kilat
          - Pemutaran video hingga 19 jam(2)
          - Desain kokoh dengan Ceramic Shield
          - Level ketahanan air IP68 terdepan di industri(3)
          - iOS 15 dilengkapi berbagai fitur baru untuk melakukan lebih banyak hal dengan iPhone(4)
          - Mendukung aksesori MagSafe untuk kemudahan pemasangan dan pengisian daya nirkabel yang lebih cepat(5)`,
          product_price: 12000000,
          product_weight: 300,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 5,
          product_name: "Apple iPhone 14 128GB, Blue",
          product_description: `iPhone 14. Dengan sistem kamera ganda paling hebat di iPhone. Ambil foto yang memukau dalam pencahayaan rendah maupun terang. Deteksi Tabrakan,(1) sebuah fitur keselamatan baru, memanggil bantuan saat Anda tak bisa.

          Poin-poin fitur utama
          
          - Layar Super Retina XDR 6,1 inci(2)
          - Sistem kamera canggih untuk foto yang lebih baik dalam berbagai kondisi pencahayaan
          - Mode Sinematik kini dalam Dolby Vision 4K pada kecepatan hingga 30 fps
          - Mode Aksi untuk video handheld yang stabil
          - Fitur keselamatan penting, —Deteksi Tabrakan1 memanggil bantuan saat Anda tak bisa
          - Kekuatan baterai sepanjang hari dan pemutaran video hingga 20 jam(3)
          - Chip A15 Bionic dengan GPU 5-core untuk performa secepat kilat. Seluler 5G super cepat(4)
          - Fitur ketahanan terdepan di industri dengan Ceramic Shield dan tahan air(5)
          - iOS 16 menawarkan semakin banyak cara untuk personalisasi, komunikasi, dan berbagi(6)`,
          product_price: 14000000,
          product_weight: 400,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 6,
          product_name: "Apple iPhone 15 Pro 256GB, Natural Titanium",
          product_description: `Phone 15 Pro. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro yang lebih serbaguna.

          Poin-poin fitur utama
          
          LAHIR DARI TITANIUM — iPhone 15 Pro memiliki desain titanium sekelas industri dirgantara yang kuat dan ringan dengan bagian belakang kaca matte bertekstur. Dilengkapi juga dengan bagian depan Ceramic Shield yang lebih tangguh dibanding kaca ponsel pintar mana pun. Dan tahan cipratan, air, dan debu.(1)
          
          LAYAR CANGGIH — Layar Super Retina XDR 6,1″ (2) dengan ProMotion meningkatkan refresh rate hingga 120 Hz saat Anda memerlukan performa grafis yang luar biasa. Dynamic Island menampilkan gelembung pemberitahuan dan Aktivitas Langsung. Selain itu, dengan layar yang Selalu Aktif, Layar Terkunci selalu terlihat dalam sekilas, jadi Anda tidak perlu mengetuknya untuk mengetahui informasi.`,
          product_price: 24000000,
          product_weight: 450,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 7,
          product_name: "Apple iPhone 14 Pro Max 1TB, Silver",
          product_description: `iPhone 14 Pro Max. Memotret detail menakjubkan dengan kamera Utama 48 MP. Nikmati iPhone dalam cara yang sepenuhnya baru dengan layar yang Selalu Aktif dan Dynamic Island. Deteksi Tabrakan,(1) sebuah fitur keselamatan baru, memanggil bantuan saat Anda tak bisa.

          Poin-poin fitur utama
          
          - Layar Super Retina XDR 6,7 inci(2) yang Selalu Aktif dan dilengkapi ProMotion
          - Dynamic Island, cara baru yang istimewa untuk berinteraksi dengan iPhone
          - Kamera utama 48 MP untuk resolusi hingga 4x lebih besar
          - Mode Sinematik kini dalam Dolby Vision 4K pada kecepatan hingga 30 fps
          - Mode Aksi untuk video handheld yang stabil
          - Teknologi keselamatan penting—Deteksi Tabrakan,1 (1) memanggil bantuan saat Anda tak bisa
          - Kekuatan baterai sepanjang hari dan pemutaran video hingga 29 jam(3)
          - A16 Bionic, chip ponsel pintar paling maksimal. Seluler 5G super cepat(4)
          - Fitur ketahanan terdepan di industri dengan Ceramic Shield dan tahan air(5)
          - iOS 16 menawarkan semakin banyak cara untuk personalisasi, komunikasi, dan berbagi(6)`,
          product_price: 29999999,
          product_weight: 500,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 8,
          product_name: "Apple iPhone 12 128GB, Green",
          product_description: `iPhone 12. Layar Super Retina XDR 6,1 inci yang begitu cerah.(1) Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.(2)Fotografi pencahayaan rendah yang menakjubkan dengan mode Malam di semua kamera. Mampu merekam, mengedit, dan memutar video sekelas sinema dengan Dolby Vision. Chip A14 Bionic yang andal. Dan aksesori MagSafe baru untuk kemudahan pemasangan dan pengisian daya nirkabel yang lebih cepat.(3)Saatnya bersenang-senang.

          Isi Kotak :
          • iPhone dengan iOS 14.
          • Kabel USB-C ke Lightning.
          • Buku Manual dan Dokumentasi lain.`,
          product_price: 10999999,
          product_weight: 600,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 9,
          product_name: "Apple iPhone 13 128GB, Green",
          product_description: `iPhone 13. Sistem kamera ganda paling canggih yang pernah ada di iPhone. Chip A15 Bionic yang secepat kilat. Lompatan besar dalam kekuatan baterai. Desain kokoh. Dan layar Super Retina XDR yang lebih cerah.

          Isi Kotak :
          
          - iPhone dengan iOS 15.
          - Kabel USB-C ke Lightning.
          - Buku Manual dan Dokumentasi lain.
          
          Poin-poin fitur utama
          
          - Layar Super Retina XDR 6,1 inci(1)
          - Mode Sinematik menambahkan kedalaman bidang yang dangkal dan pindah fokus secara otomatis di video Anda
          - Sistem kamera ganda canggih dengan kamera Wide dan Ultra Wide 12 MP; Gaya Fotografi, Smart HDR 4, mode Malam, perekaman HDR 4K Dolby Vision
          - Kamera depan TrueDepth 12 MP dengan mode Malam, perekaman HDR 4K Dolby Vision
          - Chip A15 Bionic untuk performa secepat kilat
          - Pemutaran video hingga 19 jam(2)
          - Desain kokoh dengan Ceramic Shield
          - Level ketahanan air IP68 terdepan di industri(3)
          - iOS 15 dilengkapi berbagai fitur baru untuk melakukan lebih banyak hal dengan iPhone(4)
          - Mendukung aksesori MagSafe untuk kemudahan pemasangan dan pengisian daya nirkabel yang lebih cepat(5)`,
          product_price: 11999999,
          product_weight: 500,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 10,
          product_name: "Apple iPhone 13 128GB, Starlight",
          product_description: `iPhone 13. Sistem kamera ganda paling canggih yang pernah ada di iPhone. Chip A15 Bionic yang secepat kilat. Lompatan besar dalam kekuatan baterai. Desain kokoh. Dan layar Super Retina XDR yang lebih cerah.
          Isi Kotak :
          • iPhone dengan iOS 15.
          • Kabel USB-C ke Lightning.
          • Buku Manual dan Dokumentasi lain.`,
          product_price: 12999999,
          product_weight: 500,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 11,
          product_name:
            "Baseus D02 Pro Foldable Headphone Bluetooth Wireless/Wired V5.0",
          product_description: `Baseus Encok D02 Pro Headphone Bluetooth Wireless Noise Reduction

          Baseus Encok Wireless Headphones D02 Pro
          Berkat driver audio 40mm, headphone ini menampilkan bass yang memukau dan stereo 3D khusus yang memberikan pengalaman suara yang imersif dan realistis.
          
          Baterai lithium berkapasitas tinggi 450mAh memiliki konsumsi daya rendah 10mA yang memungkinkan pemutaran terus menerus hingga 40 jam setelah terisi penuh.
          Anda dapat mendengarkan musik selama seminggu penuh dengan sekali pengisian daya (5 jam sehari).
          
          Teknologi koneksi pintar mendukung menghubungkan dua perangkat pada saat yang sama dengan mulus beralih antara menerima panggilan dan mendengarkan musik. Ikat kepala model ini diperkuat dengan baja tahan karat 304, memberikan daya tahan dan umur panjang layanan. Bluetooth 5.0 memastikan koneksi yang stabil dengan jangkauan hingga 32 kaki.
          Jika baterai habis,`,
          product_price: 200000,
          product_weight: 190,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 12,
          product_name: "Professional DJ Headphone DBE DJ100",
          product_description: `Anda seorang musisi atau DJ atau suka arasmen musik yang "haus" dengan audio yang detail? ya hanya ini solusi dengan harga murah yang kurang dari 350rb tetapi menghasilkan audio yang sangat lumayan. mimin sudah mencoba di Laptop dengan audio flac dari boneyM, hasilnya memuaskan untuk harga segitu, tapi mimin rasa belum maksimal. ketika mimin coba dengan menggunakan mixer allen n heath pakai lagu "Satu Indonesiaku" di studio mimin hee kualitasnya jauh lebih meningkat.. asli.. untungnya jack audio pada headphone ini memiliki dual mode: 3.5mm untuk headphone dan 6.3mm untuk mixer monitor, yuk simak spesifikasi lengkap dari alat ini :

          Sebenarnya Kualitas suara DJ100 masih bisa ditingkatkan lagi dengan munggunakan aux cable yang lebih baik, seperti dbE MM100 aux cable. Kelebihan utama DJ100 ini dibandingkan kompetitornya yang seharga adalah DJ100 memiliki fitur detachable cable dengan pin 3.5mm standar.`,
          product_price: 300000,
          product_weight: 200,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 13,
          product_name:
            "TA-Headset Bluetooth Gaming Telinga Kucing - Headphone Kuping P47",
          product_description: `Deskripsi produk :
          - Headset bando model telinga kucing LED
          - Tersedia dalam berbagai warna yang cantik dengan lampu LED
          Deskripsi Produk
          Material: Leather+PVC
          Type: Wireless+Wired
          Bluetooth Version : 5.0
          Batrai specifications 200 mAh
          Compatible: for Smartphone/ bluetooth devices/ devices with 3.5mm audio jeck
          Wearing method: head-mounted
          Headphone output source: universal
          Charging voltage 5V/1A
          Charging time about 2,5 hours`,
          product_price: 200000,
          product_weight: 250,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 14,
          product_name: "Thinkplus Lenovo TH10 Headset Bluetooth",
          product_description: `-Rasakan suara HIFI,3D dengan Dual power loudspeakers dan CVC microphones.
          -Audio AUX yang kompatibel dengan banyak perangkat android atau ios.
          Nyaman dipakai lama, dengan masa pakai baterai yang kuat.
          
          Spesifikasi Produk :
          
          Bluetooth version : V5.0
          Bluetooth distance : 10m
          Speaker size : 40mm
          Frequency range : 20Hz-20KHz
          Impedence of glass speaker : 32Ω ±15%
          Speaker sensitivity : 110dB±3dB
          Microphone sensitivity : -42dB±3dB
          Playing time : about 10 hours (60% volume)
          Battery capacity : 3.7V/300mAh
          Kabel koneksi : 3.5mm audio cable
          Charging interface : USB
          Surround : 9D
          Bluetooth transmission distance : 10-15m
          Battery life : 8 hours of gaming, 12 hours of playback`,
          product_price: 160000,
          product_weight: 400,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 15,
          product_name: "Headphone Bluetooth Wireless 5.0+EDR Stereo P47",
          product_description: `Compatible with 5.0 VERSION
          Scope of work : 10 meters
          USB Charging cable : AC input 110-240VDC input 5V
          Talk time : 6 hours
          Stanby time : up to 15 hours
          Operating frequency: 2.4 GHz-2.4835GHz
          The ouput frequency : class2
          Noise reduction technology : DPS digital sigla process
          Support A2DP function
          AVRCP remote control capabilities
          Support automatic switchover to incoming call dunction
          With the end number redial function
          Large and small volume abutment
          Forward backward selections feature pause function
          Compatible with ROHS standars
          Mengisi Waktu: 2-3 jam
          Plug Type: 3.5mm`,
          product_price: 100000,
          product_weight: 250,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 16,
          product_name: "Headphone Wireless Macaron MZ 08 Bluetooth",
          product_description: `Untuk REQUEST WARNA/VARIASI silahkan di tambahkan di PESAN sebelum Chekout, TIDAK menerima request di CHAT, Jika warna/Variasi yang di request kosong akan kami kirim dgn warna/variasi yg berbeda mengingat stock warna terkadang kurang dan juga tidak menerima returan karena warna/variasi**
          WARNA : Biru & Hitam
          Headphone Wireless MZ08 Macaron Bluetooth Headphone
          Spesifikasi Produk:
          Mendukung pemutaran kartu TF, mendukung panggilan bebas genggam.
          Chip Bluetooth 5.0, kinerja tinggi, konsumsi daya rendah, lebih cepat dan lebih stabil.
          Tiga metode koneksi (kartu TF, Bluetooth dan kabel), yang dapat memenuhi kebutuhan Anda yang berbeda.
          Kompatibilitas luas, kompatibel dengan semua perangkat berkemampuan Bluetooth`,
          product_price: 150000,
          product_weight: 290,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 17,
          product_name: "Headset REXUS F30 Gaming RGB | ITECHBALI",
          product_description: `Rexus gaming headset Vonix F30 adalah headset yang diperuntukkan bagi para pemain game PC serta untuk mobile/handphone bs menggunakan FREE Splitter yang tersedia sehingga memudahkan para pengguna untuk plug n play menggunakan perangkat apapun. 

          Tampil tangguh, Vonix F30 tak mengesampingkan fungsi utamanya sebagai pemroduksi suara, dengan suara yang detil dan range lebar, seperti karakterisitik headset gaming pada umumnya.  
          • Menggunakan driver berdiameter 50mm untuk menghasilkan suara berdaya besar. 
          • Menggunakan mikrofon untuk mengambil suara dari berbagai arah, dengan beberapa titik mikrofon berdiameter besar, yaitu 5mm.
          • Mempunyai lampu LED RGB yang secara otomatis berganti warna.
          • Bando kepala lebar, nyaman, dan kuat.
          • Tipe earpad over-ear, yang sangat nyaman untuk penggunaan durasi lama`,
          product_price: 200000,
          product_weight: 300,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 18,
          product_name: "Headphone Headset BANDO GAMING MISDE A3 PLUS MIC",
          product_description: `Headset MISDE A3 ready stok
          headset gaming suara mantap, pas banget buat nemenin kamu bermain games atau mendengarkan music dance karena suaranya jernih dan bassnya nendang...
          Bantalan yang empuk bikin kalian nyaman berlama-lama memakai headset ini..
          
          *Suara Mantap BOS Bass nya Pas cocok buat gaming
          *Bisa Komputer, Laptop, Kalo ke HP Pake Splitter kalo mau micnya aktif karena ini jack 2
          *Bantalan Empuk
          *Microphone Jernih
          *Tipe MISDE H6
          *Jaminan Suara OKE`,
          product_price: 179000,
          product_weight: 320,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 19,
          product_name: "Headphone JOYSEUS B3 HIFI",
          product_description: `Mode Switch: Short press M/QE key switch Bluetooth mode and card mode.

          Card mode: Card mode directly into the TF card ( not when inserted into the card case, the card mode is turned off by default). After inserted into the TF card you can short press the M/QE key for to mode switch.
          
          Wired Audio input mode: Off state, the insertion of the distribution of audio cable, you can enter the audio input mode.
          
          Previous song: Long press VOL- button 2 seconds
          
          Next song: Long press VOL+ button 2 seconds
          
          Volume+: Short press VOL+ button
          
          Volume-: Short press VOL- button`,
          product_price: 150000,
          product_weight: 250,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 20,
          product_name: "HEADPHONE BLUETOOTH BASS ORI",
          product_description: `Celebrat A18 adalah headset wireless ekstra bass paling best deal dengan harga terjangkau. Dijamin tidak mengecewakan. Celebrat adalah merek china untuk pasar Jepang jadi kualitas & craftmanshipnya bagus dan rapi dibanding produk china lainnya. Suara jernih dan extra bass memukau.
 
          Model A18
          Bluetooth range: Up to 33 ft (10 m)
          Battery charging time: Up to 2.5 hours
          Talk Time : 6 hours
          Music Time : 8 hours
          Micro USB connection`,
          product_price: 300000,
          product_weight: 300,
          product_status: "Active",
          products_categories_id: 3,
        },
        {
          id: 21,
          product_name: "Asus ROG Zephyrus G14 GA401IV",
          product_description: `The ROG Zephyrus G14 makes powerful, ultraportable Windows 10 Home gaming accessible to everyone. Dynamic and ready to travel, the pioneering ROG Zephyrus G14 is the world’s most powerful 14-inch Windows 10 Pro gaming laptop. Outclass the competition with up to an 8-core AMD Ryzen™ 9 4900HS CPU and potent GeForce RTX™ 2060 GPU that speed through everyday multitasking and gaming. Customize your fit with either a 120Hz gaming display or high-resolution WQHD panel, both Pantone® Validated for superb color accuracy. Quad speakers pump out incredible Dolby Atmos sound for immersive movies, games, music, and more. Live life at Zephyrus speed with a light and portable gaming laptop, and be active anywhere.`,
          product_price: 13990000,
          product_weight: 1600,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 22,
          product_name: "Dell XPS 13 9310",
          product_description: `The XPS 13 is powered by a 11th Generation Intel® Core™ i5-1135G7 Processor, 8 GB LPDDR4x Non-ECC Integrated RAM, Intel Iris Xe Graphics, and a 256 GB PCIe NVMe x4 Solid-State Drive. The display features a 13.4-inch FHD+ InfinityEdge Non-Touch Anti-Glare 500-Nit Display (1920 x 1200).`,
          product_price: 14490000,
          product_weight: 1200,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 23,
          product_name: "HP Spectre x360 Convertible 14",
          product_description: `The HP Spectre x360 Convertible 14 is designed with you in mind. The powerful 11th Gen Intel Core i7 processor, 16 GB DDR4 RAM, and 1 TB SSD provide exceptional performance. With a 13.5-inch OLED display, you'll experience vibrant colors and true-to-life visuals. This 2-in-1 laptop offers versatility and style for both work and play.`,
          product_price: 18990000,
          product_weight: 1300,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 24,
          product_name: "Lenovo ThinkPad X1 Carbon Gen 9",
          product_description: `The ThinkPad X1 Carbon Gen 9 laptop is the ultimate business companion with powerful Intel processing, ThinkPad durability, and a stunning 14-inch display. It also features a sleek, slim design and a host of productivity and security enhancements that make it a top choice for professionals on the go.`,
          product_price: 19990000,
          product_weight: 1100,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 25,
          product_name: "Acer Predator Helios 300",
          product_description: `The Acer Predator Helios 300 is a high-performance gaming laptop that delivers an immersive gaming experience. It features a 15.6-inch Full HD IPS display, an Intel Core i7 processor, 16 GB of RAM, and an NVIDIA GeForce RTX 3060 GPU. With advanced cooling technology, you can game for hours without overheating. Dominate the competition with the Predator Helios 300.`,
          product_price: 17990000,
          product_weight: 2300,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 26,
          product_name: "Microsoft Surface Laptop 4",
          product_description: `The Microsoft Surface Laptop 4 is a premium ultrabook designed for productivity and portability. It features a high-resolution PixelSense touchscreen display, an Intel Core i5 processor, 8 GB of RAM, and a fast SSD for quick access to your files. With its sleek design and all-day battery life, the Surface Laptop 4 is perfect for professionals on the move.`,
          product_price: 14990000,
          product_weight: 1200,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 27,
          product_name: "Razer Blade 15 Advanced Model",
          product_description: `The Razer Blade 15 Advanced Model is a high-performance gaming laptop with a sleek, modern design. It's powered by an Intel Core i7 processor, 16 GB of RAM, and an NVIDIA GeForce RTX 3080 GPU for outstanding gaming performance. The 15.6-inch QHD display offers stunning visuals for an immersive gaming experience.`,
          product_price: 23990000,
          product_weight: 2200,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 28,
          product_name: "Apple MacBook Air M1",
          product_description: `The Apple MacBook Air with M1 chip redefines what a thin and light notebook can do. With incredible performance, a silent fanless design, and all-day battery life, the MacBook Air is more powerful than ever. It features a 13.3-inch Retina display, 8 GB of unified memory, and a lightning-fast SSD for storage. Experience the power of Apple's M1 chip in a sleek and portable form factor.`,
          product_price: 14990000,
          product_weight: 1200,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 29,
          product_name: "Asus VivoBook S14",
          product_description: `The Asus VivoBook S14 is a compact and lightweight laptop that's perfect for on-the-go productivity. It features a 14-inch Full HD display, an Intel Core i5 processor, 8 GB of RAM, and a fast SSD for quick boot times. The ErgoLift hinge provides a comfortable typing experience, and the NanoEdge bezel offers an immersive viewing experience.`,
          product_price: 8999000,
          product_weight: 1200,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 30,
          product_name: "Dell Inspiron 14 2-in-1",
          product_description: `The Dell Inspiron 14 2-in-1 is a versatile laptop that can adapt to your needs. Use it as a traditional laptop for work, or flip the screen for tablet mode. It features a 14-inch Full HD touchscreen display, an Intel Core i3 processor, 4 GB of RAM, and a 256 GB SSD. With its compact design and long battery life, it's perfect for students and professionals on the move.`,
          product_price: 9999000,
          product_weight: 1600,
          product_status: "Active",
          products_categories_id: 2,
        },
        {
          id: 31,
          product_name: "Logitech G Pro X Mechanical Gaming Keyboard",
          product_description: `The Logitech G Pro X Mechanical Gaming Keyboard is designed for professional gamers who demand precision and performance. It features customizable GX Blue Clicky switches, allowing you to swap out switches for a custom experience. The compact tenkeyless design saves space while providing a full gaming experience. With customizable RGB lighting and programmable keys, you can personalize your setup for ultimate gaming immersion.`,
          product_price: 1699000,
          product_weight: 900,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 32,
          product_name: "Razer DeathAdder Elite Gaming Mouse",
          product_description: `The Razer DeathAdder Elite Gaming Mouse is equipped with a 16,000 DPI optical sensor for precise tracking. Its ergonomic design and customizable Chroma lighting make it a popular choice among gamers. With seven programmable buttons and durable mechanical switches, you'll have the edge in any gaming situation.`,
          product_price: 599000,
          product_weight: 105,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 33,
          product_name:
            "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
          product_description: `The Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard is a powerhouse of features for gamers. It boasts Cherry MX Brown switches for tactile feedback, dedicated macro keys, and customizable RGB backlighting. The detachable wrist rest ensures comfort during long gaming sessions, and the durable aluminum frame adds a touch of style.`,
          product_price: 2799000,
          product_weight: 1300,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 34,
          product_name: "SteelSeries Rival 600 Gaming Mouse",
          product_description: `The SteelSeries Rival 600 Gaming Mouse is built for competitive gaming with a dual sensor system that provides true 1-to-1 tracking. It features customizable weight tuning, split-trigger buttons, and customizable RGB lighting. With a durable construction and comfortable grip, it's a top choice for serious gamers.`,
          product_price: 1299000,
          product_weight: 96,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 35,
          product_name: "HyperX Alloy FPS Pro Mechanical Gaming Keyboard",
          product_description: `The HyperX Alloy FPS Pro Mechanical Gaming Keyboard is designed for professional-level gaming. It features Cherry MX Red switches for smooth and responsive keystrokes. The compact design and detachable cable make it easy to transport to tournaments. With customizable backlighting and a sturdy steel frame, it's a reliable choice for competitive gamers.`,
          product_price: 899000,
          product_weight: 900,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 36,
          product_name: "Logitech G502 HERO High Performance Gaming Mouse",
          product_description: `The Logitech G502 HERO High Performance Gaming Mouse is equipped with the HERO sensor for accurate tracking. It features customizable weights, 11 programmable buttons, and adjustable DPI settings. The ergonomic design ensures a comfortable grip during long gaming sessions.`,
          product_price: 699000,
          product_weight: 121,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 37,
          product_name: "Corsair K70 RGB MK.2 Mechanical Gaming Keyboard",
          product_description: `The Corsair K70 RGB MK.2 Mechanical Gaming Keyboard is a high-performance keyboard with Cherry MX Red switches for rapid keystrokes. It features customizable per-key RGB backlighting and dedicated media controls. The aluminum frame provides durability and a premium look.`,
          product_price: 2399000,
          product_weight: 1460,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 38,
          product_name: "Razer Basilisk X HyperSpeed Wireless Gaming Mouse",
          product_description: `The Razer Basilisk X HyperSpeed Wireless Gaming Mouse offers lag-free wireless performance for competitive gaming. It features a high-precision 16,000 DPI optical sensor, customizable scroll wheel resistance, and 6 programmable buttons. The ergonomic design ensures a comfortable grip for extended gaming sessions.`,
          product_price: 1199000,
          product_weight: 107,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 39,
          product_name: "HyperX Pulsefire FPS Pro FPS Gaming Mouse",
          product_description: `The HyperX Pulsefire FPS Pro FPS Gaming Mouse is designed for first-person shooter enthusiasts. It features a 16,000 DPI sensor for precise tracking and customizable RGB lighting. The ergonomic design and durable Omron switches make it a reliable choice for intense gaming sessions.`,
          product_price: 799000,
          product_weight: 95,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 40,
          product_name: "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard",
          product_description: `The SteelSeries Apex Pro TKL Mechanical Gaming Keyboard features adjustable mechanical switches for customizable actuation points. It offers per-key RGB lighting, dedicated media controls, and a durable aluminum frame. The compact tenkeyless design provides extra desk space for mouse movement.`,
          product_price: 2999000,
          product_weight: 771,
          product_status: "Active",
          products_categories_id: 4,
        },
        {
          id: 41,
          product_name: "OnePlus Nord N200 5G",
          product_description: `The OnePlus Nord N200 5G is an affordable 5G smartphone with a 6.49-inch IPS LCD display. It's powered by the Snapdragon 480 5G processor for smooth performance. The triple-camera system provides versatile photography options. With OxygenOS, it offers a clean and customizable user experience.`,
          product_price: 3299000,
          product_weight: 189,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 42,
          product_name: "Xiaomi Redmi Note 10 Pro",
          product_description: `The Xiaomi Redmi Note 10 Pro is a mid-range smartphone with a 6.67-inch Super AMOLED display. It's equipped with a versatile quad-camera system with a 64MP main sensor. The Snapdragon 732G processor ensures efficient multitasking and gaming. With a large battery and fast charging, it's designed for all-day use.`,
          product_price: 3599000,
          product_weight: 193,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 43,
          product_name: "Realme Narzo 30 Pro 5G",
          product_description: `The Realme Narzo 30 Pro 5G is an entry-level 5G smartphone with a 6.5-inch IPS LCD display. It's powered by the MediaTek Dimensity 700 5G processor for reliable performance. The triple-camera system provides decent photography capabilities. With a large battery and fast charging, it's a budget-friendly option for 5G connectivity.`,
          product_price: 2799000,
          product_weight: 192,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 44,
          product_name: "Vivo V21 5G",
          product_description: `The Vivo V21 5G is a stylish smartphone with a 6.44-inch AMOLED display and a 44MP OIS front camera for stunning selfies. It's powered by the MediaTek Dimensity 800U 5G processor for smooth performance. The dual-camera system with OIS and EIS ensures high-quality photos and videos.`,
          product_price: 3899000,
          product_weight: 176,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 45,
          product_name: "Oppo Reno5 F",
          product_description: `The Oppo Reno5 F is a mid-range smartphone with a 6.43-inch AMOLED display and a sleek design. It's equipped with a quad-camera system for versatile photography. The MediaTek Helio P95 processor ensures reliable performance. With ColorOS 11.1, it offers a smooth and customizable user experience.`,
          product_price: 3599000,
          product_weight: 172,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 46,
          product_name: "Samsung Galaxy A52 5G",
          product_description: `The Samsung Galaxy A52 5G is a mid-range smartphone with a 6.5-inch Super AMOLED display and a high refresh rate. It features a versatile quad-camera system with a 64MP main sensor. The Snapdragon 750G processor ensures efficient multitasking and gaming performance.`,
          product_price: 4799000,
          product_weight: 189,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 47,
          product_name: "Google Pixel 5",
          product_description: `The Google Pixel 5 is a flagship smartphone with a 6.0-inch OLED display and a powerful Snapdragon 765G processor. It boasts a dual-camera system with advanced computational photography capabilities. With Android 11 and regular software updates, it offers a pure Android experience.`,
          product_price: 5999000,
          product_weight: 151,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 48,
          product_name: "Sony Xperia 10 III",
          product_description: `The Sony Xperia 10 III is a mid-range smartphone with a 6.0-inch OLED display. It's powered by the Snapdragon 690 processor and features a triple-camera system with ZEISS optics. The IP65/68 rating adds water and dust resistance.`,
          product_price: 5499000,
          product_weight: 169,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 49,
          product_name: "Motorola Moto G Power (2021)",
          product_description: `The Motorola Moto G Power (2021) is a budget-friendly smartphone with a massive 5,000mAh battery for long-lasting usage. It features a 6.6-inch IPS LCD display and is powered by the Snapdragon 662 processor. The triple-camera system provides versatile photography options.`,
          product_price: 2799000,
          product_weight: 206,
          product_status: "Active",
          products_categories_id: 1,
        },
        {
          id: 50,
          product_name: "Nokia 5.4",
          product_description: `The Nokia 5.4 is a reliable mid-range smartphone with a 6.39-inch IPS LCD display. It's powered by the Snapdragon 662 processor for smooth performance. The quad-camera system offers a range of photography options. With a clean Android One interface, it provides a clutter-free user experience.`,
          product_price: 2399000,
          product_weight: 181,
          product_status: "Active",
          products_categories_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
