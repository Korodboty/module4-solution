(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Определение объекта helloSpeaker
  var helloSpeaker = {};

  // Определение метода speak() для объекта helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // Определение объекта byeSpeaker
  var byeSpeaker = {};

  // Определение метода speak() для объекта byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name);
  };

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Вызываем метод speak() для объекта byeSpeaker
    } else {
      helloSpeaker.speak(names[i]); // Вызываем метод speak() для объекта helloSpeaker
    }
  }
})();
