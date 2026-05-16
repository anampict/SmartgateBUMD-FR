<script setup lang="ts">
import {
  LayoutDashboard,
  History,
  Users,
  LogOut,
  DoorOpen
} from '@lucide/vue'

import IconKey from '@/presentation/components/ui/IconKey.vue'
import IconMoney from '@/presentation/components/ui/IconMoney.vue'
import IconRouter from '@/presentation/components/ui/IconRouter.vue'
import IconRemote from '@/presentation/components/ui/IconRemote.vue'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Operasional', icon: IconRemote, active: false },
  { name: 'Hardware', icon: IconRouter, active: false },
  { name: 'Histori', icon: History, active: false },
  { name: 'Revenue', icon: IconMoney, active: false },
  { name: 'Members', icon: Users, active: false },
]
</script>

<template>
  <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0">
    <div>
      <div class="p-6">
        <h1 class="text-xl font-bold text-gray-900">SmartGate BUMD</h1>
        <p class="text-xs text-gray-500 mt-1">Operator Lapangan</p>
      </div>

      <nav class="mt-2 px-4 space-y-1">
        <a 
          v-for="item in menuItems" 
          :key="item.name" 
          href="#" 
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
            item.active 
              ? 'bg-blue-700 text-white shadow-sm' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </a>
      </nav>
    </div>

    <div class="p-4 space-y-4">
      <button class="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
        <IconKey class="w-5 h-5" />
        Buka Gate
      </button>
      <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
        <LogOut class="w-5 h-5" />
        Logout
      </button>
    </div>
  </aside>
</template>
