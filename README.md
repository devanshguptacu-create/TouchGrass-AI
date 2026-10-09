# 🌿 TouchGrass AI — Less Scrolling, More Living

> **Turn your mood into an outdoor adventure.**
> An AI-powered nature companion designed to help people spend less time scrolling and more time exploring the real world.

![Project Status](https://img.shields.io/badge/Status-Prototype-orange)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-green)
![AI](https://img.shields.io/badge/Open--Source%20AI-Integration%20Planned-blue)
![License](https://img.shields.io/badge/License-MIT-purple)

## 📌 Table of Contents

* [Overview](#-overview)
* [The Problem](#-the-problem)
* [Our Solution](#-our-solution)
* [Key Features](#-key-features)
* [How It Works](#-how-it-works)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [How to Use](#-how-to-use)
* [Open-Source AI Approach](#-open-source-ai-approach)
* [Privacy and Offline Support](#-privacy-and-offline-support)
* [Future Enhancements](#-future-enhancements)
* [Contributing](#-contributing)
* [License](#-license)
* [Acknowledgements](#-acknowledgements)

## 🌱 Overview

**TouchGrass AI** is a web-based outdoor activity companion built around a simple idea: technology should help people experience more of the real world, not keep them glued to a screen.

Users can select their mood, available time, and interests to discover outdoor activities tailored to their preferences. Whether someone wants a peaceful walk, a photography challenge, a birdwatching session, or a small gardening activity, TouchGrass AI helps turn that intention into an actionable mission.

The project follows the **"Touch Grass"** theme by making digital interaction short, purposeful, and focused on real-world experiences.

### Our Mission

To make going outside easier, more engaging, and more accessible through intelligent activity recommendations and privacy-conscious technology.

## 🚨 The Problem

Modern digital life makes it easy to spend hours indoors and lose opportunities to connect with nature.

Some common challenges include:

* Excessive recreational screen time.
* Difficulty deciding what to do during a break.
* Lack of motivation to explore nearby outdoor spaces.
* Limited awareness of simple nature-based activities.
* Dependence on internet connectivity and remote AI services in some applications.

People do not always need another application to spend more time on their phones. They need a simple push toward their next real-world experience.

## 💡 Our Solution

TouchGrass AI provides a simple way to discover outdoor activities based on personal preferences.

Instead of endlessly browsing content, users can:

1. Select how they feel.
2. Choose how much time they have.
3. Pick an outdoor interest.
4. Generate an outdoor mission.
5. Complete the activity in the real world.
6. Track their progress and save ideas for later.

The current prototype uses a lightweight JavaScript-based activity generator. Integration with an open-weight AI model is a planned development step.

## ✨ Key Features

### 🎭 Mood-Based Activity Discovery

Choose a mood, such as calm, active, curious, peaceful, or bored, to personalize your activity suggestions.

### ⏱️ Flexible Time Selection

Choose an activity duration that fits your schedule:

* 5 minutes
* 15 minutes
* 30 minutes
* 60 minutes

### 🌳 Outdoor Activity Categories

Discover activities across several categories:

* **Nature and Wildlife:** Explore plants, leaves, trees, and natural surroundings.
* **Walking and Movement:** Take mindful walks and discover familiar places from a new perspective.
* **Photography:** Capture interesting patterns, shadows, plants, and skies.
* **Birdwatching:** Observe birds and listen to their calls from a respectful distance.
* **Gardening:** Learn about plants and care for a garden or potted plant.

### 🎯 Interactive Mission Generator

Generate a mission with a title, activity description, estimated duration, and practical guidance.

### ✅ Mission Completion Tracking

Mark activities as completed and build a record of your outdoor experiences.

### ⭐ Save for Later

Save interesting activities and return to them whenever you need inspiration.

### 📊 Personal Progress Dashboard

Track your completed missions, accumulated outdoor minutes, and saved activities.

### 🕒 Adventure History

Review your completed missions and see the activities you have already explored.

### 🌿 Responsive Interface

Enjoy a nature-inspired interface with a green color palette, interactive controls, dashboard cards, and responsive layouts for different screen sizes.

### 🔒 Browser-Based Data Storage

The prototype uses browser `localStorage` to preserve saved missions and progress between visits on the same browser, subject to browser storage settings.

## ⚙️ How It Works

```text
         USER OPENS TOUCHGRASS AI
                    |
                    v
          SELECT MOOD AND INTEREST
                    |
                    v
          CHOOSE AVAILABLE TIME
                    |
                    v
           GENERATE A MISSION
                    |
                    v
        REVIEW THE OUTDOOR ACTIVITY
                    |
                    v
           GO OUTSIDE AND EXPLORE
                    |
                    v
          COMPLETE AND SAVE PROGRESS
                    |
                    v
           BUILD REAL-WORLD HABITS
```

The current implementation selects activities from a predefined JavaScript collection. A future AI integration can generate more personalized suggestions from user preferences.

## 🛠️ Technology Stack

| Technology               | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| HTML5                    | Website structure and content                     |
| CSS3                     | Visual design, layouts, and responsiveness        |
| JavaScript               | Activity generation, navigation, and interactions |
| Browser localStorage     | Saving missions and progress locally              |
| Open-weight AI (planned) | More flexible, personalized activity generation   |

### Why Vanilla JavaScript?

The prototype uses standard HTML, CSS, and JavaScript to keep the project lightweight, accessible to beginners, and easy to run without a complex build system.

No frontend framework or package installation is required for the current version.

## 📂 Project Structure

```text
TouchGrass-AI/
│
├── index.html       # Main website structure
├── style.css        # Styling and responsive design
├── script.js        # Activity generator and app logic
└── README.md        # Project documentation
```

## 🚀 Getting Started

### Prerequisites

You only need:

* A modern web browser, such as Google Chrome, Firefox, or Microsoft Edge.
* A code editor, such as Visual Studio Code (recommended).
* Git, if you want to clone and contribute to the repository.

### 1. Clone the Repository

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY` with your repository name.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Open the Project Folder

```bash
cd YOUR_REPOSITORY
```

### 3. Run the Website

Open `index.html` directly in your browser.

Alternatively, in Visual Studio Code:

1. Open the project folder.
2. Install the Live Server extension if needed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The current prototype does not require API keys, a backend server, or additional dependencies.

## 🧭 How to Use

1. Open the TouchGrass AI website.
2. Choose your current mood.
3. Select your available time.
4. Pick a preferred activity category.
5. Click **Generate my mission**.
6. Read the activity instructions.
7. Head outdoors when it is safe and convenient.
8. Mark the mission as completed when you finish.
9. Save activities you would like to try later.
10. Explore your history and progress dashboard.

**Remember:** The purpose is to spend time outside, not to spend more time interacting with the application.

## 🤖 Open-Source AI Approach

Open innovation is an important part of the long-term vision for TouchGrass AI.

Many applications depend on proprietary AI APIs, which can introduce usage costs, external service dependencies, and additional privacy considerations.

TouchGrass AI aims to explore an alternative approach by integrating an open-weight model that developers can inspect, adapt, and run in suitable environments.

### Planned AI Integration

Potential technologies include:

* **Transformers.js:** Run supported machine-learning models directly in compatible web environments.
* **SmolLM2:** Explore a compact, open-weight language model for generating activity suggestions.
* **WebGPU:** Potentially accelerate supported models on compatible devices.
* **Local inference:** Generate suggestions on the user's device where model size, browser support, and available hardware permit.

Model selection will depend on its licence, performance, browser compatibility, and hardware requirements.

### What Could Open-Source AI Enable?

* More flexible activity recommendations.
* Greater control over how suggestions are generated.
* Reduced dependence on paid, hosted AI APIs.
* Potentially private, on-device inference.
* Opportunities to experiment with alternative models and prompts.
* Better control over how the application evolves.

**Current status:** The existing prototype uses rule-based JavaScript rather than an AI model. Open-weight model integration is planned and has not yet been implemented. Therefore, this version should not be described as already using AI inference.

## 🔐 Privacy and Offline Support

Privacy and accessibility are important design goals.

### Current Prototype

* No AI API key is required.
* Mission history and saved activities are stored in browser `localStorage`.
* The current activity generator does not send prompts to an AI provider.
* User data is not intentionally uploaded to a project backend.

However, browser storage is not encrypted, and other scripts or people with access to the same browser profile may be able to access it.

### Does It Work Offline?

The JavaScript-based activity generator can work without an internet connection once the HTML, CSS, and JavaScript files are available locally.

The current version is not a complete installable offline-first application: it does not yet include a service worker, and its browser storage must be available.

A future local AI implementation would also need the required model files downloaded and compatible browser and hardware support. Loading model files or libraries from a remote CDN would still require connectivity unless those assets were stored locally.

## 🗺️ Future Enhancements

The following features are planned possibilities, not implemented capabilities.

* [ ] Integrate an open-weight language model using Transformers.js.
* [ ] Generate more personalized outdoor missions.
* [ ] Add a progressive web app (PWA) for installability and improved offline support.
* [ ] Explore locally stored AI models for offline inference.
* [ ] Add location-aware activity suggestions with user permission.
* [ ] Explore weather-aware recommendations.
* [ ] Add a gardening planner based on local climate and growing seasons.
* [ ] Investigate bird-call identification using a suitable open-source audio model.
* [ ] Add optional nature journals and personal observations.
* [ ] Improve accessibility and support multiple languages.
* [ ] Test usability with real users outdoors.

Any location-based or weather-based features will need suitable data sources and clear privacy controls.

## 🤝 Contributing

Contributions, ideas, feedback, and improvements are welcome.

To contribute:

1. Fork this repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes in a browser.
5. Submit a pull request with a clear explanation.

Example:

```bash
git checkout -b feature/better-missions
git add .
git commit -m "Improve outdoor mission suggestions"
git push origin feature/better-missions
```

Ideas for contributions include improving activity recommendations, adding accessibility features, integrating open-weight AI, and testing the application on different devices.

## 📜 License

This project is intended to be released under the **MIT License**.

Before publishing, add a `LICENSE` file containing the standard MIT License text and your chosen copyright holder and year. If you select a different licence, update this section accordingly.

Any model, library, or dataset added in the future must also comply with its own licence and usage terms.

## 🙌 Acknowledgements

* The open-source developer community.
* The creators and maintainers of open-weight AI models and machine-learning tools.
* Everyone who believes technology should encourage meaningful experiences beyond the screen.
* The **Touch Grass** project theme, which inspired this idea.

## 🌍 Our Vision

We believe technology should not just capture attention. It should help people discover the world around them.

TouchGrass AI is a step toward a future where AI helps people reconnect with nature, explore their surroundings, and build healthier relationships with technology.

**Less scrolling. More exploring. More living.** 🌿

---

*Built as an evolving project exploring the intersection of web development, open-source AI, and real-world experiences.*
