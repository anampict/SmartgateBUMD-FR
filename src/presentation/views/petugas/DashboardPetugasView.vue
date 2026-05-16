<script setup lang="ts">
import DashboardLayout from '@/presentation/layouts/DashboardLayout.vue'
import StatCard from '@/presentation/components/dashboard/StatCard.vue'
import GateStatusCard from '@/presentation/components/dashboard/GateStatusCard.vue'
import DeviceMonitor from '@/presentation/components/dashboard/DeviceMonitor.vue'
import TransactionTable from '@/presentation/components/dashboard/TransactionTable.vue'

import { ref, onMounted } from 'vue'

import { DashboardRepositoryImpl } from '@/data/repositories/DashboardRepositoryImpl'
import type { Transaction } from '@/domain/entities/Transaction'
import type { Device } from '@/domain/entities/Device'
import type { Gate } from '@/domain/entities/Gate'

const repository = new DashboardRepositoryImpl()

const transactions = ref<Transaction[]>([])
const devices = ref<Device[]>([])
const gates = ref<Gate[]>([])

onMounted(async () => {
  transactions.value = await repository.getTransactions()
  devices.value = await repository.getDevices()
  gates.value = await repository.getGates()
})
</script>

<template>
  <DashboardLayout>
    <div class="space-y-8">

      <!-- Top Section: Stat Cards Centered -->
      <div class="flex justify-center mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[850px]">
          <StatCard
              title="Kendaraan Masuk"
              value="1,284"
              subtitle="+12% dari kemarin"
              iconBgColor="bg-blue-50"
              iconTextColor="text-[#0f4a8a]"
            >
              <template #icon>
                <!-- LogIn icon -->
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </template>
            </StatCard>

            <StatCard
              title="Kendaraan Keluar"
              value="1,102"
              subtitle="Aktif di dalam: 182"
              iconBgColor="bg-blue-50"
              iconTextColor="text-[#0f4a8a]"
            >
              <template #icon>
                <!-- LogOut icon -->
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </template>
            </StatCard>

            <StatCard
              title="Kendaraan Terparkir"
              value="318"
              iconBgColor="bg-green-100"
              iconTextColor="text-green-600"
              :showProgress="true"
            >
              <template #icon><span class="font-bold text-xl">P</span></template>
            </StatCard>

            <StatCard
              title="Kapasitas Tersedia"
              value="318"
              iconBgColor="bg-green-100"
              iconTextColor="text-green-600"
              :showProgress="true"
            >
              <template #icon><span class="font-bold text-xl">P</span></template>
            </StatCard>
          </div>
        </div>

      <!-- Middle Section: Gate Status & Device Monitor -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Status Gerbang -->
        <div class="lg:col-span-2">
          <h3 class="text-xl font-bold text-[#1e293b] mb-5">Status Gerbang</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GateStatusCard v-for="gate in gates" :key="gate.id" :gate="gate" />
          </div>
        </div>

        <!-- Monitoring Perangkat -->
        <div class="lg:col-span-1">
          <h3 class="text-xl font-bold text-[#1e293b] mb-5">Monitoring Perangkat</h3>
          <DeviceMonitor :devices="devices" />
        </div>

      </div>

      <!-- Bottom Row: Live Transaksi -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold text-gray-800">Live Transaksi</h3>
          <a href="#" class="text-sm font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1">
            Lihat Semua
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
        <TransactionTable :transactions="transactions" />
      </div>

    </div>
  </DashboardLayout>
</template>
