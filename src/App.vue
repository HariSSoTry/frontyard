<template>
  <div id="app" className="container">
    <Menu />
    <router-view></router-view>
    <!-- <Profile /> -->
  </div>
</template>

<script>

import Menu from './components/Menu.vue';
import Profile from './components/Profile/Profile.vue';
import Championship from './components/Championship/Championship.vue';
import Games from './components/Games/Games.vue';
import News from './components/News/News.vue';
import Statistics from './components/Statistics/Statistics.vue';

export default {
  name: 'App',

  components: {
    Menu,
    Profile,
    Championship,
    Games,
    News,
    Statistics
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