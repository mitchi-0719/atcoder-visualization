export const selectAll = (setFunc) => {
  setFunc((prev) =>
    Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
};

export const deselectAll = (setFunc) => {
  setFunc((prev) =>
    Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );
};
