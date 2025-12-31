export const kategori = [
    {
        path: 'perusahaan',
        icon: ''
    },
    {
        path: 'Magang',
        icon: ''
    },
    {
        path: 'lowongan',
        icon: ''
    }
]

export const kelamin = ['Pria','Wanita']
export const jurusan = [
    {
        path: 'TJKT',
        icon: ''
    },
    {
        path: 'MPK',
        icon: ''
    },
    {
        path: 'AKL',
        icon: ''
    },
    {
        path: 'TMI',
        icon: ''
    },
    {
        path: 'TBSM',
        icon: ''
    }
]

export const Kelas = ['X','XI','XII','Lulus']
export const jurusanText = ['TJKT','MPK','AKL','TMI','TBSM'] as const
export const keahlihan = {
    'TJKT': {
        'Instalasi & Perawatan Komputer': {
            'nama': 'Instalasi & Perawatan Komputer',
            'deskripsi': 'Memiliki kemampuan dalam perakitan dan perawatan komputer serta laptop, meliputi instalasi dan konfigurasi sistem operasi berbasis Windows dan Linux, pembaruan driver, serta troubleshooting perangkat keras dan perangkat lunak. Terbiasa menangani permasalahan teknis secara sistematis untuk memastikan perangkat dapat beroperasi secara optimal dan stabil sesuai kebutuhan pengguna.'
        },
        'Manajemen Jaringan': {
            'nama': 'Manajemen Jaringan',
            'deskripsi': 'Mampu merancang, mengimplementasikan, dan memelihara jaringan komputer berbasis LAN, WAN, dan WLAN, termasuk proses crimping kabel, pengaturan IP addressing, serta konfigurasi perangkat jaringan seperti router dan switch (Mikrotik/Cisco). Memahami dasar monitoring jaringan dan optimasi konektivitas untuk mendukung komunikasi data yang efisien dan aman.'
        },
        'Administrasi Server': {
            'nama': 'Administrasi Server',
            'deskripsi': 'Berpengalaman dalam pengelolaan server berbasis Windows Server dan Linux, mencakup manajemen user, file sharing, pengaturan bandwidth, serta penerapan kebijakan keamanan jaringan menggunakan firewall. Mampu menjaga ketersediaan dan stabilitas layanan server untuk mendukung kebutuhan operasional sistem dan pengguna.'
        },
        'Keamanan Jaringan': {
            'nama': 'Keamanan Jaringan',
            'deskripsi': 'Memahami penerapan dasar keamanan jaringan, meliputi konfigurasi firewall, manajemen akses pengguna, serta pengamanan jaringan dari ancaman umum seperti akses tidak sah dan penyalahgunaan bandwidth. Mampu menerapkan kebijakan keamanan sederhana untuk menjaga integritas dan ketersediaan sistem jaringan.'
        },
        'Monitoring & Troubleshooting Jaringan': {
            'nama': 'Monitoring & Troubleshooting Jaringan',
            'deskripsi': 'Mampu melakukan monitoring performa jaringan serta menganalisis permasalahan konektivitas menggunakan pendekatan troubleshooting yang sistematis. Terbiasa mengidentifikasi sumber gangguan jaringan dan melakukan tindakan perbaikan untuk meminimalkan downtime dan menjaga kualitas layanan.'
        },
        'Konfigurasi Perangkat Jaringan': {
            'nama': 'Konfigurasi Perangkat Jaringan',
            'deskripsi': 'Memiliki kemampuan dalam melakukan konfigurasi dan pemeliharaan perangkat jaringan seperti router, switch, dan access point, termasuk pengaturan VLAN, DHCP, NAT, dan routing dasar. Terbiasa menggunakan perangkat Mikrotik dan Cisco untuk memastikan jaringan berjalan stabil, terstruktur, dan sesuai dengan kebutuhan operasional.'
        }
    },
    'TMI': {
        'Pemeliharaan Mesin': {
            'nama': 'Pemeliharaan Mesin',
            'deskripsi': 'Memiliki kemampuan dalam melakukan perawatan preventif dan korektif pada mesin produksi, seperti mesin bubut, frais, dan CNC, untuk menjaga performa dan umur pakai mesin. Terbiasa melakukan pengecekan komponen mekanik, pelumasan, serta identifikasi awal kerusakan guna meminimalkan downtime produksi.'
        },
        'Sistem Pneumatik & Hidrolik': {
            'nama': 'Sistem Pneumatik & Hidrolik',
            'deskripsi': 'Memahami prinsip kerja sistem pneumatik dan hidrolik yang digunakan pada mesin industri, termasuk identifikasi komponen, pemeriksaan tekanan, serta penanganan gangguan sederhana. Mampu melakukan perawatan dasar dan memastikan sistem tenaga fluida berfungsi secara aman dan efisien.'
        },
        'Gambar Teknik (CAD)': {
            'nama': 'Gambar Teknik (CAD)',
            'deskripsi': 'Mampu membaca, memahami, dan membuat gambar teknik sebagai acuan proses manufaktur, baik secara manual maupun menggunakan perangkat lunak CAD. Terbiasa menerjemahkan gambar teknik ke dalam bentuk komponen nyata sesuai standar dimensi dan toleransi.'
        },
        'Pengoperasian Mesin Perkakas': {
            'nama': 'Pengoperasian Mesin Perkakas',
            'deskripsi': 'Mampu mengoperasikan mesin perkakas konvensional seperti mesin bubut dan frais untuk pembuatan dan perbaikan komponen mekanik. Memahami prosedur kerja dan pengaturan dasar mesin untuk mendukung proses produksi yang aman dan presisi.'
        },
        'Perawatan Alat & Lingkungan Kerja': {
            'nama': 'Perawatan Alat & Lingkungan Kerja',
            'deskripsi': 'Terbiasa menjaga kebersihan, kerapian, dan kelayakan alat kerja serta area produksi. Memahami pentingnya perawatan alat dan lingkungan kerja sebagai bagian dari efisiensi dan keberlangsungan proses manufaktur.'
        }
    },
    'AKL': {
        'Siklus Akuntansi': {
            'nama': 'Siklus Akuntansi',
            'deskripsi': 'Mampu melaksanakan seluruh tahapan siklus akuntansi, mulai dari pencatatan transaksi, penjurnalan, posting ke buku besar, hingga penyusunan laporan keuangan. Memahami penerapan akuntansi pada berbagai jenis usaha dengan mengacu pada prinsip dan standar akuntansi yang berlaku.'
        },
        'akuntansi_komputer': {
            'nama': 'Akuntansi Komputer',
            'deskripsi': 'Terampil mengoperasikan aplikasi pengolah angka (Spreadsheet) serta perangkat lunak akuntansi seperti MYOB dan Accurate untuk pencatatan transaksi dan penyusunan laporan keuangan. Mampu memanfaatkan sistem akuntansi berbasis komputer untuk meningkatkan efisiensi dan ketelitian pengolahan data keuangan.'
        },
        'Perpajakan': {
            'nama': 'Perpajakan',
            'deskripsi': 'Memahami dasar perpajakan, termasuk perhitungan Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN), serta penyiapan dokumen administrasi perpajakan. Mampu membantu proses pelaporan pajak secara tertib sesuai ketentuan yang berlaku.'
        },
        'Penyusunan Laporan Keuangan': {
            'nama': 'Penyusunan Laporan Keuangan',
            'deskripsi': 'Mampu menyusun laporan keuangan dasar seperti laporan laba rugi, neraca, dan arus kas sebagai bahan evaluasi kondisi keuangan perusahaan. Memahami fungsi laporan keuangan sebagai dasar pengambilan keputusan manajerial.'
        },
        'Pengelolaan Kas & Bank': {
            'nama': 'Pengelolaan Kas & Bank',
            'deskripsi': 'Memahami prosedur pengelolaan kas dan rekening bank perusahaan, termasuk pencatatan transaksi kas, rekonsiliasi bank, dan pengawasan saldo. Mampu membantu menjaga akurasi dan transparansi arus kas perusahaan.'
        },
        'Kepatuhan & Administrasi Perusahaan': {
            'nama': 'Kepatuhan & Administrasi Perusahaan',
            'deskripsi': 'Memahami pentingnya kepatuhan terhadap prosedur dan regulasi keuangan perusahaan, termasuk dokumentasi dan pencatatan transaksi yang akurat. Mampu mendukung proses administrasi perusahaan secara tertib dan bertanggung jawab.'
        },
    },
    'TBSM': {
        'Perbaikan Mesin Sepeda Motor': {
            'nama': 'Perbaikan Mesin Sepeda Motor',
            'deskripsi': 'Mampu melakukan perbaikan dan perawatan mesin sepeda motor, termasuk servis berkala, overhaul mesin, serta penanganan sistem bahan bakar karburator maupun injeksi. Terbiasa melakukan pemeriksaan komponen mesin untuk memastikan performa, efisiensi bahan bakar, dan keandalan kendaraan.'
        },
        'Sistem Kelistrikan': {
            'nama': 'Sistem Kelistrikan',
            'deskripsi': 'Mampu mendiagnosis dan memperbaiki sistem kelistrikan sepeda motor, meliputi sistem pengapian, pengisian, dan penerangan. Terbiasa menggunakan alat ukur kelistrikan untuk mengidentifikasi gangguan dan memastikan sistem listrik berfungsi dengan aman dan optimal.'
        },
        'Sasis & Pemindah Tenaga': {
            'nama': 'Sasis & Pemindah Tenaga',
            'deskripsi': 'Memiliki kemampuan dalam melakukan perawatan dan perbaikan pada sistem sasis dan pemindah tenaga, termasuk sistem rem, suspensi, roda, serta transmisi manual dan otomatis (CVT). Memahami pengaruh kondisi sasis dan transmisi terhadap keselamatan serta kenyamanan berkendara.'
        },
        'Servis Berkala & Tune Up': {
            'nama': 'Servis Berkala & Tune Up',
            'deskripsi': 'Terbiasa melakukan servis berkala dan tune up sepeda motor sesuai standar pabrikan, termasuk pengecekan mesin, sistem bahan bakar, kelistrikan, dan pelumasan. Mampu memastikan kendaraan siap pakai dan memiliki performa optimal.'
        },
        'Penggunaan Alat & Peralatan Bengkel': {
            'nama': 'Penggunaan Alat & Peralatan Bengkel',
            'deskripsi': 'Terbiasa menggunakan peralatan bengkel manual dan elektrik secara aman dan tepat, termasuk kunci momen, alat ukur, dan peralatan servis lainnya. Memahami prosedur kerja yang benar untuk menjaga kualitas pekerjaan dan keselamatan kerja.'
        },
        'Pemeriksaan & Diagnosis Kerusakan': {
            'nama': 'Pemeriksaan & Diagnosis Kerusakan',
            'deskripsi': 'Mampu melakukan pemeriksaan dan diagnosis awal terhadap kerusakan sepeda motor berdasarkan gejala dan hasil pengukuran. Terbiasa menentukan tindakan perbaikan yang tepat untuk menjaga efisiensi waktu dan kualitas layanan.'
        },
    },
    'MPK': {
        'Korespondensi & Kearsipan': {
            'nama': 'Korespondensi & Kearsipan',
            'deskripsi': 'Mampu menyusun dan mengelola korespondensi bisnis secara profesional, termasuk pembuatan surat resmi, email, dan dokumen administrasi lainnya. Terbiasa melakukan pengarsipan dokumen secara fisik maupun digital dengan sistem yang rapi dan mudah diakses untuk mendukung kelancaran administrasi perkantoran.'
        },
        'eknologi Perkantoran': {
            'nama': 'Teknologi Perkantoran',
            'deskripsi': 'Terampil menggunakan perangkat lunak perkantoran seperti Microsoft Word, Excel, dan PowerPoint untuk mendukung pekerjaan administrasi dan pelaporan. Mampu mengoperasikan peralatan kantor serta memanfaatkan komunikasi daring secara efektif dalam lingkungan kerja modern.'
        },
        'Tata Kelola Humas & Protokol': {
            'nama': 'Tata Kelola Humas & Protokol',
            'deskripsi': 'Mampu mendukung kegiatan humas dan protokol, termasuk pengaturan jadwal pimpinan, persiapan rapat, serta penerimaan tamu dan pelayanan pelanggan. Memahami etika komunikasi dan tata krama perkantoran dalam menjaga citra profesional organisasi.'
        },
        'Manajemen Dokumen Digital': {
            'nama': 'Manajemen Dokumen Digital',
            'deskripsi': 'Mampu mengelola dokumen secara digital menggunakan sistem penyimpanan berbasis folder dan cloud. Memahami pentingnya keamanan, kerapian, dan kemudahan akses dokumen dalam mendukung efisiensi kerja.'
        },
        'Pelayanan Pelanggan': {
            'nama': 'Pelayanan Pelanggan',
            'deskripsi': 'Memiliki keterampilan dalam memberikan pelayanan pelanggan yang ramah dan profesional, baik secara langsung maupun melalui komunikasi daring. Mampu menangani keluhan dan permintaan pelanggan dengan sikap positif untuk membangun hubungan jangka panjang.' 
        },
        'Pengelolaan Jadwal & Acara': {
            'nama': 'Pengelolaan Jadwal & Acara',
            'deskripsi': 'Mampu mengatur jadwal kerja, rapat, dan acara perusahaan secara efisien menggunakan alat bantu digital. Terbiasa melakukan koordinasi dengan berbagai pihak untuk memastikan kelancaran pelaksanaan kegiatan sesuai rencana.'
        }
        
    }
};