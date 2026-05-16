import type { Transaction } from '../entities/Transaction'
import type { Device } from '../entities/Device'
import type { Gate } from '../entities/Gate'

export interface IDashboardRepository {
  getTransactions(): Promise<Transaction[]>
  getDevices(): Promise<Device[]>
  getGates(): Promise<Gate[]>
}
