"use client";
// 다음 대회의 메인카드 시작 전 브라우저 알림을 등록한다.

import { useEffect, useMemo, useState } from "react";
import {
  eventReminderAt,
  savedEventReminders,
  saveEventReminders,
  toggleEventReminder,
  type EventReminder as EventReminderData,
} from "../lib/event-reminders";

const MAX_TIMEOUT_MS = 2_147_483_647;

export function EventReminder({
  eventId,
  title,
  startUtc,
  timeTbd,
}: {
  eventId: string;
  title: string;
  startUtc: string;
  timeTbd: boolean;
}) {
  const reminder = useMemo<EventReminderData>(
    () => ({ eventId, title, startUtc }),
    [eventId, startUtc, title],
  );
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEnabled(savedEventReminders().some((item) => item.eventId === eventId));
  }, [eventId]);

  useEffect(() => {
    if (!enabled || !("Notification" in window) || Notification.permission !== "granted") return;
    const delay = eventReminderAt(startUtc) - Date.now();
    if (delay <= 0 || delay > MAX_TIMEOUT_MS) return;
    const timer = window.setTimeout(() => {
      new Notification(`${title} 메인카드 30분 전`, {
        body: "FKO에서 대진과 시작 시간을 확인하세요.",
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [enabled, startUtc, title]);

  async function toggle() {
    if (timeTbd) return;
    if (!("Notification" in window)) {
      setMessage("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }
    if (!enabled && Notification.permission !== "granted") {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setMessage("브라우저 알림 권한이 필요합니다.");
        return;
      }
    }
    const reminders = toggleEventReminder(savedEventReminders(), reminder);
    saveEventReminders(reminders);
    const nextEnabled = reminders.some((item) => item.eventId === eventId);
    setEnabled(nextEnabled);
    setMessage(nextEnabled ? "메인카드 30분 전 알림을 등록했습니다." : "알림을 해제했습니다.");
  }

  return (
    <div className="event-reminder">
      <button type="button" onClick={toggle} disabled={timeTbd} aria-pressed={enabled}>
        {timeTbd ? "시간 발표 대기" : enabled ? "알림 해제" : "30분 전 알림"}
      </button>
      {message ? <output aria-live="polite">{message}</output> : null}
    </div>
  );
}
