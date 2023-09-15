(function (window) {
  var byeSpeaker = {}; // Создаем объект byeSpeaker

  var speakWord = "Good Bye"; // Определяем переменную speakWord

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Экспортируем объект byeSpeaker в глобальную область видимости
})(window);

