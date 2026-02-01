export function formatRelativeDate(d) {
  const now = Date.now();
  const date = new Date(d);
  const passedDays = Math.
    floor((now - date.getTime()) / (1000 * 60 * 60 * 24));

  if (passedDays === 0) return "Today";

  if (passedDays === 1) return "Yesterday";

  if (passedDays < 7) return `${passedDays} days ago`;

  if (passedDays < 30) {
    const weeks = Math.floor(passedDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(d) {
  const date = new Date(d);

  const formatedDate = date.toLocaleDateString(`en-GB`, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formatedTime = date.toLocaleTimeString(`en-GB`, {
    minute: "2-digit",
    hour: "2-digit"
  });

  return `${formatedDate} • ${formatedTime}`;
}


export function getWeekDay(date) {
  const d = new Date(date);

  const weekDay = d.toLocaleDateString(`en-GB`, {
    weekday: "short",
  });

  return `${weekDay}`;
}


