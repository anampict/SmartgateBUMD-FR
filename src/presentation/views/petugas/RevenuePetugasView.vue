<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, History, Users, DoorOpen, LogOut, 
  Search, Bell, HelpCircle, Settings, RotateCcw, 
  Bike, Car, Truck, Bed, IdCard, Menu, QrCode, CreditCard, 
  Nfc, TrendingUp, Edit, Check, AlignRight
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import profileImg from '@/assets/gambar/profilepetugas.png'

import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'

const route = useRoute()

// Dummy Data untuk Tabel Tarif
const tariffs = ref([
  { id: 1, category: 'Motor', base: 'Rp 2.000', progressive: 'Rp 1.000', max: 'Rp 10.000', icon: Bike },
  { id: 2, category: 'Mobil', base: 'Rp 5.000', progressive: 'Rp 3.000', max: 'Rp 35.000', icon: Car },
  { id: 3, category: 'Truck/Bus', base: 'Rp 10.000', progressive: 'Rp 5.000', max: 'Rp 60.000', icon: Truck },
  { id: 4, category: 'Inap (Flat)', base: 'Rp 50.000', progressive: 'N/A', max: 'N/A', icon: Bed },
  { id: 5, category: 'Member', base: 'Rp 0', progressive: 'Rp 0', max: 'Berlangganan', icon: IdCard },
])

// Toggles for Cashless
const qrisActive = ref(true)
const emoneyActive = ref(true)
const rfidActive = ref(false)

// Quick Config
const quickCategory = ref('Mobil Pribadi')
const quickTariff = ref('5000')
const quickMax = ref('35000')
</script>

<template>
  <div class="min-h-screen bg-[#F8FAFC] flex text-gray-900 font-sans">
    <!-- Inline Sidebar Custom for Revenue/Admin -->
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

    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <!-- Custom Header with Search -->
      <header class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        <div class="flex-1 max-w-xl">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search class="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" class="block w-full pl-11 pr-4 py-2.5 bg-[#F8FAFC] border-none rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4a8a]/20 transition-all" placeholder="Cari data atau laporan...">
          </div>
        </div>
        <div class="flex items-center gap-5">
          <div class="flex items-center gap-3 text-gray-400">
            <button class="hover:text-gray-600 transition-colors p-1.5"><Bell class="w-[22px] h-[22px]" /></button>
            <button class="hover:text-gray-600 transition-colors p-1.5"><HelpCircle class="w-[22px] h-[22px]" /></button>
          </div>
          <div class="flex items-center gap-3 pl-5 border-l border-gray-200">
            <div class="text-right"><p class="text-[13px] font-bold text-gray-900 leading-tight">Admin Utama</p><p class="text-[10px] text-gray-500 font-medium tracking-wide uppercase">SUPERUSER</p></div>
            <div class="w-9 h-9 rounded-full bg-blue-100 overflow-hidden border border-gray-200"><img :src="profileImg" alt="Profile" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
        <div class="max-w-6xl mx-auto min-w-[1000px]">
          
          <!-- Page Header -->
          <div class="flex justify-between items-start mb-8">
            <div>
              <h2 class="text-2xl font-bold text-[#0f172a] tracking-tight">Manajemen Tarif & Cashless</h2>
              <p class="text-[14px] text-slate-500 mt-1">Konfigurasi tarif parkir operasional dan integrasi sistem pembayaran digital.</p>
            </div>
            <button class="bg-[#e0e7ff] text-[#1e40af] hover:bg-[#c7d2fe] px-4 py-2.5 rounded-lg text-[13px] font-bold flex items-center gap-2 transition-colors">
              <RotateCcw class="w-4 h-4 stroke-[2.5]" /> Riwayat Perubahan
            </button>
          </div>

          <!-- Main Grid (Top part) -->
          <div class="grid grid-cols-12 gap-6 mb-6">
            
            <!-- Left Column: Tabel Tarif -->
            <div class="col-span-8">
              <div class="bg-white rounded-[14px] border border-gray-200 overflow-hidden shadow-sm h-full">
                <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
                  <h3 class="text-[13px] font-bold text-[#1e40af] uppercase tracking-wider">DAFTAR TARIF KENDARAAN</h3>
                  <button class="text-[#1e40af] hover:underline text-[13px] font-semibold flex items-center gap-1.5">
                    <Edit class="w-3.5 h-3.5" /> Edit Masal
                  </button>
                </div>
                <div class="p-0">
                  <table class="w-full text-left">
                    <thead>
                      <tr class="text-gray-500 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
                        <th class="py-4 px-6 w-[25%]">Kategori</th>
                        <th class="py-4 px-6 w-[25%] leading-tight">Tarif Dasar<br><span class="font-normal">(1 Jam)</span></th>
                        <th class="py-4 px-6 w-[20%] leading-tight">Progresif<br><span class="font-normal">/Jam</span></th>
                        <th class="py-4 px-6 w-[20%] leading-tight">Maksimal<br><span class="font-normal">(24j)</span></th>
                        <th class="py-4 px-6 w-[10%] text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="text-[13px]">
                      <tr v-for="t in tariffs" :key="t.id" class="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td class="py-5 px-6">
                          <div class="flex items-center gap-3">
                            <component :is="t.icon" class="w-5 h-5 text-[#1e40af]" />
                            <span class="font-semibold text-gray-700">{{ t.category }}</span>
                          </div>
                        </td>
                        <td class="py-5 px-6 font-medium text-gray-900">{{ t.base }}</td>
                        <td class="py-5 px-6">
                          <span v-if="t.progressive === 'N/A'" class="italic text-gray-400">N/A</span>
                          <span v-else class="text-gray-600">{{ t.progressive }}</span>
                        </td>
                        <td class="py-5 px-6">
                          <span v-if="t.max === 'N/A'" class="italic text-gray-400">N/A</span>
                          <span v-else class="text-gray-600">{{ t.max }}</span>
                        </td>
                        <td class="py-5 px-6 text-center">
                          <button class="text-gray-400 hover:text-gray-700 transition-colors p-1.5">
                            <AlignRight class="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Right Column: Cashless & Revenue -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Cashless Card -->
              <div class="bg-white rounded-[14px] border border-gray-200 p-6 shadow-sm">
                <div class="flex justify-between items-center mb-6">
                  <h3 class="text-[13px] font-bold text-[#1e40af] uppercase tracking-wider">INTEGRASI CASHLESS</h3>
                  <span class="bg-[#4ade80] text-[#064e3b] px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide">AKTIF</span>
                </div>

                <div class="space-y-3 mb-6">
                  <!-- QRIS Item -->
                  <div class="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white shadow-sm">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[#1e40af]">
                        <QrCode class="w-5 h-5" />
                      </div>
                      <div>
                        <p class="text-[13px] font-bold text-gray-900 leading-tight">QRIS Dinamis</p>
                        <p class="text-[11px] text-gray-400 mt-0.5">Terhubung [Bank Mandiri]</p>
                      </div>
                    </div>
                    <!-- Toggle Switch -->
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="qrisActive" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#10b981] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-full shadow-inner"></div>
                    </label>
                  </div>

                  <!-- E-Money Item -->
                  <div class="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white shadow-sm">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[#1e40af]">
                        <CreditCard class="w-5 h-5" />
                      </div>
                      <div>
                        <p class="text-[13px] font-bold text-gray-900 leading-tight">E-Money Reader</p>
                        <p class="text-[11px] text-gray-400 mt-0.5">Sam Reader v4.2</p>
                      </div>
                    </div>
                    <!-- Toggle Switch -->
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="emoneyActive" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#10b981] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-full shadow-inner"></div>
                    </label>
                  </div>

                  <!-- RFID Item -->
                  <div class="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white shadow-sm">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                        <Nfc class="w-5 h-5" />
                      </div>
                      <div>
                        <p class="text-[13px] font-bold text-gray-900 leading-tight">RFID Saldo System</p>
                        <p class="text-[11px] text-gray-400 mt-0.5">Internal Server Only</p>
                      </div>
                    </div>
                    <!-- Toggle Switch -->
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="rfidActive" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#10b981] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-full shadow-inner"></div>
                    </label>
                  </div>
                </div>

                <button class="w-full bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#1e40af] py-2.5 rounded-lg text-[13px] font-bold transition-colors">
                  Pengaturan Gateway
                </button>
              </div>

              <!-- Revenue Stats Card -->
              <div class="flex-1 relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-[14px] p-6 text-white overflow-hidden shadow-md flex flex-col justify-center">
                <!-- Decorative background elements -->
                <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                  <div class="w-32 h-32 rounded-full border-[20px] border-white/20"></div>
                </div>
                
                <h3 class="text-[10px] font-bold uppercase tracking-wider text-blue-100/80 mb-2 relative z-10">PENDAPATAN CASHLESS HARI INI</h3>
                <div class="text-[28px] font-bold tracking-tight mb-3 relative z-10">Rp 12.450.000</div>
                <div class="flex items-center gap-1.5 text-[12px] font-medium text-[#4ade80] relative z-10">
                  <TrendingUp class="w-4 h-4" />
                  <span>+14% dari kemarin</span>
                </div>
              </div>

            </div>
          </div>
          
          <!-- Bottom Area: Quick Config Full Width -->
          <div class="bg-[#F0F3FF] border border-[#e2e8f0] rounded-[14px] p-8 shadow-sm">
            <div class="flex gap-4 items-start mb-6">
              <div class="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 text-[#1e40af] flex items-center justify-center shrink-0 shadow-sm">
                <Edit class="w-5 h-5 stroke-[2]" />
              </div>
              <div class="pt-0.5">
                <h3 class="text-[17px] font-bold text-gray-900">Konfigurasi Tarif Cepat</h3>
                <p class="text-[13px] text-gray-500 mt-0.5">Pilih kategori untuk memperbarui tarif secara langsung.</p>
              </div>
            </div>
            
            <div class="grid grid-cols-4 gap-6 items-end">
              <div>
                <label class="block text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-2">Kategori Kendaraan</label>
                <div class="relative">
                  <select v-model="quickCategory" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af]">
                    <option>Mobil Pribadi</option>
                    <option>Motor</option>
                    <option>Truck/Bus</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-2">Tarif Per Jam (Rp)</label>
                <input type="text" v-model="quickTariff" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af]">
              </div>
              <div>
                <label class="block text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-2">Batas Maksimal (Rp)</label>
                <input type="text" v-model="quickMax" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af]">
              </div>
              <div>
                <button class="w-full h-[46px] bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-[14px] font-bold transition-colors shadow-sm">
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>
