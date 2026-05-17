<script setup lang="ts">
import { Clock, ImageIcon } from '@lucide/vue'

interface Capture {
  id: number
  plateNo: string
  time: string
  imageUrl: string
}

defineProps<{
  captures: Capture[]
}>()
</script>

<template>
  <div class="bg-white rounded-[20px] border border-[#cbd5e1] p-5 shadow-sm">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-5">
      <Clock class="w-5 h-5 text-[#1e3a8a] stroke-[2.5]" />
      <h3 class="text-[17px] font-extrabold text-[#1e293b]">Riwayat Captures Baru</h3>
    </div>

    <!-- List -->
    <div class="flex flex-col gap-3">
      <div 
        v-for="(capture, index) in captures" 
        :key="capture.id" 
        class="flex items-center gap-4 p-2 rounded-xl border border-gray-100"
        :class="index % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'"
      >
        <!-- Thumbnail -->
        <div class="w-[70px] h-[45px] rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
          <img v-if="capture.imageUrl" :src="capture.imageUrl" alt="Capture" class="w-full h-full object-cover" />
          <ImageIcon v-else class="w-4 h-4 text-gray-400" />
        </div>
        
        <!-- Info -->
        <div class="flex flex-col justify-center">
          <p class="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">{{ capture.plateNo }}</p>
          <div class="flex items-center gap-1.5 text-[10px] font-semibold text-gray-500">
            <Clock class="w-[10px] h-[10px]" />
            {{ capture.time }}
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <button class="w-full mt-5 py-2.5 border border-[#2563eb] text-[#2563eb] text-[13px] font-bold rounded-xl hover:bg-blue-50 transition-colors">
      Lihat Semua Riwayat
    </button>
  </div>
</template>
