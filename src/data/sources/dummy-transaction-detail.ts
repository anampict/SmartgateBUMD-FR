import type { TransactionDetail } from '@/domain/entities/TransactionDetail'

export const dummyTransactionDetail: TransactionDetail = {
  id: 'TXN-9921-X82-01',
  vehicle: {
    plateNumber: 'B 2841 SKZ',
    type: 'Mobil',
    color: 'Putih',
    imagePlaceholderUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  payment: {
    status: 'Berhasil',
    biayaParkir: 15000,
    dendaLainnya: 0,
    totalPembayaran: 15000,
    metodePembayaran: 'Cashless - Tap (e-Money)',
    refNumber: 'TXN-9921-X82-01'
  },
  timeline: {
    entryGate: 'Gate 1 In',
    entryTime: '12:10:01',
    entryDate: '14 Okt 2023',
    exitGate: 'Gate 2 Out',
    exitTime: '14:25:01',
    exitDate: '14 Okt 2023',
    duration: '02j 15m'
  },
  hardware: {
    processTimeMs: 842,
    statusMessage: 'Hardware processed the transaction in 842ms. All sensors within normal operational parameters.',
    logs: [
      {
        id: 'log-1',
        type: 'camera',
        label: 'Camera ID',
        value: 'CAM-G2-OUT-HD',
        status: 'success'
      },
      {
        id: 'log-2',
        type: 'rfid',
        label: 'RFID / Reader ID',
        value: 'RFD-00452-AC',
        status: 'success'
      },
      {
        id: 'log-3',
        type: 'gate',
        label: 'Gate Status',
        value: 'SUCCESS_OPEN',
        status: 'success'
      }
    ]
  }
}
