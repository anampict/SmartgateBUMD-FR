<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, HelpCircle, Shield, UserPlus, Filter, PlusCircle,
  Pencil, Trash2, Info
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import { dummyAdminMembers } from '@/data/sources/dummy-admin-members'

const route = useRoute()
const data = ref(dummyAdminMembers)
const activeTab = ref('Semua')

const tabs = ['Semua', 'Aktif', 'Expired']
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex text-gray-900 font-sans relative overflow-hidden">
    
    <!-- Sidebar -->
    <aside class="w-64 h-screen bg-[#f0f4ff] border-r border-[#dbeafe] flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-[#0f4a8a]">SmartGateBUMD</h1>
          <p class="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">Admin Management</p>
        </div>
        <nav class="mt-2 px-4 space-y-1">
          <RouterLink to="/admin" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <LayoutDashboard class="w-4 h-4" /> Overview
          </RouterLink>
          <RouterLink to="/admin/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/revenue' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <IconMoney class="w-4 h-4" /> Revenue
          </RouterLink>
          <RouterLink to="/admin/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/members' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <Users class="w-4 h-4" /> Members
          </RouterLink>
          <RouterLink to="/admin/reports" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/reports' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <IconReports class="w-4 h-4" /> Reports
          </RouterLink>
          <RouterLink to="/admin/audit" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/audit' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <History class="w-4 h-4" /> AuditLog
          </RouterLink>
        </nav>
      </div>
      
      <div class="p-4 mb-2">
        <div class="w-full h-px bg-[#dbeafe] mb-4"></div>
        <button class="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a] transition-colors">
          <Settings class="w-4 h-4" /> Settings
        </button>
        <button class="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a] transition-colors mt-1">
          <LogOut class="w-4 h-4" /> Log Out
        </button>
      </div>
    </aside>

    <!-- Main Layout -->
    <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-[#F8FAFC]">
      
      <!-- Top Header -->
      <header class="h-[76px] bg-white border-b border-[#dbeafe] flex items-center justify-between px-8 shrink-0 z-10">
        <div class="flex items-center w-full max-w-xl">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari member atau plat nomor..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-full pl-11 pr-4 py-2.5 outline-none border border-transparent focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-5 text-gray-500">
            <button class="hover:text-[#1e3a8a] transition-colors relative">
              <Bell class="w-[18px] h-[18px]" />
            </button>
            <button class="hover:text-[#1e3a8a] transition-colors">
              <Settings class="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div class="flex items-center pl-6 border-l border-[#dbeafe] gap-3 cursor-pointer group">
            <div class="text-right">
              <p class="text-[13px] font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">Administrator</p>
              <p class="text-[11px] text-gray-500 font-medium">ID: SP-001</p>
            </div>
            <div class="w-9 h-9 rounded-full overflow-hidden border border-[#dbeafe]">
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto relative pb-20">
        <div class="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
          
          <!-- Page Header -->
          <div>
            <h2 class="text-[26px] font-bold text-[#0f4a8a]">Manajemen Member</h2>
          </div>

          <!-- Top Stats Row -->
          <div class="grid grid-cols-12 gap-6">
            <!-- Total Member Aktif -->
            <div class="col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <p class="text-[11px] font-bold text-slate-500 mb-2">Total Member Aktif</p>
                <h3 class="text-[32px] font-bold text-[#0f4a8a] mb-2 leading-none">{{ data.stats.totalActive.toLocaleString() }}</h3>
                <div class="flex items-center text-[11px] font-bold text-emerald-600">
                  <span class="mr-1">↗</span> {{ data.stats.totalActiveTrend }}
                </div>
              </div>
              <div class="w-12 h-12 rounded-xl bg-[#e0e7ff] text-[#155baf] flex items-center justify-center">
                <Shield class="w-6 h-6" />
              </div>
            </div>
            
            <!-- Member Baru Bulan Ini -->
            <div class="col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <p class="text-[11px] font-bold text-slate-500 mb-2">Member Baru Bulan Ini</p>
                <h3 class="text-[32px] font-bold text-emerald-600 mb-2 leading-none">{{ data.stats.newMembers }}</h3>
                <div class="flex items-center text-[11px] font-medium text-slate-500">
                  <span class="mr-1">📅</span> {{ data.stats.newMembersUpdate }}
                </div>
              </div>
              <div class="w-12 h-12 rounded-xl bg-emerald-300 text-emerald-900 flex items-center justify-center">
                <UserPlus class="w-6 h-6" />
              </div>
            </div>
          </div>

          <!-- Controls Row -->
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center gap-4">
              <!-- Tabs -->
              <div class="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                <button v-for="tab in tabs" :key="tab" 
                        @click="activeTab = tab"
                        class="px-4 py-1.5 text-[12px] font-bold rounded-md transition-colors"
                        :class="activeTab === tab ? 'bg-white text-[#155baf] shadow-sm' : 'text-gray-500 hover:text-gray-700'">
                  {{ tab }}
                </button>
              </div>
              <!-- Filter Button -->
              <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[12px] font-bold text-slate-700 hover:bg-gray-50 shadow-sm">
                <Filter class="w-3.5 h-3.5" /> Filter Lanjutan
              </button>
            </div>
            
            <!-- Add Button -->
            <RouterLink to="/admin/members/add" class="flex items-center gap-2 px-4 py-2.5 bg-[#0f4a8a] text-white rounded-lg text-[12px] font-bold hover:bg-[#0c3a6b] transition-colors shadow-sm">
              <PlusCircle class="w-4 h-4" /> Tambah Member Baru
            </RouterLink>
          </div>

          <!-- Table Section -->
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-2">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#f4f7fc] border-b border-gray-200">
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Nama Petugas</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">ID Staf</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Lokasi</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Shift</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Status</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in data.members" :key="member.id" class="border-b border-gray-100 hover:bg-[#f8fafc] transition-colors">
                    <!-- Nama Petugas -->
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[#155baf] flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm">
                          {{ member.initials }}
                        </div>
                        <span class="text-[13px] font-bold text-slate-800">{{ member.name }}</span>
                      </div>
                    </td>
                    <!-- ID Staf -->
                    <td class="px-6 py-4 text-[12px] text-slate-600 font-mono">
                      {{ member.staffId }}
                    </td>
                    <!-- Lokasi -->
                    <td class="px-6 py-4 text-[12px] text-slate-700">
                      {{ member.location }}
                    </td>
                    <!-- Shift -->
                    <td class="px-6 py-4 text-[12px] text-slate-700 max-w-[120px]">
                      {{ member.shift }}
                    </td>
                    <!-- Status -->
                    <td class="px-6 py-4">
                      <span class="px-3 py-1 text-[9px] font-bold uppercase rounded-md tracking-wider border"
                            :class="member.status === 'AKTIF' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'">
                        {{ member.status }}
                      </span>
                    </td>
                    <!-- Aksi -->
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <button class="text-[#155baf] hover:text-[#0f4a8a] transition-colors">
                          <Pencil class="w-4 h-4 stroke-[2.5]" />
                        </button>
                        <button class="text-red-500 hover:text-red-700 transition-colors">
                          <Trash2 class="w-4 h-4 stroke-[2.5]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <!-- Bottom Alert Banner -->
      <div class="bg-[#155baf] text-white px-8 py-3 flex items-center justify-between z-10 shrink-0">
        <div class="flex items-center gap-3">
          <Info class="w-5 h-5 opacity-90" />
          <p class="text-[12px] font-medium">{{ data.warning.message }}</p>
        </div>
        <button class="text-[11px] font-bold uppercase tracking-wider text-white hover:text-blue-200 transition-colors px-3 py-1 border border-transparent hover:border-blue-400 rounded">
          LIHAT DETAIL
        </button>
      </div>

    </div>
  </div>
</template>
