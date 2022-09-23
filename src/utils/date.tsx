export function formatFromUTC(date: Date | string) {
  return new Intl.DateTimeFormat("ua-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
