# Branching Exploration Tool - V0.1

A minimal web application built with Vite, React, and TypeScript designed for exploring ideas and information in a non-linear, branching fashion within a single browser session.

## 🤔 The Why

This project stems from a desire to navigate and learn complex topics without the fear of missing out (FOMO) on interesting tangents. Traditional note-taking or even AI conversations often force a linear path. This tool aims to provide a persistent "thought-space" where you can:

*   Start with a core piece of information.
*   Identify multiple points of interest or related concepts within it.
*   Create distinct branches for each tangent you want to explore.
*   Dive into a branch, add new information, and even create further sub-branches.
*   Easily navigate back up the exploration path to pursue other previously marked branches.
*   Save the entire exploration structure, capturing the journey, not just the endpoints.

It's envisioned as a step towards a "second brain" focused specifically on the *process* of exploration and ensuring no interesting path is permanently lost during a learning session.

## ✨ Features (V0.1 - Ultra-Minimal)

*   **Paste Content:** Paste text directly into the currently active exploration node.
*   **Markdown Rendering:** Displays node content using basic Markdown formatting (via `react-markdown`).
*   **Branch Creation:** Select text within a node, right-click, and select "Create Branch" to link a new, empty node. The selected text becomes the name of the branch link.
*   **Branch List Navigation:** View a list of branches leading *from* the current node. Click a branch name in the list to navigate forward into that node.
*   **Back Navigation:** Use a "Back" button to navigate to the parent node of the current node.
*   **Session Saving:** Save the entire structure of nodes, content, and their relationships as a JSON file download.

## ❌ Limitations (What V0.1 Does NOT Do)

This is an intentionally minimal first version focused *only* on the core in-session mechanics. It explicitly **excludes**:

*   **Loading/Opening saved sessions:** Saving is one-way for now. Data is lost on page refresh unless saved manually.
*   **Editing content:** Once content is pasted into a node, it cannot be edited in this version.
*   **Deleting or Renaming:** Branches or nodes cannot be deleted or renamed.
*   **Search functionality.**
*   **Complex graph visualizations.**
*   **Automatic saving** or use of `localStorage` for persistence.
*   **Cloud integration or syncing.**
*   **Robust error handling.**

## 💻 Tech Stack

*   [Vite](https://vitejs.dev/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [react-markdown](https://github.com/remarkjs/react-markdown) (for rendering content)

## 🚀 Getting Started

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed.
2.  **Clone:** Clone this repository to your local machine.
    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Run Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
5.  **Open:** Open your web browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

##  F Usage

1.  **Start:** You'll see an initial empty node view.
2.  **Paste Initial Content:** Click into the main content area and paste your starting text (e.g., an article snippet). It will render as Markdown.
3.  **Create Branches:** Read through the content. When you find a phrase or concept you want to explore further:
    *   Select the text with your mouse.
    *   Right-click on the selected text.
    *   Choose "Create Branch" from the context menu.
    *   The selected text will appear as a clickable item in the "Branch List" area.
4.  **Navigate Forward:** Click on a branch name in the "Branch List". The main view will update to show the (currently empty) content area for that new node. The Branch List will also update to be empty (as this new node has no children yet).
5.  **Add Branch Content:** Paste relevant information into the main content area for this new node.
6.  **Go Deeper:** You can create further branches from this new node if desired.
7.  **Navigate Back:** Click the "Back" button to return to the parent node. You'll see the main content and the Branch List update accordingly.
8.  **Save Your Session:** When you want to save your exploration, click the "Save" button. Your browser will prompt you to download a JSON file containing the structure and content of all your nodes. **Remember, you cannot load this file back into the app in V0.1!**

## 🌱 Future Goals (Post V0.1)

*   Implement loading saved JSON sessions.
*   Allow editing of node content.
*   Add functionality to delete/rename nodes/branches.
*   Basic search capabilities.
*   Improved UI/UX and state management.

## License

(Choose a license if you plan to share this - e.g., MIT License. If it's purely personal, you can omit this or state "Private Use".)

---

Feel free to modify this, especially the "The Why" section to better reflect your personal motivation, and add a project title if you come up with one!