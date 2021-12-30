<template>
  <div>
    <h1>useLocalStore / index</h1>
    <p>
      <input v-model="inputState" placeholder="Enter some value" />
      <button @click="updateState()">Save to the store</button>
      <button @click="clearState()">Clear the store</button>
    </p>
    <p>Saved state: {{ localState }}</p>
    <p>
      <NuxtLink to="/about">Go to "About"</NuxtLink>
    </p>
  </div>
</template>


<script setup lang="ts">
const state = useLocalStore<string>("name", "Default name value", true)

const inputState = ref("")
const localState = ref(state.get())

function updateState() {
  state.set(inputState.value)
  localState.value = inputState.value
}

function clearState() {
  state.clear()
  localState.value = ""
}
</script>
