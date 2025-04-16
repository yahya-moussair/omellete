# 🍳 Omelette Preparation Simulation

A JavaScript project that simulates the process of buying ingredients, preparing, and cooking an omelette step by step.

## 📋 Table of Contents
- [Description](#-description)
- [Classes](#-classes)
- [How It Works](#-how-it-works)
- [Installation](#-installation)
- [Usage](#-usage)
- [Example Output](#-example-output)

## 🏷️ Description
This project simulates a person named Yahya going through all the steps to make an omelette:
1. Going to the grocery store
2. Buying ingredients (onion, egg, spice, cheese)
3. Returning home
4. Preparing ingredients
5. Mixing them in a bowl
6. Cooking the omelette in a pan

## 🏛️ Classes
The project uses several classes to model the process:

### Person
- Tracks name, location, money, and items in hand
- Can move between locations, pay for items, and cut/grind ingredients

### Ingredients
- Represents food items with name, state (whole/cut/ground), and price
- Maintains list of all available ingredients

### Bowl
- Holds ingredients for mixing
- Can combine ingredients into a preparation

### Pan
- Used for cooking
- Changes food state to "cooked" after a delay

## ⚙️ How It Works
1. Creates all necessary instances (person, bowl, pan, ingredients)
2. Simulates going to the store and buying ingredients
3. Tracks money spent
4. Returns home and prepares ingredients
5. Mixes ingredients into omelette batter
6. Cooks the omelette in the pan

## 📥 Installation
1. Clone the repository or copy the code
2. Ensure you have Node.js installed
3. No additional dependencies required

## � Usage
Simply run the JavaScript file to see the simulation:

```bash
node omelette-simulation.js
