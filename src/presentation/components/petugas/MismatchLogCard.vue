<script setup lang="ts">
import { AlertTriangle, ArrowRight } from '@lucide/vue'

interface MismatchLog {
  id: number
  time: string
  capturedPlate: string
  systemPlate: string
}

const props = defineProps<{
  logs: MismatchLog[]
}>()
</script>

<template>
  <div class="bg-white rounded-[20px] border border-[#cbd5e1] overflow-hidden shadow-sm">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 bg-[#f8fafc] border-b border-[#cbd5e1]">
      <div class="flex items-center gap-3">
        <AlertTriangle class="w-[22px] h-[22px] text-[#dc2626] stroke-[2]" />
        <h3 class="text-[15px] font-bold text-[#1e293b]">Log Kesalahan (Plate Mismatch)</h3>
      </div>
      <span class="text-[10px] font-black text-gray-500 tracking-widest uppercase">TOTAL: {{ logs.length }} HARI INI</span>
    </div>

    <!-- List -->
    <div class="flex flex-col divide-y divide-[#e2e8f0]">
      <div v-for="log in logs" :key="log.id" class="flex items-center justify-between px-6 py-4">
        
        <div class="text-[11px] font-bold text-gray-400 w-20">
          {{ log.time }}
        </div>
        
        <div class="flex items-center flex-1 justify-center gap-8">
          <div class="text-left w-32">
            <p class="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest mb-0.5">Captured</p>
            <p class="text-[15px] font-bold text-[#dc2626]">{{ log.capturedPlate }}</p>
          </div>
          
          <ArrowRight class="w-5 h-5 text-gray-300 stroke-[2.5]" />
          
          <div class="text-left w-32">
            <p class="text-[9px] font-extrabold text-gray-500 uppercase tracking-widest mb-0.5">System Data</p>
            <p class="text-[15px] font-bold text-[#1e293b]">{{ log.systemPlate }}</p>
          </div>
        </div>

        <div>
          <button class="px-6 py-1.5 border-2 border-[#2563eb] text-[#2563eb] text-[13px] font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
