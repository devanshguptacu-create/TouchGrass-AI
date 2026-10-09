
import { pipeline } from
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3";

const $ = (id) => document.getElementById(id);

const generateBtn = $("generateBtn");
const missionContainer = $("missionContainer");
const aiStatus = $("aiStatus");

let generatorPromise = null;
let missions = loadMissions();

function loadMissions() {
  try {
    return JSON.parse(localStorage.getItem("tg-missions")) || [];
  } catch {
    return [];
  }
}

function saveMissions() {
  try {
    localStorage.setItem("tg-missions", JSON.stringify(missions));
  } catch {
    aiStatus.textContent =
      "Browser storage is unavailable. Your progress may not persist.";
  }
}

function updateStats() {
  const completed = missions.filter(m => m.done);

  $("completedCount").textContent = completed.length;
  $("minutesCount").textContent =
    completed.reduce((sum, m) => sum + m.minutes, 0);

  $("missionCount").textContent =
    missions.filter(m => !m.done).length + " active";
}

function fallbackMission(mood, interest, minutes) {
  const activities = {
    nature: [
      "Find three different leaf shapes.",
      "Observe a tree and notice its branches, leaves and bark.",
      "Find five different shades of green around you."
    ],
    walking: [
      "Take a relaxed walk and notice five things around you.",
      "Explore a safe path you have not walked recently.",
      "Walk outdoors and notice how the surroundings change."
    ],
    photography: [
      "Capture three interesting patterns in nature.",
      "Photograph light and shadows on leaves.",
      "Find an interesting natural texture to photograph."
    ],
    birds: [
      "Listen for bird calls and observe birds from a distance.",
      "Spend a few minutes watching birds without disturbing them.",
      "Notice bird movements and the places they prefer."
    ],
    gardening: [
      "Inspect a plant and look for new growth.",
      "Check the soil of a plant and water it if needed.",
      "Observe leaf shapes and compare two different plants."
    ]
  };

  const list = activities[interest] || activities.nature;
  const task = list[Math.floor(Math.random() * list.length)];

  const titles = {
    stressed: "A little breathing space",
    energetic: "Get moving outdoors",
    curious: "Explore the little things",
    peaceful: "A quiet nature moment",
    bored: "Break your routine"
  };

  return {
    title: titles[mood] || "Your outdoor adventure",
    description: task +
      "\nStay in a safe, accessible place and respect nature.",
    minutes
  };
}

async function getGenerator() {
  if (!generatorPromise) {
    generatorPromise = pipeline(
      "text-generation",
      "onnx-community/SmolLM2-360M-Instruct",
      {
        progress_callback: (progress) => {
          if (progress.status) {
            aiStatus.textContent =
              "Loading open AI model: " + progress.status;
          }
        }
      }
    );
  }

  try {
    return await generatorPromise;
  } catch (error) {
    generatorPromise = null;
    throw error;
  }
}

async function generateWithAI(mood, interest, minutes) {
  const model = await getGenerator();

  const prompt = `
You are TouchGrass AI, a friendly outdoor activity assistant.

Suggest exactly one safe outdoor activity.
Mood: ${mood}
Interest: ${interest}
Available time: ${minutes} minutes

Rules:
- The activity must fit the available time.
- Give a short creative title.
- Give two simple instructions.
- Do not require buying anything.
- Do not suggest entering private property or unsafe areas.
- Respect wildlife and plants.
- Return plain text in this format:
TITLE: ...
ACTIVITY: ...
`;

  const result = await model(prompt, {
    max_new_tokens: 110,
    do_sample: false
  });

  let output = result[0].generated_text || "";

  // Remove the input prompt if it is included in the output.
  if (output.startsWith(prompt)) {
    output = output.slice(prompt.length);
  }

  const titleMatch = output.match(/TITLE:\s*(.+)/i);
  const activityMatch = output.match(/ACTIVITY:\s*([\s\S]+)/i);

  if (!titleMatch || !activityMatch) {
    throw new Error("The model returned an unexpected response.");
  }

  return {
    title: titleMatch[1].trim().slice(0, 100),
    description: activityMatch[1].trim().slice(0, 600),
    minutes
  };
}

function addMission(mission) {
  missions.unshift({
    id: Date.now() + Math.random(),
    title: mission.title,
    description: mission.description,
    minutes: mission.minutes,
    done: false
  });

  saveMissions();
  renderMissions();
}

function renderMissions() {
  missionContainer.replaceChildren();

  if (!missions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";

    const icon = document.createElement("span");
    icon.textContent = "🌱";

    const title = document.createElement("h3");
    title.textContent = "Your adventure starts here";

    const text = document.createElement("p");
    text.textContent =
      "Generate a mission and make today a little more interesting.";

    empty.append(icon, title, text);
    missionContainer.append(empty);
    updateStats();
    return;
  }

  missions.forEach(mission => {
    const card = document.createElement("article");
    card.className =
      "mission-card" + (mission.done ? " completed" : "");

    const meta = document.createElement("div");
    meta.className = "mission-meta";
    meta.textContent = `🌿 ${mission.minutes} MINUTES OUTSIDE`;

    const title = document.createElement("h3");
    title.textContent = mission.title;

    const description = document.createElement("p");
    description.textContent = mission.description;

    const button = document.createElement("button");
    button.className = "complete-btn";
    button.textContent = mission.done
      ? "✓ Mission completed"
      : "Mark as completed";

    button.disabled = mission.done;

    button.addEventListener("click", () => {
      mission.done = true;
      saveMissions();
      renderMissions();
    });

    card.append(meta, title, description, button);
    missionContainer.append(card);
  });

  updateStats();
}

generateBtn.addEventListener("click", async () => {
  const mood = $("mood").value;
  const interest = $("interest").value;
  const minutes = Number($("duration").value);

  generateBtn.disabled = true;
  generateBtn.textContent = "Creating your adventure...";

  try {
    aiStatus.textContent = "Preparing your local AI model...";

    const mission = await generateWithAI(mood, interest, minutes);
    addMission(mission);

    aiStatus.textContent =
      "Mission generated by the open-weight AI model.";
  } catch (error) {
    console.error("AI generation error:", error);

    // The app remains useful if model download or inference fails.
    addMission(fallbackMission(mood, interest, minutes));

    aiStatus.textContent =
      "AI could not load. A built-in activity was generated instead. " +
      "Check your internet connection and browser console.";
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = "✨ Generate my mission";
  }
});

renderMissions();