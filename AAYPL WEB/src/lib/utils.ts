// src/lib/utils.ts

export function formatDate(date: string | Date, locale = "en-NG", options?: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString(locale, options || { year: "numeric", month: "long", day: "numeric" });
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}