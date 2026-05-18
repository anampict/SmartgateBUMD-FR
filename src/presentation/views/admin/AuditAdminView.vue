<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, AlertCircle, Filter, ChevronLeft, ChevronRight
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import { dummyAdminAudit } from '@/data/sources/dummy-admin-audit'

const route = useRoute()
const data = ref(dummyAdminAudit)

const getModuleBadgeColor = (moduleName: string) => {
  switch (moduleName) {
    case 'OPERASIONAL':
    case 'LAPORAN':
      return 'bg-[#ffedd5] text-[#c2410c]' // Orangeish
    case 'PENGATURAN':
    case 'MANAJEMEN STAF':
      return 'bg-[#e0e7ff] text-[#4338ca]' // Blueish
    case 'AUTENTIKASI':
      return 'bg-[#d1fae5] text-[#047857]' // Greenish
    default:
      return 'bg-gray-100 text-gray-700'
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f8fafc] flex text-gray-900 font-sans relative overflow-hidden">
    
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
          <RouterLink to="/admin/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path.includes('/admin/members') ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <Users class="w-4 h-4" /> Members
          </RouterLink>
          <RouterLink to="/admin/reports" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/reports' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <IconReports class="w-4 h-4" /> Reports
          </RouterLink>
          <RouterLink to="/admin/audit" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/admin/audit' ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
            <History class="w-4 h-4" /> Audit Log
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
    <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-white">
      
      <!-- Top Header -->
      <header class="h-[76px] border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10 bg-white">
        <div class="flex items-center gap-8 w-full max-w-2xl">
          <h2 class="text-[18px] font-bold text-[#1e293b]">Audit Log</h2>
          
          <div class="relative w-full max-w-md">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari log atau pengguna..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-lg pl-11 pr-4 py-2 outline-none border border-transparent focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
          </div>
        </div>

        <div class="flex items-center gap-5">
          <button class="text-gray-500 hover:text-[#1e3a8a] transition-colors relative">
            <Bell class="w-[18px] h-[18px]" />
          </button>
          <button class="text-gray-500 hover:text-[#1e3a8a] transition-colors">
            <Settings class="w-[18px] h-[18px]" />
          </button>
          <div class="w-8 h-8 border-l border-gray-200 pl-5 flex items-center box-content">
            <div class="w-8 h-8 rounded bg-[#1e293b] overflow-hidden flex items-center justify-center cursor-pointer">
              <img :src="profileImg" alt="Profile" class="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto relative">
        <div class="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          
          <!-- Page Header Info -->
          <div>
            <h2 class="text-[26px] font-bold text-[#1e293b]">Audit Log Sistem</h2>
            <p class="text-[14px] text-slate-500 mt-1 max-w-3xl leading-relaxed">Riwayat komprehensif aktivitas pengguna dan sistem untuk menjaga transparansi, keamanan, dan akuntabilitas operasional SmartGate Pro.</p>
          </div>
          
          <!-- Filter Panel -->
          <div class="border border-gray-200 rounded-xl p-5 bg-white flex flex-wrap items-end gap-5 shadow-sm">
            <div class="flex flex-col gap-1.5 flex-1 min-w-[150px]">
              <label class="text-[11px] font-bold text-slate-500">Rentang Tanggal</label>
              <input type="text" placeholder="mm/dd/yyyy" class="w-full bg-[#f8fafc] border border-gray-200 text-slate-700 text-[13px] rounded-md px-3 py-2.5 outline-none focus:border-blue-300" />
            </div>
            
            <div class="flex flex-col gap-1.5 flex-1 min-w-[150px]">
              <label class="text-[11px] font-bold text-slate-500">Peran Pengguna</label>
              <select class="w-full bg-[#f8fafc] border border-gray-200 text-slate-700 text-[13px] rounded-md px-3 py-2.5 outline-none focus:border-blue-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Semua Peran</option>
              </select>
            </div>
            
            <div class="flex flex-col gap-1.5 flex-1 min-w-[150px]">
              <label class="text-[11px] font-bold text-slate-500">Tipe Aktivitas</label>
              <select class="w-full bg-[#f8fafc] border border-gray-200 text-slate-700 text-[13px] rounded-md px-3 py-2.5 outline-none focus:border-blue-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Semua Aktivitas</option>
              </select>
            </div>
            
            <div class="flex flex-col gap-1.5 flex-1 min-w-[150px]">
              <label class="text-[11px] font-bold text-slate-500">Tingkat Keparahan</label>
              <select class="w-full bg-[#f8fafc] border border-gray-200 text-slate-700 text-[13px] rounded-md px-3 py-2.5 outline-none focus:border-blue-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Semua Level</option>
              </select>
            </div>

            <button class="px-5 py-2.5 bg-[#0f4a8a] hover:bg-[#0c3a6b] text-white text-[13px] font-bold rounded-md flex items-center gap-2 transition-colors shadow-sm">
              <Filter class="w-4 h-4" /> Terapkan Filter
            </button>
          </div>

          <!-- Table Container -->
          <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#eef2ff] border-b border-gray-200">
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-[140px]">Timestamp</th>
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700 min-w-[200px]">Pengguna</th>
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-[280px]">Aksi</th>
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700">Modul</th>
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700">IP Address</th>
                    <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-[80px]">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="log in data.logs" :key="log.id" class="border-b border-gray-100 hover:bg-[#f8fafc] transition-colors group">
                    
                    <!-- Timestamp -->
                    <td class="px-6 py-4 text-[12px] text-slate-700 whitespace-pre-line leading-relaxed">
                      {{ log.timestamp }}
                    </td>
                    
                    <!-- Pengguna -->
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-200">
                           <img :src="profileImg" alt="Avatar" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex flex-col">
                          <span class="text-[12px] font-bold text-slate-800">{{ log.user.name }}</span>
                          <span class="text-[10px] font-medium text-slate-400 mt-0.5">{{ log.user.role }}</span>
                        </div>
                      </div>
                    </td>
                    
                    <!-- Aksi -->
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-2" :class="log.isAlert ? 'text-[#dc2626]' : 'text-slate-700'">
                        <AlertCircle v-if="log.isAlert" class="w-3.5 h-3.5 shrink-0" />
                        <span class="text-[12px] font-medium leading-relaxed">{{ log.action }}</span>
                      </div>
                    </td>
                    
                    <!-- Modul -->
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-[9px] font-bold rounded uppercase tracking-widest" :class="getModuleBadgeColor(log.module)">
                        {{ log.module }}
                      </span>
                    </td>
                    
                    <!-- IP Address -->
                    <td class="px-6 py-4 text-[11px] text-slate-400 font-mono tracking-wider">
                      {{ log.ipAddress }}
                    </td>
                    
                    <!-- Detail -->
                    <td class="px-6 py-4">
                      <RouterLink to="/admin/audit/detail" class="text-[12px] font-bold text-[#155baf] hover:text-[#0f4a8a] transition-colors">
                        Detail
                      </RouterLink>
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Footer Pagination -->
            <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
              <p class="text-[11px] text-slate-500 font-medium">Menampilkan 1-5 dari 1,240 entri</p>
              
              <div class="flex items-center gap-1">
                <button class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
                  <ChevronLeft class="w-4 h-4" />
                </button>
                <button class="w-7 h-7 rounded bg-[#0f4a8a] text-white text-[12px] font-bold flex items-center justify-center">1</button>
                <button class="w-7 h-7 rounded text-slate-600 hover:bg-slate-100 text-[12px] font-bold flex items-center justify-center transition-colors">2</button>
                <button class="w-7 h-7 rounded text-slate-600 hover:bg-slate-100 text-[12px] font-bold flex items-center justify-center transition-colors">3</button>
                <span class="text-slate-400 text-[12px] font-bold px-1">...</span>
                <button class="w-8 h-7 rounded text-slate-600 hover:bg-slate-100 text-[12px] font-bold flex items-center justify-center transition-colors">248</button>
                <button class="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  </div>
</template>
