// 대회 시작 전 브라우저 알림의 저장값과 예약 시각을 계산한다.
export const EVENT_REMINDERS_KEY = "fko-event-reminders";
export const EVENT_REMINDER_LEAD_MS = 30 * 60 * 1000;

export type EventReminder = {
  eventId: string;
  title: string;
  startUtc: string;
};

export function parseEventReminders(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is EventReminder =>
    Boolean(
      item &&
      typeof item === "object" &&
      typeof (item as EventReminder).eventId === "string" &&
      typeof (item as EventReminder).title === "string" &&
      !Number.isNaN(Date.parse((item as EventReminder).startUtc)),
    ),
  );
}

export function eventReminderAt(startUtc: string) {
  return new Date(startUtc).getTime() - EVENT_REMINDER_LEAD_MS;
}

export function toggleEventReminder(reminders: EventReminder[], reminder: EventReminder) {
  return reminders.some((item) => item.eventId === reminder.eventId)
    ? reminders.filter((item) => item.eventId !== reminder.eventId)
    : [...reminders, reminder];
}

export function savedEventReminders() {
  if (typeof window === "undefined") return [];
  try {
    return parseEventReminders(JSON.parse(window.localStorage.getItem(EVENT_REMINDERS_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

export function saveEventReminders(reminders: EventReminder[]) {
  window.localStorage.setItem(EVENT_REMINDERS_KEY, JSON.stringify(reminders));
}
