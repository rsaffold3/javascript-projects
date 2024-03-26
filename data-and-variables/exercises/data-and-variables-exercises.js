// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;
console.log(typeof shuttleName)
console.log(shuttleSpeedMph)
console.log(distanceToMarsKm)
console.log(distanceToMoonKm)
console.log(milesPerKm)

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log(milesToMars)
console.log(hoursToMars)
console.log(daysToMars)

// Print the results of the space mission calculations below
console.log("Determination will take 332.70 days to reach the moon")

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(milesToMoon)
console.log(hoursToMoon)
console.log(daysToMoon)
console.log("Miles To moon are 23846")
console.log("Hours to moon will be 1.4")
console.log("Days to moon will be 0.056")
// Print the results of the trip to the moon below