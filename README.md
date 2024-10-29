Star Wars App [Link](https://andrewmelnykx.github.io/starWarTest/)


![Screenshot 2024-10-26 185643](https://github.com/user-attachments/assets/d308bf04-d407-4bfb-a806-0ac712b9ef8f)
![Screenshot 2024-10-26 185622](https://github.com/user-attachments/assets/f0b57635-c115-4aa1-ab1e-41f7715622b9)

This project is a Star Wars character explorer built using React, TypeScript, Redux, and Material-UI (MUI). Users can interact with character data through a modern UI.

Features
React with TypeScript for scalable development.
Redux Toolkit for efficient state management.
Material-UI (MUI) for a responsive and modern user interface.
Vite for fast development and build processes.
Axios for making API requests.
React Router for navigating between character lists and details.
Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 16 or higher) – Download here
npm (comes with Node.js) or yarn – Download here
Git – Download here
1. Clone the Repository
bash
Copy code
git clone https://github.com/YourUsername/star-wars-app.git
cd star-wars-app
2. Install Dependencies
Once the repository is cloned, navigate to the project directory and install the required dependencies:

bash
Copy code
# Using npm
npm install

# OR using yarn
yarn install
3. Run the Project Locally
To run the project locally, use the following command:

bash
Copy code
npm run dev
This command starts the development server and opens the application in your default web browser.

Application Structure
Here’s a brief overview of the application's structure:

src/
components/ - Contains reusable components (e.g., CharacterCard, CharacterDetail).
features/ - Contains Redux slices and logic (e.g., characterSlice.ts).
pages/ - Contains page components (e.g., Home, CharacterDetails).
App.tsx - Main application component where routes are defined.
store/ - Redux store configuration.
