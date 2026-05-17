export interface TransactionDetail {
  id: string
  vehicle: {
    plateNumber: string
    type: string
    color: string
    imagePlaceholderUrl: string
  }
  payment: {
    status: 'Berhasil' | 'Gagal' | 'Pending'
    biayaParkir: number
    dendaLainnya: number
    totalPembayaran: number
    metodePembayaran: string
    refNumber: string
  }
  timeline: {
    entryGate: string
    entryTime: string
    entryDate: string
    exitGate: string
    exitTime: string
    exitDate: string
    duration: string
  }
  hardware: {
    processTimeMs: number
    statusMessage: string
    logs: Array<{
      id: string
      type: 'camera' | 'rfid' | 'gate'
      label: string
      value: string
      status: 'success' | 'error' | 'warning'
    }>
  }
}
