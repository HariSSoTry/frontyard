<template>
<div>Rabotaem</div>
</template>

<script>

</script>

<style scoped>

</style>
<!-- <template>
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent="handleLogin">
        <v-text-field v-model="credentials.email" label="Login or email" />
        <v-text-field type="password" v-model="credentials.password" label="Password" />
        <v-btn class="mt-2" type="submit" block>Login</v-btn>
      </v-form>
      <p v-if="error">{{ error }}</p>
      <v-btn class="mt-2" @click="test" block>Test</v-btn>
    </v-sheet>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/authStore';
  import playerService from '@/services/playerService';
  
  const authStore = useAuthStore();
  const credentials = ref({ email: '', password: '' });
  const error = ref('');
  
  const handleLogin = async () => {
    try {
      await authStore.login(credentials.value);
      // Redirect to a protected route or home page
    } catch (err) {
      error.value = 'Login failed. Please check your credentials.';
    }
  };
  
  const test = async () => {
    await playerService.getPlayers();
  }
  </script>
   -->