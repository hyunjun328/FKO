// 대회 시작 알림의 저장값과 30분 전 예약 시각을 검증한다.
import assert from "node:assert/strict";
import test from "node:test";
import {
  EVENT_REMINDER_LEAD_MS,
  eventReminderAt,
  parseEventReminders,
  toggleEventReminder,
} from "../app/lib/event-reminders.ts";

const reminder = {
  eventId: "ufc-330",
  title: "UFC 330",
  startUtc: "2026-08-16T01:00:00Z",
};

test("schedules a reminder thirty minutes before the main card", () => {
  assert.equal(
    eventReminderAt(reminder.startUtc),
    Date.parse(reminder.startUtc) - EVENT_REMINDER_LEAD_MS,
  );
});

test("keeps only usable saved reminders", () => {
  assert.deepEqual(parseEventReminders([reminder, { eventId: "broken" }]), [reminder]);
  assert.deepEqual(parseEventReminders("not an array"), []);
});

test("adds and removes an event reminder", () => {
  const added = toggleEventReminder([], reminder);
  assert.deepEqual(added, [reminder]);
  assert.deepEqual(toggleEventReminder(added, reminder), []);
});
