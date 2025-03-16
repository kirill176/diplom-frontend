export const bytesToGb = (bytes: number): string => {
  return (bytes / 1024 ** 3).toFixed(2);
};
