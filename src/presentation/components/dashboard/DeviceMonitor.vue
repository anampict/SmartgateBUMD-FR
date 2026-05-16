<script setup lang="ts">
import { Printer, Video, AlertTriangle } from '@lucide/vue'
import IconRfid from '@/presentation/components/ui/IconRfid.vue'

const props = defineProps<{
  devices: Array<{
    id: number
    nama: string
    status: string
    icon: string
  }>
}>()

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Printer': return Printer
    case 'CreditCard': return IconRfid
    case 'Video': return Video
    case 'AlertTriangle': return AlertTriangle
    default: return AlertTriangle
  }
}

const getStatusColor = (status: string) => {
  if (status.toLowerCase().includes('sedia') || status.toLowerCase().includes('online') || status.toLowerCase().includes('recording')) {
    return 'text-[#065f46]'
  }
  return 'text-[#b91c1c]'
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
    <div class="flex flex-col">
      <div v-for="(device, index) in devices" :key="device.id" 
           :class="['flex items-center justify-between py-4', index !== devices.length - 1 ? 'border-b border-gray-200' : '']">
        <div class="flex items-center gap-4">
          <div :class="['flex items-center justify-center', device.icon === 'AlertTriangle' ? 'text-[#b91c1c]' : 'text-[#1e293b]']">
            <component :is="getIcon(device.icon)" class="w-5 h-5 stroke-[2px]" />
          </div>
          <span class="text-[15px] font-bold text-[#1e293b]">{{ device.nama }}</span>
        </div>
        <span :class="['text-sm font-semibold', getStatusColor(device.status)]">
          {{ device.status }}
        </span>
      </div>
    </div>
  </div>
</template>
