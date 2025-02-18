import { createRouter, createWebHistory } from 'vue-router';
import Championship from './components/Championship/Championship.vue';
import Games from './components/Games/Games.vue';
import Statistics from './components/Statistics/Statistics.vue';
import News from './components/News/News.vue';
import Profile from './components/Profile/Profile.vue';

const routes = [
  { path: '/championship', component: Championship },
  { path: '/games', component: Games },
  { path: '/statistics', component: Statistics },
  { path: '/', component: News },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(), // Используем HTML5 History API
  routes,
});

export default router;