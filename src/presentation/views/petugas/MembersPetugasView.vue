<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, History, Users, DoorOpen, LogOut, 
  Search, Bell, Settings, ShieldCheck, UserPlus, 
  Filter, Plus, Edit, Trash2, Info 
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import profileImg from '@/assets/gambar/profilepetugas.png'

import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'

const route = useRoute()

// Dummy Data
const members = ref([
  { 
    id: 'SP-1092', 
    name: 'Budi Nugraha', 
    initial: 'BN',
    avatarColor: 'bg-[#1e3a8a]',
    location: 'Gerbang Masuk 1', 
    shiftName: 'Pagi',
    shiftTime: '06:00 - 14:00', 
    status: 'AKTIF' 
  },
  { 
    id: 'SP-1095', 
    name: 'Agus Setiawan', 
    initial: 'AS',
    avatarColor: 'bg-blue-600',
    location: 'Gerbang Masuk 1', 
    shiftName: 'Sore',
    shiftTime: '14:00 - 22:00', 
    status: 'AKTIF' 
  },
  { 
    id: 'SP-1102', 
    name: 'Rina Lestari', 
    initial: 'RL',
    avatarColor: 'bg-[#1e3a8a]',
    location: 'Gerbang Keluar 1', 
    shiftName: 'Malam',
    shiftTime: '22:00 - 06:00', 
    status: 'CUTI' 
  },
])

const filterTab = ref('Semua')
</script>

<template>
  <div class="min-h-screen bg-[#F8FAFC] flex text-gray-900 font-sans">
    <!-- Inline Sidebar -->
    <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-[#0f4a8a]">SmartGateBUMD</h1>
          <p class="text-[11px] text-gray-500 font-medium tracking-wide uppercase mt-1">Admin Management</p>
        </div>
        <nav class="mt-2 px-4 space-y-1">
          <RouterLink to="/" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><LayoutDashboard class="w-5 h-5" /> Dashboard</RouterLink>
          <RouterLink to="/operasional" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/operasional' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRemote class="w-5 h-5" /> Operasional</RouterLink>
          <RouterLink to="/hardware" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/hardware' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRouter class="w-5 h-5" /> Hardware</RouterLink>
          <RouterLink to="/histori" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/histori' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><History class="w-5 h-5" /> Histori</RouterLink>
          <RouterLink to="/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/revenue' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconMoney class="w-5 h-5" /> Revenue</RouterLink>
          <RouterLink to="/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/members' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Users class="w-5 h-5" /> Members</RouterLink>
        </nav>
      </div>
      <div class="px-4 pb-6 space-y-3">
        <button class="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm mb-4"><IconKey class="w-5 h-5" /> Buka Gate</button>
        <div class="border-t border-gray-100 pt-3">
          <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><Settings class="w-5 h-5" /> Settings</button>
          <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Log Out</button>
        </div>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative min-h-screen pb-20">
      <!-- Custom Header with Search -->
      <header class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        <div class="flex-1 max-w-xl">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search class="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" class="block w-full pl-11 pr-4 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4a8a]/20 transition-all" placeholder="Cari member atau plat nomor...">
          </div>
        </div>
        <div class="flex items-center gap-5">
          <div class="flex items-center gap-3 text-gray-600">
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Bell class="w-5 h-5" /></button>
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Settings class="w-5 h-5" /></button>
          </div>
          <div class="flex items-center gap-3 pl-5 border-l border-gray-200">
            <div class="text-right"><p class="text-[13px] font-bold text-gray-900 leading-tight">Administrator</p><p class="text-[11px] text-gray-500 font-medium">ID: SP-001</p></div>
            <div class="w-9 h-9 rounded-full bg-blue-100 overflow-hidden border border-gray-200"><img :src="profileImg" alt="Profile" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
        <div class="max-w-6xl mx-auto min-w-[1000px]">
          
          <!-- Page Header -->
          <div class="mb-8">
            <h2 class="text-[26px] font-bold text-[#0f4a8a] tracking-tight">Manajemen Member</h2>
          </div>

          <!-- Top Dashboard Cards -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-[14px] border border-gray-200 p-6 flex justify-between items-center shadow-sm">
              <div>
                <p class="text-[13px] font-bold text-gray-600 mb-2">Total Member Aktif</p>
                <div class="flex items-end gap-3">
                  <h3 class="text-4xl font-bold text-[#0f4a8a] leading-none">1,284</h3>
                </div>
                <div class="flex items-center gap-1 mt-3 text-[11px] font-bold text-[#10b981]">
                  <TrendingUp class="w-3.5 h-3.5" /> +12% dari bulan lalu
                </div>
              </div>
              <div class="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-[#1e40af]">
                <ShieldCheck class="w-7 h-7" />
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-[14px] border border-gray-200 p-6 flex justify-between items-center shadow-sm">
              <div>
                <p class="text-[13px] font-bold text-gray-600 mb-2">Member Baru Bulan Ini</p>
                <div class="flex items-end gap-3">
                  <h3 class="text-4xl font-bold text-[#10b981] leading-none">85</h3>
                </div>
                <div class="flex items-center gap-1.5 mt-3 text-[11px] font-medium text-gray-400">
                  <span class="w-3.5 h-3.5 border border-gray-400 rounded-sm flex items-center justify-center"><LayoutDashboard class="w-2.5 h-2.5" /></span> Update harian
                </div>
              </div>
              <div class="w-14 h-14 rounded-xl bg-[#69ebb2] flex items-center justify-center text-[#064e3b]">
                <UserPlus class="w-7 h-7" />
              </div>
            </div>
          </div>

          <!-- Filters & Actions -->
          <div class="flex justify-between items-center mb-6">
            <div class="flex gap-4">
              <!-- Segmented Control -->
              <div class="flex bg-gray-50/80 rounded-lg border border-gray-200 p-1">
                <button 
                  @click="filterTab = 'Semua'" 
                  :class="['px-6 py-1.5 text-[13px] font-bold rounded-md transition-all', filterTab === 'Semua' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
                >Semua</button>
                <button 
                  @click="filterTab = 'Aktif'" 
                  :class="['px-6 py-1.5 text-[13px] font-bold rounded-md transition-all', filterTab === 'Aktif' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
                >Aktif</button>
                <button 
                  @click="filterTab = 'Expired'" 
                  :class="['px-6 py-1.5 text-[13px] font-bold rounded-md transition-all', filterTab === 'Expired' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
                >Expired</button>
              </div>

              <!-- Advanced Filter -->
              <button class="flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-lg text-[13px] font-bold text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
                <Filter class="w-4 h-4" /> Filter Lanjutan
              </button>
            </div>

            <!-- Add New -->
            <RouterLink to="/members/add" class="flex items-center gap-2 px-5 py-2.5 bg-[#0f4a8a] hover:bg-[#0a316b] text-white rounded-lg text-[13px] font-bold shadow-sm transition-colors">
              <Plus class="w-4 h-4 stroke-[3]" /> Tambah Member Baru
            </RouterLink>
          </div>

          <!-- Table -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-20">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-[#f8fafc]/50 text-gray-500 text-[10px] font-bold uppercase tracking-wider border-b border-gray-100">
                  <th class="py-5 px-6 w-[25%]">Nama Petugas</th>
                  <th class="py-5 px-6 w-[12%]">ID Staf</th>
                  <th class="py-5 px-6 w-[18%]">Lokasi</th>
                  <th class="py-5 px-6 w-[15%]">Shift</th>
                  <th class="py-5 px-6 w-[15%]">Status</th>
                  <th class="py-5 px-6 w-[15%]">Aksi</th>
                </tr>
              </thead>
              <tbody class="text-[13px]">
                <tr v-for="m in members" :key="m.id" class="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                      <div :class="`w-9 h-9 rounded-full ${m.avatarColor} text-white flex items-center justify-center font-bold text-[11px]`">
                        {{ m.initial }}
                      </div>
                      <span class="font-bold text-gray-900">{{ m.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-6 font-mono text-[12px] text-gray-500">{{ m.id }}</td>
                  <td class="py-4 px-6 text-gray-700">{{ m.location }}</td>
                  <td class="py-4 px-6">
                    <p class="font-medium text-gray-800">{{ m.shiftName }}</p>
                    <p class="text-[12px] text-gray-500">({{ m.shiftTime }})</p>
                  </td>
                  <td class="py-4 px-6">
                    <span v-if="m.status === 'AKTIF'" class="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-[#69ebb2] text-[#064e3b] text-[10px] font-bold uppercase tracking-wider border border-[#34d399]/30">
                      Aktif
                    </span>
                    <span v-else class="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider border border-red-200">
                      Cuti
                    </span>
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                      <button class="text-blue-700 hover:text-blue-900 transition-colors p-1">
                        <Edit class="w-4 h-4 stroke-[2.5]" />
                      </button>
                      <button class="text-red-500 hover:text-red-700 transition-colors p-1">
                        <Trash2 class="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>

      <!-- Bottom Sticky Banner -->
      <div class="fixed bottom-0 left-64 right-0 z-20">
        <div class="bg-[#0f4a8a] px-8 py-3.5 flex items-center justify-between text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 rounded-full border border-blue-400 flex items-center justify-center shrink-0">
              <Info class="w-3.5 h-3.5" />
            </div>
            <p class="text-[13px] font-medium tracking-wide">Terdapat 12 member yang masa berlakunya akan habis dalam 7 hari ke depan.</p>
          </div>
          <button class="bg-blue-600 hover:bg-blue-500 border border-blue-500 transition-colors px-6 py-2 rounded text-[11px] font-bold tracking-wider">
            LIHAT DETAIL
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>
