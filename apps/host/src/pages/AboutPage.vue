<template>
  <div>
    <h1>This is a Vue Component from Remote (Cue)</h1>
    <div class="store-demo">
      <h2>Shared Store Demo</h2>
      <p>Count: {{ store.count }}</p>
      <button @click="store.increment">Increment</button>
      <div class="message-input">
        <p>Message: {{ store.message }}</p>
        <input v-model="store.message" placeholder="Type a message..." />
      </div>
    </div>
    <Suspense>
      <template #default>
        <RemoteComponent msg="host app 121212" />
      </template>
      <template #fallback>
        <div>Loading remote component...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useSharedStore } from 'cue_remote/store';

const store = useSharedStore();

const RemoteComponent = defineAsyncComponent(() => import('cue_remote/app'));
</script>

<style scoped>
h1 {
  color: #42b883; /* Vue green */
}

.store-demo {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #42b883;
  border-radius: 8px;
}

.message-input {
  margin-top: 16px;
}

button {
  background-color: #42b883;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}

input {
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}
</style>
