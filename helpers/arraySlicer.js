export const arraySlicer = (list, currentPage) => {
  let end = currentPage * 12;
  let start = end - 12;
  return list.slice(start, end);
};
