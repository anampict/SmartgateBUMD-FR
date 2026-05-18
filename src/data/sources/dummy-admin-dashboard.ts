export const dummyAdminDashboard = {
  overview: {
    todayRevenue: 12450000,
    todayRevenueTrend: "+8.2%",
    weeklyRevenue: 84120000,
    activeVehicles: 1248,
    totalCapacity: 2500,
  },
  weeklyTrend: [
    { day: 'Sen', value: 45 },
    { day: 'Sel', value: 65 },
    { day: 'Rab', value: 35 },
    { day: 'Kam', value: 85 },
    { day: 'Jum', value: 55 },
    { day: 'Sab', value: 95 },
    { day: 'Min', value: 75 },
  ],
  globalStatus: [
    { name: 'Jakarta Central', status: 'ONLINE' },
    { name: 'Bandung Station', status: 'ONLINE' },
    { name: 'Surabaya Port', status: 'OFFLINE' },
  ],
  alerts: [
    {
      type: 'error',
      title: 'Connection Lost - Surabaya',
      description: 'Gate B3 tidak merespon sejak 10 menit lalu.',
      tag: 'Urgensi Tinggi'
    },
    {
      type: 'warning',
      title: 'Anomali Transaksi - Jakarta',
      description: 'Percobaan keluar tanpa tiket terdeteksi.',
      tag: 'Investigasi'
    },
    {
      type: 'success',
      title: 'Security Update',
      description: 'Sistem patching berhasil dilakukan di semua lokasi.',
      tag: 'Info Sistem'
    }
  ]
}
