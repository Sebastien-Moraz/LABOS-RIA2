<script setup>
import { ref } from 'vue'

const jsonData = ref({
  name: "John Doe",
  items: ["Item 1", "Item 2", "Item 3", "Item 4"]
})
</script>

<template>
  <h1>Vue Data Binding</h1>
  <div id="name-container">
    <p>{{ jsonData.name }}</p>
  </div>
  <ul>
    <li v-for="item in jsonData.items" :key="item">{{ item }}</li>
  </ul>
  <button @click="jsonData.name = 'John Doe 2'">
    rename name
  </button>
  <button @click="jsonData.items.push('Item ' + (jsonData.items.length + 1))">
    add item
  </button>
</template>
