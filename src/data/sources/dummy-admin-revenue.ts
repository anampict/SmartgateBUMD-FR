export const dummyAdminRevenue = {
  tariffs: [
    {
      id: 1,
      category: 'Motor',
      icon: 'Bike',
      baseTariff: 2000,
      progressiveTariff: 1000,
      maxTariff: 10000,
    },
    {
      id: 2,
      category: 'Mobil',
      icon: 'Car',
      baseTariff: 5000,
      progressiveTariff: 3000,
      maxTariff: 35000,
    },
    {
      id: 3,
      category: 'Truck/Bus',
      icon: 'Truck',
      baseTariff: 10000,
      progressiveTariff: 5000,
      maxTariff: 60000,
    },
    {
      id: 4,
      category: 'Inap (Flat)',
      icon: 'Bed',
      baseTariff: 50000,
      progressiveTariff: null,
      maxTariff: null,
    },
    {
      id: 5,
      category: 'Member',
      icon: 'CreditCard', // Icon for member/card
      baseTariff: 0,
      progressiveTariff: 0,
      maxTariff: 'Berlangganan',
    },
  ],
  cashlessIntegrations: [
    {
      id: 'qris',
      name: 'QRIS Dinamis',
      description: 'Terhubung (Bank Mandiri)',
      icon: 'QrCode',
      active: true,
    },
    {
      id: 'emoney',
      name: 'E-Money Reader',
      description: 'Sam Reader v4.2',
      icon: 'CreditCard',
      active: true,
    },
    {
      id: 'rfid',
      name: 'RFID Saldo System',
      description: 'Internal Server Only',
      icon: 'Wifi', // Using wifi/radio wave icon for RFID
      active: false,
    }
  ],
  todayRevenue: 12450000,
  todayRevenueTrend: "+14%",
}
