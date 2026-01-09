function useNgarod(text, options) {
  const { time = false } = options || {};

  if (time) {
    const hour = new Date().getHours();
    let timeOfDay;

    if (hour < 12) timeOfDay = "bigat"; // morning
    else if (hour < 18) timeOfDay = "malem"; // afternoon
    else timeOfDay = "rabii"; // evening

    return `Naimbag a ${timeOfDay}, ` + text + " ngarod.";
  }

  return text + " ngarod";
}

module.exports = { useNgarod };
