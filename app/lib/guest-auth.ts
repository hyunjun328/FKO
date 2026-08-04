// Supabase 아이디 로그인 세션과 인증 헤더를 브라우저에서 관리한다.

export const SUPABASE_URL = "https://jnjhtoqmpnxrtgywcnjy.supabase.co";
export const SUPABASE_KEY = "sb_publishable_b2_cjV_CWjFG-oKAtylebg_yb3s8HvE";

type StoredSession = {
  access_token: string;
  refresh_token?: string;
  user: {
    id: string;
    user_metadata?: { username?: string };
    app_metadata?: { role?: string };
  };
};

const STORAGE_KEY = "fko-auth-session";

export function idToInternalEmail(username: string) {
  return `${username.trim().toLowerCase()}@fko.local`;
}

export function getAuthSession(): StoredSession | null {
  if (typeof window === "undefined") return null;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved) as StoredSession;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function saveAuthSession(session: StoredSession) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event("fko-auth-change"));
}

export function clearAuthSession() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("fko-auth-change"));
}

export function authHeaders() {
  const session = getAuthSession();
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${session?.access_token ?? SUPABASE_KEY}`,
  };
}

export function publicAuthHeaders() {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  };
}

export function displayNickname() {
  return getAuthSession()?.user.user_metadata?.username ?? "익명 1";
}

export function isAdmin() {
  return getAuthSession()?.user.app_metadata?.role === "admin";
}
