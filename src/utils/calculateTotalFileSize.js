export const calculateTotalFileSize = (files) => {
  const totalSize = files.reduce((acc, { file }) => acc + file.size, 0); // in bytes
  const totalSizeInMB = (totalSize / (1024 * 1024)).toFixed(2); // convert to MB
  return { totalSize, totalSizeInMB };
};
