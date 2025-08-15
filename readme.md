# Code Challenges

This repository contains my works for coding challenges from:

- [HackerRank](https://www.hackerrank.com/)
- [Codewars](https://www.codewars.com/)

Each challenge is stored in its own folder, with:
- `instruction.md` — the problem description
- `solution.js` — my JavaScript/Node.js implementation

---

## Getting Started

### 1️⃣ Install Node.js
Make sure [Node.js](https://nodejs.org/) is installed on your machine.

Check your version:
```bash
node -v
```

### 2️⃣ Clone & Install
Clone this repository and install dependencies (if any):

```bash
cd code-challenge
npm install
```
Currently, there are no external dependencies — but npm install will create the node_modules folder and prepare the project.

### 3️⃣ Generate Folder
From the repository root, run in terminal :

```bash
npm run new
```

You’ll be asked to enter a folder name, and then a folder will be automatically created with two files: `instruction.md` and `solution.js`.

### 4️⃣ Running a Solution
From the repository root, run in terminal :

```bash
node [issueName]/solution.js
```
Example output:
```bash
Example 1: Result 1
Example 2: Result 2

```

### Notes
* Each challenge folder is independent.
* The code is written for Node.js environment.
* You can easily adapt the solutions for browser or other runtimes.
