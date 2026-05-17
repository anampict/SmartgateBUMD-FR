<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Ticket, LayoutDashboard, Settings2, Router as RouterIcon, History, Banknote, Users, DoorOpen, LogOut, Radio, Wifi, Clock } from '@lucide/vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

import TicketValidationCard from '@/presentation/components/petugas/TicketValidationCard.vue'
import MismatchLogCard from '@/presentation/components/petugas/MismatchLogCard.vue'
import GateCameraCard from '@/presentation/components/petugas/GateCameraCard.vue'
import PaymentDetailCard from '@/presentation/components/petugas/PaymentDetailCard.vue'
import RecentCapturesCard from '@/presentation/components/petugas/RecentCapturesCard.vue'
import SlotInfoCard from '@/presentation/components/petugas/SlotInfoCard.vue'

const route = useRoute()
const isLostTicketRight = ref(false)

const mismatchLogs = [
  { id: 1, time: '14:42:05', capturedPlate: 'B 4567 XYZ', systemPlate: 'B 4567 XY' },
  { id: 2, time: '13:15:22', capturedPlate: 'D 123 AA', systemPlate: 'D 1238 AA' }
]

const recentCaptures = [
  { id: 1, plateNo: 'B 1234 ABC', time: '14:26:45 - 14:38:45', imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  { id: 2, plateNo: 'F 9999 PL', time: '14:25:12 - 15:23:12', imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  { id: 3, plateNo: 'AD 4501 KL', time: '14:20:01 - 15:20:11', imageUrl: '' }
]

const gates = [
  { id: 1, name: 'Gate Masuk 01', cam: 'CAM_01_ENTRY', time: '2023-10-27 11:30:12', action: 'Buka Gate 1 Masuk', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Gate Keluar 01', cam: 'CAM_02_EXIT', time: '2023-10-27 14:38:15', action: 'Buka Gate 1 Keluar', image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Gate Masuk 02', cam: 'CAM_03_ENTRY', time: '2023-10-27 14:30:12', action: 'Buka Gate 2 Masuk', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Gate Keluar 02', cam: 'CAM_04_EXIT', time: '2023-10-27 14:39:15', action: 'Buka Gate 2 Keluar', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
]
</script>

<template>
  <div class="min-h-screen bg-[#E7EEFF] flex text-gray-900">
    <!-- Inline Sidebar -->
    <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-gray-900">SmartGate BUMD</h1>
          <p class="text-xs text-gray-500 mt-1">Operator Lapangan</p>
        </div>
        <nav class="mt-2 px-4 space-y-1">
          <RouterLink to="/" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><LayoutDashboard class="w-5 h-5" /> Dashboard</RouterLink>
          <RouterLink to="/operasional" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/operasional' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Settings2 class="w-5 h-5" /> Operasional</RouterLink>
          <RouterLink to="/hardware" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/hardware' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><RouterIcon class="w-5 h-5" /> Hardware</RouterLink>
          <RouterLink to="/histori" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/histori' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><History class="w-5 h-5" /> Histori</RouterLink>
          <RouterLink to="/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/revenue' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Banknote class="w-5 h-5" /> Revenue</RouterLink>
          <RouterLink to="/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/members' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Users class="w-5 h-5" /> Members</RouterLink>
        </nav>
      </div>
      <div class="p-4 space-y-4">
        <button class="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"><DoorOpen class="w-5 h-5" /> Buka Gate</button>
        <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Logout</button>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <!-- Inline Header -->
      <header class="h-20 bg-white/50 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-[#0f4a8a]">SmartGateBUMD</h2>
          <span class="text-gray-400 text-sm">|</span>
          <span class="text-gray-500 text-sm font-medium">Lantai 1 - Pos Timur</span>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4 text-[#0f4a8a]"><Radio class="w-5 h-5" /><Wifi class="w-5 h-5" /><Clock class="w-5 h-5" /></div>
          <div class="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div class="text-right"><p class="text-sm font-bold text-gray-900">Budi Santoso</p><p class="text-xs text-gray-500">Gate B-12</p></div>
            <div class="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border border-gray-200"><img :src="profileImg" alt="Profile" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
    <div class="grid grid-cols-12 gap-8 min-w-[900px]">
      
      <!-- Left Column (Wide) -->
      <div class="col-span-8 flex flex-col gap-6">
        <TicketValidationCard />
        
        <MismatchLogCard :logs="mismatchLogs" />
        
        <div class="mt-2">
          <h3 class="text-[13px] font-extrabold text-[#dc2626] uppercase tracking-widest mb-4">Kontrol Manual Buka Gerbang Secara Manual</h3>
          <div class="grid grid-cols-2 gap-6">
            <GateCameraCard 
              v-for="gate in gates" 
              :key="gate.id"
              :gateName="gate.name"
              :camName="gate.cam"
              :timestamp="gate.time"
              :imageUrl="gate.image"
              :buttonText="gate.action"
            />
          </div>
        </div>
      </div>
      
      <!-- Right Column (Narrow) -->
      <div class="col-span-4 flex flex-col gap-6">
        <PaymentDetailCard 
          :parkingFee="10000"
          :penaltyFee="0"
          :totalFee="10000"
        />

        <!-- Secondary Lost Ticket Card -->
        <div class="border border-red-200/50 bg-[#fffdfd] rounded-[14px] py-4 px-6 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-4">
            <div>
              <Ticket class="w-[28px] h-[28px] text-[#c81e1e] stroke-[2]" />
            </div>
            <div class="flex flex-col mt-0.5">
              <h3 class="text-[17px] font-medium text-[#0f172a] leading-tight mb-1">Karcis Hilang</h3>
              <p class="text-[14px] text-[#64748b] leading-[1.4] w-[140px]">Denda Rp 50.000 akan<br />diterapkan</p>
            </div>
          </div>

          <button
            @click="isLostTicketRight = !isLostTicketRight"
            class="relative w-[46px] h-[26px] rounded-full transition-colors duration-200 focus:outline-none shrink-0"
            :class="isLostTicketRight ? 'bg-[#2563eb]' : 'bg-[#e2e8f0]'"
          >
            <div
              class="absolute top-[2px] w-[22px] h-[22px] bg-white rounded-full shadow-sm border border-slate-200 transition-all duration-200"
              :class="isLostTicketRight ? 'left-[22px]' : 'left-[2px]'"
            />
          </button>
        </div>

        <RecentCapturesCard :captures="recentCaptures" />
        
        <SlotInfoCard :availableSlots="142" :totalSlots="500" />
      </div>
      
    </div>
        </main>
    </div>
  </div>
</template>
