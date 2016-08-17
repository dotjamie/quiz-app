var setOne =  {
  question: 'What city in italy is known as the center of the Renaissance?',
  answer: 'Florence',
  options: ['Rome', 'Florence', 'Milan', 'Venice']
}
var setTwo =  {
  question: 'What city in Italy can you find Juliet\'s balcony in Romeo & Juliet?',
  answer: 'Verona',
  options: ['Florence', 'Positano', 'Verona', 'Siena']
}
var setThree =  {
  question: 'What type of Italian cheese uses sheep\'s milk?',
  answer: 'Pecorino',
  options: ['Parmesan','Mozzerella','Asiago','Pecorino' ]
}

var allSets = [ setOne, setTwo, setThree ]
setNumber = 0
questionNumber = 1
var firstSet = function(n){
  document.getElementById('answers').innerHTML = ''
  document.getElementById('results').innerHTML = ''
  document.getElementById('nextSet').innerHTML = ''
  questionNumberChange()
  document.getElementById('question').innerHTML = allSets[setNumber].question
  document.getElementById('submitBtn').style.display = 'block'
  for (var option in allSets[setNumber].options) {
    answersContainer = document.getElementById('answers')
    newP = document.createElement('P')
    answerRadio = answersContainer.appendChild(newP).innerHTML = '<label><input type="radio" name="Renaissance" value="' + allSets[setNumber].options[option] + '"/>'+ allSets[setNumber].options[option] + '</label>'
  }
}

var answerCheck = function() {
  var radios = document.querySelector('input[type="radio"]:checked').value;
  if (radios === allSets[setNumber].answer) {
    document.getElementById('results').innerHTML = "That's it!"
  } else {
    document.getElementById('results').innerHTML = "WRONG"
  }
  document.getElementById('nextSet').innerHTML = '<a href="#" onclick="firstSet(setNumber++); questionNumberChange(questionNumber++);">Go to next question </a>'

}

var questionNumberChange = function() {
  document.getElementById('questionNumber').innerHTML = '<h3> Question ' + questionNumber + ' of 3</h3>'

}
