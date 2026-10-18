# Smart Flow

A lightweight, responsive task management web application built with HTML, CSS and vanilla JavaScript. Smart Flow is a module of the **Smart Campus Management System** and helps students plan, track and complete their daily tasks.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

[Live Demo](https://your-username.github.io/smart-flow-todo/) | [Report an Issue](https://github.com/your-username/smart-flow-todo/issues)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Data Model](#data-model)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [License](#license)
10. [Author](#author)

---

## Overview

Smart Flow provides a simple interface for managing everyday tasks. It requires no frameworks, build tools or backend. All data is stored locally in the browser using `localStorage`, so tasks persist across page reloads and browser sessions.

<!-- Add a screenshot once available:
![Smart Flow Preview](screenshots/preview.png)
-->

---

## Features

| Feature | Description |
|---------|-------------|
| Add tasks | Create a task using the Add button or the Enter key |
| Edit tasks | Update the name of an existing task |
| Delete tasks | Remove an individual task |
| Task status | Mark tasks as completed or pending using a checkbox |
| Filtering | View all, pending or completed tasks |
| Live counters | Task counts update automatically for each filter |
| Bulk clear | Remove all completed tasks in one action |
| Data persistence | Tasks are saved in the browser using `localStorage` |
| Responsive layout | Optimised for desktop, tablet and mobile screens |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, media queries) |
| Logic | JavaScript (ES6) |
| Storage | Browser `localStorage` |

---

## Project Structure

```
smart-flow-todo/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── edit.png
│   └── image.png
└── README.md
```

---

## Getting Started

### Prerequisites

A modern web browser such as Chrome, Edge, Firefox or Safari. No additional installation is required.

### Installation

```bash
git clone https://github.com/your-username/smart-flow-todo.git
cd smart-flow-todo
```

### Running the application

Open `index.html` directly in a browser, or serve the folder with a local development server such as the Visual Studio Code Live Server extension.

---

## Data Model

Each task is stored as an object in an array under the `smartFlowTasks` key in `localStorage`.

```json
{
  "id": 1718000000000,
  "name": "Complete assignment",
  "completed": false
}
```

---

## Roadmap

- [x] Create, edit and delete tasks
- [x] Pending and completed filters
- [x] Persistent storage
- [x] Responsive layout
- [ ] Due dates and reminders
- [ ] Task priorities and categories
- [ ] Dark mode
- [ ] Search functionality

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Author

**Your Name**
GitHub: [@your-username](https://github.com/your-username)
