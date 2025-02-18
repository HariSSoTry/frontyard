<template>
  <div className="container">
    <Menu />
    <Profile />
  </div>
</template>

<script>

import Menu from './components/Menu.vue';
import Profile from './components/Profile/Profile.vue';

export default {
  components: {
    Menu,
    Profile
  }
}
</script>

<style scoped>
.container {
  width: 100vh;
  height: 100vh;
  background-color: rgb(196, 146, 146); 
}
</style>