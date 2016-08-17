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

var allSets = [ setOne, setTwo, setThree ],
setNumber = 0,
questionNumber = 1,
points = 0
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
    points++
  } else {
    document.getElementById('results').innerHTML = "Nice try, but the correct answer is " + allSets[setNumber].answer
  }

  if (allSets[setNumber] === allSets[2]){
    document.getElementById('nextSet').innerHTML = '<a href="#" onclick="results()">See results</a>'
  } else{
      document.getElementById('nextSet').innerHTML = '<a href="#" onclick="firstSet(setNumber++); questionNumberChange(questionNumber++);">Go to next question </a>'
  }

}

var questionNumberChange = function() {
  document.getElementById('questionNumber').innerHTML = '<h3> Question ' + questionNumber + ' of 3</h3>'

}

var results = function(){
  document.getElementById('answers').innerHTML = ''
  document.getElementById('results').innerHTML = 'Congrats on finishing! You answered ' + points + ' out of 3 correctly'
  document.getElementById('nextSet').innerHTML = ''
  document.getElementById('question').innerHTML = ''
  document.getElementById('questionNumber').style.display = 'none'
  document.getElementById('submitBtn').style.display = 'none'

}
