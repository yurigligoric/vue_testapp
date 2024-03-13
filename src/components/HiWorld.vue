<!-- HiWorld.vue -->

<template>
  <div>
    <h2>Hi World Component</h2>
    <p>This is the HiWorld component content.</p>
    <div>
    <h1>Home View</h1>
    <router-link to="/product">Just product</router-link>
    <router-link to="/about">About</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HiWorld',
  // You can add component-specific logic here
}
</script>

<style scoped>
/* Add component-specific styles here */
</style>