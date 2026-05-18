export const dummyAdminReports = {
  peakHours: [
    { time: '08:00', percentage: 85, color: 'blue' },
    { time: '12:00', percentage: 60, color: 'blue' },
    { time: '17:00', percentage: 95, color: 'orange' }, // Highlighted
    { time: '20:00', percentage: 40, color: 'blue' },
  ],
  transactions: [
    {
      id: '#TRX-98210',
      time: '14:20:05',
      plate: 'B 1234 ABC',
      type: 'Mobil',
      duration: '02h 15m',
      fee: 15000,
      status: 'SUKSES'
    },
    {
      id: '#TRX-98211',
      time: '14:18:12',
      plate: 'D 999 ZZ',
      type: 'Motor',
      duration: '05h 40m',
      fee: 12000,
      status: 'SUKSES'
    },
    {
      id: '#TRX-98212',
      time: '14:15:30',
      plate: 'F 5678 XY',
      type: 'Mobil',
      duration: '00h 45m',
      fee: 5000,
      status: 'Error'
    },
    {
      id: '#TRX-98213',
      time: '14:10:00',
      plate: 'B 8888 RIC',
      type: 'Mobil',
      duration: '01h 10m',
      fee: 10000,
      status: 'SUKSES'
    }
  ]
}
