<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, HelpCircle, Calendar, Download, TrendingUp,
  ChevronDown, Filter, AlertCircle, ShieldAlert, ShieldCheck, CheckCircle2,
  Car
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import { dummyAdminDashboard } from '@/data/sources/dummy-admin-dashboard'

const route = useRoute()
const router = useRouter()
const data = ref(dummyAdminDashboard)

const handleLogout = () => {
  localStorage.removeItem('authRole')
  localStorage.removeItem('shift')
  router.push('/login')
}

const formatRupiahK = (value: number) => {
  return 'Rp ' + (value / 1000).toLocaleString('id-ID') + 'k'
}

const formatNumber = (value: number) => {
  return value.toLocaleString('en-US')
}
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
        <button @click="handleLogout" class="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a] transition-colors mt-1">
          <LogOut class="w-4 h-4" /> Log Out
        </button>
      </div>
    </aside>

    <!-- Main Layout -->
    <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
      
      <!-- Top Header -->
      <header class="h-[76px] bg-white border-b border-[#dbeafe] flex items-center justify-between px-8 shrink-0 z-10">
        <div class="flex items-center w-full max-w-xl">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari gate atau transaksi..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-full pl-11 pr-4 py-2.5 outline-none border border-transparent focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-5 text-gray-500">
            <button class="hover:text-[#1e3a8a] transition-colors relative">
              <Bell class="w-[18px] h-[18px]" />
              <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white translate-x-1/2 -translate-y-1/2"></span>
            </button>
            <button class="hover:text-[#1e3a8a] transition-colors">
              <HelpCircle class="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div class="flex items-center pl-6 border-l border-[#dbeafe] gap-3 cursor-pointer group">
            <div class="text-right">
              <p class="text-[13px] font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">Admin Utama</p>
              <p class="text-[11px] text-gray-500">Super Admin</p>
            </div>
            <div class="w-9 h-9 rounded-full overflow-hidden border border-[#dbeafe]">
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto bg-[#F8FAFC]">
        <div class="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
          
          <!-- Page Header -->
          <div class="flex items-end justify-between">
            <div>
              <h2 class="text-[22px] font-bold text-[#1e293b]">Ringkasan Operasional</h2>
              <p class="text-[13px] text-slate-500 mt-1">Pantauan real-time seluruh lokasi SmartGate Pro</p>
            </div>
            <div class="flex gap-3">
              <button class="flex items-center gap-2 px-4 py-2.5 bg-[#eef2ff] border border-[#dbeafe] rounded-lg text-[#1e3a8a] text-[13px] font-bold hover:bg-[#e0e7ff] transition-colors">
                <Calendar class="w-4 h-4 stroke-[2.5]" /> 24 Mei 2024
              </button>
              <button class="flex items-center gap-2 px-4 py-2.5 bg-[#155baf] text-white rounded-lg text-[13px] font-bold hover:bg-[#0f4a8a] transition-colors shadow-sm">
                <Download class="w-4 h-4 stroke-[2.5]" /> Export PDF
              </button>
            </div>
          </div>

          <!-- Top Stats Row -->
          <div class="grid grid-cols-12 gap-6">
            <!-- Pendapatan Hari Ini -->
            <div class="col-span-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-center">
              <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Pendapatan Hari Ini</p>
              <h3 class="text-2xl font-bold text-slate-800 mb-2">{{ formatRupiahK(data.overview.todayRevenue) }}</h3>
              <div class="flex items-center text-[11px] font-bold text-emerald-600 gap-1">
                <TrendingUp class="w-3 h-3" /> {{ data.overview.todayRevenueTrend }} vs kemarin
              </div>
            </div>
            
            <!-- Pendapatan Minggu Ini -->
            <div class="col-span-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-center">
              <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Pendapatan Minggu Ini</p>
              <h3 class="text-2xl font-bold text-slate-800 mb-2">{{ formatRupiahK(data.overview.weeklyRevenue) }}</h3>
            </div>

            <!-- Kendaraan Aktif -->
            <div class="col-span-6 bg-[#0f4a8a] rounded-xl p-5 shadow-sm text-white flex flex-col justify-center relative overflow-hidden">
              <div class="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <p class="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-1 relative z-10">Kendaraan Aktif</p>
              <h3 class="text-3xl font-bold mb-1 relative z-10">{{ formatNumber(data.overview.activeVehicles) }}</h3>
              <div class="flex items-center text-[11px] text-blue-200 gap-1.5 font-medium relative z-10">
                <Car class="w-3.5 h-3.5 opacity-80" /> Total Kapasitas: {{ formatNumber(data.overview.totalCapacity) }}
              </div>
            </div>
          </div>

          <!-- Main Dashboard Row -->
          <div class="grid grid-cols-12 gap-6 h-[460px]">
            
            <!-- Tren Pendapatan Chart -->
            <div class="col-span-8 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col p-6">
              <div class="flex items-center justify-between mb-8">
                <div>
                  <h3 class="text-[13px] font-bold text-slate-800">Tren Pendapatan Mingguan</h3>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-bold text-gray-500">Filter Tanggal:</span>
                    <button class="flex items-center gap-2 px-3 py-1.5 bg-[#f8fafc] border border-gray-200 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                      Pilih Tanggal <Calendar class="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                  <button class="flex items-center gap-1.5 text-[11px] font-bold text-[#1e3a8a] hover:text-[#0f4a8a]">
                    <Filter class="w-3 h-3" /> Reset Filter
                  </button>
                  <div class="w-px h-4 bg-gray-200 mx-1"></div>
                  <button class="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                    7 Hari Terakhir <ChevronDown class="w-3 h-3" />
                  </button>
                </div>
              </div>

              <!-- Mock CSS Bar Chart -->
              <div class="flex-1 flex items-end gap-2 bg-[#f8fafc] rounded-lg p-6 relative">
                <!-- Background lines -->
                <div class="absolute left-0 right-0 top-6 h-px bg-gray-200"></div>
                <div class="absolute left-0 right-0 top-1/2 h-px bg-gray-200"></div>
                <div class="absolute left-0 right-0 bottom-6 h-px bg-gray-300"></div>
                
                <!-- Bars -->
                <div v-for="(item, i) in data.weeklyTrend" :key="i" class="flex-1 flex flex-col items-center justify-end h-full z-10 group relative">
                  <!-- Tooltip -->
                  <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    Rp {{ item.value * 1000 }}k
                  </div>
                  <!-- Bar -->
                  <div class="w-full bg-[#155baf] hover:bg-[#2563eb] transition-colors rounded-t-sm" :style="{ height: `${item.value}%` }"></div>
                  <!-- Label -->
                  <span class="text-[10px] font-bold text-gray-500 mt-3 uppercase">{{ item.day }}</span>
                </div>
              </div>
            </div>

            <!-- Right Column Panels -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Status Gerbang Global -->
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col flex-1">
                <div class="p-5 border-b border-gray-100 flex items-center justify-between">
                  <h3 class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Status Gerbang Global</h3>
                  <CheckCircle2 class="w-4 h-4 text-emerald-500" />
                </div>
                <div class="p-5 flex flex-col gap-4">
                  <div v-for="(gate, i) in data.globalStatus" :key="i" class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 rounded-full" :class="gate.status === 'ONLINE' ? 'bg-emerald-500' : 'bg-red-500'"></div>
                      <span class="text-[13px] font-bold text-slate-700">{{ gate.name }}</span>
                    </div>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                          :class="gate.status === 'ONLINE' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'">
                      {{ gate.status }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Alert Terbaru -->
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col flex-1">
                <div class="p-5 border-b border-gray-100">
                  <h3 class="text-[12px] font-bold text-slate-800">Alert Terbaru</h3>
                </div>
                <div class="p-5 flex flex-col gap-4">
                  <div v-for="(alert, i) in data.alerts" :key="i" class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                         :class="{
                           'bg-red-100 text-red-600': alert.type === 'error',
                           'bg-amber-100 text-amber-600': alert.type === 'warning',
                           'bg-emerald-100 text-emerald-600': alert.type === 'success'
                         }">
                      <AlertCircle v-if="alert.type === 'error'" class="w-4 h-4" />
                      <ShieldAlert v-else-if="alert.type === 'warning'" class="w-4 h-4" />
                      <ShieldCheck v-else class="w-4 h-4" />
                    </div>
                    <div class="flex-1">
                      <h4 class="text-[12px] font-bold text-slate-800 mb-0.5">{{ alert.title }}</h4>
                      <p class="text-[11px] text-slate-500 leading-relaxed mb-1">{{ alert.description }}</p>
                      <span class="text-[9px] font-bold uppercase tracking-wider"
                            :class="{
                              'text-red-600': alert.type === 'error',
                              'text-amber-600': alert.type === 'warning',
                              'text-emerald-600': alert.type === 'success'
                            }">
                        {{ alert.tag }}
                      </span>
                    </div>
                  </div>
                  
                  <button class="w-full mt-2 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg text-[11px] font-bold text-slate-600 transition-colors">
                    Lihat Semua Alert
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>
