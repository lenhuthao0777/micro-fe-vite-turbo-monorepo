<template>
  <div>
    <h1>This is a React Component inside a Vue App</h1>
    <div ref="reactRoot"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createRoot } from 'react-dom/client';
import React from 'react';

// Dynamically import the React component from the remote
const ReactApp = React.lazy(() => import('react_remote/ReactApp'));

const reactRoot = ref(null);

onMounted(() => {
  if (reactRoot.value) {
    const root = createRoot(reactRoot.value);
    root.render(
      React.createElement(
        React.Suspense,
        { fallback: 'Loading React Component...' },
        React.createElement(ReactApp)
      )
    );
  }
});
</script>

<style scoped>
h1 {
  color: #61dafb; /* React blue */
}
</style>
