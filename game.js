// Score 64 (simple game):
// const frames = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   [8, 1],
// ]
// Score 71 (with spares):
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4],
//   [8, 0],
//   [10, 0],
//   [2, 7],
//   [5, 5],
//   [4, 0],
//   [10, 0],
//   [2, 1],
//   [2, 6],
//   [4, 4],
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [10, 10, 10],
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 10, 10],
// ]

//---------------------------------------------------------------------------------------
// The Function we write must output the expected score from each game.
// Watch out for strikes and spares and what they mean for each round.
// Need to write conditional logic to account for all senarios of the game.
// Use the specific length of the last round to determine it from the rest.
// Use an accumulator to keep track of the score, move the total to an array and .reduce it.
//---------------------------------------------------------------------------------------

function scoring(fullGame) {
  let arrayForFinal = []
  let scoreAccumulator = 0

  for (let i = 0; i < fullGame.length; i++) {
    // If a strike happens on round 10
    if (fullGame[i].length === 3 && fullGame[i][0] === 10) {
      scoreAccumulator = fullGame[i][0] + fullGame[i][1] + fullGame[i][2]
    }

    // If a spare happens on round 10
    else if (
      fullGame[i].length === 3 &&
      fullGame[i][0] + fullGame[i][1] === 10
    ) {
      scoreAccumulator = fullGame[i][0] + fullGame[i][1] + fullGame[i][2]
    }

    // If a strike happens on round 9
    else if (i === 8 && fullGame[i][0] === 10) {
      scoreAccumulator =
        fullGame[i][0] + fullGame[i + 1][0] + fullGame[i + 1][1]
    }

    // Round with a double strikes
    else if (fullGame[i][0] === 10 && fullGame[i + 1][0] === 10) {
      scoreAccumulator = fullGame[i][0] + fullGame[i + 1][0]
    }

    // Round with a strike
    else if (fullGame[i][0] === 10) {
      scoreAccumulator =
        fullGame[i][0] + fullGame[i + 1][0] + fullGame[i + 1][1]
    }

    // Round with a spare
    else if (fullGame[i][0] + fullGame[i][1] === 10) {
      scoreAccumulator = fullGame[i][0] + fullGame[i][1] + fullGame[i + 1][0]
    }
    // Round with standard game
    else if (fullGame[i][0] + fullGame[i][1] < 10) {
      scoreAccumulator = fullGame[i][0] + fullGame[i][1]
    }
    arrayForFinal.push(scoreAccumulator)
  }
  return arrayForFinal.reduce((a, b) => a + b, 0)
}

console.log(scoring(frames))
