// utils/date.utils.ts
export const ensureDate = (date: Date | string | null): Date => {
  if (date instanceof Date) {
    return date;
  }
  if (typeof date === "string") {
    return new Date(date);
  }
  return new Date();
};

export const toISOStringOrUndefined = (
  date: Date | string | null
): string | undefined => {
  try {
    return date ? ensureDate(date).toISOString() : undefined;
  } catch (error) {
    console.error("Invalid date:", date);
    return undefined;
  }
};
