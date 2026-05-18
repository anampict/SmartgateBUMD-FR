<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, Settings2, Router as RouterIcon, History, Banknote, Users, 
  DoorOpen, LogOut, Radio, Wifi, Clock, Search, FileText, FileSpreadsheet, Eye, 
  ChevronLeft, ChevronRight
} from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const route = useRoute()
const router = useRouter()

// Dummy Data
const transactions = ref([
  { id: '#SG-88210', date: '14 Okt 2023', time: '08:30', plate: 'B 1234 GFE', type: 'Mobil', duration: '02j 15m', cost: 'Rp 15.000', status: 'Lunas' },
  { id: '#SG-88211', date: '14 Okt 2023', time: '09:12', plate: 'D 4567 XYZ', type: 'Motor', duration: '--', cost: '--', status: 'On-going' },
  { id: '#SG-88212', date: '14 Okt 2023', time: '10:05', plate: 'B 9901 KL', type: 'Mobil', duration: '00j 45m', cost: 'Rp 10.000', status: 'Lunas' },
  { id: '#SG-88213', date: '14 Okt 2023', time: '10:45', plate: 'F 2231 AA', type: 'Motor', duration: '01j 20m', cost: 'Rp 4.000', status: 'Lunas' },
  { id: '#SG-88214', date: '14 Okt 2023', time: '11:00', plate: 'B 7789 PO', type: 'Mobil', duration: '--', cost: '--', status: 'On-going' },
])

// Filters
const filterDate = ref('')
const filterPlate = ref('')
const filterType = ref('Semua Jenis')
const filterStatus = ref('Semua Status')

const resetFilters = () => {
  filterDate.value = ''
  filterPlate.value = ''
  filterType.value = 'Semua Jenis'
  filterStatus.value = 'Semua Status'
}

// Export functions
const exportToExcel = () => {
  const dataToExport = transactions.value.map(t => ({
    'ID Transaksi': t.id,
    'Waktu Masuk': `${t.date}, ${t.time}`,
    'Plat Nomor': t.plate,
    'Jenis Kendaraan': t.type,
    'Durasi': t.duration,
    'Biaya': t.cost,
    'Status': t.status
  }))
  
  const ws = XLSX.utils.json_to_sheet(dataToExport)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Histori")
  XLSX.writeFile(wb, "Histori_Transaksi.xlsx")
}

const exportToPDF = () => {
  const doc = new jsPDF()
  doc.text("Histori Transaksi SmartGate", 14, 15)
  
  const tableData = transactions.value.map(t => [
    t.id, 
    `${t.date}, ${t.time}`, 
    t.plate, 
    t.type, 
    t.duration, 
    t.cost, 
    t.status
  ])
  
  // @ts-ignore (jspdf-autotable extends jsPDF)
  doc.autoTable({
    startY: 20,
    head: [['ID Transaksi', 'Waktu Masuk', 'Plat Nomor', 'Jenis', 'Durasi', 'Biaya', 'Status']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [15, 74, 138] }
  })
  
  doc.save('Histori_Transaksi.pdf')
}
</script>

<template>
  <div class="min-h-screen bg-[#F8FAFC] flex text-gray-900 font-sans">
    <!-- Inline Sidebar -->
    <aside class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div class="p-6">
          <h1 class="text-xl font-bold text-[#003C90]">SmartGate BUMD</h1>
          <p class="text-xs text-gray-500 mt-1">Operator Lapangan</p>
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
      <div class="p-4 space-y-4">
        <button class="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm"><IconKey class="w-5 h-5" /> Buka Gate</button>
        <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Logout</button>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <!-- Inline Header -->
      <header class="h-20 bg-white/50 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-[#0f4a8a]">SmartGateBUMD</h2>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4 text-[#0f4a8a]"><Radio class="w-5 h-5" /><Wifi class="w-5 h-5" /><Clock class="w-5 h-5" /></div>
          <div class="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div class="text-right"><p class="text-sm font-bold text-gray-900">Admin Utama</p><p class="text-xs text-gray-500">Gate B-12</p></div>
            <div class="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border border-gray-200"><img :src="profileImg" alt="Profile" class="w-full h-full object-cover" /></div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
        <div class="max-w-6xl mx-auto min-w-[1000px]">
          
          <!-- Page Title -->
          <div class="mb-6">
            <h2 class="text-[22px] font-bold text-[#0f172a] tracking-tight">Histori Transaksi</h2>
            <p class="text-[14px] text-slate-500 mt-1">Kelola dan pantau seluruh catatan transaksi keluar masuk kendaraan.</p>
          </div>

          <!-- Filter Section -->
          <div class="bg-white rounded-t-xl border border-gray-200 p-6 mb-4 shadow-sm">
            <div class="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-1.5">Rentang Tanggal</label>
                <input type="date" v-model="filterDate" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="mm/dd/yyyy">
              </div>
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-1.5">Plat Nomor</label>
                <input type="text" v-model="filterPlate" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Contoh: B 1234 ABC">
              </div>
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-1.5">Jenis Kendaraan</label>
                <div class="relative">
                  <select v-model="filterType" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Semua Jenis</option>
                    <option>Mobil</option>
                    <option>Motor</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-[13px] font-bold text-gray-700 mb-1.5">Status</label>
                <div class="relative">
                  <select v-model="filterStatus" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Semua Status</option>
                    <option>Lunas</option>
                    <option>On-going</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <button class="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded text-[13px] font-medium flex items-center gap-2 transition-colors">
                  <Search class="w-4 h-4" /> Terapkan Filter
                </button>
                <button @click="resetFilters" class="text-[#0f4a8a] hover:underline text-[13px] font-bold">
                  Reset
                </button>
              </div>
              <div class="flex items-center gap-3">
                <button @click="exportToPDF" class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded text-[13px] font-medium flex items-center gap-2 transition-colors">
                  <FileText class="w-4 h-4 text-gray-500" /> Ekspor PDF
                </button>
                <button @click="exportToExcel" class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded text-[13px] font-medium flex items-center gap-2 transition-colors">
                  <FileSpreadsheet class="w-4 h-4 text-gray-500" /> Ekspor Excel
                </button>
              </div>
            </div>
          </div>

          <!-- Table Section -->
          <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-[#E7EEFF] text-gray-700 text-[13px]">
                  <th class="py-4 px-6 font-bold w-[12%] border-b border-gray-200">ID Transaksi</th>
                  <th class="py-4 px-6 font-bold w-[18%] border-b border-gray-200">Waktu Masuk</th>
                  <th class="py-4 px-6 font-bold w-[15%] border-b border-gray-200">Plat Nomor</th>
                  <th class="py-4 px-6 font-bold w-[10%] border-b border-gray-200">Jenis</th>
                  <th class="py-4 px-6 font-bold w-[10%] border-b border-gray-200">Durasi</th>
                  <th class="py-4 px-6 font-bold w-[15%] border-b border-gray-200">Biaya</th>
                  <th class="py-4 px-6 font-bold w-[12%] border-b border-gray-200">Status</th>
                  <th class="py-4 px-6 font-bold w-[8%] text-center border-b border-gray-200">Aksi</th>
                </tr>
              </thead>
              <tbody class="text-[13px]">
                <tr v-for="(tx, index) in transactions" :key="index" class="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" @click="router.push('/histori/detail')">
                  <td class="py-4 px-6 text-gray-600 font-medium">{{ tx.id }}</td>
                  <td class="py-4 px-6 text-gray-600">
                    {{ tx.date }},<br><span class="text-gray-500">{{ tx.time }}</span>
                  </td>
                  <td class="py-4 px-6 font-bold text-gray-900">{{ tx.plate }}</td>
                  <td class="py-4 px-6 text-gray-600 font-medium">{{ tx.type }}</td>
                  <td class="py-4 px-6 text-gray-600">{{ tx.duration }}</td>
                  <td class="py-4 px-6 font-bold text-gray-900">{{ tx.cost }}</td>
                  <td class="py-4 px-6">
                    <span v-if="tx.status === 'Lunas'" class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#69ebb2] text-[#064e3b] text-[11px] font-bold">
                      Lunas
                    </span>
                    <span v-else class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#d0d7ff] text-[#4b5563] text-[11px] font-bold">
                      On-going
                    </span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <button class="text-[#0f4a8a] hover:text-[#0a316b] transition-colors p-1.5 rounded-md hover:bg-blue-50">
                      <Eye class="w-5 h-5 stroke-[2]" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <!-- Pagination -->
            <div class="px-6 py-4 flex items-center justify-between border-t border-gray-100 bg-white">
              <span class="text-[13px] text-gray-500 font-medium">Menampilkan <span class="font-bold text-gray-700">1 - 5</span> dari <span class="font-bold text-gray-700">1.240</span> entri</span>
              <div class="flex items-center gap-1">
                <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors">
                  <ChevronLeft class="w-4 h-4" />
                </button>
                <button class="w-8 h-8 flex items-center justify-center rounded bg-blue-700 text-white font-bold text-[13px]">1</button>
                <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 text-[13px] transition-colors">2</button>
                <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 text-[13px] transition-colors">3</button>
                <span class="w-8 h-8 flex items-center justify-center text-gray-500 text-[13px]">...</span>
                <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 text-[13px] transition-colors">248</button>
                <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors">
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
