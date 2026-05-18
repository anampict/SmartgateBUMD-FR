<script setup lang="ts">
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, ArrowLeft, Printer, Share2, User, Info,
  Code, Video, Clock, CheckCircle, Flag
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.push('/admin/audit')
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
          <RouterLink to="/admin/audit" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path.includes('/admin/audit') ? 'bg-[#155baf] text-white shadow-sm' : 'text-gray-600 hover:bg-[#e0e7ff] hover:text-[#1e3a8a]']">
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
        <div class="flex items-center gap-6 w-full max-w-2xl">
          <div class="flex items-center gap-3">
            <button @click="goBack" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft class="w-4 h-4" />
            </button>
            <h2 class="text-[14px] font-bold text-[#1e293b]">Audit Log</h2>
          </div>
          
          <div class="relative w-full max-w-md ml-4">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari log..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-lg pl-11 pr-4 py-2 outline-none border border-gray-200 focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
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
            <div class="w-8 h-8 rounded bg-[#1e293b] overflow-hidden flex items-center justify-center cursor-pointer border border-[#0f4a8a]">
              <img :src="profileImg" alt="Profile" class="w-full h-full object-cover opacity-80 mix-blend-screen" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto relative bg-[#f8fafc]">
        <div class="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
          
          <!-- Page Header Info -->
          <div class="flex items-start justify-between border-b border-gray-200 pb-6">
            <div>
              <h2 class="text-[18px] font-bold text-[#1e293b] mb-2">Detail Log Aktivitas</h2>
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1.5 text-slate-500">
                  <Clock class="w-3.5 h-3.5" />
                  <span class="text-[12px] font-medium">24 Oktober 2023, 14:32:05 WIB</span>
                </div>
                <span class="bg-[#fee2e2] text-[#dc2626] text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
                  Penting
                </span>
              </div>
            </div>
            
            <div class="flex gap-3">
              <button class="flex items-center gap-2 px-4 py-2 bg-[#f1f5f9] hover:bg-slate-200 text-slate-700 text-[12px] font-bold rounded-md transition-colors shadow-sm">
                <Printer class="w-4 h-4" /> Cetak
              </button>
              <button class="flex items-center gap-2 px-4 py-2 bg-[#0f4a8a] hover:bg-[#0c3a6b] text-white text-[12px] font-bold rounded-md transition-colors shadow-sm">
                <Share2 class="w-4 h-4" /> Ekspor PDF
              </button>
            </div>
          </div>
          
          <!-- Detail Grid Layout -->
          <div class="grid grid-cols-12 gap-6 mt-2">
            
            <!-- Left Column -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Pelaku Aktivitas -->
              <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div class="flex items-center gap-2 mb-5">
                  <User class="w-4 h-4 text-[#155baf]" />
                  <h3 class="text-[11px] font-bold text-[#155baf] tracking-widest uppercase">Pelaku Aktivitas</h3>
                </div>
                
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                    <img :src="profileImg" alt="Bambang Mulyadi" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 class="text-[13px] font-bold text-slate-800">Bambang Mulyadi</h4>
                    <p class="text-[11px] font-medium text-[#047857] mt-0.5">Admin Utama</p>
                  </div>
                </div>
                
                <div class="flex flex-col gap-3">
                  <div class="flex justify-between items-center text-[12px]">
                    <span class="text-slate-500">IP Address</span>
                    <span class="font-bold text-slate-700 font-mono">192.168.1.104</span>
                  </div>
                  <div class="flex justify-between items-center text-[12px]">
                    <span class="text-slate-500">Session ID</span>
                    <span class="font-bold text-slate-700 font-mono">SESS-99281-X</span>
                  </div>
                </div>
              </div>

              <!-- Ringkasan -->
              <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div class="flex items-center gap-2 mb-5">
                  <Info class="w-4 h-4 text-[#155baf]" />
                  <h3 class="text-[11px] font-bold text-[#155baf] tracking-widest uppercase">Ringkasan</h3>
                </div>
                
                <div class="mb-4">
                  <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Aksi</span>
                  <div class="bg-[#f0f4f8] text-[#1e293b] text-[13px] font-medium px-4 py-3 rounded-lg leading-relaxed">
                    Pembukaan Gerbang Manual
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Modul</span>
                    <div class="bg-[#f0f4f8] text-[#1e293b] text-[12px] font-medium px-3 py-2 rounded-lg">
                      Operasional
                    </div>
                  </div>
                  <div>
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Status</span>
                    <div class="bg-[#f0f4f8] text-[#047857] text-[12px] font-bold px-3 py-2 rounded-lg flex items-center gap-1.5">
                      <CheckCircle class="w-3.5 h-3.5" /> Berhasil
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Column -->
            <div class="col-span-8 flex flex-col gap-6">
              
              <!-- Detail Perubahan -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div class="flex items-center gap-2 mb-6">
                  <Code class="w-4 h-4 text-[#155baf]" />
                  <h3 class="text-[11px] font-bold text-[#155baf] tracking-widest uppercase">Detail Perubahan</h3>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <!-- Sebelum -->
                  <div>
                    <div class="flex items-center gap-1.5 text-slate-500 mb-3">
                      <Clock class="w-3.5 h-3.5" />
                      <span class="text-[11px] font-bold">Sebelum</span>
                    </div>
                    <div class="bg-[#f0f4f8] border border-[#e2e8f0] rounded-lg p-5 flex flex-col gap-4">
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-400 font-mono tracking-wider">ID Gerbang</span>
                        <span class="text-slate-700 font-bold font-mono text-right">G-NORTH-01</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-400 font-mono tracking-wider">Status Gerbang</span>
                        <span class="text-[#dc2626] font-bold font-mono text-right">TERKUNCI</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-400 font-mono tracking-wider">Alasan Override</span>
                        <span class="text-slate-700 font-bold font-mono text-right">-</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Sesudah -->
                  <div>
                    <div class="flex items-center gap-1.5 text-[#155baf] mb-3">
                      <CheckCircle class="w-3.5 h-3.5" />
                      <span class="text-[11px] font-bold">Sesudah</span>
                    </div>
                    <div class="bg-[#f0f4f8] border border-blue-200 rounded-lg p-5 flex flex-col gap-4">
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-500 font-mono tracking-wider">ID Gerbang</span>
                        <span class="text-slate-800 font-bold font-mono text-right">G-NORTH-01</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-500 font-mono tracking-wider">Status Gerbang</span>
                        <span class="text-[#047857] font-bold font-mono text-right">TERBUKA MANUAL</span>
                      </div>
                      <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <span class="text-slate-500 font-mono tracking-wider">Alasan Override</span>
                        <span class="text-slate-800 font-bold font-mono text-right break-words">Emergency Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bukti Kontekstual -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div class="flex items-center gap-2 mb-6">
                  <Video class="w-4 h-4 text-[#155baf]" />
                  <h3 class="text-[11px] font-bold text-[#155baf] tracking-widest uppercase">Bukti Kontekstual (CCTV)</h3>
                </div>
                
                <div class="flex gap-6">
                  <!-- Image Box Mockup -->
                  <div class="w-[280px] h-[160px] bg-slate-900 rounded-lg overflow-hidden relative shadow-inner shrink-0">
                    <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>
                    <div class="absolute inset-0 flex items-center justify-center border border-slate-700 m-2">
                       <span class="text-slate-500 font-bold text-[10px] tracking-widest">NO SIGNAL / IMAGE PLACEHOLDER</span>
                    </div>
                    <div class="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span class="text-[8px] font-mono text-white tracking-wider">CAM-04-NORTH-ENTRANCE</span>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-4 py-2">
                    <div>
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Plat Nomor Terdeteksi</span>
                      <p class="text-[14px] font-bold text-slate-800">B 1234 ABC</p>
                    </div>
                    <div>
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Keterangan Tambahan</span>
                      <p class="text-[12px] text-slate-600 italic leading-relaxed">
                        "Kendaraan operasional pemeliharaan taman, akses darurat diberikan oleh Admin."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- Bottom Action -->
          <div class="mt-4 mb-10 flex justify-center">
            <button class="flex items-center gap-2 px-6 py-3 border-2 border-[#155baf] text-[#155baf] bg-transparent hover:bg-blue-50 text-[13px] font-bold rounded-lg transition-colors">
              <Flag class="w-4 h-4" /> Tandai Sebagai Peninjauan Rutin
            </button>
          </div>

        </div>
      </main>

    </div>
  </div>
</template>
