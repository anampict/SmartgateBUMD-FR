<script setup lang="ts">
import { Clock, Radio, Wifi } from '@lucide/vue'

import profileImg from '@/assets/gambar/profilepetugas.png'

defineProps<{
  hideLocation?: boolean
}>()
</script>

<template>
  <header class="h-20 bg-white/50 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
    <div class="flex items-center gap-3">
      <h2 class="text-2xl font-bold text-[#0f4a8a]">SmartGateBUMD</h2>
      <template v-if="!hideLocation">
        <span class="text-gray-400 text-sm">|</span>
        <span class="text-gray-500 text-sm font-medium">Lantai 1 - Pos Timur</span>
      </template>
    </div>
    
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4 text-[#0f4a8a]">
        <Radio class="w-5 h-5" />
        <Wifi class="w-5 h-5" />
        <Clock class="w-5 h-5" />
      </div>
      
      <div class="flex items-center gap-3 pl-6 border-l border-gray-200">
        <div class="text-right">
          <p class="text-sm font-bold text-gray-900">Budi Santoso</p>
          <p class="text-xs text-gray-500">Admin Shift Pagi</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border border-gray-200">
          <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </header>
</template>
