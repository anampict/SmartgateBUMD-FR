<script setup lang="ts">
defineProps<{
  availableSlots: number
  totalSlots: number
}>()
</script>

<template>
  <div class="bg-[#f0f4ff] rounded-[20px] border border-[#dbeafe] p-6 flex shadow-sm">
    <div class="flex-1 flex flex-col items-center justify-center border-r border-[#bfdbfe]">
      <span class="text-[10px] font-extrabold text-[#2563eb] uppercase tracking-wider mb-2">Slot Tersedia</span>
      <span class="text-4xl font-black text-[#2563eb]">{{ availableSlots }}</span>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center">
      <span class="text-[10px] font-extrabold text-[#64748b] uppercase tracking-wider mb-2">Total Kapasitas</span>
      <span class="text-4xl font-black text-[#0f172a]">{{ totalSlots }}</span>
    </div>
  </div>
</template>
