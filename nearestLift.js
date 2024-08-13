const fs = require('fs');

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to find the nearest available lift given the current floor
function findNearestAvailableLift(currentFloor, lifts) {
    let nearestLift = null;
    let minimumDistance = Infinity;

    for (const lift of lifts) {
        if (lift.available) {
            const distance = Math.abs(lift.floor - currentFloor);
            if (distance < minimumDistance) {
                minimumDistance = distance;
                nearestLift = lift;
            }
        }
    }

    return nearestLift;
}

// Function to randomly initialize lifts with random floor and availability status
function initializeLifts(numberOfLifts, maxFloor) {
    const lifts = [];
    for (let i = 0; i < numberOfLifts; i++) {
        lifts.push({
            id: i + 1,
            floor: getRandomInt(1, maxFloor),
            available: Math.random() < 0.5 // 50% chance of being available
        });
    }
    return lifts;
}

// Read inputs from input.json
const input = JSON.parse(fs.readFileSync('input.json', 'utf8'));

const numberOfLifts = input.numberOfLifts;
const maxFloor = input.maxFloor;
const currentFloor = input.currentFloor;

const lifts = initializeLifts(numberOfLifts, maxFloor);

const nearestLift = findNearestAvailableLift(currentFloor, lifts);

// Filter out available lifts and sort by proximity, then append unavailable lifts
let availableLifts = lifts.filter(lift => lift.available);
availableLifts.sort((a, b) => Math.abs(a.floor - currentFloor) - Math.abs(b.floor - currentFloor));

let unavailableLifts = lifts.filter(lift => !lift.available);

const sortedLifts = [...availableLifts, ...unavailableLifts];

const output = {
    currentFloor: currentFloor,
    lifts: sortedLifts,
    nearestLift: nearestLift
};

// Save the output to output.json
fs.writeFileSync('output.json', JSON.stringify(output, null, 2), 'utf8');

console.log("Output has been saved to output.json");

// Export functions for testing purposes
module.exports = { getRandomInt, findNearestAvailableLift, initializeLifts };
