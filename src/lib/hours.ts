import { BUSINESS, HOURS_LABEL } from "@/lib/content/business";

const KEY: (keyof typeof BUSINESS.hours)[] = [
  "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
];

export function getOpenStatus(date = new Date()) {
  const dayKey = KEY[date.getDay()];
  const slots = BUSINESS.hours[dayKey];
  const minutes = date.getHours() * 60 + date.getMinutes();

  let openNow = false;
  let closesAt: string | null = null;
  let opensAt: string | null = null;

  for (const slot of slots) {
    const [start, end] = slot.split("-");
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const startM = sh * 60 + sm;
    const endM = eh * 60 + em;
    if (minutes >= startM && minutes < endM) {
      openNow = true;
      closesAt = end;
      break;
    }
    if (minutes < startM && !opensAt) {
      opensAt = start;
    }
  }

  if (!openNow && !opensAt) {
    for (let i = 1; i <= 7; i++) {
      const next = KEY[(date.getDay() + i) % 7];
      const nextSlots = BUSINESS.hours[next];
      if (nextSlots.length > 0) {
        opensAt = `${HOURS_LABEL[next]} ${nextSlots[0].split("-")[0]}`;
        break;
      }
    }
  }

  return { openNow, closesAt, opensAt, dayKey };
}
