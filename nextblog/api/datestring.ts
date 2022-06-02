export const yyyyMMddhhmmssToDate = (ds: string) => {
  return `${ds.substring(0, 4)}-${ds.substring(4, 6)}-${ds.substring(6, 8)} ${ds.substring(8, 10)}:${ds.substring(10, 12)}:${ds.substring(12, 14)}`;
};
