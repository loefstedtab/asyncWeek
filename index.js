const brain = require("brain.js");
const { possession, results } = require("./data");
// const {
//   ANA,
//   ARI,
//   BOS,
//   BUF,
//   CAR,
//   CBJ,
//   CGY,
//   CHI,
//   COL,
//   DAL,
//   DET,
//   EDM,
//   FLA,
//   LAK,
//   MIN,
//   MTL,
//   NJD,
//   NSH,
//   NYI,
//   NYR,
//   OTT,
//   PHI,
//   PIT,
//   SEA,
//   SJS,
//   STL,
//   TBL,
//   TOR,
//   VAN,
//   VGK,
//   WPG,
//   WSH,
// } = require("./newdata");

//input {team: possession stats}

//output {position: num}

// const trainingData = [
  // { input: [ANA, DAL], output: { ANA: 0 } },
  // { input: [ANA, SJS], output: { ANA: 1 } },
  // { input: [ANA, STL], output: { ANA: 0 } },
  // { input: [ANA, LAK], output: { ANA: 0 } },
  // { input: [ANA, LAK], output: { ANA: 0 } },
  // { input: [ANA, CBJ], output: { ANA: 1 } },
  // { input: [ANA, TBL], output: { ANA: 0 } },
  // { input: [ANA, FLA], output: { ANA: 0 } },
  // { input: [ANA, CAR], output: { ANA: 0 } },
  // { input: [ANA, PHI], output: { ANA: 1 } },
  // { input: [ANA, CGY], output: { ANA: 0 } },
  // { input: [ANA, EDM], output: { ANA: 0 } },
  // { input: [ANA, ARI], output: { ANA: 1 } },
  // { input: [ANA, DAL], output: { ANA: 0 } },
  // { input: [ANA, DAL], output: { ANA: 0 } },
  // { input: [ANA, SJS], output: { ANA: 0 } },
  // { input: [ANA, CHI], output: { ANA: 0 } },
  // { input: [ANA, NSH], output: { ANA: 0 } },
  // { input: [ANA, FLA], output: { ANA: 0 } },
  // { input: [ANA, NYR], output: { ANA: 0 } },
  // { input: [ANA, NYI], output: { ANA: 0 } },
  // { input: [ANA, NJD], output: { ANA: 0 } },
  // { input: [ANA, NSH], output: { ANA: 0 } },
  // { input: [ANA, CHI], output: { ANA: 0 } },
  // { input: [ANA, SJS], output: { ANA: 1 } },
  // { input: [ANA, VGK], output: { ANA: 0 } },
  // { input: [ANA, BOS], output: { ANA: 1 } },
  // { input: [ANA, NYI], output: { ANA: 0 } },
  // { input: [ANA, LAK], output: { ANA: 0 } },
  // { input: [ANA, SJS], output: { ANA: 1 } },
  // { input: [ANA, VAN], output: { ANA: 1 } },
  // { input: [ANA, EDM], output: { ANA: 0 } },
  // { input: [ANA, CGY], output: { ANA: 0 } },
  // { input: [ANA, SEA], output: { ANA: 0 } },
  // { input: [ANA, DET], output: { ANA: 0 } },
  // { input: [ANA, TOR], output: { ANA: 1 } },
  // { input: [ANA, MTL], output: { ANA: 1 } },
  // { input: [ANA, TOR], output: { ANA: 0 } },
  // { input: [ANA, BOS], output: { ANA: 1 } },
  // { input: [ANA, TBL], output: { ANA: 1 } },
  // { input: [ANA, COL], output: { ANA: 0 } },
  // { input: [ANA, CHI], output: { ANA: 0 } },
  // { input: [ANA, MIN], output: { ANA: 0 } },
  // { input: [ANA, PIT], output: { ANA: 0 } },
  // { input: [ANA, DET], output: { ANA: 1 } },
  // { input: [ANA, NYR], output: { ANA: 0 } },
  // { input: [ANA, PHI], output: { ANA: 1 } },
  // { input: [ANA, COL], output: { ANA: 0 } },
  // { input: [ANA, VGK], output: { ANA: 0 } },
  // { input: [ANA, VAN], output: { ANA: 0 } },
  // { input: [ANA, ARI], output: { ANA: 0 } },
  // { input: [ANA, SEA], output: { ANA: 1 } },
  // { input: [ANA, STL], output: { ANA: 1 } },
  // { input: [ANA, PIT], output: { ANA: 0 } },
  // { input: [ANA, CBJ], output: { ANA: 1 } },
  // { input: [ANA, BUF], output: { ANA: 1 } },
  // { input: [ANA, WSH], output: { ANA: 0 } },
  // { input: [ANA, CGY], output: { ANA: 0 } },
  // { input: [ANA, VGK], output: { ANA: 1 } },
  // { input: [ANA, LAK], output: { ANA: 1 } },
  // { input: [ANA, TOR], output: { ANA: 0 } },
  // { input: [ANA, OTT], output: { ANA: 1 } },
  // { input: [ANA, COL], output: { ANA: 0 } },
  // { input: [ANA, NSH], output: { ANA: 0 } },
  // { input: [ANA, CAR], output: { ANA: 0 } },
  // { input: [ANA, WSH], output: { ANA: 1 } },
  // { input: [ANA, VAN], output: { ANA: 1 } },
  // { input: [ANA, SEA], output: { ANA: 1 } },
  // { input: [ANA, VAN], output: { ANA: 1 } },
  // { input: [ANA, STL], output: { ANA: 1 } },
  // { input: [ANA, ARI], output: { ANA: 1 } },
  // { input: [ANA, NJD], output: { ANA: 1 } },
  // { input: [ANA, MTL], output: { ANA: 1 } },
  // { input: [ANA, VGK], output: { ANA: 0 } },
  // { input: [ANA, BUF], output: { ANA: 0 } },
  // { input: [ANA, WPG], output: { ANA: 0 } },
  // { input: [ANA, MIN], output: { ANA: 0 } },
  // { input: [ANA, WPG], output: { ANA: 0 } },
  // { input: [ANA, EDM], output: { ANA: 0 } },
  // { input: [ANA, CGY], output: { ANA: 1 } },
  // { input: [ANA, MIN], output: { ANA: 0 } },
  // { input: [ANA, WPG], output: { ANA: 1 } },
  // { input: [ARI, BOS], output: { ARI: 0 } },
  // { input: [ARI, BOS], output: { ARI: 0 } },
  // { input: [ARI, BUF], output: { ARI: 0 } },
  // { input: [ARI, BUF], output: { ARI: 0 } },
  // { input: [ARI, CGY], output: { ARI: 0 } },
  // { input: [ARI, CGY], output: { ARI: 0 } },
  // { input: [ARI, CGY], output: { ARI: 0 } },
  // { input: [ARI, CAR], output: { ARI: 0 } },
  // { input: [ARI, CAR], output: { ARI: 0 } },
  // { input: [ARI, CHI], output: { ARI: 0 } },
  // { input: [ARI, CHI], output: { ARI: 1 } },
  // { input: [ARI, CHI], output: { ARI: 1 } },
  // { input: [ARI, CHI], output: { ARI: 0 } },
  // { input: [ARI, COL], output: { ARI: 1 } },
  // { input: [ARI, COL], output: { ARI: 1 } },
  // { input: [ARI, COL], output: { ARI: 0 } },
  // { input: [ARI, COL], output: { ARI: 0 } },
  // { input: [ARI, CBJ], output: { ARI: 0 } },
  // { input: [ARI, CBJ], output: { ARI: 0 } },
  // { input: [ARI, DAL], output: { ARI: 1 } },
  // { input: [ARI, DAL], output: { ARI: 1 } },
  // { input: [ARI, DAL], output: { ARI: 0 } },
  // { input: [ARI, DAL], output: { ARI: 0 } },
  // { input: [ARI, DET], output: { ARI: 1 } },
  // { input: [ARI, DET], output: { ARI: 1 } },
  // { input: [ARI, EDM], output: { ARI: 0 } },
  // { input: [ARI, EDM], output: { ARI: 0 } },
  // { input: [ARI, EDM], output: { ARI: 0 } },
  // { input: [ARI, FLA], output: { ARI: 0 } },
  // { input: [ARI, FLA], output: { ARI: 0 } },
  // { input: [ARI, LAK], output: { ARI: 0 } },
  // { input: [ARI, LAK], output: { ARI: 0 } },
  // { input: [ARI, LAK], output: { ARI: 1 } },
  // { input: [ARI, MIN], output: { ARI: 1 } },
  // { input: [ARI, MIN], output: { ARI: 0 } },
  // { input: [ARI, MIN], output: { ARI: 0 } },
  // { input: [ARI, MTL], output: { ARI: 1 } },
  // { input: [ARI, MTL], output: { ARI: 1 } },
  // { input: [ARI, NSH], output: { ARI: 1 } },
  // { input: [ARI, NSH], output: { ARI: 0 } },
  // { input: [ARI, NSH], output: { ARI: 0 } },
  // { input: [ARI, NJD], output: { ARI: 0 } },
  // { input: [ARI, NJD], output: { ARI: 1 } },
  // { input: [ARI, NYI], output: { ARI: 0 } },
  // { input: [ARI, NYI], output: { ARI: 0 } },
  // { input: [ARI, NYR], output: { ARI: 0 } },
  // { input: [ARI, NYR], output: { ARI: 0 } },
  // { input: [ARI, OTT], output: { ARI: 1 } },
  // { input: [ARI, OTT], output: { ARI: 1 } },
  // { input: [ARI, PHI], output: { ARI: 0 } },
  // { input: [ARI, PHI], output: { ARI: 0 } },
  // { input: [ARI, PIT], output: { ARI: 0 } },
  // { input: [ARI, PIT], output: { ARI: 0 } },
  // { input: [ARI, SJS], output: { ARI: 1 } },
  // { input: [ARI, SJS], output: { ARI: 0 } },
  // { input: [ARI, SJS], output: { ARI: 0 } },
  // { input: [ARI, SEA], output: { ARI: 0 } },
  // { input: [ARI, SEA], output: { ARI: 1 } },
  // { input: [ARI, SEA], output: { ARI: 1 } },
  // { input: [ARI, STL], output: { ARI: 0 } },
  // { input: [ARI, STL], output: { ARI: 0 } },
  // { input: [ARI, STL], output: { ARI: 1 } },
  // { input: [ARI, STL], output: { ARI: 0 } },
  // { input: [ARI, TBL], output: { ARI: 0 } },
  // { input: [ARI, TBL], output: { ARI: 0 } },
  // { input: [ARI, TOR], output: { ARI: 1 } },
  // { input: [ARI, TOR], output: { ARI: 1 } },
  // { input: [ARI, VAN], output: { ARI: 0 } },
  // { input: [ARI, VAN], output: { ARI: 0 } },
  // { input: [ARI, VAN], output: { ARI: 0 } },
  // { input: [ARI, VGK], output: { ARI: 0 } },
  // { input: [ARI, VGK], output: { ARI: 1 } },
  // { input: [ARI, VGK], output: { ARI: 0 } },
  // { input: [ARI, WSH], output: { ARI: 0 } },
  // { input: [ARI, WSH], output: { ARI: 0 } },
  // { input: [ARI, WPG], output: { ARI: 0 } },
  // { input: [ARI, WPG], output: { ARI: 0 } },
  // { input: [ARI, WPG], output: { ARI: 0 } },
  // { input: [ARI, WPG], output: { ARI: 1 } },
  // { input: [ARI, CGY], output: { ARI: 1 } },
  // { input: [ARI, MIN], output: { ARI: 0 } },
  // { input: [ARI, WPG], output: { ARI: 1 } },
// ];

const trainingData = [];
for(let i = 0; i<possession.length; i++){
  trainingData.push({
    input:possession[i],
    output:results[i]
  })
}

const net = new brain.recurrent.LSTMTimeStep({
  hiddenLayers: [8]
});
// console.log(trainingData)
net.train(trainingData,{ learningRate:.005, errorThresh: .118});


console.log(net.run({	xGoals:	0.6575	,	Corsi:	0.6051	,	Fenwick:	0.6012	}));
