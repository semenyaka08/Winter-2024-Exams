// Get day number

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (day.startsWith(daysOfWeek[i].toLowerCase()))  return i + 1;
  }
  return -1;
};

module.exports = parseDay;
