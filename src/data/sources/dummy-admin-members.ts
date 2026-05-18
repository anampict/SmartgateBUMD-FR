export const dummyAdminMembers = {
  stats: {
    totalActive: 1284,
    totalActiveTrend: "+12% dari bulan lalu",
    newMembers: 85,
    newMembersUpdate: "Update harian"
  },
  members: [
    {
      id: 1,
      name: "Budi Nugraha",
      initials: "BN",
      staffId: "SP-1892",
      location: "Gerbang Masuk 1",
      shift: "Pagi (06:00 - 14:00)",
      status: "AKTIF"
    },
    {
      id: 2,
      name: "Agus Setiawan",
      initials: "AS",
      staffId: "SP-1895",
      location: "Gerbang Masuk 1",
      shift: "Sore (14:00 - 22:00)",
      status: "AKTIF"
    },
    {
      id: 3,
      name: "Rina Lestari",
      initials: "RL",
      staffId: "SP-1102",
      location: "Gerbang Keluar 1",
      shift: "Malam (22:00 - 06:00)",
      status: "CUTI"
    }
  ],
  warning: {
    message: "Terdapat 12 member yang masa berlakunya akan habis dalam 7 hari ke depan.",
  }
}
