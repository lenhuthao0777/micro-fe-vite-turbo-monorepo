<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { defineProps } from 'vue';

const props = defineProps({
  msg: String,
});
</script>

<template>
  <h2 class="text-red-500">HelloWorld Page</h2>
  <Button
    @click="
      () => {
        console.log(props?.msg);
      }
    "
    >Vue Remote {{ props.msg }}</Button
  >
</template>
