<script setup lang="ts">
import { Video, DoorOpen } from '@lucide/vue'

defineProps<{
  gateName: string
  camName: string
  timestamp: string
  imageUrl: string
  buttonText: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Camera Frame -->
    <div class="relative h-[180px] bg-gray-900 rounded-[14px] overflow-hidden shadow-sm">
      <img :src="imageUrl" alt="Camera Feed" class="w-full h-full object-cover opacity-90" />
      
      <!-- Top Overlays -->
      <div class="absolute top-0 left-0 right-0 flex items-start justify-between p-3">
        <div class="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
          <Video class="w-3.5 h-3.5 text-white" />
          <span class="text-[10px] font-bold text-white uppercase tracking-wider">{{ gateName }}</span>
        </div>
        <div class="bg-[#dc2626] text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest shadow-sm">
          LIVE
        </div>
      </div>
      
      <!-- Bottom Overlays -->
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
        <p class="text-gray-300 text-[9px] font-mono tracking-widest uppercase">{{ camName }} | {{ timestamp }}</p>
      </div>
    </div>
    
    <!-- Action Button -->
    <button class="w-full h-10 bg-[#2563eb] hover:bg-blue-700 text-white text-[13px] font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
      <DoorOpen class="w-4 h-4 stroke-[2.5]" />
      {{ buttonText }}
    </button>
  </div>
</template>
