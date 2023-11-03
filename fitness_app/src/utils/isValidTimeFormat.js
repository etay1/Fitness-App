function isValidTimeFormat(time) {
    // Regular expression to validate 'HH:MM' format
    const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return timePattern.test(time);
  }