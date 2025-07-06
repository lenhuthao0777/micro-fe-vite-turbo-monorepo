<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  active?: boolean
  icon?: any
}>()
</script>

<template>
  <div
    :class="cn(
      'flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      active && 'bg-accent text-accent-foreground',
      props.class
    )"
  >
    <component :is="icon" v-if="icon" class="h-4 w-4" />
    <slot />
  </div>
</template>