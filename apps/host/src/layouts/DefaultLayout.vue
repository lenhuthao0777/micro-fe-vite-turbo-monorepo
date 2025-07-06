<template>
  <div class="bg-gray-50 flex h-dvh">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-2xl font-semibold text-emerald-600">Micro Frontend</h2>
      </div>
      <nav class="p-4 space-y-2">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          :class="{ 'bg-emerald-50 text-emerald-600': $route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto">
      <div class="p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/react', name: 'React App' }
]
</script>