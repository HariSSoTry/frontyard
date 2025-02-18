<template>
  <div className="buttons-container">
    <div class="footer-buttons">
      <button>Чемпионат</button>
      <button>Игры</button>
      <button>Статистика</button>
      <button>Новости</button>
      <button>Профиль</button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    methods: {
      
    }
  }
  </script>
  
  <style>
  .buttons-container {
    display: flex; /* Используем flexbox для размещения кнопок */
    justify-content: space-around; /* Распределяем кнопки равномерно */
    padding: 20px; /* Отступы вокруг кнопок */
    background-color: #fff; /* Цвет фона контейнера кнопок */
    border-top: 2px solid #ccc; /* Граница сверху для отделения от содержимого */
  }
  .footer-buttons {
    padding: 10px 20px; /* Внутренние отступы для кнопок */
    font-size: 16px; /* Размер шрифта */
    color: #fff; /* Цвет текста */
    background-color: #007bff; /* Цвет фона кнопок */
    border: none; /* Убираем стандартную границу */
    border-radius: 5px; /* Закругленные углы */
    cursor: pointer; /* Указатель при наведении */
    transition: background-color 0.3s; /* Плавный переход цвета фона */
  }
  .footer-buttons button {
    cursor: pointer;
    padding: 1em 3em; /* Размер кнопок */
  }
  .footer-buttons button:hover {
    background-color: #ffffff;
  }
  </style>  