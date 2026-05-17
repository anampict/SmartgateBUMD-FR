<script setup lang="ts">
import { RefreshCw, ChevronsUp } from '@lucide/vue'
</script>

<template>
  <div class="bg-white rounded-[14px] border border-slate-200 p-6 shadow-sm flex items-center justify-between w-full">
    <div class="flex items-center gap-6">
      <div class="w-16 h-16 rounded-[12px] bg-[#f0f4fd] text-[#0f4a8a] flex items-center justify-center">
        <svg class="w-8 h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20C11.4333 20 10.9583 19.8083 10.575 19.425C10.1917 19.0417 10 18.5667 10 18C10 17.4333 10.1917 16.9583 10.575 16.575C10.9583 16.1917 11.4333 16 12 16C12.5667 16 13.0417 16.1917 13.425 16.575C13.8083 16.9583 14 17.4333 14 18C14 18.5667 13.8083 19.0417 13.425 19.425C13.0417 19.8083 12.5667 20 12 20ZM24 20C23.4333 20 22.9583 19.8083 22.575 19.425C22.1917 19.0417 22 18.5667 22 18C22 17.4333 22.1917 16.9583 22.575 16.575C22.9583 16.1917 23.4333 16 24 16C24.5667 16 25.0417 16.1917 25.425 16.575C25.8083 16.9583 26 17.4333 26 18C26 18.5667 25.8083 19.0417 25.425 19.425C25.0417 19.8083 24.5667 20 24 20ZM0 36V32H2V4C2 2.9 2.39167 1.95833 3.175 1.175C3.95833 0.391667 4.9 0 6 0H30C31.1 0 32.0417 0.391667 32.825 1.175C33.6083 1.95833 34 2.9 34 4V32H36V36H0ZM6 32H16V4H6V32ZM20 32H30V4H20V32Z" fill="currentColor"/>
        </svg>
      </div>
      <div>
        <h3 class="text-[19px] font-bold text-[#0f172a] leading-tight">Barrier Gate Servo</h3>
        <p class="text-[14px] text-slate-500 mb-2 mt-1">Magnetic Access Pro - Gate A1</p>
        <div class="flex items-center gap-3">
          <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#4ade80] text-[#064e3b]">READY</span>
          <span class="text-[13px] text-slate-500 font-medium">Total Cycles: 12,482</span>
        </div>
      </div>
    </div>
    
    <div class="flex items-center gap-4">
      <button class="h-[44px] px-6 bg-[#059669] hover:bg-[#047857] text-white rounded-lg text-[15px] font-semibold flex items-center gap-2 transition-colors shadow-sm">
        <ChevronsUp class="w-[20px] h-[20px] stroke-[2]" />
        Buka Manual
      </button>
      <button class="h-[44px] px-6 bg-[#0c408a] hover:bg-[#0a316b] text-white rounded-lg text-[15px] font-semibold flex items-center gap-2 transition-colors shadow-sm">
        <RefreshCw class="w-[18px] h-[18px] stroke-[2]" />
        Restart Controller
      </button>
    </div>
  </div>
</template>
