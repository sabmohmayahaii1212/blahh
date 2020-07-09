(function (ace) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
 ace.helloSpeaker = helloSpeaker;
})(ace);
