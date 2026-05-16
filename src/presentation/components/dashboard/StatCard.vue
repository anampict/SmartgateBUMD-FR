<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  subtitle?: string
  iconBgColor?: string
  iconTextColor?: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex items-center justify-between h-32">
    <div class="flex flex-col h-full justify-between">
      <p class="text-sm font-bold text-gray-600">{{ title }}</p>
      <h3 :class="['text-5xl font-extrabold tracking-tight mt-2', (title.includes('Terparkir') || title.includes('Kapasitas')) ? 'text-[#065f46]' : 'text-[#0f4a8a]']">{{ value }}</h3>
      
      <p v-if="subtitle" :class="['text-[11px] font-bold mt-2 flex items-center gap-1', subtitle.includes('+') ? 'text-[#065f46]' : 'text-gray-500']">
        <span v-if="subtitle.includes('+')" class="w-3 h-3 block"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></span>
        {{ subtitle }}
      </p>
      <div v-else class="h-6 mt-2 flex items-end pb-1">
        <!-- Progress bar for capacity -->
        <div v-if="title.includes('Terparkir') || title.includes('Kapasitas')" class="w-32 h-2 bg-[#eef2f6] rounded-full overflow-hidden">
          <div class="h-full bg-[#065f46] rounded-full" :style="{ width: title.includes('Terparkir') ? '50%' : '75%' }"></div>
        </div>
      </div>
    </div>
    <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-2xl', iconBgColor || 'bg-blue-50', iconTextColor || 'text-blue-600']">
      <slot name="icon">
        <!-- Default icon placeholder -->
      </slot>
    </div>
  </div>
</template>
