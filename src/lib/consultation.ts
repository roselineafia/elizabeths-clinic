export function consultationTypeFromQuery(value: string | undefined) {
  return value === "specialist" ? "specialist" : "general";
}
