<script setup lang="ts">
type PropsType = {
  i: number
}

const props= defineProps<PropsType>()
</script>

<template>
  <div :id="`ele${props.i}`" class="p-10 bg-slate-600 mb-4 mr-4" >Test {{ props.i  }}</div>
</template>