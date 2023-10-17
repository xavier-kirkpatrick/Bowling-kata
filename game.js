// Score 64 (simple game):
const frames = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]
// Score 71 (with spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

// The Function we write must output the expected score from each game.
// Watch out for strikes and spares and what they mean for each round.
// If the current frame = 10, no score is returned untill the next frame is counted and is 0 <
/*
function scoring(game) {
  let roundScore = game.map((round) => round[0] + round[1], 0)

  let addFinalScore = roundScore.reduce((a, b) => a + b, 0)
  return addFinalScore
}
let gameTotal = scoring(frames)
console.log(gameTotal)

if (index[0] + indexB === 10) return
*/

function scoring(game) {
  let roundScore = game.map((round) => round[0] + round[1], 0)

  let addFinalScore = roundScore.reduce((a, b) => a + b, 0)
  return addFinalScore
}
scoring(frames)
