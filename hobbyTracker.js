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
  // Add up all the minutes from each hobby session using reduce
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Create a list of unique hobbies that have no duplicates
function uniqueHobbies(log) {
   // Extract hobby names using map
  const names = log.map(entry => entry.hobby);
  //Remove duplicates using Set
  return [...new Set(names)];
}

// Find sessions that lasted longer than a certain number of minutes
function longSessions(log, minMinutes) {
  // Use filter to return the sessions that have more minutes than minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
}

// Count how many times a specific mood appears in the log
function countMood(log, moodType) {
  // Return the number of sessions that match the given mood using filter
  return log.filter(entry => entry.mood === moodType).length;
}

//Print results to console
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

/* Suggested improvement: the function called longSessions can be renamed
* to something that is more descriptive of how the function works. 
* For example, a name like sessionsLongerThan could suggest that the
* sessions returned are longer than a certain length of time.
*/

//New Test
// Log the number of creative sessions
console.log("Number of creative sessions:", countMood(hobbyLog, "creative"));


