<script setup lang="ts">
import { 
  LayoutDashboard, History, Users, LogOut, Settings, 
  ArrowLeft, Wifi, Signal, Clock, Car, Info, 
  ArrowRight, Printer, Video, CreditCard, DoorOpen,
  TrendingUp, Search, Bell, Radio, Receipt
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'

import { dummyTransactionDetail } from '@/data/sources/dummy-transaction-detail'

const route = useRoute()
const router = useRouter()

const transaction = ref(dummyTransactionDetail)

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value).replace('Rp', 'Rp ')
}

const getPlateNumberHtml = (plate: string) => {
  const parts = plate.split(' ')
  if (parts.length >= 3) {
    return `${parts[0]} ${parts[1]}<br>${parts[2]}`
  }
  return plate
}
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
          <h2 class="text-[22px] font-extrabold text-[#0f4a8a] tracking-tight">Detail Transaksi: {{ transaction.vehicle.plateNumber }}</h2>
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
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div class="bg-[#eef2ff] border-b border-[#dbeafe] px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-700 tracking-wider uppercase">Vehicle Captured Information</h3>
                </div>
                <div class="p-6 flex gap-6 items-center flex-1">
                  <!-- Car Image Placeholder -->
                  <div class="w-[400px] h-[240px] rounded-lg overflow-hidden flex items-center justify-center shrink-0 border border-gray-200 relative group bg-black">
                    <img :src="transaction.vehicle.imagePlaceholderUrl" alt="Car" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <!-- Plate Info -->
                  <div class="flex-1 flex flex-col justify-center pl-4">
                    <p class="text-xs font-bold text-gray-500 mb-1">Nomor Plat</p>
                    <h2 class="text-[52px] leading-[1.1] font-extrabold text-[#0f4a8a] mb-6 tracking-tight" v-html="getPlateNumberHtml(transaction.vehicle.plateNumber)"></h2>
                    
                    <div class="flex items-center gap-10">
                      <div>
                        <p class="text-[11px] font-bold text-gray-500 mb-1.5">Jenis<br>Kendaraan</p>
                        <div class="flex items-center gap-1.5 text-blue-800 font-bold text-sm">
                          <Car class="w-4 h-4" /> {{ transaction.vehicle.type }}
                        </div>
                      </div>
                      <div>
                        <p class="text-[11px] font-bold text-gray-500 mb-1.5">Warna</p>
                        <p class="text-sm font-bold text-gray-900 mt-1">{{ transaction.vehicle.color }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Summary -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div class="bg-[#eef2ff] border-b border-[#dbeafe] px-6 py-4 flex items-center justify-between">
                  <h3 class="text-[12px] font-bold text-slate-800 tracking-wide">PAyMENT SUMMARy</h3>
                  <span 
                    class="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm"
                    :class="{
                      'bg-[#69ebb2] text-[#064e3b]': transaction.payment.status === 'Berhasil',
                      'bg-red-200 text-red-900': transaction.payment.status === 'Gagal',
                      'bg-orange-200 text-orange-900': transaction.payment.status === 'Pending',
                    }"
                  >{{ transaction.payment.status }}</span>
                </div>
                
                <div class="p-6 grid grid-cols-5 gap-8 items-start">
                  <!-- Cost Details -->
                  <div class="col-span-3 flex flex-col mt-1">
                    <div class="flex justify-between items-center text-[15px] pb-3">
                      <span class="text-gray-600 font-medium">Biaya Parkir</span>
                      <span class="font-bold text-gray-900">{{ formatRupiah(transaction.payment.biayaParkir) }}</span>
                    </div>
                    
                    <div class="w-full h-px bg-gray-100 mb-3"></div>
                    
                    <div class="flex justify-between items-center text-[15px] pb-3">
                      <span class="text-gray-600 font-medium">Denda / Lainnya</span>
                      <span class="font-bold text-gray-900">{{ formatRupiah(transaction.payment.dendaLainnya) }}</span>
                    </div>
                    
                    <div class="w-full h-px bg-gray-100 mb-4"></div>
                    
                    <div class="flex justify-between items-center bg-[#f0f4ff] px-5 py-4 rounded-lg">
                      <span class="text-[#1e3a8a] font-bold text-[15px]">Total Pembayaran</span>
                      <span class="font-bold text-[#1e3a8a] text-[16px]">{{ formatRupiah(transaction.payment.totalPembayaran) }}</span>
                    </div>
                  </div>

                  <!-- Method Details -->
                  <div class="col-span-2 bg-[#f0f4ff] border border-[#dbeafe] rounded-xl p-5">
                    <div class="flex items-start gap-4 mb-6">
                      <div class="w-9 h-9 rounded-lg bg-[#dbeafe] text-[#1e3a8a] flex items-center justify-center shrink-0">
                        <Radio class="w-[18px] h-[18px]" />
                      </div>
                      <div class="pt-0.5">
                        <p class="text-[11px] font-medium text-gray-500 mb-0.5">Metode Pembayaran</p>
                        <p class="text-[13px] font-bold text-gray-900">{{ transaction.payment.metodePembayaran }}</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4 mb-7">
                      <div class="w-9 h-9 rounded-lg bg-[#dbeafe] text-[#1e3a8a] flex items-center justify-center shrink-0">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]">
                          <path d="M3 20C2.16667 20 1.45833 19.7083 0.875 19.125C0.291667 18.5417 0 17.8333 0 17V14H3V0L4.5 1.5L6 0L7.5 1.5L9 0L10.5 1.5L12 0L13.5 1.5L15 0L16.5 1.5L18 0V17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20H3ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17V3H5V14H14V17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM6 7V5H12V7H6ZM6 10V8H12V10H6ZM14 7C13.7167 7 13.4792 6.90417 13.2875 6.7125C13.0958 6.52083 13 6.28333 13 6C13 5.71667 13.0958 5.47917 13.2875 5.2875C13.4792 5.09583 13.7167 5 14 5C14.2833 5 14.5208 5.09583 14.7125 5.2875C14.9042 5.47917 15 5.71667 15 6C15 6.28333 14.9042 6.52083 14.7125 6.7125C14.5208 6.90417 14.2833 7 14 7ZM14 10C13.7167 10 13.4792 9.90417 13.2875 9.7125C13.0958 9.52083 13 9.28333 13 9C13 8.71667 13.0958 8.47917 13.2875 8.2875C13.4792 8.09583 13.7167 8 14 8C14.2833 8 14.5208 8.09583 14.7125 8.2875C14.9042 8.47917 15 8.71667 15 9C15 9.28333 14.9042 9.52083 14.7125 9.7125C14.5208 9.90417 14.2833 10 14 10ZM3 18H12V16H2V17C2 17.2833 2.09583 17.5208 2.2875 17.7125C2.47917 17.9042 2.71667 18 3 18ZM2 18C2 18 2 17.9042 2 17.7125C2 17.5208 2 17.2833 2 17V16V18Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div class="pt-0.5">
                        <p class="text-[11px] font-medium text-gray-500 mb-0.5">Ref Number</p>
                        <p class="text-[13px] font-bold text-gray-900 font-mono tracking-tight">{{ transaction.payment.refNumber }}</p>
                      </div>
                    </div>
                    
                    <button class="w-full py-2.5 border-[1.5px] border-[#1e3a8a] hover:bg-[#eef2ff] text-[#1e3a8a] rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors bg-white shadow-sm">
                      <Printer class="w-4 h-4 stroke-[2.5]" /> Cetak Ulang Tiket
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Column -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Parking Timeline -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[380px]">
                <div class="bg-[#eef2ff] border-b border-[#dbeafe] px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-700 tracking-wider uppercase">Parking Timeline</h3>
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
                      <p class="text-[10px] font-medium text-gray-500 mb-0.5">Entry Point - {{ transaction.timeline.entryGate }}</p>
                      <h4 class="text-lg font-bold text-gray-900 mb-0.5">{{ transaction.timeline.entryTime }}</h4>
                      <p class="text-[11px] font-medium text-gray-500">{{ transaction.timeline.entryDate }}</p>
                    </div>
                  </div>
                  
                  <!-- Duration Node -->
                  <div class="relative z-10 pl-14 mb-7">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f0f4ff] text-[#1e3a8a] rounded-full border border-[#dbeafe] text-[10px] font-bold">
                      <Clock class="w-3 h-3" /> Durasi: {{ transaction.timeline.duration }}
                    </div>
                  </div>
                  
                  <!-- Exit Node -->
                  <div class="relative z-10 flex gap-4">
                    <div class="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <LogOut class="w-4 h-4" />
                    </div>
                    <div class="pt-0">
                      <p class="text-[10px] font-medium text-gray-500 mb-0.5">Exit Point - {{ transaction.timeline.exitGate }}</p>
                      <h4 class="text-lg font-bold text-gray-900 mb-0.5">{{ transaction.timeline.exitTime }}</h4>
                      <p class="text-[11px] font-medium text-gray-500">{{ transaction.timeline.exitDate }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hardware Logs -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col flex-1">
                <div class="bg-[#eef2ff] border-b border-[#dbeafe] px-6 py-4">
                  <h3 class="text-[11px] font-bold text-slate-700 tracking-wider uppercase">Hardware Performance Logs</h3>
                </div>
                
                <div class="p-5 flex flex-col gap-3">
                  <!-- Log Items dynamically rendered -->
                  <div v-for="log in transaction.hardware.logs" :key="log.id" 
                       class="bg-slate-50 border border-gray-200 rounded-lg p-3.5 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <!-- Dynamic Icon based on type -->
                      <component :is="log.type === 'camera' ? Video : log.type === 'rfid' ? CreditCard : DoorOpen" 
                                class="w-5 h-5 text-gray-500" />
                      <div>
                        <p class="text-[10px] text-gray-500 font-medium mb-0.5">{{ log.label }}</p>
                        <p class="text-xs font-bold" 
                           :class="{'text-gray-900': log.status !== 'success' || log.type !== 'gate', 'text-green-700': log.type === 'gate' && log.status === 'success'}">
                          {{ log.value }}
                        </p>
                      </div>
                    </div>
                    <div class="w-2 h-2 rounded-full" 
                         :class="{'bg-green-600': log.status === 'success', 'bg-red-600': log.status === 'error', 'bg-orange-500': log.status === 'warning'}">
                    </div>
                  </div>
                  
                  <!-- Info Box -->
                  <div class="mt-4 bg-[#eff6ff] rounded-lg p-5 flex gap-3 items-start">
                    <Info class="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                    <p class="text-[11px] text-[#475569] leading-relaxed pr-2">{{ transaction.hardware.statusMessage }}</p>
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
