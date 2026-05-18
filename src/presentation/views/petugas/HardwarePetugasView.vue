<script setup lang="ts">
import { Printer, RadioReceiver, Globe, LayoutDashboard, Settings2, Router as RouterIcon, History, Banknote, Users, DoorOpen, LogOut, Radio, Wifi, Clock } from '@lucide/vue'
import { useRoute } from 'vue-router'
import IconRemote from '@/presentation/components/petugas/IconRemote.vue'
import IconRouter from '@/presentation/components/petugas/IconRouter.vue'
import IconMoney from '@/presentation/components/petugas/IconMoney.vue'
import IconKey from '@/presentation/components/petugas/IconKey.vue'
import profileImg from '@/assets/gambar/profilepetugas.png'

import DeviceStatusCard from '@/presentation/components/petugas/DeviceStatusCard.vue'
import CameraMonitorCard from '@/presentation/components/petugas/CameraMonitorCard.vue'
import ServoControlCard from '@/presentation/components/petugas/ServoControlCard.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-[#E7EEFF] flex text-gray-900">
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
        <button class="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"><IconKey class="w-5 h-5" /> Buka Gate</button>
        <button class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"><LogOut class="w-5 h-5" /> Logout</button>
      </div>
    </aside>

    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <!-- Inline Header -->
      <header class="h-20 bg-white/50 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-[#0f4a8a]">SmartGateBUMD</h2>
          <!-- Note: Location hidden on Hardware -->
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
    <div class="flex flex-col gap-6 w-full max-w-6xl mx-auto min-w-[1000px]">
      
      <!-- Header Area -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h2 class="text-[22px] font-bold text-[#1e293b]">Monitoring Hardware</h2>
          <p class="text-[14px] text-slate-500 mt-1">Status infrastruktur real-time di gerbang masuk utama.</p>
        </div>
        <div class="bg-[#69ebb2] text-[#064e3b] rounded-full px-4 py-1.5 text-[13px] font-bold flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-[#064e3b]" />
          Semua Sistem Normal
        </div>
      </div>

      <!-- Device Status Cards -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Printer -->
        <DeviceStatusCard 
          :icon="Printer"
          status="ONLINE"
          statusColor="bg-[#e6fcf5] text-[#059669]"
          title="PRINTER TIKET THERMAL"
          subtitle="Epson TM-T88VI - Unit 01"
          buttonText="Restart Perangkat"
        >
          <div class="flex items-center justify-between text-[12px] text-[#0f172a] mb-2 font-medium">
            <span>Sisa Kertas</span>
            <span>75%</span>
          </div>
          <div class="w-full bg-[#e2e8f0] rounded-full h-[6px]">
            <div class="bg-[#1e40af] h-[6px] rounded-full" style="width: 75%"></div>
          </div>
        </DeviceStatusCard>

        <!-- RFID -->
        <DeviceStatusCard 
          status="READY"
          statusColor="bg-[#e6fcf5] text-[#059669]"
          title="RFID READER"
          subtitle="HID iCLASS SE - Multi-ISO"
          buttonText="Restart Perangkat"
        >
          <template #icon>
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.4 12.65C6.55 12.25 6.67083 11.8292 6.7625 11.3875C6.85417 10.9458 6.9 10.4833 6.9 10C6.9 9.51667 6.85417 9.05417 6.7625 8.6125C6.67083 8.17083 6.55 7.75 6.4 7.35L4.55 8.1C4.65 8.4 4.73333 8.70833 4.8 9.025C4.86667 9.34167 4.9 9.66667 4.9 10C4.9 10.3333 4.86667 10.6583 4.8 10.975C4.73333 11.2917 4.65 11.6 4.55 11.9L6.4 12.65ZM9.6 14C9.88333 13.3667 10.0875 12.7167 10.2125 12.05C10.3375 11.3833 10.4 10.7 10.4 10C10.4 9.3 10.3375 8.61667 10.2125 7.95C10.0875 7.28333 9.88333 6.63333 9.6 6L7.75 6.75C7.98333 7.25 8.15 7.77083 8.25 8.3125C8.35 8.85417 8.4 9.41667 8.4 10C8.4 10.5833 8.35 11.1458 8.25 11.6875C8.15 12.2292 7.98333 12.75 7.75 13.25L9.6 14ZM12.85 15.35C13.2 14.5167 13.4625 13.6542 13.6375 12.7625C13.8125 11.8708 13.9 10.95 13.9 10C13.9 9.05 13.8125 8.12917 13.6375 7.2375C13.4625 6.34583 13.2 5.48333 12.85 4.65L11 5.45C11.3 6.15 11.525 6.88333 11.675 7.65C11.825 8.41667 11.9 9.2 11.9 10C11.9 10.8 11.825 11.5833 11.675 12.35C11.525 13.1167 11.3 13.85 11 14.55L12.85 15.35ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="currentColor"/>
            </svg>
          </template>
          <div class="bg-[#F0F3FF] border border-[#e2e8f0] rounded-lg text-center py-[14px] text-[12px] text-slate-500 font-medium">
            Menunggu scan kartu kendaraan...
          </div>
        </DeviceStatusCard>

        <!-- Network -->
        <DeviceStatusCard 
          :icon="Globe"
          status="CONNECTED"
          statusColor="bg-[#e6fcf5] text-[#059669]"
          title="KONEKSI NETWORK"
          subtitle="Dedicated Fiber Optic - Main"
          buttonText="Refresh Ping"
        >
          <div class="flex items-center justify-center gap-8">
            <div class="flex flex-col items-center">
              <span class="text-[12px] text-[#0f172a] font-medium">Ping</span>
              <div class="text-[24px] font-bold text-[#0f172a] mt-0.5 leading-none">12 <span class="text-[14px] font-medium text-slate-500 ml-1">ms</span></div>
            </div>
            <div class="h-10 w-px bg-slate-200"></div>
            <div class="flex flex-col items-center">
              <span class="text-[12px] text-[#0f172a] font-medium">Speed</span>
              <div class="text-[24px] font-bold text-[#0f172a] mt-0.5 leading-none">85 <span class="text-[14px] font-medium text-slate-500 ml-1">Mbps</span></div>
            </div>
          </div>
        </DeviceStatusCard>
      </div>

      <!-- Camera Monitor Cards -->
      <div class="grid grid-cols-2 gap-6">
        <CameraMonitorCard 
          title="CAM 01 - GATE ENTRANCE"
          imageUrl="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80"
          model="Hikvision IP-66 Pro"
          specs="192.168.1.104 • 1080p @ 60fps"
        />
        <CameraMonitorCard 
          title="CAM 02 - PLATE RECOGNITION"
          imageUrl="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80"
          model="Hikvision LPR AI"
          specs="192.168.1.105 • 4K Recognition"
        />
      </div>

      <!-- Servo Control Card -->
      <ServoControlCard />

    </div>
        </main>
    </div>
  </div>
</template>
