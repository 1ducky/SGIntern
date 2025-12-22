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
            'deskripsi': 'Merakit PC/laptop, instalasi sistem operasi (Windows/Linux), dan perbaikan perangkat keras.'
        },
        'Manajemen Jaringan': {
            'nama': 'Manajemen Jaringan',
            'deskripsi': 'Merancang topologi jaringan (LAN, WAN, WLAN), crimping kabel, serta konfigurasi router dan switch (Mikrotik/Cisco).'
        },
        'Administrasi Server': {
            'nama': 'Administrasi Server',
            'deskripsi': 'Mengelola server, file sharing, pengaturan bandwidth, dan keamanan jaringan (firewall).'
        }
    },
    'TMI': {
        'Pemeliharaan Mesin': {
            'nama': 'Pemeliharaan Mesin',
            'deskripsi': 'Melakukan perawatan preventif dan perbaikan pada mesin produksi seperti mesin bubut, frais, dan CNC.'
        },
        'Sistem Pneumatik & Hidrolik': {
            'nama': 'Sistem Pneumatik & Hidrolik',
            'deskripsi': 'Memahami cara kerja, memeriksa, dan memperbaiki komponen sistem tenaga fluida.'
        },
        'Gambar Teknik (CAD)': {
            'nama': 'Gambar Teknik (CAD)',
            'deskripsi': 'Mampu membaca dan membuat desain teknis secara manual maupun menggunakan software CAD.'
        }
    },
    'AKL': {
        'Siklus Akuntansi': {
            'nama': 'Siklus Akuntansi',
            'deskripsi': 'Mencatat transaksi, menjurnal, hingga menyusun laporan keuangan untuk berbagai jenis perusahaan.'
        },
        'akuntansi_komputer': {
            'nama': 'Akuntansi Komputer',
            'deskripsi': 'Mengoperasikan aplikasi pengolah angka (Spreadsheet) dan software akuntansi seperti MYOB atau Accurate.'
        },
        'Perpajakan': {
            'nama': 'Perpajakan',
            'deskripsi': 'Menghitung pajak penghasilan (PPh) dan menyiapkan dokumen pelaporan pajak.'
        }
    },
    'TBSM': {
        'Perbaikan Mesin Sepeda Motor': {
            'nama': 'Perbaikan Mesin Sepeda Motor',
            'deskripsi': 'Melakukan overhaul, servis berkala, dan perbaikan sistem bahan bakar karburator maupun injeksi.'
        },
        'Sistem Kelistrikan': {
            'nama': 'Sistem Kelistrikan',
            'deskripsi': 'Mendiagnosa dan memperbaiki sistem pengapian, sistem penerangan, dan pengisian baterai motor.'
        },
        'asis & Pemindah Tenaga': {
            'nama': 'Sasis & Pemindah Tenaga',
            'deskripsi': 'Melakukan servis pada sistem rem, suspensi, ban, serta transmisi manual atau otomatis (CVT).'
        }
    },
    'MPK': {
        'Korespondensi & Kearsipan': {
            'nama': 'Korespondensi & Kearsipan',
            'deskripsi': 'Membuat surat bisnis dan mengelola sistem penyimpanan dokumen secara digital maupun fisik.'
        },
        'eknologi Perkantoran': {
            'nama': 'Teknologi Perkantoran',
            'deskripsi': 'Mahir menggunakan Microsoft Office, mengoperasikan alat kantor, dan komunikasi daring.'
        },
        'Tata Kelola Humas & Protokol': {
            'nama': 'Tata Kelola Humas & Protokol',
            'deskripsi': 'Mengatur jadwal pimpinan, mengelola rapat, serta menangani tamu dan layanan pelanggan.'
        }
    }
};