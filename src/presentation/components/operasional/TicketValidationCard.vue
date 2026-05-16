<script setup lang="ts">
import { ref } from 'vue'
import {
  Ticket,
  QrCode,
  TicketX,
  CheckCircle2
} from '@lucide/vue'

const plateNumber = ref('')
const isLostTicket = ref(false)

const scanResult = ref({
  ticketNo: '#PK-9921',
  plateNo: 'B 4567 XYZ',
  entryTime: '12:45:10',
  exitTime: '14:42:05',
  image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=500&q=80'
})

const handleScan = () => {
  console.log('Scan:', plateNumber.value)
}

const resetScan = () => {
  plateNumber.value = ''
}
</script>

<template>
  <div class="bg-white rounded-[20px] border border-[#cbd5e1] p-6 shadow-sm w-full">
    
    <!-- Top Header Row -->
    <div class="flex items-center gap-3 mb-6">
      <Ticket class="w-7 h-7 text-[#1e3a8a] stroke-[2.5]" />
      <h2 class="text-[22px] font-extrabold text-[#0f172a] tracking-tight">Validasi Karcis</h2>
    </div>

    <!-- Content Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      
      <!-- LEFT COLUMN -->
      <div class="flex flex-col gap-6">
        <!-- Input Group -->
        <div>
          <label class="block text-[13px] font-bold text-gray-700 mb-2">Scan Karcis / Masukkan Plat</label>
          <div class="flex items-center border border-[#cbd5e1] rounded-md bg-[#f8fafc] h-[52px] focus-within:border-[#2563eb] transition-colors p-1.5 pl-4">
            <input 
              v-model="plateNumber" 
              type="text" 
              placeholder="SCAN ATAU KETIK PLAT"
              class="flex-1 bg-transparent text-[15px] font-medium text-[#334155] outline-none uppercase placeholder:text-[#94a3b8] tracking-wide"
              @keyup.enter="handleScan"
            />
            <button 
              @click="handleScan" 
              class="bg-[#dbeafe] text-[#1e40af] h-full px-4 rounded-md flex items-center justify-center gap-1.5 hover:bg-[#bfdbfe] transition-colors font-medium text-[15px]"
            >
              <QrCode class="w-5 h-5 stroke-[2]" />
              Scan
            </button>
          </div>
        </div>

        <!-- Karcis Hilang Toggle Box -->
        <div class="border border-red-200/50 bg-[#fffdfd] rounded-[14px] py-4 px-6 flex items-center justify-between shadow-sm w-full max-w-[340px]">
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
            @click="isLostTicket = !isLostTicket" 
            class="relative w-[46px] h-[26px] rounded-full transition-colors duration-200 focus:outline-none shrink-0"
            :class="isLostTicket ? 'bg-[#2563eb]' : 'bg-[#e2e8f0]'"
          >
            <div 
              class="absolute top-[2px] w-[22px] h-[22px] bg-white rounded-full shadow-sm border border-slate-200 transition-all duration-200"
              :class="isLostTicket ? 'left-[22px]' : 'left-[2px]'"
            />
          </button>
        </div>
      </div>

      <!-- RIGHT COLUMN (With Blue Background) -->
      <div class="flex flex-col">
        <!-- Right Column Header -->
        <div class="flex items-center justify-between mb-2 pb-0.5">
          <div class="flex items-center gap-2">
            <CheckCircle2 class="w-[18px] h-[18px] text-[#2563eb] stroke-[2.5]" />
            <h2 class="text-[14px] font-bold text-[#2563eb]">Hasil Scan Karcis</h2>
          </div>
          <button @click="resetScan" class="text-[14px] font-bold text-[#2563eb] hover:text-blue-800 transition-colors">
            Reset
          </button>
        </div>
        
        <!-- Result Box -->
        <div v-if="scanResult" class="bg-[#f0f4fd] border border-[#dbeafe] rounded-2xl p-4 flex gap-4 w-full">
          <!-- Image -->
          <div class="w-[140px] h-[90px] rounded-md overflow-hidden bg-black shrink-0 shadow-inner">
            <img :src="scanResult.image" alt="Captured Car" class="w-full h-full object-cover" />
          </div>
          
          <!-- Text Details -->
          <div class="flex-1 flex flex-col">
            <div class="mb-2">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Nomor Parkir</p>
              <p class="text-[12px] font-bold text-slate-800">{{ scanResult.ticketNo }}</p>
            </div>
            
            <div class="mb-3">
              <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Plat Nomor</p>
              <p class="text-[14px] font-bold text-[#2563eb]">{{ scanResult.plateNo }}</p>
            </div>

            <div class="border-t border-slate-300/70 pt-2 grid grid-cols-2 gap-2 mt-auto">
              <div>
                <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Masuk</p>
                <p class="text-[11px] font-bold text-slate-800">{{ scanResult.entryTime }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Keluar</p>
                <p class="text-[11px] font-bold text-slate-800">{{ scanResult.exitTime }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="bg-gray-50 rounded-xl w-full border border-gray-100 flex items-center justify-center text-sm text-gray-400 font-medium py-10 mt-2">
          Menunggu scan karcis...
        </div>
      </div>
      
    </div>
  </div>
</template>