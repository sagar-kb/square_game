# Square Game

This is a simple interactive game built with HTML, CSS, and JavaScript. The game consists of four square boxes, each with different behaviors upon hovering or clicking. The project demonstrates basic DOM manipulation, event handling, and random number generation.

## Features

- **Square 1 (ID: sq1)**:
  - On mouse enter, the background changes to red, and a random number between 0 and 100 is displayed inside the square.
  - On mouse leave, the square resets to display the number "1" and the background returns to white.

- **Square 2 (ID: sq2)**:
  - On mouse enter, the background alternates between green and red colors with each hover.
  - On mouse leave, the background resets to white.

- **Square 3 (ID: sq3)**:
  - On mouse enter, the background color changes to a random RGB color.
  - On mouse leave, the background resets to white.

- **Square 4 (ID: sq4)**:
  - On click, the background colors of Square 1, Square 2, and Square 3 change to different random RGB values.
  - On mouse leave, all squares reset to a white background.

## Project Structure

- **HTML**: Defines the structure of the webpage, consisting of a main container with four squares inside two rectangular rows.
- **CSS**: Handles the layout and design of the squares, ensuring proper size, positioning, and styling.
- **JavaScript**: Implements the game logic by responding to user interactions like hovering, clicking, and mouse leaving events.

## Files

1. `index.html`: Contains the structure of the web page with a 2x2 grid of square boxes.
2. `style.css`: Provides styling for the page layout, box dimensions, and other visual elements.
3. `script.js`: Contains the event handlers and logic to make the squares interactive.

## How to Run

1. Clone the repository.
2. Open the `index.html` file in any modern web browser.
3. Interact with the squares to see the changes in real-time.

## Example Interaction

- Hovering over Square 1 displays a random number and changes its background to red.
- Square 2 alternates its background between green and red with each hover.
- Square 3 changes its background to a randomly generated color.
- Clicking on Square 4 changes the colors of Square 1, Square 2, and Square 3.
