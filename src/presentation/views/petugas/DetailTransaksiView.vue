<script setup lang="ts">
import { 
  LayoutDashboard, History, Users, LogOut, Settings, 
  ArrowLeft, Wifi, Signal, Clock, Car, Info, 
  ArrowRight, Printer, Video, CreditCard, DoorOpen,
  TrendingUp, Search, Bell, Radio
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
          <!-- Active Histori -->
          <RouterLink to="/histori" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path.includes('/histori') ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><History class="w-5 h-5" /> Histori</RouterLink>
          <RouterLink to="/revenue" :class="['flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors', route.path === '/revenue' ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"><IconMoney class="w-5 h-5" /> Revenue</RouterLink>
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
      <!-- Custom Header -->
      <header class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
        
        <div class="flex items-center gap-4">
          <button @click="router.push('/histori')" class="text-[#0f4a8a] hover:bg-blue-50 p-2 rounded-lg transition-colors">
            <ArrowLeft class="w-6 h-6 stroke-[2.5]" />
          </button>
          <h2 class="text-[22px] font-extrabold text-[#0f4a8a] tracking-tight">Detail Transaksi: B 2841 SKZ</h2>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-5 text-slate-700">
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Radio class="w-5 h-5 stroke-[2]" /></button>
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Wifi class="w-5 h-5 stroke-[2]" /></button>
            <button class="hover:bg-gray-100 transition-colors p-2 rounded-full"><Clock class="w-5 h-5 stroke-[2]" /></button>
          </div>
          
          <div class="flex items-center pl-6 border-l border-gray-200">
            <div class="w-10 h-10 rounded-xl bg-blue-100 overflow-hidden border border-gray-200 flex shrink-0 shadow-sm">
               <img :src="profileImg" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto bg-[#F8FAFC]">
        <div class="w-full">
          
          <div class="grid grid-cols-12 gap-6">
            
            <!-- Left Column -->
            <div class="col-span-8 flex flex-col gap-6">
              
              <!-- Vehicle Captured Information -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
                <div class="bg-slate-50 border-b border-gray-200 px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Vehicle Captured Information</h3>
                </div>
                <div class="p-6 flex gap-6 items-center flex-1">
                  <!-- Car Image Placeholder -->
                  <div class="w-[400px] h-[240px] rounded-lg overflow-hidden flex items-center justify-center shrink-0 border border-gray-200 relative group bg-black">
                    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <!-- Plate Info -->
                  <div class="flex-1 flex flex-col justify-center pl-4">
                    <p class="text-xs font-bold text-gray-500 mb-1">Nomor Plat</p>
                    <h2 class="text-[52px] leading-[1.1] font-extrabold text-[#0f4a8a] mb-6 tracking-tight">B 2841<br>SKZ</h2>
                    
                    <div class="flex items-center gap-10">
                      <div>
                        <p class="text-[11px] font-bold text-gray-500 mb-1.5">Jenis<br>Kendaraan</p>
                        <div class="flex items-center gap-1.5 text-blue-800 font-bold text-sm">
                          <Car class="w-4 h-4" /> Mobil
                        </div>
                      </div>
                      <div>
                        <p class="text-[11px] font-bold text-gray-500 mb-1.5">Warna</p>
                        <p class="text-sm font-bold text-gray-900 mt-1">Putih</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Summary -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div class="bg-slate-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <h3 class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Payment Summary</h3>
                  <span class="bg-[#69ebb2] text-[#064e3b] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">Berhasil</span>
                </div>
                
                <div class="p-6 grid grid-cols-2 gap-6 items-start">
                  <!-- Cost Details -->
                  <div class="flex flex-col gap-4">
                    <div class="flex justify-between items-center text-sm mb-4">
                      <span class="text-gray-600 font-medium">Biaya Parkir</span>
                      <span class="font-bold text-gray-900">Rp 15.000</span>
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 mb-4"></div>
                    
                    <div class="flex justify-between items-center text-sm mb-4">
                      <span class="text-gray-600 font-medium">Denda / Lainnya</span>
                      <span class="font-bold text-gray-900">Rp 0</span>
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 mb-4"></div>
                    
                    <div class="flex justify-between items-center bg-[#f0f4ff] px-5 py-3.5 rounded-lg border border-[#dbeafe]">
                      <span class="text-[#1e3a8a] font-bold text-[14px]">Total Pembayaran</span>
                      <span class="font-bold text-[#1e3a8a] text-[15px]">Rp 15.000</span>
                    </div>
                  </div>

                  <!-- Method Details -->
                  <div class="bg-[#f8fafc] border border-blue-100 rounded-xl p-6 shadow-sm">
                    <div class="flex items-start gap-4 mb-6">
                      <div class="w-9 h-9 rounded-full bg-blue-100/50 text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-200">
                        <CreditCard class="w-[18px] h-[18px]" />
                      </div>
                      <div class="pt-0.5">
                        <p class="text-[11px] font-medium text-gray-500 mb-0.5">Metode Pembayaran</p>
                        <p class="text-[13px] font-bold text-gray-900">Cashless - Tap (e-Money)</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4 mb-7">
                      <div class="w-9 h-9 rounded-full bg-blue-100/50 text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-200">
                        <IconMoney class="w-[18px] h-[18px]" />
                      </div>
                      <div class="pt-0.5">
                        <p class="text-[11px] font-medium text-gray-500 mb-0.5">Ref Number</p>
                        <p class="text-[13px] font-bold text-gray-900 font-mono tracking-tight">TXN-9921-X82-01</p>
                      </div>
                    </div>
                    
                    <button class="w-full py-2.5 border-2 border-[#2563eb] hover:bg-blue-50 text-[#2563eb] rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors bg-white shadow-sm">
                      <Printer class="w-4 h-4" /> Cetak Ulang Tiket
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Column -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Parking Timeline -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[380px]">
                <div class="bg-slate-50 border-b border-gray-200 px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Parking Timeline</h3>
                </div>
                
                <div class="p-8 relative flex-1 ml-6">
                  <!-- Vertical Line -->
                  <div class="absolute left-[39px] top-12 bottom-12 w-0.5 bg-gray-200 z-0"></div>
                  
                  <!-- Entry Node -->
                  <div class="relative z-10 flex gap-4 mb-7">
                    <div class="w-8 h-8 rounded-full bg-green-300 text-green-900 flex items-center justify-center shrink-0">
                      <ArrowRight class="w-4 h-4" />
                    </div>
                    <div class="pt-0">
                      <p class="text-[10px] font-medium text-gray-500 mb-0.5">Entry Point - Gate 1 In</p>
                      <h4 class="text-lg font-bold text-gray-900 mb-0.5">12:10:01</h4>
                      <p class="text-[11px] font-medium text-gray-500">14 Okt 2023</p>
                    </div>
                  </div>
                  
                  <!-- Duration Node -->
                  <div class="relative z-10 pl-14 mb-7">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 text-[10px] font-bold">
                      <Clock class="w-3 h-3" /> Durasi: 02j 15m
                    </div>
                  </div>
                  
                  <!-- Exit Node -->
                  <div class="relative z-10 flex gap-4">
                    <div class="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <LogOut class="w-4 h-4" />
                    </div>
                    <div class="pt-0">
                      <p class="text-[10px] font-medium text-gray-500 mb-0.5">Exit Point - Gate 2 Out</p>
                      <h4 class="text-lg font-bold text-gray-900 mb-0.5">14:25:01</h4>
                      <p class="text-[11px] font-medium text-gray-500">14 Okt 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hardware Logs -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col flex-1">
                <div class="bg-slate-50 border-b border-gray-200 px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Hardware Performance Logs</h3>
                </div>
                
                <div class="p-5 flex flex-col gap-3">
                  <!-- Log Item 1 -->
                  <div class="bg-slate-50 border border-gray-200 rounded-lg p-3.5 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Video class="w-5 h-5 text-gray-500" />
                      <div>
                        <p class="text-[10px] text-gray-500 font-medium mb-0.5">Camera ID</p>
                        <p class="text-xs font-bold text-gray-900">CAM-G2-OUT-HD</p>
                      </div>
                    </div>
                    <div class="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>

                  <!-- Log Item 2 -->
                  <div class="bg-slate-50 border border-gray-200 rounded-lg p-3.5 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <CreditCard class="w-5 h-5 text-gray-500" />
                      <div>
                        <p class="text-[10px] text-gray-500 font-medium mb-0.5">RFID / Reader ID</p>
                        <p class="text-xs font-bold text-gray-900">RFD-00452-AC</p>
                      </div>
                    </div>
                    <div class="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>

                  <!-- Log Item 3 -->
                  <div class="bg-slate-50 border border-gray-200 rounded-lg p-3.5 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <DoorOpen class="w-5 h-5 text-gray-500" />
                      <div>
                        <p class="text-[10px] text-gray-500 font-medium mb-0.5">Gate Status</p>
                        <p class="text-xs font-bold text-green-700">SUCCESS_OPEN</p>
                      </div>
                    </div>
                    <div class="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  
                  <!-- Info Box -->
                  <div class="mt-4 bg-[#eff6ff] rounded-lg p-5 flex gap-3 items-start">
                    <Info class="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                    <p class="text-[11px] text-[#475569] leading-relaxed pr-2">Hardware processed the transaction in 842ms. All sensors within normal operational parameters.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>
