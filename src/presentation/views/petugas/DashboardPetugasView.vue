<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'
import { LayoutDashboard, Settings2, Router as RouterIcon, History, Banknote, Users, DoorOpen, LogOut, Radio, Wifi, Clock } from '@lucide/vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

import StatCard from '@/presentation/components/petugas/StatCard.vue'
import GateStatusCard from '@/presentation/components/petugas/GateStatusCard.vue'
import DeviceMonitor from '@/presentation/components/petugas/DeviceMonitor.vue'
import TransactionTable from '@/presentation/components/petugas/TransactionTable.vue'

import { DashboardRepositoryImpl } from '@/data/repositories/DashboardRepositoryImpl'
import type { Transaction } from '@/domain/entities/Transaction'
import type { Device } from '@/domain/entities/Device'
import type { Gate } from '@/domain/entities/Gate'

const route = useRoute()
const router = useRouter()
const repository = new DashboardRepositoryImpl()

const handleLogout = () => {
  localStorage.removeItem('authRole')
  localStorage.removeItem('shift')
  router.push('/login')
}

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
  <div class="min-h-screen bg-[#E7EEFF] flex text-gray-900">
    <!-- Inline Sidebar -->
    <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-[#003C90]">SmartGate BUMD</h1>
          <p class="text-xs text-gray-500 mt-1">Operator Lapangan</p>
        </div>
        <nav class="mt-2 px-4 space-y-1">
          <RouterLink to="/" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><LayoutDashboard class="w-5 h-5" /> Dashboard</RouterLink>
          <RouterLink to="/operasional" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/operasional' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRemote class="w-5 h-5" /> Operasional</RouterLink>
          <RouterLink to="/hardware" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/hardware' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRouter class="w-5 h-5" /> Hardware</RouterLink>
          <RouterLink to="/histori" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/histori' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><History class="w-5 h-5" /> Histori</RouterLink>
          <RouterLink to="/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/revenue' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconMoney class="w-5 h-5" /> Revenue</RouterLink>
          <RouterLink to="/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/members' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Users class="w-5 h-5" /> Members</RouterLink>
        </nav>
      </div>
      <div class="p-4 space-y-4">
        <button class="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"><IconKey class="w-5 h-5" /> Buka Gate</button>
        <button @click="handleLogout" class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Logout</button>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <!-- Inline Header -->
      <header class="h-20 bg-white/50 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-[#0f4a8a]">SmartGateBUMD</h2>
          <!-- Note: Location hidden on Dashboard -->
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4 text-[#0f4a8a]"><Radio class="w-5 h-5" /><Wifi class="w-5 h-5" /><Clock class="w-5 h-5" /></div>
          <div class="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div class="text-right"><p class="text-sm font-bold text-gray-900">Petugas Satu</p><p class="text-xs text-gray-500">Admin Shift Pagi</p></div>
            <div class="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border border-gray-200"><img :src="profileImg" alt="Profile" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
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
      </main>
    </div>
  </div>
</template>
