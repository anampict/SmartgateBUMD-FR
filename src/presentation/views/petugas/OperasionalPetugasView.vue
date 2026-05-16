<script setup lang="ts">
import { ref } from 'vue'
import { Ticket } from '@lucide/vue'
import DashboardLayout from '@/presentation/layouts/DashboardLayout.vue'

import TicketValidationCard from '@/presentation/components/operasional/TicketValidationCard.vue'
import MismatchLogCard from '@/presentation/components/operasional/MismatchLogCard.vue'
import GateCameraCard from '@/presentation/components/operasional/GateCameraCard.vue'
import PaymentDetailCard from '@/presentation/components/operasional/PaymentDetailCard.vue'
import RecentCapturesCard from '@/presentation/components/operasional/RecentCapturesCard.vue'
import SlotInfoCard from '@/presentation/components/operasional/SlotInfoCard.vue'

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
  <DashboardLayout>
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
  </DashboardLayout>
</template>
