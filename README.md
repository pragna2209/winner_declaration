# 🎲 Dicee Game - Winner Declaration

A simple, interactive two-player browser dice game built with HTML, CSS, and vanilla JavaScript. Every time the webpage is refreshed, both players roll a random die and the winner is automatically announced on screen.

## ✨ Features
* **Random Dice Rolls:** Generates independent random numbers from 1 to 6 for Player 1 and Player 2 on every page refresh.
* **Dynamic Image Swapping:** Updates the dice face graphics in real time using DOM manipulation.
* **Automatic Winner Announcement:** Compares both rolls and updates the main heading to declare **Player 1 Wins!**, **Player 2 Wins!**, or **Draw!**.

## 🛠️ Technologies Used
* **HTML5** – Page structure and layout
* **CSS3** – Styling, typography, and dice grid alignment
* **JavaScript (ES6)** – Random number generation (`Math.random()`), conditional logic, and DOM manipulation (`querySelector` / `setAttribute`)

## 📂 Project Structure
```text
winner_declaration/
├── index.html        # Main HTML file (renamed from dicee.html for hosting)
├── styles.css        # Custom styling for the game board and text
├── index.js          # Game logic for rolling dice and declaring a winner
└── images/           # Dice face assets (dice1.png through dice6.png)
```

## 🚀 How to Run Locally
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project folder:
   ```bash
   cd winner_declaration
   ```
3. Open `index.html` (or `dicee.html`) in any modern web browser and press **F5** (Refresh) to roll the dice.

## 🌐 Deployment
This project consists entirely of static assets and can be hosted live on **AWS Amplify**, **Amazon S3**, or **GitHub Pages**.
