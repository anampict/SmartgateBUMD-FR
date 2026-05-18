<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Users, History, Settings, LogOut,
  Search, Bell, HelpCircle, Edit, QrCode, CreditCard, Radio,
  Bike, Car, Truck, BedDouble, ChevronDown, Check
} from '@lucide/vue'
import { useRoute } from 'vue-router'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconReports from '@/presentation/components/admin/IconReports.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import { dummyAdminRevenue } from '@/data/sources/dummy-admin-revenue'

const route = useRoute()
const data = ref(dummyAdminRevenue)

// State for quick config form
const selectedCategory = ref('Mobil Pribadi')
const quickTariff = ref('5000')
const quickMax = ref('35000')

const formatRupiah = (value: number | null | string) => {
  if (value === null || value === 'N/A') return 'N/A'
  if (value === 'Berlangganan') return 'Berlangganan'
  if (typeof value === 'number') return `Rp ${value.toLocaleString('id-ID')}`
  return value
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Bike': return Bike
    case 'Car': return Car
    case 'Truck': return Truck
    case 'Bed': return BedDouble
    case 'CreditCard': return CreditCard
    default: return Car
  }
}

const getCashlessIcon = (iconName: string) => {
  switch (iconName) {
    case 'QrCode': return QrCode
    case 'CreditCard': return CreditCard
    case 'Wifi': return Radio
    default: return QrCode
  }
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
            <input type="text" placeholder="Cari data atau laporan..." 
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
              <p class="text-[11px] text-gray-500 uppercase tracking-wider font-medium">SUPERUSER</p>
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
          <div>
            <h2 class="text-[26px] font-bold text-[#1e293b]">Manajemen Tarif & Cashless</h2>
            <p class="text-[14px] text-slate-500 mt-1 max-w-2xl">Konfigurasi tarif parkir operasional dan integrasi sistem pembayaran digital.</p>
          </div>

          <!-- Main Layout Grid -->
          <div class="grid grid-cols-12 gap-6 mt-2">
            
            <!-- Left Column (Tariff Table) -->
            <div class="col-span-8 flex flex-col gap-6">
              
              <!-- Table Card -->
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
                <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-[#F0F3FF]">
                  <h3 class="text-[12px] font-bold text-[#0f4a8a] tracking-wider uppercase">DAFTAR TARIF KENDARAAN</h3>
                  <button class="flex items-center gap-1.5 text-[12px] font-bold text-[#155baf] hover:text-[#0f4a8a] transition-colors">
                    <Edit class="w-3.5 h-3.5" /> Edit Masal
                  </button>
                </div>
                
                <div class="overflow-x-auto">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="border-b border-gray-100">
                        <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-1/4">Kategori</th>
                        <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-1/4">Tarif Dasar<br><span class="text-gray-400 font-medium">(1 Jam)</span></th>
                        <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-1/4">Progresif<br><span class="text-gray-400 font-medium">/Jam</span></th>
                        <th class="px-6 py-4 text-[12px] font-bold text-slate-700 w-1/4">Maksimal<br><span class="text-gray-400 font-medium">(24j)</span></th>
                        <th class="px-6 py-4 text-[12px] font-bold text-slate-700 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="tariff in data.tariffs" :key="tariff.id" class="border-b border-gray-50 hover:bg-[#f8fafc] transition-colors group">
                        <td class="px-6 py-5">
                          <div class="flex items-center gap-3">
                            <component :is="getCategoryIcon(tariff.icon)" class="w-[18px] h-[18px] text-[#155baf]" />
                            <span class="text-[13px] font-medium text-slate-700">{{ tariff.category }}</span>
                          </div>
                        </td>
                        <td class="px-6 py-5 text-[13px] text-slate-600 font-medium">
                          {{ formatRupiah(tariff.baseTariff) }}
                        </td>
                        <td class="px-6 py-5 text-[13px] text-slate-600 font-medium">
                          {{ formatRupiah(tariff.progressiveTariff) }}
                        </td>
                        <td class="px-6 py-5 text-[13px] text-slate-600 font-medium">
                          {{ formatRupiah(tariff.maxTariff) }}
                        </td>
                        <td class="px-6 py-5 text-center">
                          <button class="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#155baf] hover:bg-blue-50 transition-colors mx-auto">
                            <Edit class="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            <!-- Right Column (Cashless & Revenue) -->
            <div class="col-span-4 flex flex-col gap-6">
              
              <!-- Integrasi Cashless -->
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
                <div class="p-5 flex items-center justify-between border-b border-gray-100">
                  <h3 class="text-[12px] font-bold text-[#0f4a8a] tracking-wider uppercase">INTEGRASI CASHLESS</h3>
                  <span class="px-2 py-0.5 bg-emerald-300 text-emerald-900 text-[9px] font-bold uppercase rounded-full tracking-wider">AKTIF</span>
                </div>
                
                <div class="p-5 flex flex-col gap-4">
                  <!-- Toggles -->
                  <div v-for="integration in data.cashlessIntegrations" :key="integration.id" 
                       class="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-slate-50 border border-gray-100 flex items-center justify-center text-[#155baf]">
                        <component :is="getCashlessIcon(integration.icon)" class="w-5 h-5" />
                      </div>
                      <div>
                        <h4 class="text-[12px] font-bold text-slate-800">{{ integration.name }}</h4>
                        <p class="text-[10px] text-slate-500 mt-0.5">{{ integration.description }}</p>
                      </div>
                    </div>
                    
                    <!-- Custom Toggle Switch -->
                    <button @click="integration.active = !integration.active"
                            class="w-10 h-6 rounded-full relative transition-colors duration-300 ease-in-out focus:outline-none"
                            :class="integration.active ? 'bg-emerald-400' : 'bg-gray-300'">
                      <div class="w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-transform duration-300 ease-in-out"
                           :class="integration.active ? 'transform translate-x-5' : 'transform translate-x-1'"></div>
                    </button>
                  </div>
                  
                  <!-- Button Settings -->
                  <button class="w-full mt-2 py-2.5 bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#155baf] rounded-lg text-[13px] font-bold transition-colors">
                    Pengaturan Gateway
                  </button>
                </div>
              </div>

              <!-- Pendapatan Cashless Card -->
              <div class="bg-[#155baf] rounded-xl shadow-sm p-6 text-white relative overflow-hidden">
                <div class="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                  <IconMoney class="w-32 h-32" />
                </div>
                <div class="relative z-10">
                  <p class="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-2">PENDAPATAN CASHLESS HARI INI</p>
                  <h3 class="text-[26px] font-bold mb-3 tracking-tight">{{ formatRupiah(data.todayRevenue) }}</h3>
                  <div class="flex items-center gap-1.5 text-[12px] font-bold text-emerald-300">
                    <TrendingUp class="w-4 h-4" /> {{ data.todayRevenueTrend }} dari kemarin
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- Quick Config Bar -->
          <div class="bg-[#F0F3FF] border border-gray-200 rounded-xl p-6 flex flex-col gap-5 mt-2">
            
            <!-- Top Info -->
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                <Edit class="w-5 h-5 text-[#0f4a8a]" />
              </div>
              <div>
                <h4 class="text-[13px] font-bold text-slate-800">Konfigurasi Tarif Cepat</h4>
                <p class="text-[12px] text-slate-500 mt-0.5">Pilih kategori untuk memperbarui tarif secara langsung.</p>
              </div>
            </div>

            <!-- Form -->
            <div class="flex flex-col md:flex-row items-end gap-4 w-full">
              <div class="flex-1 w-full">
                <label class="block text-[12px] text-slate-600 mb-1.5">Kategori Kendaraan</label>
                <div class="relative">
                  <select v-model="selectedCategory" class="w-full appearance-none bg-white border border-gray-300 text-slate-700 text-[13px] rounded-lg focus:ring-[#155baf] focus:border-[#155baf] block px-4 py-2.5 cursor-pointer outline-none transition-colors">
                    <option v-for="t in data.tariffs" :key="t.id" :value="t.category">{{ t.category }}</option>
                  </select>
                  <ChevronDown class="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div class="flex-1 w-full">
                <label class="block text-[12px] text-slate-600 mb-1.5">Tarif Per Jam (Rp)</label>
                <input type="number" v-model="quickTariff" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-lg focus:ring-[#155baf] focus:border-[#155baf] block px-4 py-2.5 outline-none transition-colors" />
              </div>
              <div class="flex-1 w-full">
                <label class="block text-[12px] text-slate-600 mb-1.5">Batas Maksimal (Rp)</label>
                <input type="number" v-model="quickMax" class="w-full bg-white border border-gray-300 text-slate-700 text-[13px] rounded-lg focus:ring-[#155baf] focus:border-[#155baf] block px-4 py-2.5 outline-none transition-colors" />
              </div>
              <div class="shrink-0">
                <button class="bg-[#0f4a8a] hover:bg-[#0c3a6b] text-white text-[13px] font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
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
