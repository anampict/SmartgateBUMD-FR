import type { IDashboardRepository } from '@/domain/repositories/IDashboardRepository'
import type { Transaction } from '@/domain/entities/Transaction'
import type { Device } from '@/domain/entities/Device'
import type { Gate } from '@/domain/entities/Gate'

import { dummyTransactions } from '../sources/dummy-transactions'
import { dummyDevices } from '../sources/dummy-devices'
import { dummyGates } from '../sources/dummy-gates'

export class DashboardRepositoryImpl implements IDashboardRepository {
  async getTransactions(): Promise<Transaction[]> {
    // Simulating API call
    return Promise.resolve(dummyTransactions)
  }

  async getDevices(): Promise<Device[]> {
    return Promise.resolve(dummyDevices)
  }

  async getGates(): Promise<Gate[]> {
    return Promise.resolve(dummyGates)
  }
}
