export const dummyAdminAudit = {
  logs: [
    {
      id: 1,
      timestamp: "24 Okt 2023,\n15:45:12",
      user: {
        name: "Andi Wijaya",
        role: "Admin Utama",
        avatar: "avatar1.png" // Will map to generic image or initials
      },
      action: "Pembukaan Gerbang Manual",
      isAlert: true,
      module: "OPERASIONAL",
      ipAddress: "192.168.1.142"
    },
    {
      id: 2,
      timestamp: "24 Okt 2023,\n14:20:05",
      user: {
        name: "Siti Aminah",
        role: "Administrator",
        avatar: "avatar2.png"
      },
      action: "Pembaruan Tarif Parkir - Mall Area",
      isAlert: false,
      module: "PENGATURAN",
      ipAddress: "192.168.1.105"
    },
    {
      id: 3,
      timestamp: "24 Okt 2023,\n13:55:40",
      user: {
        name: "Budi Santoso",
        role: "Petugas Lapangan",
        avatar: "avatar3.png"
      },
      action: "Login Pengguna Berhasil",
      isAlert: false,
      module: "AUTENTIKASI",
      ipAddress: "10.0.4.55"
    },
    {
      id: 4,
      timestamp: "24 Okt 2023,\n12:30:11",
      user: {
        name: "Rina Kartika",
        role: "Administrator",
        avatar: "avatar4.png"
      },
      action: "Penambahan Staf Baru: Joni",
      isAlert: false,
      module: "MANAJEMEN STAF",
      ipAddress: "192.168.1.102"
    },
    {
      id: 5,
      timestamp: "24 Okt 2023,\n10:15:00",
      user: {
        name: "Andi Wijaya",
        role: "Admin Utama",
        avatar: "avatar1.png"
      },
      action: "Ekspor Laporan Pendapatan (Q3)",
      isAlert: false,
      module: "LAPORAN",
      ipAddress: "192.168.1.142"
    }
  ]
}
