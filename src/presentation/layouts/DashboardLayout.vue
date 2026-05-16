<script setup lang="ts">
import Sidebar from '@/presentation/components/layout/Sidebar.vue'
import Header from '@/presentation/components/layout/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-[#E7EEFF] flex text-gray-900">
    <Sidebar />
    <div class="flex-1 ml-64 flex flex-col relative h-screen">
      <Header />
      <main class="flex-1 p-8 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
