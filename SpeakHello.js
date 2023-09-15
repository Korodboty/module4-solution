(function (window) {
  var helloSpeaker = {}; // Создаем объект helloSpeaker

  var speakWord = "Hello"; // Определяем переменную speakWord

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Экспортируем объект helloSpeaker в глобальную область видимости
})(window);

