export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isValidPhone(value: string) {
  const compact = value.replace(/[\s().-]/g, "");
  if (/^(?:\+233|233|0)\d{9}$/.test(compact)) return true;
  if (/^\+[1-9]\d{7,14}$/.test(compact)) return true;
  return false;
}

export function isTodayOrFuture(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const selected = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected >= today;
}

export function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}
