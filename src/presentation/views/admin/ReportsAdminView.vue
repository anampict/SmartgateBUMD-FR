<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, HelpCircle, Calendar, FileDown, FileSpreadsheet,
  AlertTriangle, MoreVertical, Edit, Trash2, ChevronLeft, ChevronRight, Filter
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import { dummyAdminReports } from '@/data/sources/dummy-admin-reports'

const route = useRoute()
const data = ref(dummyAdminReports)

const formatRupiah = (value: number) => {
  return `Rp ${value.toLocaleString('id-ID')}`
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
    <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
      
      <!-- Top Header -->
      <header class="h-[76px] bg-white border-b border-[#dbeafe] flex items-center justify-between px-8 shrink-0 z-10">
        <div class="flex items-center w-full max-w-xl">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari laporan atau transaksi..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-full pl-11 pr-4 py-2.5 outline-none border border-transparent focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-5 text-gray-500">
            <button class="hover:text-[#1e3a8a] transition-colors relative">
              <Bell class="w-[18px] h-[18px]" />
            </button>
            <button class="hover:text-[#1e3a8a] transition-colors">
              <HelpCircle class="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div class="flex items-center pl-6 border-l border-[#dbeafe] gap-3 cursor-pointer group">
            <div class="text-right">
              <p class="text-[13px] font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">Admin Utama</p>
              <p class="text-[11px] text-gray-500 font-medium">Super Admin</p>
            </div>
            <div class="w-9 h-9 rounded-full overflow-hidden border border-[#dbeafe]">
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto relative">
        <div class="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
          
          <!-- Page Header & Filters -->
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-[26px] font-bold text-[#0f4a8a]">Laporan & Analitik</h2>
              <p class="text-[14px] text-slate-500 mt-1 max-w-2xl">Pantau performa operasional dan pendapatan secara real-time.</p>
            </div>
            
            <div class="flex items-end gap-3">
              <div class="flex flex-col">
                <label class="text-[10px] text-slate-500 font-medium mb-1">Rentang Waktu</label>
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 min-w-[200px] shadow-sm">
                  <Calendar class="w-4 h-4 text-slate-500" />
                  <span class="text-[12px] font-bold text-slate-700">01 Jan 2024 - 31 Jan 2024</span>
                </div>
                <div class="flex gap-2 mt-2">
                  <button class="flex items-center gap-1.5 px-3 py-1.5 bg-[#e2e8f0] hover:bg-slate-300 text-slate-700 rounded text-[11px] font-bold transition-colors">
                    <FileDown class="w-3.5 h-3.5" /> PDF
                  </button>
                  <button class="flex items-center gap-1.5 px-3 py-1.5 bg-[#15803d] hover:bg-[#166534] text-white rounded text-[11px] font-bold transition-colors">
                    <FileSpreadsheet class="w-3.5 h-3.5" /> Excel
                  </button>
                </div>
              </div>

              <div class="flex flex-col">
                <label class="text-[10px] text-slate-500 font-medium mb-1">Lokasi Cabang</label>
                <select class="bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold text-slate-700 shadow-sm appearance-none min-w-[120px] outline-none">
                  <option>Semua Lokasi</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Top Cards (Charts) -->
          <div class="grid grid-cols-12 gap-6 mt-2">
            
            <!-- Pendapatan Chart Placeholder -->
            <div class="col-span-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-[320px]">
              <div class="flex items-start justify-between mb-8">
                <div>
                  <h3 class="text-[16px] font-bold text-slate-800">Laporan Pendapatan</h3>
                  <p class="text-[11px] text-slate-500 mt-0.5">Tren pendapatan harian bulan ini</p>
                </div>
                <div class="flex bg-[#f1f5f9] rounded-md p-1">
                  <button class="px-4 py-1.5 bg-[#0f4a8a] text-white rounded text-[12px] font-medium shadow-sm">Harian</button>
                  <button class="px-4 py-1.5 text-slate-600 hover:text-slate-800 rounded text-[12px] font-medium transition-colors">Bulanan</button>
                </div>
              </div>
              
              <!-- Mock Chart Area -->
              <div class="flex-1 relative flex items-end justify-between px-4 pb-2 mt-4">
                <div class="absolute bottom-8 left-0 right-0 h-px bg-gray-100"></div>
                <!-- X-Axis Labels -->
                <span class="text-[9px] font-medium text-slate-400 absolute bottom-0 left-[5%]">01 Jan</span>
                <span class="text-[9px] font-medium text-slate-400 absolute bottom-0 left-[25%]">02 Jan</span>
                <span class="text-[9px] font-medium text-slate-400 absolute bottom-0 left-[45%]">03 Jan</span>
                <span class="text-[9px] font-medium text-slate-400 absolute bottom-0 left-[65%]">04 Jan</span>
                <span class="text-[10px] font-bold text-slate-800 absolute bottom-0 left-[80%]">Today</span>
                
                <div class="absolute bottom-0 right-[5%] flex flex-col items-center">
                  <div class="w-16 h-px border-t border-dashed border-blue-400 mb-2"></div>
                  <span class="text-[9px] font-medium text-slate-400">Est</span>
                </div>
              </div>
            </div>

            <!-- Jam Sibuk -->
            <div class="col-span-4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-[320px]">
              <div class="mb-6">
                <h3 class="text-[16px] font-bold text-slate-800">Statistik Jam Sibuk</h3>
                <p class="text-[11px] text-slate-500 mt-0.5">Rata-rata kendaraan per jam</p>
              </div>
              
              <div class="flex flex-col gap-5 flex-1 justify-center">
                <div v-for="(item, idx) in data.peakHours" :key="idx" class="flex items-center gap-4">
                  <span class="text-[12px] font-bold text-slate-700 w-10 shrink-0">{{ item.time }}</span>
                  <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden flex">
                    <div class="h-full rounded-full transition-all duration-500" 
                         :class="item.color === 'orange' ? 'bg-[#b45309]' : 'bg-[#155baf]'"
                         :style="`width: ${item.percentage}%`">
                    </div>
                  </div>
                  <span class="text-[12px] font-bold w-8 text-right"
                        :class="item.color === 'orange' ? 'text-[#b45309]' : 'text-slate-700'">
                    {{ item.percentage }}%
                  </span>
                </div>
              </div>
              
              <div class="mt-4 bg-[#ffedd5] border border-[#fed7aa] rounded-lg p-4 flex gap-3">
                <AlertTriangle class="w-5 h-5 text-[#9a3412] shrink-0" />
                <div>
                  <h4 class="text-[11px] font-bold text-[#9a3412] mb-0.5">Rekomendasi Petugas</h4>
                  <p class="text-[11px] text-[#9a3412] opacity-90 leading-relaxed">
                    Tambah 1 petugas di Pintu Keluar jam 17:00.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom Card (Tabel Transaksi) -->
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
            
            <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
              <h3 class="text-[16px] font-bold text-slate-800">Detail Transaksi Terkini</h3>
              
              <div class="flex items-center gap-3">
                <div class="relative">
                  <Filter class="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Filter Plat Nomor..." 
                         class="pl-9 pr-3 py-1.5 text-[12px] bg-[#f8fafc] border border-gray-200 rounded-md outline-none focus:border-blue-300 w-[200px]" />
                </div>
                <button class="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical class="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#f0f4f8] border-b border-gray-200">
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">ID Transaksi</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Waktu</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Plat Nomor</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Jenis Kendaraan</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Durasi</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Biaya</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Status</th>
                    <th class="px-6 py-4 text-[11px] font-bold text-slate-600">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="trx in data.transactions" :key="trx.id" class="border-b border-gray-100 hover:bg-[#f8fafc] transition-colors">
                    <td class="px-6 py-4 text-[12px] text-slate-600 font-medium">{{ trx.id }}</td>
                    <td class="px-6 py-4 text-[12px] text-slate-600">{{ trx.time }}</td>
                    <td class="px-6 py-4 text-[12px] font-bold text-[#155baf]">{{ trx.plate }}</td>
                    <td class="px-6 py-4 text-[12px] text-slate-600">{{ trx.type }}</td>
                    <td class="px-6 py-4 text-[12px] text-slate-600">{{ trx.duration }}</td>
                    <td class="px-6 py-4 text-[12px] font-bold text-slate-800">{{ formatRupiah(trx.fee) }}</td>
                    <td class="px-6 py-4">
                      <span class="px-3 py-1 text-[9px] font-bold uppercase rounded-md tracking-wider border"
                            :class="trx.status === 'SUKSES' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'">
                        {{ trx.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <button class="text-[#155baf] hover:text-[#0f4a8a] transition-colors">
                          <Edit class="w-4 h-4 stroke-[2.5]" />
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

            <!-- Footer & Pagination -->
            <div class="px-6 py-4 bg-[#f8fafc] border-t border-gray-100 flex items-center justify-between">
              <p class="text-[11px] text-slate-500 font-medium">Menampilkan 4 dari 1,240 transaksi</p>
              
              <div class="flex items-center gap-1">
                <button class="w-7 h-7 rounded border border-gray-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
                  <ChevronLeft class="w-4 h-4" />
                </button>
                <button class="w-7 h-7 rounded bg-[#0f4a8a] text-white text-[12px] font-bold flex items-center justify-center">1</button>
                <button class="w-7 h-7 rounded border border-gray-200 bg-white text-slate-600 hover:bg-slate-50 text-[12px] font-medium flex items-center justify-center transition-colors">2</button>
                <button class="w-7 h-7 rounded border border-gray-200 bg-white text-slate-600 hover:bg-slate-50 text-[12px] font-medium flex items-center justify-center transition-colors">3</button>
                <button class="w-7 h-7 rounded border border-gray-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <!-- Page Footer -->
          <footer class="mt-8 mb-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>© 2024 SmartGate Pro, Sistem Manajemen Keamanan Terpadu.</p>
            <div class="flex gap-6 mt-2 md:mt-0">
              <a href="#" class="hover:text-[#155baf] transition-colors">Syarat & Ketentuan</a>
              <a href="#" class="hover:text-[#155baf] transition-colors">Kebijakan Privasi</a>
              <a href="#" class="hover:text-[#155baf] transition-colors">Hubungi IT Support</a>
            </div>
          </footer>

        </div>
      </main>

    </div>
  </div>
</template>
