<template>
  <div>
    <h1>useLocalStore / about</h1>
    <p>
      <input v-model="inputState" placeholder="Enter some value" />
      <button @click="() => state = inputState">Save to the store</button>
      <button @click="() => state = undefined">Clear the state</button>
    </p>
    <p>Saved state: {{ state }}</p>
    <p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </p>
  </div>
</template>


<script setup lang="ts">
const inputState = ref("")

const state = useLocalState<string>("name", () => "Default value")
</script>