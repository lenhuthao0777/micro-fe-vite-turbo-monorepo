<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  collapsed?: boolean
}>()
</script>

<template>
  <aside
    :class="cn(
      'flex flex-col h-screen bg-background border-r transition-all duration-300',
      collapsed ? 'w-[70px]' : 'w-[250px]',
      props.class
    )"
  >
    <div class="p-4 border-b">
      <slot name="logo">
        <!-- Logo placeholder -->
        <div :class="cn('h-8', collapsed ? 'w-8' : 'w-full')" />
      </slot>
    </div>

    <nav class="flex-1 overflow-y-auto p-2">
      <slot />
    </nav>

    <div class="border-t p-4">
      <slot name="footer" />
    </div>
  </aside>
</template>