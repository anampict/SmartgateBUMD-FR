<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue'
import IconMoney from '@/assets/icon/icon-money.svg'

defineProps<{
  parkingFee: number
  penaltyFee: number
  totalFee: number
}>()

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value).replace('Rp', 'Rp ')
}
</script>

<template>
  <div class="bg-white rounded-[14px] border border-slate-200 p-6 shadow-sm flex flex-col h-full w-full">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <img :src="IconMoney" alt="Money Icon" class="w-[38px] h-auto object-contain" />
      <h3 class="text-[22px] font-extrabold text-[#0f172a]">Detail Pembayaran</h3>
    </div>

    <!-- Breakdown Box -->
    <div class="bg-[#f0f4fd] rounded-xl p-5 flex flex-col h-full">
      <div class="space-y-4">
        <div class="flex justify-between items-start text-[16px] font-medium text-[#475569]">
          <span class="w-[120px] leading-snug">Biaya Parkir (2 Jam)</span>
          <div class="text-right text-[#475569] leading-snug">
            <div>Rp</div>
            <div>10.000</div>
          </div>
        </div>
        <div class="flex justify-between items-start text-[16px] font-medium text-[#dc2626]">
          <span class="w-[120px] leading-snug">Denda Karcis Hilang</span>
          <div class="text-right leading-snug whitespace-nowrap">Rp 0</div>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-slate-300">
        <div class="flex justify-between items-center mb-6">
          <span class="text-[14px] font-black text-[#0f172a] uppercase tracking-wide">TOTAL BAYAR</span>
          <span class="text-[16px] text-[#1d4ed8] font-medium">Rp 10.000</span>
        </div>
        
        <button class="w-full h-[48px] bg-[#0c408a] hover:bg-[#0a316b] text-white text-[15px] font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
          <CheckCircle2 class="w-5 h-5 stroke-[1.5]" />
          Konfirmasi Pembayaran
        </button>
      </div>
    </div>
  </div>
</template>
