<script setup lang="ts">
import { CheckCircle2, PauseCircle } from '@lucide/vue'

defineProps<{
  gate: {
    id: number
    nama: string
    status: string
    statusText: string
    actionText: string
    isBusy: boolean
  }
}>()
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col h-full shadow-sm">
    <div class="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between bg-[#eef2f6]">
      <span class="font-bold text-sm text-gray-900">{{ gate.nama }}</span>
      <span :class="[
        'text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center tracking-wide',
        gate.isBusy ? 'bg-[#fecdd3] text-[#be123c]' : 'bg-[#a7f3d0] text-[#065f46]'
      ]">
        <span class="inline-block w-2 h-2 rounded-full mr-2" :class="gate.isBusy ? 'bg-[#e11d48]' : 'bg-[#059669]'"></span>
        {{ gate.status }}
      </span>
    </div>
    
    <div class="p-6 flex-1 flex flex-col items-center justify-center text-center">
      <div class="mb-4">
        <PauseCircle v-if="gate.isBusy" class="w-12 h-12 text-red-600" />
        <CheckCircle2 v-else class="w-12 h-12 text-green-600" />
      </div>
      <p class="text-sm text-gray-500 max-w-[200px] mx-auto leading-relaxed">{{ gate.statusText }}</p>
    </div>
    
    <div class="p-5 pt-0 mt-auto">
      <button class="w-full py-2.5 rounded-lg text-sm font-bold border border-[#0f4a8a] text-[#0f4a8a] hover:bg-blue-50 transition-colors">
        {{ gate.actionText }}
      </button>
    </div>
  </div>
</template>
