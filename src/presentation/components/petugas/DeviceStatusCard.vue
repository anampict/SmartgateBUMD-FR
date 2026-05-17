<script setup lang="ts">
import { RefreshCw } from '@lucide/vue'

defineProps<{
  icon?: any
  status: string
  statusColor: string
  title: string
  subtitle: string
  buttonText: string
}>()
</script>

<template>
  <div class="bg-white rounded-[14px] border border-gray-200 p-6 flex flex-col h-full shadow-sm">
    <div class="flex justify-between items-start mb-6">
      <div class="w-10 h-10 rounded-lg bg-[#eff6ff] text-[#1e40af] flex items-center justify-center">
        <slot name="icon">
          <component :is="icon" class="w-5 h-5 stroke-[2]" />
        </slot>
      </div>
      <div :class="`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded ${statusColor}`">
        {{ status }}
      </div>
    </div>

    <div class="mb-5">
      <h3 class="text-[14px] font-bold text-[#0f172a] tracking-wide mb-1">{{ title }}</h3>
      <p class="text-[14px] text-slate-500">{{ subtitle }}</p>
    </div>

    <!-- Slot for dynamic center content (progress bar, text box, or ping stats) -->
    <div class="flex-grow mb-6">
      <slot></slot>
    </div>

    <button class="w-full h-[40px] mt-auto rounded-lg border border-[#1e40af] text-[#1e40af] text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
      <RefreshCw class="w-[16px] h-[16px] stroke-[2] text-[#1e40af]" />
      {{ buttonText }}
    </button>
  </div>
</template>
