<script setup lang="ts">
defineProps<{
  transactions: Array<{
    id: number
    jam: string
    platNomor: string
    jenis: string
    lokasi: string
    durasi: string
    metode: string
    biaya: string
    status: string
  }>
}>()

const getStatusClass = (status: string) => {
  if (status === 'BERHASIL') {
    return 'bg-green-100 text-green-700'
  }
  return 'bg-red-100 text-red-700'
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm whitespace-nowrap">
        <thead class="bg-[#eff4fa] text-gray-600 text-xs font-semibold">
          <tr>
            <th class="px-6 py-4">JAM</th>
            <th class="px-6 py-4">PLAT NOMOR</th>
            <th class="px-6 py-4">JENIS</th>
            <th class="px-6 py-4">LOKASI</th>
            <th class="px-6 py-4">DURASI</th>
            <th class="px-6 py-4">METODE</th>
            <th class="px-6 py-4">BIAYA</th>
            <th class="px-6 py-4">STATUS</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="trx in transactions" :key="trx.id" class="hover:bg-gray-50/50 transition-colors">
            <td class="px-6 py-4 text-gray-500">{{ trx.jam }}</td>
            <td class="px-6 py-4 font-bold text-gray-900">{{ trx.platNomor }}</td>
            <td class="px-6 py-4 text-gray-600">{{ trx.jenis }}</td>
            <td class="px-6 py-4 text-gray-600">{{ trx.lokasi }}</td>
            <td class="px-6 py-4 text-gray-600">{{ trx.durasi }}</td>
            <td class="px-6 py-4 text-gray-600">{{ trx.metode }}</td>
            <td class="px-6 py-4 text-gray-600">{{ trx.biaya }}</td>
            <td class="px-6 py-4">
              <span :class="['px-2.5 py-1 rounded-md text-[10px] font-bold', getStatusClass(trx.status)]">
                {{ trx.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
