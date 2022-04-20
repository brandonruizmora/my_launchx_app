//Import CommonJS
const MissionCommander = require("./app/missionCommander");
//Import EcmaScript
// import MissionCommander from "./app/missionCommander.js";
/*** Rembember to add "type": "module", to package JSON when using ESM*/

const mC1 = new MissionCommander('Carlo');
const mC2 = new MissionCommander('Ferch');
const mC3 = new MissionCommander('Roma');

console.log(mC1.name, mC2.name, mC3.name);