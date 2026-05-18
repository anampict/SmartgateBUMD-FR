<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Radio, User, Lock, Clock, ArrowRight, Info, AlertCircle } from '@lucide/vue'

const router = useRouter()

const username = ref('')
const password = ref('')
const shift = ref('pagi')
const errorMsg = ref('')

const currentTime = ref('14:30:05')
let timer: number

onMounted(() => {
  timer = setInterval(() => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString('id-ID', { hour12: false })
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const handleLogin = () => {
  errorMsg.value = ''
  
  if (!username.value || !password.value) {
    errorMsg.value = 'Silakan isi username dan password'
    return
  }
  
  if (username.value === 'admin' && password.value === 'admin123') {
    localStorage.setItem('authRole', 'admin')
    router.push('/admin')
  } else if (username.value === 'petugas' && password.value === 'petugas123') {
    localStorage.setItem('authRole', 'petugas')
    localStorage.setItem('shift', shift.value)
    router.push('/')
  } else {
    errorMsg.value = 'Username atau password salah'
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#0f4a8a] relative flex flex-col items-center justify-center font-sans">
    
    <!-- Login Card -->
    <div class="bg-white rounded-xl shadow-xl p-10 w-full max-w-[420px] z-10">
      
      <!-- Logo & Title -->
      <div class="text-center mb-8">
        <div class="w-14 h-14 bg-[#155baf] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Radio class="w-7 h-7 text-white" />
        </div>
        <h1 class="text-[22px] font-bold text-slate-900">SmartGateBUMD</h1>
        <p class="text-[13px] text-slate-500 font-medium">Gate Management System</p>
      </div>
      
      <!-- Form Error -->
      <div v-if="errorMsg" class="mb-4 p-3 bg-red-50 text-red-600 text-[12px] font-bold rounded-lg flex items-center gap-2 border border-red-100">
        <AlertCircle class="w-4 h-4" /> {{ errorMsg }}
      </div>

      <!-- Form Inputs -->
      <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
        
        <!-- Username -->
        <div>
          <label class="block text-[11px] font-bold text-slate-800 mb-1.5">Username</label>
          <div class="relative">
            <User class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              v-model="username"
              type="text" 
              placeholder="Masukkan username" 
              class="w-full bg-white border border-gray-200 text-slate-700 text-[13px] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#155baf] focus:ring-1 focus:ring-[#155baf] transition-all placeholder:text-slate-400" 
            />
          </div>
        </div>
        
        <!-- Password -->
        <div>
          <label class="block text-[11px] font-bold text-slate-800 mb-1.5">Password</label>
          <div class="relative">
            <Lock class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              v-model="password"
              type="password" 
              placeholder="Masukkan password" 
              class="w-full bg-white border border-gray-200 text-slate-700 text-[13px] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#155baf] focus:ring-1 focus:ring-[#155baf] transition-all placeholder:text-slate-400" 
            />
          </div>
        </div>
        
        <!-- Shift -->
        <div>
          <label class="block text-[11px] font-bold text-slate-800 mb-1.5">Pilihan Shift</label>
          <div class="relative">
            <Clock class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 z-10 pointer-events-none" />
            <select 
              v-model="shift"
              class="w-full bg-white border border-gray-200 text-slate-700 text-[13px] rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#155baf] focus:ring-1 focus:ring-[#155baf] transition-all appearance-none cursor-pointer relative"
            >
              <option value="pagi">Pagi (06:00 - 14:00)</option>
              <option value="sore">Sore (14:00 - 22:00)</option>
              <option value="malam">Malam (22:00 - 06:00)</option>
            </select>
            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Submit Button -->
        <button 
          type="submit"
          class="mt-2 w-full bg-[#155baf] hover:bg-[#0c3a6b] text-white text-[13px] font-bold rounded-lg py-3 flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-900/20"
        >
          Masuk & Mulai Shift <ArrowRight class="w-4 h-4" />
        </button>
      </form>
      
      <div class="w-full h-px bg-gray-100 my-6"></div>
      
      <!-- Footer links -->
      <div class="text-center flex flex-col gap-2">
        <p class="text-[10px] text-slate-500 font-medium">© 2024 SmartGate Infrastructure. All rights reserved.</p>
        <div class="flex items-center justify-center gap-3 text-[11px] font-bold text-[#155baf]">
          <a href="#" class="hover:underline">Butuh Bantuan?</a>
          <span class="w-px h-3 bg-gray-300"></span>
          <a href="#" class="hover:underline">Status Sistem</a>
        </div>
      </div>
      
    </div>
    
    <!-- Bottom Alert (Out of card) -->
    <div class="mt-4 w-full max-w-[420px] bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] rounded-lg p-3.5 flex items-center gap-3 shadow-lg">
      <Info class="w-4 h-4 shrink-0 fill-[#dc2626] text-white" />
      <span class="text-[11px] font-bold">Pastikan koneksi hardware aktif sebelum memulai shift.</span>
    </div>
    
    <!-- System Info Widget (Bottom Left) -->
    <div class="absolute bottom-6 left-6 bg-[#e2e8f0]/90 backdrop-blur rounded-lg p-3.5 flex gap-6 shadow-xl border border-white/20">
      <div>
        <p class="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">Waktu Sistem</p>
        <p class="text-[20px] font-bold text-[#0f4a8a]">{{ currentTime }}</p>
      </div>
      <div>
        <p class="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">Kapasitas</p>
        <p class="text-[20px] font-bold text-[#059669]">82%</p>
      </div>
    </div>

  </div>
</template>
