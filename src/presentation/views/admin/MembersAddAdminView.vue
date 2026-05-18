<script setup lang="ts">
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, ArrowLeft, Radio, Wifi, Info, IdCard
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.push('/admin/members')
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
        <div class="flex items-center gap-4">
          <button @click="goBack" class="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#155baf] hover:bg-blue-50 transition-colors">
            <ArrowLeft class="w-4 h-4" />
          </button>
          <h2 class="text-[18px] font-bold text-[#0f4a8a]">Tambah Member Baru</h2>
        </div>

        <div class="flex items-center gap-6">
          <div class="relative w-[280px]">
            <Search class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Cari data..." 
                   class="w-full bg-[#f8fafc] text-sm text-gray-700 rounded-lg pl-11 pr-4 py-2 outline-none border border-gray-200 focus:bg-white focus:border-blue-300 transition-all placeholder:text-gray-400" />
          </div>

          <div class="flex items-center gap-5 text-gray-500 pl-4 border-l border-gray-200">
            <button class="hover:text-[#1e3a8a] transition-colors relative">
              <Bell class="w-[18px] h-[18px]" />
            </button>
            <button class="hover:text-[#1e3a8a] transition-colors">
              <Settings class="w-[18px] h-[18px]" />
            </button>
            <div class="w-8 h-8 rounded bg-[#1e293b] overflow-hidden flex items-center justify-center cursor-pointer">
               <!-- In the screenshot, the profile picture is inside a dark square -->
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 overflow-auto relative">
        <div class="w-full max-w-[1000px] mx-auto flex gap-6 relative z-10">
          
          <!-- Left Panel (SCAN RFID) -->
          <div class="w-[320px] shrink-0">
            <div class="bg-[#eef2ff] border border-[#dbeafe] rounded-xl p-6 h-auto shadow-sm">
              <div class="flex items-center gap-2 mb-4 text-[#155baf]">
                <Radio class="w-5 h-5" />
                <h3 class="text-[12px] font-bold tracking-wider uppercase">SCAN RFID MEMBER</h3>
              </div>
              
              <div class="bg-white rounded-lg p-5 border border-white shadow-sm flex items-center justify-between mb-4">
                <p class="text-[13px] text-gray-400 max-w-[120px] leading-snug">Tempel kartu pada scanner...</p>
                <div class="text-[#155baf]">
                  <Wifi class="w-6 h-6 animate-pulse" />
                </div>
              </div>
              
              <p class="text-[11px] text-slate-500 leading-relaxed">
                Data kartu akan otomatis terisi setelah pemindaian berhasil.
              </p>
            </div>
          </div>

          <!-- Right Panel (Form) -->
          <div class="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
            
            <!-- Card Header -->
            <div class="px-8 py-5 border-b border-gray-200 bg-[#f8fafc]">
              <h2 class="text-[18px] font-bold text-[#0f4a8a]">Informasi Personal</h2>
            </div>
            
            <form @submit.prevent class="flex flex-col h-full">
              
              <!-- Card Body -->
              <div class="p-8 flex-1">
                <div class="grid grid-cols-2 gap-6">
                  <!-- Nama Lengkap -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Nama Lengkap</label>
                    <input type="text" placeholder="Contoh: Budi Santoso" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                  
                  <!-- Alamat -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Alamat</label>
                    <input type="text" placeholder="Tanggulangin" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                  
                  <!-- Role -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Role</label>
                    <select class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                      <option>Admin</option>
                      <option>Petugas</option>
                    </select>
                  </div>
                  
                  <!-- Shift -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Shift</label>
                    <select class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                      <option>Malam</option>
                      <option>Pagi</option>
                      <option>Sore</option>
                    </select>
                  </div>

                  <!-- Nomor Telepon -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Nomor Telepon</label>
                    <input type="text" placeholder="0812xxxx" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                  
                  <!-- Email -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Email</label>
                    <input type="email" placeholder="budi@email.com" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                  
                  <!-- Kata Sandi -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Kata Sandi</label>
                    <input type="password" placeholder="••••••••••" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                  
                  <!-- Konfirmasi Kata Sandi -->
                  <div>
                    <label class="block text-[12px] font-bold text-slate-700 mb-2">Konfirmasi Kata Sandi</label>
                    <input type="password" placeholder="••••••••••" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-md focus:ring-[#155baf] focus:border-[#155baf] px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400" />
                  </div>
                </div>

                <!-- Alert Info -->
                <div class="mt-8 bg-[#ffedd5] rounded-lg p-5 flex gap-3">
                  <Info class="w-5 h-5 text-[#9a3412] shrink-0" />
                  <div>
                    <h4 class="text-[12px] font-bold text-[#9a3412] mb-0.5">Informasi Penting</h4>
                    <p class="text-[12px] text-[#9a3412] opacity-90 leading-relaxed">
                      Kartu RFID member akan langsung aktif secara otomatis sesaat setelah data berhasil disimpan ke dalam sistem.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card Footer -->
              <div class="px-8 py-5 border-t border-gray-200 bg-[#f8fafc] flex items-center justify-end gap-4">
                <button type="button" @click="goBack" class="px-8 py-2.5 bg-white border border-gray-300 text-slate-700 text-[13px] font-bold rounded-md hover:bg-gray-50 transition-colors">
                  Batal
                </button>
                <button type="button" class="px-8 py-2.5 bg-[#0f4a8a] text-white text-[13px] font-bold rounded-md hover:bg-[#0c3a6b] transition-colors shadow-sm">
                  Simpan Data Member
                </button>
              </div>

            </form>
          </div>
          
        </div>

        <!-- Watermark Background -->
        <div class="absolute bottom-12 right-12 opacity-[0.03] pointer-events-none z-0">
          <IdCard class="w-[400px] h-[400px] text-[#0f4a8a]" />
        </div>
      </main>

    </div>
  </div>
</template>
