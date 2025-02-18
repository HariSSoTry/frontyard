<template>
  <div class="buttons-container">
    <nav class="button-container">
      <router-link to="/championship" class="footer-button">Чемпионат</router-link>
      <router-link to="/games" class="footer-button">Игры</router-link>
      <router-link to="/statistics" class="footer-button">Статистика</router-link>
      <router-link to="/" class="footer-button">Новости</router-link>
      <router-link to="/profile" class="footer-button">Профиль</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
  };
</script>

<style>
.buttons-container {
  position: fixed;
  bottom: 0; /* Размещаем контейнер кнопок внизу */
  left: 0; /* Начинаем от левого края */
  right: 0; /* Заканчиваем у правого края */
  display: flex; /* Используем flexbox для размещения кнопок */
  justify-content: space-around; /* Распределяем кнопки равномерно */
}

.footer-button {
  flex: 1;
  display: inline-block; /* Позволяет элементам вести себя как блочные элементы */
  padding: 10px 20px; /* Отступы внутри кнопки */
  background-color: #ffffff; /* Цвет фона кнопки */
  color: rgb(0, 0, 0); /* Цвет текста */
  text-align: center; /* Выравнивание текста по центру */
  text-decoration: none; /* Убирает подчеркивание */
}

.footer-button:hover {
  background-color: rgb(196, 146, 146); /* Цвет фона при наведении */
}
</style>
