<script setup lang="ts">
import { 
  LayoutDashboard, History, Users, DoorOpen, LogOut, 
  Search, Bell, Settings, ArrowLeft, Nfc, Radio, 
  Info, IdCard 
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import profileImg from '@/assets/gambar/profilepetugas.png'

import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex text-gray-900 font-sans relative overflow-hidden">
    
    <!-- Inline Sidebar -->
    <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-blue-800">SmartGateBUMD</h1>
          <p class="text-xs text-gray-500 font-medium tracking-wide uppercase mt-1">Admin Management</p>
        </div>
        <nav class="mt-2 px-4 space-y-1">
          <RouterLink to="/" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><LayoutDashboard class="w-5 h-5" /> Dashboard</RouterLink>
          <RouterLink to="/operasional" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/operasional' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRemote class="w-5 h-5" /> Operasional</RouterLink>
          <RouterLink to="/hardware" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/hardware' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconRouter class="w-5 h-5" /> Hardware</RouterLink>
          <RouterLink to="/histori" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/histori' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><History class="w-5 h-5" /> Histori</RouterLink>
          <RouterLink to="/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/revenue' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconMoney class="w-5 h-5" /> Revenue</RouterLink>
          <!-- Active Members -->
          <RouterLink to="/members" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path.includes('/members') ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><Users class="w-5 h-5" /> Members</RouterLink>
        </nav>
      </div>
      <div class="px-4 pb-6 space-y-3">
        <button class="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm mb-4"><IconKey class="w-5 h-5" /> Buka Gate</button>
        <div class="border-t border-gray-100 pt-3">
          <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><Settings class="w-5 h-5" /> Settings</button>
          <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Log Out</button>
        </div>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative min-h-screen">
      <!-- Custom Header with Back Button -->
      <header class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
        
        <div class="flex items-center gap-4">
          <button @click="router.push('/members')" class="text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition-colors">
            <ArrowLeft class="w-5 h-5" />
          </button>
          <h2 class="text-xl font-bold text-blue-800">Tambah Member Baru</h2>
        </div>

        <div class="flex items-center gap-5">
          <div class="relative w-64 mr-4">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" class="block w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 transition-all" placeholder="Cari data...">
          </div>

          <div class="flex items-center gap-3 text-gray-600">
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Bell class="w-5 h-5" /></button>
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Settings class="w-5 h-5" /></button>
          </div>
          
          <div class="flex items-center gap-3 pl-5 border-l border-gray-200">
            <div class="w-8 h-8 rounded-lg bg-blue-100 overflow-hidden border border-gray-200 flex shrink-0">
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto relative">
        <div class="max-w-5xl mx-auto relative z-10">
          
          <!-- Grid Layout -->
          <div class="grid grid-cols-12 gap-8 items-start">
            
            <!-- Left Panel: Scan RFID -->
            <div class="col-span-4 sticky top-8">
              <div class="bg-indigo-50 border border-blue-100 rounded-xl p-6 shadow-sm flex flex-col">
                <div class="flex items-center gap-3 text-blue-800 mb-6 font-bold text-sm tracking-wide uppercase">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Nfc class="w-4 h-4" />
                  </div>
                  SCAN RFID MEMBER
                </div>
                
                <div class="w-full bg-white rounded-lg p-5 mb-4 shadow-sm border border-gray-100 flex items-center justify-between h-24">
                  <span class="text-gray-400 text-sm leading-tight">Tempel kartu pada<br>scanner...</span>
                  <Radio class="w-6 h-6 text-blue-800" />
                </div>
                
                <p class="text-xs text-gray-500 leading-relaxed">
                  Data kartu akan otomatis terisi setelah pemindaian berhasil.
                </p>
              </div>
            </div>

            <!-- Right Panel: Form -->
            <div class="col-span-8">
              <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <h3 class="text-lg font-bold text-blue-800 mb-5">Informasi Personal</h3>
                <hr class="border-gray-100 mb-6">
                
                <div class="grid grid-cols-2 gap-x-6 gap-y-5">
                  <!-- Row 1 -->
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Nama Lengkap</label>
                    <input type="text" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="Contoh: Budi Santoso">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Alamat</label>
                    <input type="text" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="Tanggulangin">
                  </div>
                  
                  <!-- Row 2 -->
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Role</label>
                    <div class="relative">
                      <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800">
                        <option>Admin</option>
                        <option>Operator</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Shift</label>
                    <div class="relative">
                      <select class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800">
                        <option>Malam</option>
                        <option>Pagi</option>
                        <option>Sore</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Row 3 -->
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Nomor Telepon</label>
                    <input type="text" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="0812xxxx">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Email</label>
                    <input type="email" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="budi@email.com">
                  </div>
                  
                  <!-- Row 4 -->
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Kata Sandi</label>
                    <input type="password" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="**********">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-gray-900 mb-2">Konfirmasi Kata Sandi</label>
                    <input type="password" class="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800" placeholder="**********">
                  </div>
                </div>
                
                <hr class="border-gray-100 my-8">

                <!-- Alert Information -->
                <div class="bg-orange-50 rounded-lg p-5 flex gap-4 items-start border border-orange-200 shadow-sm">
                  <Info class="w-5 h-5 text-orange-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 class="text-sm font-bold text-orange-800 mb-1">Informasi Penting</h4>
                    <p class="text-xs text-orange-800 leading-relaxed pr-4">Kartu RFID member akan langsung aktif secara otomatis sesaat setelah data berhasil disimpan ke dalam sistem.</p>
                  </div>
                </div>
                
                <hr class="border-gray-100 my-8">
                
                <!-- Form Actions -->
                <div class="flex justify-end gap-3">
                  <button @click="router.push('/members')" class="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    Batal
                  </button>
                  <button class="px-6 py-2.5 bg-blue-800 text-white rounded-md text-sm font-bold hover:bg-blue-900 transition-colors shadow-sm">
                    Simpan Data Member
                  </button>
                </div>

              </div>
            </div>
            
          </div>
        </div>

        <!-- Decorative Watermark Icon (Bottom Right) -->
        <div class="fixed -bottom-10 -right-10 pointer-events-none opacity-5 z-0">
          <IdCard class="w-96 h-96" />
        </div>

      </main>
    </div>
  </div>
</template>
