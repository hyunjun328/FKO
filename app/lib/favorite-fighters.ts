// 관심 선수 이름을 브라우저 저장소에 보관하고 변경을 알린다.
export const FAVORITE_FIGHTERS_KEY = "fko-favorite-fighters";
export const FAVORITE_FIGHTERS_CHANGE = "fko-favorite-fighters-change";

export function parseFavoriteFighterNames(value: unknown) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item): item is string => typeof item === "string" && item.trim().length > 0))];
}

export function toggleFavoriteFighterName(names: string[], name: string) {
  return names.includes(name)
    ? names.filter((item) => item !== name)
    : [...names, name];
}

export function favoriteFighterNames() {
  if (typeof window === "undefined") return [];
  try {
    return parseFavoriteFighterNames(JSON.parse(window.localStorage.getItem(FAVORITE_FIGHTERS_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

export function toggleFavoriteFighter(name: string) {
  if (typeof window === "undefined") return [];
  const names = toggleFavoriteFighterName(favoriteFighterNames(), name);
  window.localStorage.setItem(FAVORITE_FIGHTERS_KEY, JSON.stringify(names));
  window.dispatchEvent(new Event(FAVORITE_FIGHTERS_CHANGE));
  return names;
}
