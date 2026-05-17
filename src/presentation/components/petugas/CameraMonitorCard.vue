<script setup lang="ts">
import { RefreshCw } from '@lucide/vue'

defineProps<{
  title: string
  imageUrl: string
  model: string
  specs: string
}>()
</script>

<template>
  <div class="bg-white rounded-[14px] border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
    <!-- Image Section with Overlay -->
    <div class="relative h-[240px] w-full">
      <img :src="imageUrl" alt="Camera Feed" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent h-[80px]" />
      
      <!-- Top Labels -->
      <div class="absolute top-5 left-5 flex items-center gap-2 bg-[#1e293b]/90 backdrop-blur-sm px-3 py-1.5 rounded shadow-sm">
        <div class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        <span class="text-white text-[12px] font-bold tracking-wider uppercase">{{ title }}</span>
      </div>
      <div class="absolute top-5 right-5 bg-emerald-500 text-white px-3 py-1.5 rounded shadow-sm">
        <span class="text-[11px] font-bold tracking-widest uppercase">STREAMING</span>
      </div>
    </div>

    <!-- Info Section -->
    <div class="p-6 flex items-center justify-between bg-white">
      <div>
        <h4 class="text-[15px] font-bold text-[#0f172a]">{{ model }}</h4>
        <p class="text-[13px] text-slate-500 mt-0.5">{{ specs }}</p>
      </div>
      <button class="h-[40px] px-6 rounded-lg border border-[#3b82f6]/60 text-[#2563eb] text-[14px] font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
        <RefreshCw class="w-[16px] h-[16px] stroke-[2] text-[#2563eb]" />
        Restart
      </button>
    </div>
  </div>
</template>
