# Nearest Lift Finder

This project contains a simple JavaScript program that simulates a system with multiple lifts (elevators) in a building. The program finds the nearest available lift to a given floor based on randomized lift statuses.

## How It Works

- **Randomization:** The program randomly assigns a number of lifts, their current floor positions, and their availability status (whether they are occupied or empty).
- **Finding Nearest Lift:** Given a floor, the program calculates the distance of each available lift and returns the nearest one.

## Usage

1. Clone the repository or copy the files to your local environment.
2. Run the `nearestLift.js` file using Node.js to see the results.

```bash
node nearestLift.js
