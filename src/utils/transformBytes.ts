export const bytesToGb = (bytes: number): string => {
  return (bytes / 1024 ** 3).toFixed(2);
};

export const bytesToMb = (bytes: number): string => {
  return (bytes / 1024 ** 2).toFixed(2);
};

export const bytesToKb = (bytes: number): string => {
  return (bytes / 1024).toFixed(2);
};
