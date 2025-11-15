export function text(obj, language) {
  if (!obj) return "";

  return obj[language];
}
