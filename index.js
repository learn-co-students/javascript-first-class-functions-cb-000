function Monday() {
  exerciseRoutine(liftWeights);
}
function Tuesday() {
  runFiveMiles();
  swimFortyLaps();
}

function Wednesday() {
  runFiveMiles();
  runFiveMiles();
}

function Thursday() {
  runFiveMiles();
  liftWeights()
}

function Friday() {
  runFiveMiles();
  swimFortyLaps();
}

function liftWeights() {
  console.log('Pump iron');
}
function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  }else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
}

var afterExercise = morningRoutine(liftWeights);

afterExercise();
