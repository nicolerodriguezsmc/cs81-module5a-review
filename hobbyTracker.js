// Create an array of hobbies with details including day, hobby name, time spent, and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Calculate the total time spent on all hobbies
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Create a list of unique hobbies that have no duplicates
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// Find sessions that lasted longer than a certain number of minutes
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Count how many times a specific mood appears in the log
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
